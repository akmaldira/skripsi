package com.springboot.restapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.restapi.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query(value="SELECT e.* FROM Employee e ORDER BY e.employee_id ASC LIMIT ?1", nativeQuery=true)
    List<Employee> findAllColumnsLimit(Integer limit);
}