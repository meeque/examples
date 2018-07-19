FROM node:9.11.2-alpine as ui-generator
WORKDIR /app

# Install global dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# Install nodejs dependencies
COPY ./contacts-app/web-ui/ /app/ 
RUN npm install --production --no-optional

# Set env variables 
ENV PRODUCTION true

EXPOSE 8000

# Run nodejs build
CMD npm start