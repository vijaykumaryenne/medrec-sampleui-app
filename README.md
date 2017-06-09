# Medrec Sample UI web application
A sample responsive web application built for MedRec Platform API's using Vue.js framework. The application
uses Bootstrap theme.


> A Vue.js project for Medrec App


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## How to Dockerise this web application and register it on Docker Hub
1. Create a dockerfile in the Web App root folder as below (Refer the Dockerfile)
``` bash
FROM node:boron
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "run", "dev"]
```
2. Create .dockerignore file at the same location and add the below entries.
node_modules
npm-debug.log

## Create a Docker Container
3. Execute this docker command from the application path :
``` bash
docker build -t <Image_Name> .
```

## List and run the Docker Image
4. The image built can be listed with the below command.
``` bash
list the images : docker images
```
5. Run the image. Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. 

``` bash
docker run -p 49160:3000 -d <Image_Name>

```
6. Get container ID
$ docker ps

## Ship it to Docker Hub

7. Register on docker hub with the repository name <Image_Name>

8. connect to docker hub
``` bash
docker login --username=<dockerhubusername> --email=<dockerhubemail>

```
9. Tag your image

``` bash

docker tag <image_id> image_name:latest

```

10. Push the image to the docker hub

``` bash

docker push yourhubusername/image_name

```

## Deploy and Run it on Oracle Container Cloud Service (OCCS) from Docker Hub registry

For detailed explanation on the service check out (https://cloud.oracle.com/en_US/container)

0. Register your Docker Hub Account with OCCS from the container console.

1. Create a Service in OCCS from the container console

``` bash

Service Name:
Image: yourhubusername/image_name
Add Ports Configuration: Host Port: 41960 Container Port: 3000 tcp

```

2. save changes

3. Deploy, allocate to the pool.

4. Check the docker image being pulled from registry to OCCS.

5.  Check Host details

6. Access the application : http://host-ip:41960


