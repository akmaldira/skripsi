package config

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func DB() *gorm.DB {
	host := "20.2.128.203"
	port := "5432"
	user := "akmaldira"
	password := "Akmaldira123"
	dbname := "kuliah"

	dsn := "host=" + host + " user=" + user + " password=" + password + " dbname=" + dbname + " port=" + port + " sslmode=disable TimeZone=Asia/Jakarta"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})

	if err != nil {
		panic(err)
	}

	return db
}
