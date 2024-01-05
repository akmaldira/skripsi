package com.springboot.restapi.services;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.restapi.entities.Employee;
import com.springboot.restapi.entities.EmployeeHalf;
import com.springboot.restapi.repositories.EmployeeHalfRepository;
import com.springboot.restapi.repositories.EmployeeRepository;

@Service
public class EmployeeService {
    
    private final EmployeeRepository employeeRepository;
    private final EmployeeHalfRepository employeeHalfRepository;

    public EmployeeService(EmployeeRepository employeeRepository, EmployeeHalfRepository employeeHalfRepository) {
        this.employeeRepository = employeeRepository;
        this.employeeHalfRepository = employeeHalfRepository;
    }

    public List<Employee> getEmployee(Integer row) {
        Instant now = Instant.now();
        List<Employee> employee = employeeRepository.findAllColumnsLimit(row);
        Instant now2 = Instant.now();
        long processingTime = ChronoUnit.MILLIS.between(now, now2);
        System.out.format("Processing time: %.3f%n", processingTime / 1000.0);
        return employee;
    }

    public List<EmployeeHalf> getEmployeeHalf(Integer row) {
        Instant now = Instant.now();
        List<EmployeeHalf> employee = employeeHalfRepository.findHalfColumnLimit(row);
        Instant now2 = Instant.now();
        long processingTime = ChronoUnit.MILLIS.between(now, now2);
        System.out.format("Processing time: %.3f%n", processingTime / 1000.0);
        return employee;
    }
}
