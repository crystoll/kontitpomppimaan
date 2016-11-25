(cd kontitpomppimaan/src/main/resources/static && npm install && npm run tsc)
mvn -f kontitpomppimaan/pom.xml clean package
docker-compose stop
docker-compose build && docker-compose up -d
