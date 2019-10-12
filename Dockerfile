## Setup and build the client
FROM node:9.4.0-alpine

## Set environment.
ARG NPM_TOKEN_ARG
ENV NODE_ENV ""
ENV NPM_TOKEN $NPM_TOKEN_ARG
WORKDIR /usr/src/app

## Switch to a non-root user
RUN chown -R node:node /usr/src/app
USER node

## Let NPM do it's thing.
COPY package.json package-lock.json ./
COPY .npmrc ./
RUN npm install

## Webpack build
COPY . .
RUN npm run build

EXPOSE 8080

## We don't run "npm start" because we don't want npm to manage the SIGTERM signal
CMD [ "node", "src/server/index.js" ]
