Converge Backend
Overview
Converge Backend is the REST API server for the Converge app. It handles user authentication, event management, and friend relationships.

Features
User signup and login with encrypted passwords

CRUD operations for events (Create, Read, Update, Delete)

Friend management (add friends, list friends)

Tech Stack
Node.js

Express.js

MongoDB with Mongoose

bcryptjs for password hashing

dotenv for environment variables

cors for Cross-Origin Resource Sharing

Getting Started
Prerequisites
Node.js installed

MongoDB connection string (in a .env file)

Installation
Clone the repo

bash
Copy
git clone https://github.com/RealEthanSequeira/converge-backend.git
Navigate into the project directory

bash
Copy
cd converge-backend/Backend/converge-backend
Install dependencies

bash
Copy
npm install
Create a .env file in the root directory and add your MongoDB connection URI:

ini
Copy
MONGO_URI=your_mongodb_connection_string
PORT=5000
Running the Server
Start the backend server:

bash
Copy
node server.js
Or if you use nodemon (recommended for development):

bash
Copy
nodemon server.js
Server will run on http://localhost:5000 (or the port you specify).

API Endpoints
User Routes
POST /api/users/signup — Register a new user

POST /api/users/login — Login a user

Friend Routes
POST /api/friends/add — Add a friend

GET /api/friends/:userId — Get friends list of a user

Event Routes
POST /api/events — Create a new event

GET /api/events/:userId — Get all events for a user

PUT /api/events/:eventId — Update an event

DELETE /api/events/:eventId — Delete an event

Testing
Use Postman, Insomnia, or curl to test your API endpoints. Example JSON for creating an event:

json
Copy
{
  "userId": "yourUserIdHere",
  "title": "Test Event",
  "date": "2025-07-01",
  "time": "12:00",
  "location": "Gym",
  "notes": "Test notes"
}
License
This project is licensed under the MIT License.

