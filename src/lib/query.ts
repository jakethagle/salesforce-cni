import { createClient } from "@/client";
import { QueryRecord, QueryResult } from "@/types/query";
import { Connection } from "@prismatic-io/spectral";

export async function queryOne(
  connection: Connection,
  q: string,
): Promise<QueryRecord> {
  const client = createClient(connection);
  const {
    data: { records },
  } = await client.get<QueryResult>(`/query?q=${q}`);

  return records[0];
}

export async function query(
  connection: Connection,
  q: string,
): Promise<QueryRecord[]> {
  let paginate = true;
  let results: QueryRecord[] = [];
  while (paginate) {
    const client = createClient(connection);
    const { data } = await client.get<QueryResult>(`/query?q=${q}`);
    results = results.concat(data.records);
    paginate = !data.done;
  }

  return results;
}
