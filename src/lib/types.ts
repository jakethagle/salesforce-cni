export interface SalesforceResponse {
  id: string;
  errors: string[];
  success: boolean;
}
export interface QueryRecord {
  attributes: {
    type: string;
    url: string;
  };
  Id: string;
  [key: string]: unknown;
}

export interface QueryResult {
  done: boolean;
  totalSize: number;
  records: QueryRecord[];
}
