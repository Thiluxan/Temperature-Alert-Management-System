package com.example.tams.service;

import com.example.tams.modal.Alert;
import com.example.tams.repository.AlertRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlertService {
    @Autowired
    private AlertRepo alertRepo;

    public List<Alert> getAlerts(){
        List<Alert> alerts=new ArrayList<>();
        alerts=alertRepo.findAll();
        return alerts;
    }

    public void addAlert(Alert alert){
        alertRepo.save(alert);
    }

}
