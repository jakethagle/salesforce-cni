import { integration } from "@prismatic-io/spectral";
import { configPages } from "./configPages";
import flows from "./flows";

export default integration({
  name: "Salesforce",
  description: "Sync records to and from Salesforce.",
  iconPath: "icon.png",
  flows,
  configPages,
});
