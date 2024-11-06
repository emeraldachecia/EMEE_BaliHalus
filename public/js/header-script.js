const navLinks = document.querySelectorAll('nav a');
const loginBtn = document.querySelector('.login-btn');
const logoutBtn = document.querySelector('.logout-btn');
const isLoggedIn = document.cookie.includes("token");

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

