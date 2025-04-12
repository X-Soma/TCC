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
    const menuIcon = document.querySelector('.fas.fa-bars');
        const closeIcon = document.querySelector('.fas.fa-times.close-menu-icon'); // Correct selector
        const mobileMenu = document.querySelector('nav ul');
        const overlay = document.querySelector('.overlay');

        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.add('show-mobile-menu');
            overlay.classList.add('active');
            document.body.classList.add('no-scroll'); // Prevent scrolling when the menu is open

        });

        closeIcon.addEventListener('click', function() {
            mobileMenu.classList.remove('show-mobile-menu');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });

        // Close the menu by clicking outside (on the overlay)
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('show-mobile-menu');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
});