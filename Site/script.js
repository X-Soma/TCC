document.addEventListener('DOMContentLoaded', function () {
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Removed observer.unobserve(entry.target) to allow re-triggering
            } else {
                entry.target.classList.remove('visible'); // Optional: Remove the class when not in view
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Percentage of the section visible to trigger animation
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // JavaScript for handling the mobile navigation menu
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('show-mobile-menu');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when the menu is open
    });

    overlay.addEventListener('click', () => {
        navLinks.classList.remove('show-mobile-menu');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show-mobile-menu');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    });
});