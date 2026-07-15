package com.example.Robot_Minds.repository;

import com.example.Robot_Minds.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    boolean existsByEmail(String email);
}
