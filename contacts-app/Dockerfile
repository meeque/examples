FROM node:8

# Create app directory
WORKDIR /usr/src/contacts-app

# Bundle app source
COPY ./contacts-app/src .

# Make scrits are executable
RUN chmod +x *.sh

# Prepare the container environment
RUN ./prepare.sh

# By default the serves HTTP requests on 8080
EXPOSE 8080

CMD ./run.sh
