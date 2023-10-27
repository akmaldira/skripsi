### Local Installataion

- Change all config on
  - RESTful API Express Js/src/config/db.ts
  - RESTful API Gin Gonic/src/config/db.go
  - RESTful API Spring Boot/src/main/resources/application.properties

- Turn on synchronize database
  - RESTful API Express Js/src/config/db.ts set synchronize to true
  - cd RESTful API Express Js
  - yarn dev
  - after synchronize done you can run as production


### Database Schema
![alt text](database-schema.jpg)