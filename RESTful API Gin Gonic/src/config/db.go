package config

import (
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func DB() *gorm.DB {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	dsn := "host=" + host + " user=" + user + " password=" + password + " dbname=" + dbname + " port=" + port + " sslmode=disable TimeZone=Asia/Jakarta"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})

	sqlDb, err := db.DB()

	sqlDb.SetMaxOpenConns(10)
	sqlDb.SetMaxIdleConns(10)
	sqlDb.SetConnMaxIdleTime(600000)
	sqlDb.SetConnMaxLifetime(600000)

	if err != nil {
		panic(err)
	}

	return db
}
