FROM node:9.11.2-alpine as ui-generator
WORKDIR /app

# Install app dependencies
COPY ./contacts-app/web-ui /app/
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

CMD ["nginx", "-g", "daemon off;"]