package com.example.tams.service;

import com.example.tams.modal.Reading;
import com.example.tams.repository.ReadingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReadingService {

    @Autowired
    ReadingRepo readingRepo;

    public List<Reading> getAllData(){
        List<Reading> readingList = new ArrayList<>();
        readingList = readingRepo.findAll();
        return readingList;
    }

    public List<Reading> getOneData(int id){
        List<Reading> readingList = new ArrayList<>();
        readingList = readingRepo.findBySensor(id);
        return readingList;
    }
}
