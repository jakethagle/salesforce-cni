import { Connection, util } from "@prismatic-io/spectral";
import axios from "axios";

export const createClient = (connection: Connection) => {
  const instanceUrl = util.types.toString(connection.token?.instance_url);
  const version = "51.0";
  const accessToken = util.types.toString(connection.token?.access_token);
  const baseUrl = `${instanceUrl}/services/data/v${version}`;

  const httpClient = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    responseType: "json",
  });
  return httpClient;
};
