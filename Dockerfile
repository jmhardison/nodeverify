# NodeVerify
# used in a poc of various orchestrators to test generic performance and overhead
FROM node:onbuild
LABEL maintainer="jmh@jonathanhardison.com"

# ExpressJS Listener
EXPOSE 3005
