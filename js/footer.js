// load-footer.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the footer HTML
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        // Inject the footer into the placeholder
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  });