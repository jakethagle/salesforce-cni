import { integration } from "@prismatic-io/spectral";
import { configPages } from "./configPages";
import {syncRecordFromSalesforce, syncRecordToSalesforce} from "./flows";

export default integration({
  name: "Salesforce - CNI",
  description: "Sync records to and from Salesforce.",
  category: "1",
  iconPath: "icon.png",
  flows: [syncRecordFromSalesforce, syncRecordToSalesforce],
  configPages,
});
