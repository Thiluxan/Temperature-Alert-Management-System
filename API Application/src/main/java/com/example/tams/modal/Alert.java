package com.example.tams.modal;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "alerts")
public class Alert {
    @Id
    private int id;
    private int sensor;
    private String date;
    private int temperature;


    public Alert() {

    }

    public Alert(int sensor, String date, int temperature) {
        this.sensor = sensor;
        this.date = date;
        this.temperature = temperature;
    }

    public Alert(int id, int sensor, String date, int temperature) {
        this.id = id;
        this.sensor = sensor;
        this.date = date;
        this.temperature = temperature;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSensor() {
        return sensor;
    }

    public void setSensor(int sensor) {
        this.sensor = sensor;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

}
