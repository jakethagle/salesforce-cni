import type { SalesforceComponent } from "@/components";
import type { ConfigPages } from "@/configPages";
import { flow } from "@prismatic-io/spectral";

export default flow<ConfigPages, SalesforceComponent>({
  name: "Sync Record From Salesforce",
  stableKey: "sync-record-from-salesforce",
  description:
    "This flow will receive a record from Salesforce and create or update it in the connected system.",
  onTrigger: {
    component: "salesforce",
    key: "workflowTrigger",
    values: {
      connection: { configVar: "Salesforce Connection" },
      recordType: { value: "Contact" },
      triggerType: { value: "On All Changes" },
      outboundMessageName: { value: "Outbound Message" },
      workflowRuleName: { value: "Workflow Rule" },
      fields: { value: JSON.stringify(["Id", "Name", "Email"]) },
      version: { value: "1.0" },
    },
  },
  onExecution: async (context, params) => {
    const { logger } = context;
    logger.debug(`Action context: ${JSON.stringify(context)}`);
    logger.debug(`Action params: ${JSON.stringify(params)}`);
    return Promise.resolve({
      data: { success: true },
    });
  },
});
