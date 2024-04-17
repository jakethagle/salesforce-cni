export interface SalesforceOauth2Connection {
  type: "connection";
  component: "salesforce";
  key: "oauth2";
  values: {
    // The OAuth 2.0 Authorization URL for Salesforce
    authorizeUrl: string;
    // The OAuth 2.0 Token URL for Salesforce
    tokenUrl: string;
    // The OAuth 2.0 Revocation URL for Salesforce
    revokeUrl: string;
    clientId: string;
    clientSecret: string;
  };
}

export interface SalesforceWorkflowTriggerTrigger {
  type: "trigger";
  component: "salesforce";
  key: "workflowTrigger";
  values: {
    connection: string;
    // The type of Salesforce Record
    recordType: string;
    // Conditions in which the trigger fires
    triggerType: string;
    // Name for the component
    outboundMessageName: string;
    // Name for the component
    workflowRuleName: string;
    // Provide a string value for the description of the object
    description?: string;
    // Fields to include in the Outbound Message
    fields?: string[];
    // Salesforce API Version Number
    version?: string;
  };
}

export type SalesforceComponent =
  | SalesforceOauth2Connection
  | SalesforceWorkflowTriggerTrigger;
