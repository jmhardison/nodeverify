# NodeVerify Linux
# used in a poc of various orchestrators to test generic performance and overhead ARG is replaced in CI/CD pipeline.
ARG node=node:12.11.1
FROM $node as build
LABEL maintainer="jmh@jonathanhardison.com"
WORKDIR /app
COPY . .
RUN npm install
RUN apt-get update && apt-get upgrade -y
RUN apt-get clean autoclean && apt-get autoremove -y && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/lib/dpkg/* /var/lib/cache/* /var/lib/log/*
EXPOSE 3005
CMD node ./src/server.js
