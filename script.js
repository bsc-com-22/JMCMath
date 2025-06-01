// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    mobileMenu.classList.toggle('active');
    
    // Change icon based on menu state
    if (mobileMenu.classList.contains('active')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}

// Mobile dropdown toggle functionality
function toggleMobileDropdown() {
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const dropdownIcon = document.getElementById('mobile-dropdown-icon');
    
    mobileDropdown.classList.toggle('active');
    
    // Rotate icon based on dropdown state
    if (mobileDropdown.classList.contains('active')) {
        dropdownIcon.style.transform = 'rotate(180deg)';
    } else {
        dropdownIcon.style.transform = 'rotate(0deg)';
    }
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Desktop dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownTrigger = dropdown.querySelector('.dropdown-trigger');
    
    dropdownTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            
            mobileMenu.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
        });
    });

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add search functionality
    document.querySelectorAll('.search-input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Search functionality would be implemented here for: ' + this.value);
            }
        });
    });

    // Newsletter subscription handler
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target.querySelector('.newsletter-input').value;
        alert('Thank you for subscribing with email: ' + email);
        event.target.reset();
    });

    // Social media link handlers
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.title;
            alert('Redirecting to ' + platform + ' page...');
        });
    });

    // Course enrollment handlers
    document.querySelectorAll('.course-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseTitle = this.closest('.course-card').querySelector('.course-title').textContent;
            alert('Enrolling in: ' + courseTitle);
        });
    });

    // Browse all buttons handlers
    document.querySelectorAll('.browse-all-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Navigating to browse all page...');
        });
    });

    // Premium CTA handler
    document.querySelector('.premium-cta').addEventListener('click', function() {
        alert('Redirecting to premium subscription page...');
    });

    // Mobile menu button event listener
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

    // Mobile dropdown trigger event listener
    document.getElementById('mobile-dropdown-trigger').addEventListener('click', toggleMobileDropdown);
});