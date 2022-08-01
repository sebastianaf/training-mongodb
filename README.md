# training-mongodb
Mongo DB with Mongo express over Raspberry running on Docker 

## Requirements
 - Docker compose

## Steps
### 1. Clone the repository
```
git clone https://github.com/sebastianaf/training-mongodb
cd training-mongodb
```
### 2. Set environment variables
Create a `.env` from `.env.example` file in the root folder with all environment variables, this variables will be used by the containers, it need to be reached by `docker-compose.yml` file.

### 3. Change `org` and `project` names [Optional]
It's recommend to change all the names (in `docker-compose.yml) named with `org` and `project` with your own organization name and project name.

### 4. Run
```
docker compose -p org-project up -d
```