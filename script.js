document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  function showSection(id) {
    sections.forEach(section => {
      section.style.display = (section.id === id) ? "block" : "none";
    });
  }

  // Initially show only the #home section
  showSection("home");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop default anchor behavior
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });
});

