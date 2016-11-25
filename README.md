## Docker-compose Java+Angular2 demo

This is a very simple demo using Docker+DockerCompose+SpringBoot+SpringData+Angular2+PostgresDB - well, actually not so simple it seems.

Anyway, this is for demonstration purposes/base template for building something on this stack. There are some scripts at root that will help life, and probably this demo will evolve if I have some time to throw into this.

Note that it will map the backend+frontend container to port 80 in docker-compose.yml, so adjust that to your own preferences.

## TODO

- Make Angular2 frontend full-blown but simple CRUD example
- Separate Angular2 frontend to separate container, so networking example becomes better
- Figure out how frontend can now the backend port - being run in browser
- Add a load balancer in front
- How about stack&swarm examples on top of this?
