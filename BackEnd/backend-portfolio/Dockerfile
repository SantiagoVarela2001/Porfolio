FROM openjdk:17-slim

WORKDIR /app

COPY target/backend-portfolio-0.0.1-SNAPSHOT.jar /app/porfolioBack.jar

EXPOSE 3000

CMD [ "java", "-jar", "/app/porfolioBack.jar" ]