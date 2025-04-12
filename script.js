function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  // Show the selected one
  document.getElementById(sectionId).style.display = "block";

  // Close the menu if on mobile
  document.getElementById("nav-links").classList.remove("active");
}

