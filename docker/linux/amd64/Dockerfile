# NodeVerify Linux
# used in a poc of various orchestrators to test generic performance and overhead ARG is replaced in CI/CD pipeline.
FROM node:slim
LABEL maintainer="jmh@jonathanhardison.com"
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN apt-get update && apt-get install -y
WORKDIR /app
COPY . .
RUN npm install
#staged for vulnerability#RUN apt-get update && apt-get upgrade -y
#staged for vulnerability#RUN apt-get clean autoclean && apt-get autoremove -y
EXPOSE 3005
USER node
HEALTHCHECK --interval=20s --timeout=3s --start-period=30s \
  CMD node ./src/docker-healthcheck.js
CMD node ./src/server.js
