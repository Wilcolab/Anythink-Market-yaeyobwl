# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code updates during development.

## Project Structure

```
simple-express-server
├── src
│   └── app.js          # Entry point of the application
├── Dockerfile          # Dockerfile to build the server image
├── package.json        # Configuration file for npm
├── yarn.lock           # Yarn lock file for dependency versions
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-yaeyobwl.git
   cd simple-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code updates, run:
```
yarn start
```

The server will be running on `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run:
```
docker build -t simple-express-server .
```

### Running the Docker Container

To run the Docker container, use:
```
docker run -p 8001:8001 simple-express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.