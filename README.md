# Docker test

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

Testing docker (+compose) abilities here.

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

Not much going on here, just go to the next chapter.

## Usage <a name = "usage"></a>

To build
```
sudo docker build -t sanarisan/test:1 .
```

To see image
```
sudo docker image ls
```

To remove image
```
sudo docker image rm sanarisan/test:1
```

To run container
```
sudo docker run --rm --name test -p 3000:3000 sanarisan/test:1
```
Where:

1. --rm is to remove container after it stops or fails
2. --name to give custom name
3. -p to link local machine port to internal exposed one
4. container name


If it runs alright - one can see container with 
```
sudo docker container ls
```

And if it fails or stops, you can find it this way

```
sudo docker ps -a
```

So you can rm it manually and try to start again

```
sudo docker rm test
```

To see logs use

```
sudo docker logs --follow test
```
Here you can also figure out what was the fail reason


To start/stop just
```
sudo docker start/stop test
```
