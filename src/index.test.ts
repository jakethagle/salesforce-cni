import syncRecordToSalesforce from "@/flows/syncRecordToSalesforce";
import {
  connectionValue,
  invokeFlow,
} from "@prismatic-io/spectral/dist/testing";

const oauthConnection = connectionValue();

describe("Test sync records to salesforce", () => {
  test("with an existing record", async () => {
    const { result } = await invokeFlow(syncRecordToSalesforce, {
      payload: {
        body: {
          data: { email: "jake.hagle@prismatic.io" },
        },
      },
      configVars: {
        "Salesforce Connection": oauthConnection,
      },
    });
    expect(result?.data).toBeDefined();
  });
});
