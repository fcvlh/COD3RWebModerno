FROM node:latest
MAINTAINER Felipe Carvalho
COPY . /var/www
WORKDIR /var/www/exercicios-js/node/funcionarios
RUN npm install
EXPOSE 3000