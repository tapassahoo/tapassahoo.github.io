document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  function showSection(id) {
    sections.forEach(section => {
      section.style.display = (section.id === id) ? "block" : "none";
    });
  }

  // Show the home section initially
  showSection("home");

  // Add click events to nav links
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop default anchor behavior
      const targetId = this.getAttribute("href").substring(1); // Remove #
      showSection(targetId);
    });
  });
});

// For hamburger menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

