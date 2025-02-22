// Simulate loading delay
window.addEventListener("load", function () {
        setTimeout(function () {
      // document.getElementById("loading-page").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
    }, 3000); // Adjust the delay as needed
  });
