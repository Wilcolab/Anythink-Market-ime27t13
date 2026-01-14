# Express Server

This project is a simple Express server scaffolded to listen on port 8001. It is configured to use nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # npm configuration file
├── .gitignore           # Git ignore file
├── Dockerfile           # Dockerfile for containerization
├── nodemon.json         # Configuration for nodemon
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-ime27t13.git
   cd Anythink-Market-ime27t13/express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on [http://localhost:8001](http://localhost:8001).

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

### License

This project is licensed under the MIT License.