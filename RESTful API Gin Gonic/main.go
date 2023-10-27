package main

import (
	"gin-gonic/src/config"
	"gin-gonic/src/controllers"
	"gin-gonic/src/repositories"
	"gin-gonic/src/services"

	"github.com/gin-gonic/gin"
)

var (
	ctx *gin.Context
)

func main() {
	router := gin.Default()

	db := config.DB()

	employeeRepository := repositories.NewEmployeeRepository(db)
	employeeService := services.NewEmployeeService(employeeRepository)
	employeeController := controllers.NewEmployeeController(employeeService, ctx)

	router.GET("/employee/all", employeeController.GetEmployee)
	router.GET("/employee/half", employeeController.GetEmployeeHalf)

	router.Run(":6000")
}
