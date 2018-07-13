FROM node:9.11.2-alpine as ui-generator
WORKDIR /app

# Install global dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# Install nodejs dependencies
COPY ./ /app/
RUN npm install --production --no-optional

# Set env variables 
ENV PRODUCTION true

# Run nodejs build
RUN npm run build

# Prepare final container
FROM nginx:1.13.12-alpine

COPY --from=ui-generator /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=ui-generator /app/build var/public

EXPOSE 80

# workaround for kaniko build leading to: 
# nginx: [alert] could not open error log file: open() "/var/log/nginx/error.log" failed (2: No such file or directory)
RUN mkdir -p /var/log/nginx/
RUN echo "init" > /var/log/nginx/logs

CMD ["nginx", "-g", "daemon off;"]