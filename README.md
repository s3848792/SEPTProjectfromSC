# RMIT SEPT 2021 Major Project

# Group Day-Time

## Members
James Murray
William Furler
Ezadin omar
Ruiyang Fu

## Records

* Github repository 
* jira Board 
* Google Docs 

	
## Code documentation - Release 0.1.0 - date
Book Microservice: Backend currently being implemented
  

To run the application locally : 
1) cd into each and every microservice (ms_booking, ms_availability, ms_profiles, ms_service) and run :
2) ./mvnw package && java -jar target/ms_[microservice]-0.0.1-SNAPSHOT.jar
3) cd into FrontEnd/myfirstapp
4) run "npm install"
5) run "npm start"

# Dockerisation Notes - Frontend

## Frontend
To run these commands, you may be able to run within intellij however for me it only worked running it in wsl once intellij was closed. I think this is because intellij keeps some files open in the background which stops docker from building properly.
First, cd into the frontend folder.
To build the docker image, run the following:
#### `docker build -t frontend .`

Then, once that is done, use the following to start the frontend
#### `docker run -it -p 3000:3000 -d frontend`

Now it is running.

To test it is running, you can go to localhost:3000 to see the webpage.

To stop the server, run the following command
#### `docker kill <CONTAINER ID>`

To get the container ID, run the following:
#### `docker ps`

## Backend
The first thing you need to do is create a network through docker. 
To create a network named bookeroo-network, use the following command:
####`docker network create bookeroo-network`

To verify it was created successfully, review the output of the following command:
####`docker network ls`

Next, you will need a mysql container image
Use the following commands:
#### `docker pull mysql`
#### `docker container run --name bookeroo-db --network bookeroo-network -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=bookeroo -d mysql:8`

That should be all you will need to do for the setup

## bookmicroservices
Firsly, go into the bookmicroservices /src/main/resources/application.properties file and changes the datasource url to the following: 
####`jdbc:mysql://bookeroo-db/bookeroo`

Next, clean and rebuild the bookmicroservices through intellij following the full maven build process (except for site and deploy).
Then, cd into the bookmicroservices directory and run the following to build the docker container:
####`docker image build -t bookmicroservices .`

After this, you can run this container by entering the following command:
####`docker container run --network bookeroo-network --name bookmicroservices -p 8080:8080 -d bookmicroservices`


## loginmicroservices
Firsly, go into the loginmicroservices /src/main/resources/application.properties file and changes the datasource url to the following:
####`jdbc:mysql://bookeroo-db/bookeroo`

Next, clean and rebuild the loginmicroservices through intellij following the full maven build process (except for site and deploy).
Then, cd into the loginmicroservices directory and run the following to build the docker container:
####`docker image build -t loginmicroservices .`

After this, you can run this container by entering the following command:
####`docker container run --network bookeroo-network --name loginmicroservices -p 8081:8081 -d loginmicroservices`

