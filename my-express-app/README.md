# My Express App

This project is a simple Express server scaffolded to listen on port 8001. It is configured to use Nodemon for automatic code updates during development.

## Project Structure

```
my-express-app
├── src
│   └── index.js         # Entry point of the application
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
├── Dockerfile            # Instructions to build the Docker image
├── package.json          # Project configuration and dependencies
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Wilcolab/Anythink-Market-yaeyobwl.git
   cd Anythink-Market-yaeyobwl/my-express-app
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the server:**
   ```bash
   yarn start
   ```

   The server will start and listen on port 8001.

## Docker

To build and run the Docker image, use the following commands:

1. **Build the Docker image:**
   ```bash
   docker build -t my-express-app .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 8001:8001 my-express-app
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.