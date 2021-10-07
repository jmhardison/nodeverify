# NodeVerify - Windows
# used in a poc of various orchestrators to test generic performance and overhead ARG is replaced in CI/CD pipeline.
ARG node=stefanscherer/node-windows:12.18.3-nanoserver-1809
FROM $node as build
LABEL maintainer="jmh@jonathanhardison.com"
WORKDIR /app
COPY . .
RUN del package-lock.json /Q
RUN npm install
EXPOSE 3005
CMD node ./src/server.js
