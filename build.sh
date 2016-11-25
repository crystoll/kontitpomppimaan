mvn -f kontitpomppimaan/pom.xml clean package
(cd kontitpomppimaan/src/main/resources/static && npm install && npm tsc)
docker-compose build