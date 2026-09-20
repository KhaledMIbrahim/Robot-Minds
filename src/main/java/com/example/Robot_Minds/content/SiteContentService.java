package com.example.Robot_Minds.content;

import com.example.Robot_Minds.entity.SiteContent;
import com.example.Robot_Minds.repository.SiteContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class SiteContentService {

    private static final List<String> ALLOWED_IMAGE_EXTENSIONS = List.of("jpg", "jpeg", "png", "webp", "gif", "svg");
    private static final List<String> ALLOWED_VIDEO_EXTENSIONS = List.of("mp4", "webm", "ogg", "mov");
    private static final long MAX_IMAGE_SIZE_BYTES = 8L * 1024 * 1024; // 8MB
    private static final long MAX_VIDEO_SIZE_BYTES = 50L * 1024 * 1024; // 50MB

    private final SiteContentRepository repository;
    private final Path uploadDir;

    public SiteContentService(SiteContentRepository repository) {
        this.repository = repository;
        this.uploadDir = Path.of("uploads");
        try {
            Files.createDirectories(uploadDir);
        } catch (IOException e) {
            throw new UncheckedIOException("Could not create uploads directory", e);
        }
    }

    public Map<String, String> getAll() {
        return repository.findAll().stream()
                .collect(Collectors.toMap(SiteContent::getKey, c -> c.getValue() == null ? "" : c.getValue()));
    }

    public void upsertAll(Map<String, String> updates) {
        updates.forEach((key, value) -> {
            if (key == null || key.isBlank()) {
                return;
            }
            SiteContent content = repository.findById(key).orElse(null);
            if (content == null) {
                repository.save(new SiteContent(key, value));
            } else {
                content.setValue(value);
                repository.save(content);
            }
        });
    }

    /**
     * Saves an uploaded image under ./uploads with a random file name (to
     * avoid collisions/overwrites) and returns the public URL it will be
     * served from (see WebConfig, which maps /uploads/** to this directory).
     */
    public String saveImage(MultipartFile file) {
        return saveMedia(file, ALLOWED_IMAGE_EXTENSIONS, MAX_IMAGE_SIZE_BYTES, "image", "8MB");
    }

    public String saveVideo(MultipartFile file) {
        String contentType = file == null ? null : file.getContentType();
        if (contentType == null || !contentType.startsWith("video/")) {
            throw new IllegalArgumentException("Unsupported video type. Please upload a video file.");
        }
        return saveMedia(file, ALLOWED_VIDEO_EXTENSIONS, MAX_VIDEO_SIZE_BYTES, "video", "50MB");
    }

    private String saveMedia(
            MultipartFile file,
            List<String> allowedExtensions,
            long maxSizeBytes,
            String mediaType,
            String maxSizeLabel
    ) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("No file uploaded.");
        }
        if (file.getSize() > maxSizeBytes) {
            throw new IllegalArgumentException("File is too large (max " + maxSizeLabel + ").");
        }
        String originalName = file.getOriginalFilename() == null ? "" : file.getOriginalFilename();
        String extension = originalName.contains(".")
                ? originalName.substring(originalName.lastIndexOf('.') + 1).toLowerCase()
                : "";
        if (!allowedExtensions.contains(extension)) {
            throw new IllegalArgumentException(
                    "Unsupported " + mediaType + " type. Allowed: " + allowedExtensions
            );
        }
        String filename = UUID.randomUUID() + "." + extension;
        try {
            Files.copy(file.getInputStream(), uploadDir.resolve(filename));
        } catch (IOException e) {
            throw new UncheckedIOException("Could not save uploaded file", e);
        }
        return "/uploads/" + filename;
    }
}