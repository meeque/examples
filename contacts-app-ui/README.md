## Installation

To install the dependencies, run the `npm install` command.

## Build and run a Docker image

Run the following command to build and run the Docker image:

```
docker build -t demo-react-web-app .
docker run --rm -p 8000:80 demo-react-web-app
open http://localhost:8000 or http://localhost:8000/status in a browser
```