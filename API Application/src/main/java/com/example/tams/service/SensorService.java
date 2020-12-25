package com.example.tams.service;

import com.example.tams.modal.Sensor;
import com.example.tams.repository.SensorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SensorService {

    @Autowired
    SensorRepo sensorRepo;

    public List<Sensor> getSensors(){
        List<Sensor> sensorList = new ArrayList<>();
        sensorList = sensorRepo.findAll();
        return sensorList;
    }

    public Sensor getOneSensor(int id){
        return sensorRepo.findSensorById(id);
    }
}
