document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");

    menuToggle.addEventListener("click", () => {
        menuList.classList.toggle("open");
    });
});


const topButton = document.getElementById("back-to-top");
window.onscroll = function() {
    topButton.style.display = window.scrollY > 300 ? "block" : "none";
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}





const testimonials = document.querySelector('.testimonials');
let scrollAmount = 0;

function autoScrollTestimonials() {
    scrollAmount += testimonials.offsetWidth / 3; // Move um card por vez
    if (scrollAmount >= testimonials.scrollWidth) {
        scrollAmount = 0; // Reinicia o carrossel
    }
    testimonials.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

setInterval(autoScrollTestimonials, 4000); // Altera o slide a cada 4 segundos






document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightSection() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index]?.classList.add("active");
    }

    window.addEventListener("scroll", highlightSection);

    // Clique para navegar diretamente à seção
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");

    toggleButton.addEventListener("click", () => {
        menuList.classList.toggle("open");
    });
});




