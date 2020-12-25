package com.example.tams.repository;

import com.example.tams.modal.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SensorRepo extends JpaRepository<Sensor,Integer>{
    Sensor findSensorById(int id);
}
