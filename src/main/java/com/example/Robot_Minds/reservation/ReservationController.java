package com.example.Robot_Minds.reservation;

import com.example.Robot_Minds.entity.Reservation;
import com.example.Robot_Minds.repository.ReservationRepository;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    private final ReservationRepository repository;

    public ReservationController(ReservationRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/count")
    public Map<String, Long> count() {
        return Map.of("count", repository.count());
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody ReservationRequest request) {
        String normalizedEmail = request.email().trim().toLowerCase();
        if (repository.existsByEmail(normalizedEmail)) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "This email is already on the list."));
        }
        try {
            Reservation saved = repository.save(new Reservation(normalizedEmail));
            return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                    "id", saved.getId(),
                    "email", saved.getEmail()
            ));
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "This email is already on the list."));
        }
    }

    public record ReservationRequest(
            @NotBlank @Email String email
    ) {
        public ReservationRequest(String email) {
            this.email = email == null ? null : email.trim();
        }
    }
}
