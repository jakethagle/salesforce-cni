import { createClient } from "@/client";
import { SalesforceResponse } from "@/lib/types";
import { Connection } from "@prismatic-io/spectral";

export async function createRecord(
  connection: Connection,
  recordType: string,
  params: Record<string, unknown>,
): Promise<SalesforceResponse> {
  const client = createClient(connection);
  const {
    data: { errors, id, success },
  } = await client.post<SalesforceResponse>(`/sobjects/${recordType}`, params);

  return { id, errors, success };
}
