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
        slider.style.transition = "transform 1s ease"; // Smooth animation
        slider.style.transform = "translateX(100%)"; // Initially hidden off-screen

        // Attach the slider to the body
        document.body.appendChild(slider);
        document.body.appendChild(div);

        // Event listener for the div to move the slider
        div.addEventListener("click", () => {
          // Slide the slider from right to left
          slider.style.transform = "translateX(-1%)"; // Move left
        });
      },
    })
    .catch((error) => console.error("Script Injection Error:", error));
}
