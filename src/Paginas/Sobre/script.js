//=============================== Toggle do menu mobile ===============================
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show-links');
});

//=============================== Efeito de fade-in nos elementos ao rolar a página ===============================
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (elementPosition < screenPosition) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);