# Docker playground

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

Testing docker (+compose) abilities here.
Express app + postgreSQL db.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Install docker on ubuntu or whatever system

```
apt-get update

apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null


apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
```

Add user to group `docker` to use commands without sudo

```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker 
```

Restart pc after this!

More info here: https://docs.docker.com/engine/install/ubuntu/

## Usage <a name = "usage"></a>

### Running with just docker

Create docker network
```
docker network create pg_express_test_nw
```

To build
```
docker build -t sanarisan/express_test:1 .
```

To see image
```
docker image ls
```

To remove image
```
docker image rm -f sanarisan/express_test:1
```

---

First run postgres container
```
docker run \
    --rm \
	-d \
    -p 5433:5432 \
	--name pg_test \
	--net pg_express_test_nw \
	-e POSTGRES_PASSWORD=postgres \
	-e POSTGRES_USER=postgres \
	-e POSTGRES_DB=docker_test_db \
	-v pgdata:/var/lib/postgresql/data \
	postgres:13
```
Where:

1. --rm | is to remove container after it stops or fails
2. -d | to run in bg (daemon)
3. -p | exposing port to connect outside of containers e.g. when testing (yarn start)
4. --name | to give custom name
5. --net | specifying the custom network to make containers communicate
6. -e | ENV variables, in this case with special names postgres container relies on
7. -v | path to mount volumes to
8. image

---

Then run express app container
```
docker run \
    --rm \
    -d \
    --net pg_express_test_nw \
    --name express_test \
    -p 3000:3000 \
    sanarisan/express_test:1
```

Where:

1. --rm is to remove container after it stops or fails
2. -d | to run in bg (daemon)
3. --net | specifying the custom network to make containers communicate
4. --name to give custom name
5. -p to link local machine port to internal exposed one
6. container name

### Running with docker-compose

As simple as (!)
```
docker-compose up --build
docker-compose up -f ./docker-compose.yaml --build
```
All the configuration in compose file


(!)
**BUT** Because it has cli for controlling runtime, run like this
```
docker-compose build
docker-compose run express
```

**AND** To enter running container use
```
docker attach {container_id} 
```
Note that you can't exit attached container (only close terminal) or else with ctrl+c you just stop container


### More commands

If it runs alright - one can see container with 
```
docker container ls
```

Also can find it by running
```
docker ps -a
```

To remove it manually
```
docker rm express_test
```

To see logs
```
docker logs --follow express_test
docker-compose logs
```
Here you can also figure out what was the fail reason, if some happened


To start/stop just
```
docker start/stop express_test
```