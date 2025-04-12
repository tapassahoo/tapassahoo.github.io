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
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("href").substring(1); // Remove the '#' symbol
      showSection(targetId);
      closeMenu(); // Optional: Close the hamburger menu after clicking
    });
  });
});

// Toggle function for hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Optional: Close menu after link click (for better UX on mobile)
function closeMenu() {
  const nav = document.getElementById("nav-links");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
}

