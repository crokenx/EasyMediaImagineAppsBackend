# This project required Docker and Docker-compose to run

## Run the Project
We can easily run the whole with only a single command:
```bash
docker-compose up --build
```

Docker will pull the MongoDB and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker-compose up --build -d
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```
## The port of the express server is 6868 (http://localhost:6868/)
The port of the express server can be changed in the docker-compose.yml file, inside the container the port is 8080

## Endpoints availables at the moment
### POST /api/auth/login
Will receive a json with the following structure in the body:
```json
{
    "email": "jose@email.com",
    "password": "********"
}
it will return a token for the client to use in the other endpoints
```
### POST /api/auth/registration
Will receive a json with the following structure in the body:
```json
{
    "name": "Jose",
    "email": "jose@email.com",
    "password": "********"
}
it will return a token for the client to use in the other endpoints
```

### Note: The origin localhost:4200 is whitelisted in the express server, so the client (angular application in development mode) can make requests to the server

### Note: There's no initial data in the database, so the client must create the first user with the registration endpoint