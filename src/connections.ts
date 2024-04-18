import type { SalesforceComponent } from "@/types/components";
import { reference } from "@prismatic-io/spectral";

export const sfdcOAuth = reference<SalesforceComponent>().connection({
  stableKey: "salesforce-oauth2",
  connection: {
    component: "salesforce",
    key: "oauth2",
    values: {
      authorizeUrl: {
        value: "https://login.salesforce.com/services/oauth2/authorize",
      },
      clientId: {
        value:
          "3MVG9riCAn8HHkYVI3EdSmHV8ZltnsjIlXR0xbCXZ_NcETpNaLz3LhaemEETTFk31EOBCtwmBoZCnKc1pM6k1",
      },
      clientSecret: {
        value:
          "6F8E4208FEB6ED14927B026899DE056F6AFD7E70D493294B0E23CCF6AF3914E6",
      },
      revokeUrl: {
        value: "https://login.salesforce.com/services/oauth2/revoke",
      },
      tokenUrl: { value: "https://login.salesforce.com/services/oauth2/token" },
    },
  },
});
