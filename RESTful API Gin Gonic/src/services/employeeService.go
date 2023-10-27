package services

import (
	"gin-gonic/src/entities"
	"gin-gonic/src/repositories"
)

type IEmployeeService interface {
	GetEmployee(row int) []entities.Employee
	GetEmployeeHalf(row int) []entities.EmployeeHalf
}

type EmployeeService struct {
	employeeRepository repositories.IEmployeeRepository
}

func NewEmployeeService(employeeRepository repositories.IEmployeeRepository) IEmployeeService {
	return &EmployeeService{employeeRepository}
}

func (service *EmployeeService) GetEmployee(row int) []entities.Employee {
	return service.employeeRepository.FindAllColumnsLimit(row)
}

func (service *EmployeeService) GetEmployeeHalf(row int) []entities.EmployeeHalf {
	return service.employeeRepository.FindHalfColumnLimit(row)
}