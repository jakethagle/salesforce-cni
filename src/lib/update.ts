import { createClient } from "@/client";
import { SalesforceResponse } from "@/types/query";
import { Connection } from "@prismatic-io/spectral";

export async function updateRecord(
  connection: Connection,
  recordType: string,
  salesforceId: string,
  params: Record<string, unknown>,
): Promise<void> {
  const client = createClient(connection);
  await client.patch<SalesforceResponse>(
    `/sobjects/${recordType}/${salesforceId}`,
    params,
  );
}
