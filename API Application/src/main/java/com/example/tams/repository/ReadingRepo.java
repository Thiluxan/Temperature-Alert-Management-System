package com.example.tams.repository;

import com.example.tams.modal.Reading;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReadingRepo extends JpaRepository<Reading,Integer> {
    List<Reading> findBySensor(int id);

    Reading findTopByOrderByIdDesc();
}
