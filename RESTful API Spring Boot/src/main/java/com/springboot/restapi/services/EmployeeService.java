package com.springboot.restapi.services;

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

        List<Employee> employee = employeeRepository.findAllColumnsLimit(row);
        return employee;
    }

    public List<EmployeeHalf> getEmployeeHalf(Integer row) {

        List<EmployeeHalf> employee = employeeHalfRepository.findHalfColumnLimit(row);
        return employee;
    }
}
