const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});