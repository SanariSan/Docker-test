# Docker test

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
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

More info here: https://docs.docker.com/engine/install/ubuntu/

### Installing

A step by step series of examples that tell you how to get a development env running.

Create docker network
```
sudo docker network create pg_express_test_nw
```

## Usage <a name = "usage"></a>

To build
```
sudo docker build -t sanarisan/express_test:1 .
```

To see image
```
sudo docker image ls
```

To remove image
```
sudo docker image rm -f sanarisan/express_test:1
```

---

First run postgres container
```
sudo docker run \
    --rm \
	-d \
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
3. --name | to give custom name
4. --net | specifying the custom network to make containers communicate
5. -e | ENV variables, in this case with special names postgres container relies on
6. -v | path to mount volumes to
7. image

---

Then run express app container
```
sudo docker run \
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

---

If it runs alright - one can see container with 
```
sudo docker container ls
```

Also can find it by running
```
sudo docker ps -a
```

To remove it manually
```
sudo docker rm express_test
```

To see logs
```
sudo docker logs --follow express_test
```
Here you can also figure out what was the fail reason, if some happened


To start/stop just
```
sudo docker start/stop express_test
```