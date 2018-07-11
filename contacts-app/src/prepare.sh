#!/bin/bash

# prepare the nodejs app
npm install

# prepare the google cloud sql proxy
mkdir /cloudsql
cd /cloudsql
wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64
mv cloud_sql_proxy.linux.amd64 cloud_sql_proxy
chmod +x cloud_sql_proxy