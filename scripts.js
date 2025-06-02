// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileDropdownTrigger = document.getElementById('mobile-dropdown-trigger');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const mobileDropdownIcon = document.getElementById('mobile-dropdown-icon');

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Change icon based on menu state
            if (mobileMenu.classList.contains('active')) {
                menuIcon.className = 'fas fa-times';
            } else {
                menuIcon.className = 'fas fa-bars';
            }
        });
    }

    // Mobile dropdown toggle
    if (mobileDropdownTrigger) {
        mobileDropdownTrigger.addEventListener('click', function() {
            mobileDropdown.classList.toggle('active');
            
            // Rotate icon based on dropdown state
            if (mobileDropdown.classList.contains('active')) {
                mobileDropdownIcon.style.transform = 'rotate(180deg)';
            } else {
                mobileDropdownIcon.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Desktop dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
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
    }

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu && menuIcon) {
                    mobileMenu.classList.remove('active');
                    menuIcon.className = 'fas fa-bars';
                }
            });
        });
    }

    // Add smooth scrolling for better UX
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length > 0) {
        anchors.forEach(anchor => {
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
    }

    // Add search functionality
    const searchInputs = document.querySelectorAll('.search-input');
    if (searchInputs.length > 0) {
        searchInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    alert('Search functionality would be implemented here for: ' + this.value);
                }
            });
        });
    }

    // Newsletter subscription handler
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = event.target.querySelector('.newsletter-input').value;
            alert('Thank you for subscribing with email: ' + email);
            event.target.reset();
        });
    }

    // Social media link handlers
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length > 0) {
        socialLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.title;
                alert('Redirecting to ' + platform + ' page...');
            });
        });
    }

    // Package button handlers
    const packageButtons = document.querySelectorAll('.pricing-card .btn-primary');
    if (packageButtons.length > 0) {
        packageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const packageTitle = this.closest('.pricing-card').querySelector('h2').textContent;
                alert('Processing subscription for ' + packageTitle + ' package...');
            });
        });
    }

    // Contact link handler
    const contactLink = document.querySelector('.contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to contact page...');
        });
    }
});