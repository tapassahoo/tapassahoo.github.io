// Toggle hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
  document.getElementById("nav-links").classList.toggle("active");
}

// Show a specific section and store the choice
function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.style.display = (section.id === sectionId) ? "block" : "none";
  });

  // Save the current section to localStorage
  localStorage.setItem('lastVisitedSection', sectionId);

  // Hide the menu on mobile after selecting
  document.getElementById("nav-links").classList.remove("active");
}

// Setup on page load
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  // Show last visited section or default to "home"
  const lastVisitedSection = localStorage.getItem('lastVisitedSection') || "home";
  showSection(lastVisitedSection);

  // Setup nav link click behavior
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent page jump
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });
});

