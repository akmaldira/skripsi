package com.springboot.restapi.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Long employee_id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private String gender;

    @Column(name = "date_of_birth")
    private Date date_of_birth;

    @Column(name = "location")
    private String location;

    @Column(name = "department")
    private String department;

    @Column(name = "job_title")
    private String job_title;

    @Column(name = "salary")
    private Long salary;

    @Column(name = "date_of_hire")
    private Date date_of_hire;

    @Column(name = "picture")
    private String picture;

    public Employee() {
    }

    public Employee(Long employee_id, String first_name, String last_name, String email, String gender,
            Date date_of_birth, String location, String department, String job_title, Long salary, Date date_of_hire, String picture) {
        this.employee_id = employee_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
        this.location = location;
        this.department = department;
        this.job_title = job_title;
        this.salary = salary;
        this.date_of_hire = date_of_hire;
        this.picture = picture;
    }

    public Long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public Date getDate_of_hire() {
        return date_of_hire;
    }

    public void setDate_of_hire(Date date_of_hire) {
        this.date_of_hire = date_of_hire;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
