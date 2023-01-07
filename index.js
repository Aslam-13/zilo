// import { ApiKeyManager } from "@esri/arcgis-rest-request";
// import { geocode } from "@esri/arcgis-rest-geocoding";

const { ApiKeyManager } = require("@esri/arcgis-rest-request");
const { geocode } = require("@esri/arcgis-rest-geocoding");

const apiKey =
  "AAPK630595ddc6814667ba7ada7d4bf35f7c1GmfVefNtUklOysrFY1f-v7xyYpA8laZ0lYBTAGi4iK4v0zWezWfXWiQHpSZsF8E";
const authentication = ApiKeyManager.fromKey(apiKey);

geocode({
  address: "Wahed Nagar, Old Malakpet, Hyderabad",
  postal: 500036,
  countryCode: "INDIA",
  authentication,
}).then((res) => {
  console.log(res.candidates);
});
