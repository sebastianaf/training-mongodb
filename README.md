# training-mongodb
Mongo DB with Mongo express over Raspberry running on Docker 

## Requirements
 - Docker compose

## Steps
### 1. Create environment variables
Create a `.env` from `.env.example` file in the root folder with all environment variables, this variables will be used by the containers, it need to be reached by `docker-compose.yml` file.

### 2.Change `org` and `project` names
It's recommend to change all the names (in `docker-compose.yml) named with `org` and `project` with your own organization name and project name.

## Run
```
docker compose -p org-project up -d
```