import type { SalesforceComponent } from "@/components";
import type { ConfigPages } from "@/configPages";
import { createRecord } from "@/lib/create";
import { queryOne } from "@/lib/query";
import { updateRecord } from "@/lib/update";
import { TriggerPayload, flow } from "@prismatic-io/spectral";

const DEBUG = false;

interface SyncRecordToSalesforcePayload extends TriggerPayload {
  email: string;
}

export default flow<ConfigPages, SalesforceComponent>({
  name: "Sync Record to Salesforce",
  stableKey: "sync-record-to-salesforce",
  description:
    "This flow will create a new record or update an existing record in Salesforce",
  onTrigger: async (context, payload) => {
    const { logger } = context;
    if (DEBUG) {
      logger.debug(`Trigger payload: ${JSON.stringify(payload)}`);
    }

    return Promise.resolve({
      payload,
    });
  },
  onExecution: async (context, params) => {
    const { logger, configVars } = context;
    const triggerPayload = params.onTrigger.results.body
      .data as SyncRecordToSalesforcePayload;

    if (!configVars?.["Salesforce Connection"]) {
      throw new Error("Missing connection configuration");
    }

    if (DEBUG) {
      logger.debug(`Action context: ${JSON.stringify(context)}`);
      logger.debug(`Action params: ${JSON.stringify(params)}`);
    }

    const existingContact = await queryOne(
      configVars?.["Salesforce Connection"],
      `SELECT Id, Name FROM Contact WHERE Email = '${triggerPayload.email}'`,
    );

    if (!existingContact) {
      await createRecord(configVars?.["Salesforce Connection"], "Contact", {
        ...triggerPayload,
      });
    } else {
      await updateRecord(
        configVars?.["Salesforce Connection"],
        "Contact",
        existingContact.Id,
        {
          ...triggerPayload,
        },
      );
    }

    return {
      data: { success: true },
    };
  },
});
