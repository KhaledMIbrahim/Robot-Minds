package com.example.Robot_Minds.content;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

/**
 * Serves the editable home-page content. Reading is public (the landing page
 * needs it for everyone); writing and image uploads are restricted to
 * ROLE_ADMIN by SecurityConfig's "/api/admin/**" rule.
 */
@RestController
@RequestMapping("/api")
public class SiteContentController {

    private final SiteContentService service;

    public SiteContentController(SiteContentService service) {
        this.service = service;
    }

    @GetMapping("/content")
    public Map<String, String> getContent() {
        return service.getAll();
    }

    @PutMapping("/admin/content")
    public ResponseEntity<?> updateContent(@RequestBody Map<String, String> updates) {
        service.upsertAll(updates);
        return ResponseEntity.ok(service.getAll());
    }

    @PostMapping("/admin/content/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            String url = service.saveImage(file);
            return ResponseEntity.ok(Map.of("url", url));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", e.getMessage()));
        }
    }
}
