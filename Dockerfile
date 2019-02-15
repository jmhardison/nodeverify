# NodeVerify
# used in a poc of various orchestrators to test generic performance and overhead
ARG node=node:8.7-alpine
FROM $node as build
LABEL maintainer="jmh@jonathanhardison.com"
RUN npm install
CMD node ./src/server.js