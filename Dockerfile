# NodeVerify
# used in a poc of various orchestrators to test generic performance and overhead ARG is replaced in CI/CD pipeline.
ARG node=node:12.11.1-alpine
FROM $node as build
LABEL maintainer="jmh@jonathanhardison.com"
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3005
CMD node ./src/server.js
