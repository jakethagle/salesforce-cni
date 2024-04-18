# Salesforce Code-Native Integration

## Getting Started
- Install @prismatic-io/prism
`npm install -G @prismatic-io/prism`
- Install and build the project
`npm install && npm run build`


## Local Testing
- Import the integration
`prism integrations:import -o`
- Reconfigure the test runner instance and connect your Salesforce Account
- `npm run test` will pull down the oauth connection for use in local testing

## Platform Testing
- Import the integration
`prism integrations:import -0`
- Reconfigure the test runner instance and connect your Salesforce Account
- Setup a test instance payload with the following payload
`{"email": "test.person@example.com"}`
- Click Save & Run Test or make a curl request to the integration flows test runner endpoint
