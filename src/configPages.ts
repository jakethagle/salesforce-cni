import { configPage } from "@prismatic-io/spectral";
import { sfdcOAuth } from "./connections";

export const configPages = {
  "Connections": configPage({
    elements: {
      "Salesforce Connection": sfdcOAuth,
    },
  }),
};

export type ConfigPages = typeof configPages;
