FROM golang:1.10 as builder

# Create app directory
WORKDIR /usr/src/contacts-ui-web

# Bundle app source
COPY ./contacts-app/ui-web .

# Make scrits are executable
RUN CGO_ENABLED=0 GOOS=linux go build start.go -o start -installsuffix cgo

FROM alpine:latest
WORKDIR /usr/src/contacts-ui-web
COPY --from=builder /usr/src/contacts-ui-web/start .
COPY --from=builder /usr/src/contacts-ui-web/static .

CMD ["./start"]