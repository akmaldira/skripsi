package com.springboot.restapi.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.restapi.entities.Employee;
import com.springboot.restapi.entities.EmployeeHalf;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value="SELECT e.* FROM Employee e ORDER BY e.employee_id ASC LIMIT ?1", nativeQuery=true)
    List<Employee> findAllColumnsLimit(Integer limit);

    @Query(value="SELECT e.employee_id, e.first_name, e.last_name, e.email, e.gender, e.date_of_birth FROM Employee e ORDER BY e.employee_id ASC LIMIT ?1", nativeQuery=true)
    List<EmployeeHalf> findHalfColumnLimit(Integer limit);
}