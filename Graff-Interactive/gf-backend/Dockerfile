# Docker file
# Specially to GRAFF Interactive from fet1sov

FROM node:18-alpine as builder
RUN npm cache clean –force

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

# Starting up the web server
CMD ["npm", "start"]