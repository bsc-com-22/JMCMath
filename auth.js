
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabIndicator = document.querySelector('.tab-indicator');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Update active states
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Move indicator
            if (targetTab === 'signup') {
                tabIndicator.classList.add('signup');
            } else {
                tabIndicator.classList.remove('signup');
            }
        });
    });

    // Form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotForm = document.getElementById('forgotForm');
    const verifyForm = document.getElementById('verifyForm');

    // Show/hide forms
    const showForgot = document.getElementById('showForgot');
    const backToLogin = document.getElementById('backToLogin');

    showForgot.addEventListener('click', () => {
        showTab('forgot');
    });

    backToLogin.addEventListener('click', () => {
        showTab('login');
        // Reset tabs to login state
        tabBtns.forEach(b => b.classList.remove('active'));
        tabBtns[0].classList.add('active');
        tabIndicator.classList.remove('signup');
    });

    function showTab(tabName) {
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
    }

    // Login form handler
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const submitBtn = this.querySelector('.btn-primary');
        
        // Add loading state
        submitBtn.classList.add('loading');
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Login attempt:', { email, password });
            
            // Show verification
            document.getElementById('verifyEmail').textContent = email;
            showTab('verify');
            
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        } finally {
            submitBtn.classList.remove('loading');
        }
    });

    // Signup form handler
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const submitBtn = this.querySelector('.btn-primary');
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        submitBtn.classList.add('loading');
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Signup attempt:', { name, email, password });
            
            // Show verification
            document.getElementById('verifyEmail').textContent = email;
            showTab('verify');
            
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        } finally {
            submitBtn.classList.remove('loading');
        }
    });

    // Forgot password form handler
    forgotForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('forgotEmail').value;
        const submitBtn = this.querySelector('.btn-primary');
        
        submitBtn.classList.add('loading');
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Reset password for:', email);
            alert('Password reset link has been sent to your email!');
            
            // Go back to login
            showTab('login');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabBtns[0].classList.add('active');
            tabIndicator.classList.remove('signup');
            
        } catch (error) {
            console.error('Reset error:', error);
            alert('Failed to send reset link. Please try again.');
        } finally {
            submitBtn.classList.remove('loading');
        }
    });

    // Verification form handler
    verifyForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const otpInputs = document.querySelectorAll('.otp-input');
        const code = Array.from(otpInputs).map(input => input.value).join('');
        const submitBtn = this.querySelector('.btn-primary');
        
        if (code.length !== 6) {
            alert('Please enter the complete 6-digit code');
            return;
        }
        
        submitBtn.classList.add('loading');
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Verification code:', code);
            alert('Email verified successfully! Welcome to JMC!');
            
            // In a real app, redirect to dashboard
            // window.location.href = '/dashboard';
            
        } catch (error) {
            console.error('Verification error:', error);
            alert('Invalid verification code. Please try again.');
        } finally {
            submitBtn.classList.remove('loading');
        }
    });

    // OTP input functionality
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            
            if (value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
        
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const paste = e.clipboardData.getData('text');
            const digits = paste.replace(/\D/g, '').split('').slice(0, 6);
            
            digits.forEach((digit, idx) => {
                if (otpInputs[idx]) {
                    otpInputs[idx].value = digit;
                }
            });
            
            if (digits.length > 0) {
                const lastIndex = Math.min(digits.length - 1, otpInputs.length - 1);
                otpInputs[lastIndex].focus();
            }
        });
    });

    // Resend code functionality
    const resendBtn = document.querySelector('.resend-btn');
    resendBtn.addEventListener('click', async function() {
        this.style.pointerEvents = 'none';
        this.textContent = 'Sending...';
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Verification code resent!');
            this.textContent = 'Resend';
        } catch (error) {
            alert('Failed to resend code. Please try again.');
            this.textContent = 'Resend';
        } finally {
            this.style.pointerEvents = 'auto';
        }
    });

    // Google login functionality
    const googleBtns = document.querySelectorAll('.btn-google');
    googleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Google authentication initiated');
            alert('Google OAuth would be initiated in a real application');
        });
    });

    // Auto-focus first input on page load
    document.getElementById('loginEmail').focus();
});