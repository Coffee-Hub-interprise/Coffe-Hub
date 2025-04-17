//=============================== Toggle do menu mobile ===============================
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show-links');
});