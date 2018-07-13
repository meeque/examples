FROM node:9.11.2-alpine as ui-generator
WORKDIR /app

# Install global dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
    
# Install app dependencies
COPY package.json package-lock.json /app/
RUN npm install --production --no-optional

# Copy sources
COPY src /app/src
COPY public /app/public

# Set env variables 
ENV PRODUCTION true

RUN npm run build

FROM nginx:1.13.12-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ui-generator /app/build var/public

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]