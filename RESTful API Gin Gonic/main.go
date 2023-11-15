package main

import (
	"fmt"
	"gin-gonic/src/config"
	"gin-gonic/src/controllers"
	"gin-gonic/src/repositories"
	"gin-gonic/src/services"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

var (
	ctx *gin.Context
)

func main() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal(err)
	}

	router := gin.Default()

	db := config.DB()

	fmt.Println("Using Database: " + os.Getenv("DB_NAME") + " on " + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + " with user: " + os.Getenv("DB_USER"))

	employeeRepository := repositories.NewEmployeeRepository(db)
	employeeService := services.NewEmployeeService(employeeRepository)
	employeeController := controllers.NewEmployeeController(employeeService, ctx)

	router.GET("/employee/all", employeeController.GetEmployee)
	router.GET("/employee/half", employeeController.GetEmployeeHalf)

	router.Run("0.0.0.0:6000")
}
