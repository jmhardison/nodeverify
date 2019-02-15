[![Build Status](https://dev.azure.com/jmhardison/NodeVerify/_apis/build/status/jmhardison.nodeverify?branchName=master)](https://dev.azure.com/jmhardison/NodeVerify/_build/latest?definitionId=6&branchName=master)
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
`docker run -d -p 3001:3001 jhardison/nodeverify`