export function injectDiv(tabId) {
  chrome.scripting
    .executeScript({
      target: { tabId },
      func: () => {
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.top = "15rem";
        div.style.right = "0";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.backgroundColor = "red";
        div.style.zIndex = "9999";
        document.body.appendChild(div);
      },
    })
    .catch((error) => console.error("Script Injection Error:", error));
}
