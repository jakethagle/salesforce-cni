#!/bin/bash
set -e

#Setup the name of the connection
connection='Salesforce Connection'
#Setup the name of the integration
name='Salesforce - CNI'

#Get the id of the integration
id=SW50ZWdyYXRpb246NGU1ZmNiMTgtYmVhMS00YjE4LWExNWUtOGUxMzYyZmE4OWNj
#Get the OAuth2 Connection from Prismatic and set it as an environment variable
export PRISMATIC_CONNECTION_VALUE=$(./node_modules/.bin/prism components:dev:run -i $id --connectionKey "$connection" -- printenv PRISMATIC_CONNECTION_VALUE)

npm run test -- $1
