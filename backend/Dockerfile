FROM openjdk:22-jdk
WORKDIR /workspace/app/backend

COPY mvnw .
COPY .mvn .mvn
COPY src src
COPY pom.xml .

ENTRYPOINT ["./mvnw","spring-boot:run"]