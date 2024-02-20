FROM maven:3.8.4-openjdk-11-slim AS maven_build

WORKDIR .

COPY . .

RUN mvn clean package

FROM openjdk:17-jdk-alpine

WORKDIR /micro-service

COPY --from=maven_build ./target/*.jar ./app.jar	

EXPOSE 9001

CMD [ "java","-jar","./app.jar" ]