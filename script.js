document.addEventListener("DOMContentLoaded", function () {

    // 1. DYNAMIC SMOOTH SCROLLING CALCULATION WITH NAVBAR OFFSET
    const navLinks = document.querySelectorAll('.nav-menu a, .hero-buttons a, .footer-links a');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const navbarHeight = navbar.offsetHeight;
                    const sectionPosition = targetSection.offsetTop;
                    
                    window.scrollTo({
                        top: sectionPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. SCROLL EVENTS FOR APP COMPACTNESS AND SHADOW WEIGHT
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
            navbar.style.padding = "4px 0px";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
            navbar.style.padding = "0px 0px";
        }
    });
});
