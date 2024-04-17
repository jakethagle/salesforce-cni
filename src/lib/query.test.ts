import { query } from "@/lib/query";
import { connectionValue } from "@prismatic-io/spectral/dist/testing";
const oauthConnection = connectionValue();
jest.setTimeout(30000);

describe("test query salesforce", () => {
  test("verify the query returns a list of records", async () => {
    const records = await query(
      oauthConnection,
      "SELECT Id, Name FROM Contact LIMIT 1",
    );
    expect(records).toBeDefined();
  });
});
