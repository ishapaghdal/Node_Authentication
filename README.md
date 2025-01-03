# Authentication with Node

## Description
This project focuses on building a user registration and login system using Node.js. It includes various modules and functionalities including user validation, authentication, and database interactions.

## Features
- [x] User Registration: Allows users to register with a unique username and email.
- [x] User Login: Authenticates users based on their username and email.
- [x] Validation: Ensures usernames are unique and do not contain spaces or special characters.
- [x] Error Handling: Provides appropriate error messages and status codes for various failure scenarios.
- [x] Database Integration: Stores and retrieves user information from a database.
- [x] Security: Implements JWT for secure authentication.

## Installation
To install the necessary dependencies, run the following command:
```bash
git clone https://github.com/ishapaghdal/Node_Authentication.git
```
```bash
cd Node_Authentication
```
```bash
npm install
```

## Setup
Create a `.env` file  in the root folder with the necessary details:
```bash
nano .env
```
Add the required environment variables to the `.env` file.
```bash
# Server configuration
PORT= #Port Number
HOST=localhost

#Jwt configuration
JWT_SECRET_KEY = #tokenheader 
TOKEN_HEADER_KEY = #tokenkey

# Database configuration
MONGO_URI= #mongodb url
```
## Usage
To start the application, use the following command:
```bash
nodemon
```
## Test
[Live Demo - My Website](https://node-authentication-eta.vercel.app/)
You can test the backend by hitting the API endpoints on the live demo link above. Here are some example endpoints you can use:

| **Action**       | **Method** | **Endpoint**            |
|------------------|------------|-------------------------|
| Create User      | POST       | `/api/auth/register`         |
| Login User       | POST       | `/api/auth/login`            |
