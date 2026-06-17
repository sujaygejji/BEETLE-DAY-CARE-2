// Wait until the entire web page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. SMOOTH SCROLLING WITH OFFSET FOR THE FIXED NAVBAR
    const navLinks = document.querySelectorAll('.nav-menu a, .hero-buttons a');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Only apply to internal section links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Calculate the exact height of your navbar dynamically
                    const navbarHeight = navbar.offsetHeight;
                    const sectionPosition = targetSection.offsetTop;
                    
                    // Scroll to the exact position minus the navbar height
                    window.scrollTo({
                        top: sectionPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. NAVBAR SHADOW EFFECT ON SCROLL
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
            navbar.style.backgroundColor = "#EBF1F7"; // Shifts a tiny bit darker when scrolling
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
            navbar.style.backgroundColor = "#F0F4F8"; // Returns to standard header color
        }
    });

});
