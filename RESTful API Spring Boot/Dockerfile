FROM eclipse-temurin:17-jdk-alpine
WORKDIR /java
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

EXPOSE 7000
ENTRYPOINT ["java","-jar","app.jar"]