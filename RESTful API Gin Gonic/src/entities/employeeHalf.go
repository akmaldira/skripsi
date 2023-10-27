package entities

import "time"

type EmployeeHalf struct {
	EmployeeId  uint    `json:"employee_id" gorm:"type:bigint;primary_key,AUTO_INCREMENT:true;index"`
	FirstName   string  `json:"first_name" gorm:"type:varchar(255)"`
	LastName    string  `json:"last_name" gorm:"type:varchar(255)"`
	Email       string  `json:"email" gorm:"type:varchar(255)"`
	Gender      string  `json:"gender" gorm:"type:varchar(255)"`
	DateOfBirth time.Time `json:"date_of_birth"`
}

func (EmployeeHalf) TableName() string {
	return "employee"
}