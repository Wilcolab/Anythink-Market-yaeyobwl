# Anythink Market Servers

This project contains two servers: a FastAPI server implemented in Python and an Express server implemented in Node.js. The Express server now hosts the migrated API endpoints for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/`: Directory containing the FastAPI server.
  - `src/main.py`: The implementation of the FastAPI server.
  - `src/__init__.py`: Marks the `src` directory as a Python package.
  - `requirements.txt`: Lists dependencies for the FastAPI server.
  - `Dockerfile`: Builds the Docker image for the FastAPI server.

- `simple-express-server/`: Directory containing the Express server.
  - `src/app.js`: The implementation of the Express server with migrated endpoints.
  - `package.json`: Configuration for npm/yarn.
  - `yarn.lock`: Lock file for dependency versions.
  - `Dockerfile`: Builds the Docker image for the Express server.

- `docker-compose.yml`: Defines and runs both servers as Docker containers.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running:

  ```shell
  docker compose up
  ```

  This will build images for both servers and start them.

- The FastAPI server runs on port `8000`.
- The Express server runs on port `8001`.

## API Routes

The API endpoints have been migrated from the Python server to the Node.js Express server. They are available on the Express server:

- `GET /`: Returns "Hello World".
- `POST /tasks`: Adds a task to the task list. Send JSON with `{"text": "task description"}`.
- `GET /tasks`: Retrieves the current task list.

The Python server is still present but no longer hosts these endpoints.
