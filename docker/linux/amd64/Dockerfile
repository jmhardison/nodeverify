# NodeVerify Linux
# used in a poc of various orchestrators to test generic performance and overhead ARG is replaced in CI/CD pipeline.
ARG node=node:12.22.2
FROM $node as build
LABEL maintainer="jmh@jonathanhardison.com"
WORKDIR /app
COPY . .
RUN npm install
#staged for vulnerability#RUN apt-get update && apt-get upgrade -y
#staged for vulnerability#RUN apt-get clean autoclean && apt-get autoremove -y
EXPOSE 3005
CMD node ./src/server.js
