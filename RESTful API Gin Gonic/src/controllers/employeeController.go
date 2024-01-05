package controllers

import (
	"gin-gonic/src/services"
	"log"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

type EmployeeController struct {
	employeeService services.IEmployeeService
	ctx             *gin.Context
}

func NewEmployeeController(employeeService services.IEmployeeService, ctx *gin.Context) EmployeeController {
	return EmployeeController{employeeService, ctx}
}

func (controller *EmployeeController) GetEmployee(ctx *gin.Context) {
	row, _ := strconv.Atoi(ctx.Query("row"))
	now := time.Now()
	employees := controller.employeeService.GetEmployee(row)
	processingTime := time.Since(now)
	log.Printf("Processing time: %v", processingTime.Seconds())
	ctx.JSON(200, employees)
}

func (controller *EmployeeController) GetEmployeeHalf(ctx *gin.Context) {
	row, _ := strconv.Atoi(ctx.Query("row"))
	now := time.Now()
	employees := controller.employeeService.GetEmployeeHalf(row)
	processingTime := time.Since(now)
	log.Printf("Processing time: %v", processingTime.Seconds())
	ctx.JSON(200, employees)
}
