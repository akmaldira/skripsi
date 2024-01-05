package com.springboot.restapi.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.restapi.entities.Employee;
import com.springboot.restapi.entities.EmployeeHalf;
import com.springboot.restapi.services.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/all")
    public List<Employee> getEmployee(@RequestParam(name = "row") Integer row) {
        List<Employee> employee = employeeService.getEmployee(row);
        return employee;
    }

    @GetMapping("/half")
    public List<EmployeeHalf> getEmployeeHalf(@RequestParam(name = "row") Integer row) {
        List<EmployeeHalf> employee = employeeService.getEmployeeHalf(row);
        return employee;
    }
}
