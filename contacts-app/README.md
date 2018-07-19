# TODO

# web-ui container supports BACKEND_URL env variable you can run it for example as
    git clone https://github.com/kyma-project/examples.git -b contacts-app --single-branch
    cd examples
    docker build . -f contacts-app/web-ui/Dockerfile -t webui
    docker run -ti -p 80:80 -e BACKEND_URL=http://contacts.production.knative.gcp.cluster.kyma.cx/graphql --rm webui
 
