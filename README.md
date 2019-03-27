[![Build Status](https://dev.azure.com/jmhardison/NodeVerify/_apis/build/status/jmhardison.nodeverify?branchName=master)](https://dev.azure.com/jmhardison/NodeVerify/_build/latest?definitionId=6&branchName=master) [![Known Vulnerabilities](https://snyk.io/test/github/jmhardison/nodeverify/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jmhardison/nodeverify?targetFile=package.json)
# NodeVerify
NodeVerify is used to perform some generic work in testing orchestrators performance and overhead.

The following environment variables must exist in order for the API to work.

* PORT - Port for the API to listen on. default: `3005`
* HASHSECRET - Secret for use in hashing. default: `hashme`
* HASHALGORITHM - Algorithm for use in hashing. default: `sha256`

## Consuming
A status endpoint is available once launched:

* `/v1/status` - Will return a status of running if successful.
  * `"status": "running"`

* `/v1/guidhash` - Will create a new guid userid, hash that userid, and return the payload.
* `/v1/guidhash/:userid` - Will hash the :userid provided, and return the payload.


## Running Docker

To launch this API with docker, use the following. You may swap in a docker environment file if you choose, replacing values with real values.

### Linux
`docker run -d -p 3005:3005 jhardison/nodeverify`
or
`docker run -d -p 3005:3005 jhardison/nodeverify:latestlinux`

### Windows
`docker run -d -p 3005:3005 jhardison/nodeverify`
or
`docker run -d -p 3005:3005 jhardison/nodeverify:latestwindows`

## Tags

* `latest` - provides the latest linux (or) windows distribution.
* `latestwindows` - provides the latest windows distribution
* `latestlinux` - provides the latest linux distribution
