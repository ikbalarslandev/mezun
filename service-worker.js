import { handleTabUpdate } from "./scripts/index.js";

chrome.tabs.onUpdated.addListener(handleTabUpdate);
