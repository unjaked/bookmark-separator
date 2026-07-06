
document.addEventListener("DOMContentLoaded", function () { // wait till  HTML page is fully loaded

    // Change favicon
    const favicon = document.getElementById("favicon");
    const faviconColorInput = document.getElementById("faviconColor");
    
    Coloris({
      el: "#faviconColor",
      theme: "large",
      // themeMode: 'auto',
      alpha: true,
      format: "rgb",
      clearButton: false,
      swatches: [
        "rgba(0, 0, 0, 1)",
        "rgba(94, 94, 94, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(178, 255, 229, 1)"
      ]
    });
    
    function updateFavicon(color) {
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="8"
            y1="1"
            x2="8"
            y2="16"
            stroke="${color}"
            stroke-width="2.0"
          />
        </svg>
      `;
    
      favicon.href = "data:image/svg+xml," + encodeURIComponent(svg);
    }
    
    faviconColorInput.addEventListener("input", function () {
      updateFavicon(faviconColorInput.value);
    });
    
    updateFavicon(faviconColorInput.value);


    // Hash generation
    function generateHash() {
        const hash = Math.random().toString(36).substring(2, 10); // Gen float, conv to Base36, cut off decimal
        console.log(hash);
        return hash + Date.now(); // Append URL with # and the hash value + current UNIX time
    }

    window.location.hash = generateHash();
});