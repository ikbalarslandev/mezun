import { injectDiv } from "./injectDiv/index.js";

export function handleTabUpdate(tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.startsWith("https://www.linkedin.com")
  ) {
    injectDiv(tabId);
  }
}
