package main

import (
	"gin-gonic/src/config"
	"gin-gonic/src/controllers"
	"gin-gonic/src/repositories"
	"gin-gonic/src/services"
	"log"
	"os"
	"runtime"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

var (
	ctx *gin.Context
)

func main() {
	runtime.GOMAXPROCS(2)
	if os.Getenv("GIN_MODE") == "release" {
		err := godotenv.Load(".env")

		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := godotenv.Load(".env.development")

		if err != nil {
			log.Fatal(err)
		}
	}
	router := gin.Default()

	db := config.DB()

	employeeRepository := repositories.NewEmployeeRepository(db)
	employeeService := services.NewEmployeeService(employeeRepository)
	employeeController := controllers.NewEmployeeController(employeeService, ctx)

	router.GET("/employee/all", employeeController.GetEmployee)
	router.GET("/employee/half", employeeController.GetEmployeeHalf)

	router.Run(":6000")
}
