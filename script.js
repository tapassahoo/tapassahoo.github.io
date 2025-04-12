idocument.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});

