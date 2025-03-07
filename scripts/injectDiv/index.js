export function injectDiv(tabId) {
  chrome.scripting
    .executeScript({
      target: { tabId },
      func: () => {
        // Create the div that will act as the trigger
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.top = "15rem";
        div.style.right = "0";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.backgroundColor = "red";
        div.style.zIndex = "9998";
        div.style.cursor = "pointer";

        // Create the slider element
        var slider = document.createElement("div");
        slider.style.position = "fixed";
        slider.style.top = "0";
        slider.style.right = "0";
        slider.style.height = "100%"; // Full viewport height
        slider.style.width = "22%"; // 1/6 of the viewport width
        slider.style.backgroundColor = "gray";
        slider.style.zIndex = "9999"; // Slightly below the div
        slider.style.transition = "transform 0.5s ease"; // Smooth animation
        slider.style.transform = "translateX(100%)"; // Initially hidden off-screen
        slider.style.padding = "10px";
        slider.style.overflowY = "auto"; // Allow scrolling if content is large
        slider.style.color = "white";
        slider.style.fontFamily = "Arial, sans-serif";

        // Get the text content from the element with id "ember54"
        const emberElement = document.getElementById("ember54");
        if (emberElement) {
          let textElement = document.createElement("div");
          textElement.textContent = emberElement.textContent || "No text found";
          textElement.style.marginBottom = "8px";
          textElement.style.fontSize = "16px";
          textElement.style.fontWeight = "bold";
          slider.appendChild(textElement);
        } else {
          let notFoundElement = document.createElement("div");
          notFoundElement.textContent = "Element #ember54 not found";
          notFoundElement.style.color = "red";
          notFoundElement.style.fontSize = "14px";
          slider.appendChild(notFoundElement);
        }

        // Attach the slider and trigger button to the body
        document.body.appendChild(slider);
        document.body.appendChild(div);

        // Event listener for the div to toggle the slider
        div.addEventListener("click", () => {
          // Toggle the slider position
          if (slider.style.transform === "translateX(100%)") {
            slider.style.transform = "translateX(0)"; // Slide in
          } else {
            slider.style.transform = "translateX(100%)"; // Slide out
          }
        });
      },
    })
    .catch((error) => console.error("Script Injection Error:", error));
}
