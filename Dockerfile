FROM node:latest

MAINTAINER maxnechiporuk

COPY . /var/www
WORKDIR /var/www

RUN npm install

ENTRYPOINT [ "npm", "start" ]