# FriEMaCS
Friends for Engineering, Mathematics, and Computer Science Students

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Running the Project Locally](#running-the-project-locally)
  - [Set up](#set-up)
  - [Running the Servers](#running-the-servers)

## Project Overview
FriEMaCS is a survey of seven questions carefully designed to reveal the deepest parts of STEM students’ psyche. After students submit their responses, an advanced, state-of-the-art algorithm meticulously curates matches. FriEMaCS uses the latest psychological research to 100% guarantee optimal matches out of the pool of responses.

<div align="center">
  <img src="https://github.com/sophiasharif/friemacs/assets/57047003/314a6cb5-f4c8-4f4b-b887-663aba394111" alt="Screenshot 1" width="800">
</div>

<div align="center">
  <img src="https://github.com/sophiasharif/friemacs/assets/57047003/9baf0baa-a0c4-4242-9cab-c8c710b1592d" alt="Screenshot 2" width="800">
</div>

## Prerequisites
Make sure you have the following services set up before following the instructions below:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en)
* [MongoDB database](https://www.mongodb.com/atlas/database)

## Running the Project Locally
### Set up
First, we need to clone the repository to your local environment and install the appropriate dependencies. Run the following commands:
```
$ git clone https://github.com/sophiasharif/friemacs.git
$ cd friemacs/frontend
$ npm install
$ cd ../backend
$ npm install
```
Next, create  a `.env` file in the `backend` directory.  This file protects sensitive information like the port number, credentials to connect to MongoDB, and a secret key used for hashing and verifying JSON web tokens stored in the user’s browser. Paste this in and fill out the fields:
```
# Port number for backend server
PORT=3000

# MongoDB Atlas cluster connection string
MONGO_URI=<replace-with-connection-string>

# Secret key to hash JSON web tokens
SECRET=<replace-with-secure-secret-key>
```

### Running the Servers
The project set up is complete! The frontend and backend servers must be two separate processes, so open two separate shell windows and change into the `friemacs` directory. 
In one shell window, run the following commands to start the backend server:
```
$ cd backend
$ node server
```
In the other shell window, run these commands to start the frontend server:
```
$ cd frontend
$ npm run dev
```

