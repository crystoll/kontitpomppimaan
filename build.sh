mvn -f kontitpomppimaan/pom.xml clean package
(cd kontitpomppimaan/src/main/resources/static && npm install && npm run tsc)
docker-compose build