package controllers

import (
	"gin-gonic/src/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

type EmployeeController struct {
	employeeService services.IEmployeeService
	ctx *gin.Context
}

func NewEmployeeController(employeeService services.IEmployeeService, ctx *gin.Context) EmployeeController {
	return EmployeeController{employeeService, ctx}
}

func (controller *EmployeeController) GetEmployee(ctx *gin.Context) {
	row, _ := strconv.Atoi(ctx.Query("row"))
	employees := controller.employeeService.GetEmployee(row)
	ctx.JSON(200, employees)
}

func (controller *EmployeeController) GetEmployeeHalf(ctx *gin.Context) {
	row, _ := strconv.Atoi(ctx.Query("row"))
	employees := controller.employeeService.GetEmployeeHalf(row)
	ctx.JSON(200, employees)
}