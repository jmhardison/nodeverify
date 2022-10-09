# NodeVerify - Windows
# used in a poc of various orchestrators to test generic performance and overhead ARG is replaced in CI/CD pipeline.
FROM stefanscherer/node-windows:12.18.3-windowsservercore 
LABEL maintainer="jmh@jonathanhardison.com"
WORKDIR /app
COPY . .
RUN del package-lock.json /Q
RUN npm install
EXPOSE 3005
USER ContainerUser
HEALTHCHECK --interval=20s --timeout=3s --start-period=30s \
  CMD node ./src/docker-healthcheck.js
CMD node ./src/server.js
