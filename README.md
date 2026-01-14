# Anythink Market

This project contains both a FastAPI server (Python) and an Express server (Node.js) for managing a task list.

## Project Structure

The project has the following files and directories:

### Python Server
- `python-server/src/main.py`: FastAPI server implementation with task management endpoints.
- `python-server/src/__init__.py`: Python package marker.
- `python-server/requirements.txt`: Python dependencies.
- `python-server/Dockerfile`: Docker configuration for the Python server.

### Express Server
- `express-server/src/server.js`: Express server implementation with task management endpoints (migrated from Python).
- `express-server/package.json`: Node.js dependencies and scripts.
- `express-server/nodemon.json`: Nodemon configuration for auto-reloading.
- `express-server/Dockerfile`: Docker configuration for the Express server.

### Common
- `docker-compose.yml`: Multi-container Docker configuration running both services.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images and start the containers defined in the `docker-compose.yml` file.

- The servers will be running at:
  - Python FastAPI server: `http://localhost:8000`
  - Express server: `http://localhost:8001`

## API Routes

Both servers provide the same API routes:

- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. The request body should contain `{"text": "task description"}`.
- `GET /tasks`: Retrieves the task list.

## Development

For local development with hot-reloading:
- The Express server uses **nodemon** to automatically reload on code changes.
- The Python server uses **FastAPI** with hot-reload support.

Both services have volume mounts configured in `docker-compose.yml` for seamless development.
