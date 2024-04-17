import { connectionValue } from "@prismatic-io/spectral/dist/testing";
import { queryOne } from "./query";
import { updateRecord } from "./update";
const oauthConnection = connectionValue();
jest.setTimeout(30000);

describe("test create record", () => {
  test("verify the record is updated", async () => {
    const { Id } = await queryOne(
      oauthConnection,
      `SELECT Id, Name FROM Contact WHERE Email = 'jake.hagle@prismatic.io'`,
    );

    await updateRecord(oauthConnection, "Contact", Id, {
      FirstName: "Jake",
      LastName: "Hagle",
    });
  });
});
