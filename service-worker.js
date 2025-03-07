import { handleTabUpdate } from "./scripts/tabListener.js";

chrome.tabs.onUpdated.addListener(handleTabUpdate);
