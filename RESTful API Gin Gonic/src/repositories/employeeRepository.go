package repositories

import (
	"gin-gonic/src/entities"

	"gorm.io/gorm"
)

type IEmployeeRepository interface {
	FindAllColumnsLimit(row int) []entities.Employee
	FindHalfColumnLimit(row int) []entities.EmployeeHalf
}

type EmployeeRepository struct {
	db *gorm.DB
}

func NewEmployeeRepository(db *gorm.DB) IEmployeeRepository {
	return &EmployeeRepository{db}
}

func (repository *EmployeeRepository) FindAllColumnsLimit(row int) []entities.Employee {	
	var employees []entities.Employee
	repository.db.Raw("SELECT * FROM employee ORDER BY employee_id ASC LIMIT ?", row).Scan(&employees)
	return employees
}

func (repository *EmployeeRepository) FindHalfColumnLimit(row int) []entities.EmployeeHalf {
	var employees []entities.EmployeeHalf
	repository.db.Raw("SELECT employee_id, first_name, last_name, email, gender, date_of_birth FROM employee ORDER BY employee_id ASC LIMIT ?", row).Scan(&employees)
	return employees
}