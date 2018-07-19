#!/bin/sh

if [ -z ${BACKEND_URL+x} ]; then
  echo  "[INFO] Environament variable BACKEND_URL not found."
else 
 echo  "[INFO] Found env var BACKEND_URL with value: ${BACKEND_URL}. replacing it in /etc/nginx/nginx.conf"
 sed -i "s#http://localhost/graphql#${BACKEND_URL}#" /etc/nginx/nginx.conf
fi

# Check if /var/log/nginx/ is created. Workaroud for ko builds...
if [ ! -d "/var/log/nginx/logs" ]; then
  echo "[INFO] /var/log/nginx/logs missing. running creating it."
  mkdir -p /var/log/nginx/logs
fi
exec nginx -g "daemon off;"
