package com.springboot.restapi.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.restapi.entities.Employee;
import com.springboot.restapi.entities.EmployeeHalf;
import com.springboot.restapi.repositories.EmployeeRepository;

@Service
public class EmployeeService {
    
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getEmployee(Integer row) {

        List<Employee> employee = employeeRepository.findAllColumnsLimit(row);
        return employee;
    }

    public List<EmployeeHalf> getEmployeeHalf(Integer row) {

        List<EmployeeHalf> employee = employeeRepository.findHalfColumnLimit(row);
        return employee;

    }
}
