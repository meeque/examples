#!/bin/sh

if [ -z ${BACKEND_URL+x} ]; then
  echo  "[INFO] Environament variable BACKEND_URL not found."
else 
 echo  "[INFO] Found env var BACKEND_URL with value: ${BACKEND_URL}. replacing it in /etc/nginx/nginx.conf"
 sed -i "s#http://localhost/graphql#${BACKEND_URL}#" /etc/nginx/nginx.conf
fi

exec nginx -g "daemon off;"
