import { createRecord } from "@/lib/create";
import { connectionValue } from "@prismatic-io/spectral/dist/testing";
const oauthConnection = connectionValue();
jest.setTimeout(30000);

describe("test create record", () => {
  test("verify the record is created", async () => {
    const { id, success, errors } = await createRecord(
      oauthConnection,
      "Contact",
      {
        FirstName: "John",
        LastName: "Doe",
        Email: "another.person@test.example.com",
      },
    );
    console.log(id, success, errors);
  });
});
