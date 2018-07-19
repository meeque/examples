## Installation

To install the dependencies, run the `npm install` command.

## Build and run a Docker image

Run the following command to build and run the Docker image:

```
docker build -t contacts-app-ui .
docker run --rm -p 8000:80 contacts-app-ui
open http://localhost:8000 or http://localhost:8000/status in a browser
```

```
docker login eu.gcr.io/kyma-project
docker tag contacts-app-ui eu.gcr.io/kyma-project/contacts-app-ui:${TAG}
docker push eu.gcr.io/kyma-project/contacts-app-ui:${TAG}
```