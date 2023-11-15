FROM eclipse-temurin:17-jdk-alpine
WORKDIR /java
COPY . .
RUN ./gradlew build -x test

ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
WORKDIR /java

EXPOSE 7000
ENTRYPOINT ["java","-jar","app.jar"]