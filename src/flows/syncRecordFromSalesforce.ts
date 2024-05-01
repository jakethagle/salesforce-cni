import type { SalesforceComponent } from "@/types/components";
import type { ConfigPages } from "@/configPages";
import { flow } from "@prismatic-io/spectral";

export default flow<ConfigPages, SalesforceComponent>({
  name: "Sync Record From Salesforce",
  stableKey: "sync-record-from-salesforce",
  description:
    "This flow will receive a record from Salesforce and create or update it in the connected system.",
    onTrigger: async (context, payload) => {
      const { logger } = context;
  
      logger.debug(`Trigger payload: ${JSON.stringify(payload)}`);
  
      return Promise.resolve({
        payload,
      });
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
