#!/bin/bash
set -e

#Setup the name of the connection
connection='sfdcOAuth'
#Setup the name of the integration
name='Salesforce'

#Get the id of the integration
id=$(prism integrations:list -x --no-header --output=json --filter name=^"$name" | jq '. [3] | .id')

#Get the OAuth2 Connection from Prismatic and set it as an environment variable
export PRISMATIC_CONNECTION_VALUE=$(prism components:dev:run -i $id --connectionKey "$connection" -- printenv PRISMATIC_CONNECTION_VALUE | jq .)
pnpm run test -- $1
