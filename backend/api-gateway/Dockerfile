FROM maven:latest AS maven_build

WORKDIR .

COPY . .

RUN mvn clean package

FROM openjdk:17-jdk-alpine

WORKDIR /micro-service

COPY --from=maven_build ./target/*.jar ./app.jar	

EXPOSE 9002

CMD [ "java","-jar","./app.jar" ]