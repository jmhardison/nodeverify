# NodeVerify
# used in a poc of various orchestrators to test generic performance and overhead
ARG node=node:8.7-alpine
FROM $node as build
LABEL maintainer="jmh@jonathanhardison.com"
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3005
CMD node ./src/server.js