package entities

import "time"

type Employee struct {
	EmployeeId  uint    `json:"employee_id" gorm:"type:bigint;primary_key,AUTO_INCREMENT:true;index"`
	FirstName   string  `json:"first_name" gorm:"type:varchar(255)"`
	LastName    string  `json:"last_name" gorm:"type:varchar(255)"`
	Email       string  `json:"email" gorm:"type:varchar(255)"`
	Gender      string  `json:"gender" gorm:"type:varchar(255)"`
	DateOfBirth time.Time `json:"date_of_birth"`
	Location    string  `json:"location" gorm:"type:varchar(255)"`
	Department  string  `json:"department" gorm:"type:varchar(255)"`
	JobTitle    string  `json:"job_title" gorm:"type:varchar(255)"`
	Salary      int     `json:"salary" gorm:"type:integer"`
	DateOfHire  time.Time  `json:"date_of_hire"`
	Picture     string  `json:"picture" gorm:"type:varchar(255)"`
}

func (Employee) TableName() string {
	return "employee"
}