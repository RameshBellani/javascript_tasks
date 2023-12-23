# Simple RESTful API with Node.js and TypeScript

This repository contains a simple RESTful API implemented using Node.js and TypeScript.

## Prerequisites

Before running the code, make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rameshbellani/javascript_tasks.git


Navigate to the project directory:
cd javascript_tasks


Install dependencies:
npm install


Running the Server
To start the server, run:
npm start


The server will be running on http://localhost:3000.


Running Tests
To execute unit tests, run:
npm test


API Documentation
The API documentation is available in the docs folder. To view the documentation locally, run:
npm run serve-docs


Open your browser and visit http://localhost:5000 to view the documentation.


Code Structure
src/index.ts: Entry point of the application, including the main Express app and API endpoints.
src/middleware/logger.ts: Middleware function for logging timestamp, HTTP method, and requested URL.
src/routes/products.ts: Routes for handling products-related API endpoints.
src/utils/: Utility functions or helper modules.
tests/: Unit tests for API endpoints and middleware.



Rationale and Considerations
The application uses TypeScript to benefit from static typing and better code organization.
Express is used for building the RESTful API due to its simplicity and popularity.
The code follows best practices for structuring a Node.js application.
Unit tests are implemented using Jest and Supertest for testing API endpoints.