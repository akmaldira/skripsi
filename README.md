### Local Installataion

- Import Database data to your database
  - Go to DBeaver application (if you dont have DBeaver, you can download <a href="https://dbeaver.io/">here</a>)
  - Connect to your postgres database
  - Right click on database name
  - Tools -> Restore
  - Choose /dump-kuliah-202310272148.sql file

- Change database environment variable on
  - RESTful API Express Js/.env.development
  - RESTful API Gin Gonic/.env.development
  - RESTful API Spring Boot/src/main/resources/application.properties

- Run Program as development
  - Express Js
    ```
    yarn install
    yarn dev
    ``` 
  - Gin Gonic
    ```
    go run main.go
    ``` 
  - Spring Boot
    ```
    ./gradlew build -x test
    java -jar /build/libs/rest-api-0.0.1-SNAPSHOT.jar
    ``` 