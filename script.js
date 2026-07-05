
document.addEventListener("DOMContentLoaded", function () { // wait till  HTML page is fully loaded
    console.log("DOM content loaded.");

    // Change favicon
    const favicon = document.getElementById("favicon");
    const faviconButtons = document.querySelectorAll(".favicon-option");
    
    faviconButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const selectedFavicon = button.dataset.favicon;
    
        favicon.href = selectedFavicon
            //   + "?v=" + generateHash(); // Makes browser reload icon each time instead of caching
      });
    });

    // Hash generation
    function generateHash() {
        const hash = Math.random().toString(36).substring(2, 10); // Gen float, conv to Base36, cut off decimal
        console.log(hash);
        return hash + Date.now(); // Append URL with # and the hash value + current UNIX time
    }
    
    window.location.hash = generateHash();
});