document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  sections[0].classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      sections.forEach(section => section.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");
    });
  });
});

