

Social Network API Readme
Overview
This is a simple Social Network API that allows users to interact with various endpoints for managing users, thoughts, reactions, and friend lists. The API is built using Node.js, Express.js, and Mongoose for MongoDB integration.

Getting Started
Clone this repository to your local machine.
Install dependencies using npm install.
Set up your MongoDB database and update the connection string in config.js.
Running the Application
To start the server and sync Mongoose models with the MongoDB database, run:

bash
Copy code
npm start
API Endpoints
Users
GET /api/users: Retrieve all users.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update user information.
DELETE /api/users/:userId: Delete a user.
Thoughts
GET /api/thoughts: Retrieve all thoughts.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update a thought.
DELETE /api/thoughts/:thoughtId: Delete a thought.
Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
Friends
POST /api/users/:userId/friends/:friendId: Add a user to the friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a user from the friend list.
Testing with Insomnia
Open Insomnia.
Test GET routes for users and thoughts to view formatted JSON data.
Test POST, PUT, and DELETE routes for users and thoughts to create, update, and delete data.
Test POST and DELETE routes for reactions and friend lists to manage interactions.
Contributing
Feel free to contribute to the development of this Social Network API by submitting issues or pull requests. Your feedback and collaboration are appreciated.




