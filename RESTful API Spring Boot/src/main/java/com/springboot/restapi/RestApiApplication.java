package com.springboot.restapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class RestApiApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext applicationContext = SpringApplication.run(RestApiApplication.class, args);

    String dbUrl = applicationContext.getEnvironment().getProperty("spring.datasource.url");

		String dbUsername = applicationContext.getEnvironment().getProperty("spring.datasource.username");

		System.out.println("Using database: " + dbUrl + " with username: " + dbUsername);
	}

}
