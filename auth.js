// ============================================
// Auth Page JavaScript
// ============================================

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('gupshup_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('gupshup_theme', newTheme);
}

// Initialize theme
initTheme();

// Tab Switching
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding form
        const tabName = tab.dataset.tab;
        document.getElementById('loginForm').classList.toggle('hidden', tabName !== 'login');
        document.getElementById('signupForm').classList.toggle('hidden', tabName !== 'signup');
        
        // Update tab indicator
        const indicator = document.querySelector('.tab-indicator');
        if (tabName === 'signup') {
            indicator.style.transform = 'translateX(100%)';
        } else {
            indicator.style.transform = 'translateX(0)';
        }
    });
});

// Toggle Password Visibility
function togglePassword(button) {
    const input = button.parentElement.querySelector('input');
    const icon = button.querySelector('svg');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
        `;
    } else {
        input.type = 'password';
        icon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        `;
    }
}

// Login Form Submit
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.remember.checked;
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Logging in...';
    submitBtn.disabled = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if user exists in localStorage (demo)
    const users = JSON.parse(localStorage.getItem('gupshup_users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (user && user.password === password) {
        // Login successful
        const session = {
            id: user.id,
            name: user.name,
            email: user.email,
            college: user.college,
            course: user.course,
            year: user.year,
            avatar: user.avatar || getAvatarUrl(user.name),
            loggedInAt: new Date().toISOString()
        };
        
        if (remember) {
            localStorage.setItem('gupshup_session', JSON.stringify(session));
        } else {
            sessionStorage.setItem('gupshup_session', JSON.stringify(session));
        }
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Login failed
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showError('Invalid email or password. Please try again.');
    }
});

// Signup Form Submit
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const userData = {
        id: 'user_' + Date.now(),
        name: form.name.value,
        email: form.email.value,
        college: form.college.value,
        course: form.course.value,
        year: form.year.value,
        password: form.password.value,
        avatar: getAvatarUrl(form.name.value),
        createdAt: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Creating account...';
    submitBtn.disabled = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('gupshup_users') || '[]');
    if (users.find(u => u.email === userData.email)) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showError('An account with this email already exists.');
        return;
    }
    
    // Save user
    users.push(userData);
    localStorage.setItem('gupshup_users', JSON.stringify(users));
    
    // Auto login
    const session = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        college: userData.college,
        course: userData.course,
        year: userData.year,
        avatar: userData.avatar,
        loggedInAt: new Date().toISOString()
    };
    localStorage.setItem('gupshup_session', JSON.stringify(session));
    
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});

// Social Login (Demo)
function socialLogin(provider) {
    // In production, this would redirect to OAuth flow
    const demoUser = {
        id: 'user_' + Date.now(),
        name: provider === 'google' ? 'Google User' : 'GitHub User',
        email: `demo_${provider}@example.com`,
        college: 'Demo University',
        course: 'B.Tech',
        year: '2',
        avatar: getAvatarUrl(provider === 'google' ? 'Google User' : 'GitHub User'),
        provider: provider
    };
    
    localStorage.setItem('gupshup_session', JSON.stringify(demoUser));
    window.location.href = 'dashboard.html';
}

// Show Error Message
function showError(message) {
    // Remove existing error
    const existingError = document.querySelector('.auth-error');
    if (existingError) existingError.remove();
    
    // Create error element
    const error = document.createElement('div');
    error.className = 'auth-error';
    error.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
        <span>${message}</span>
    `;
    
    // Add styles
    error.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 18px;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        border-radius: 12px;
        color: #ef4444;
        margin-bottom: 20px;
        animation: shake 0.5s ease;
    `;
    
    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Insert before form
    const activeForm = document.querySelector('.auth-form:not(.hidden)');
    activeForm.insertBefore(error, activeForm.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => error.remove(), 5000);
}

// Generate Avatar URL
function getAvatarUrl(name) {
    const colors = ['ff6b35', 'f7c331', '22c55e', '3b82f6', '8b5cf6', 'ec4899'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color}&color=fff&bold=true`;
}

// Check if already logged in
document.addEventListener('DOMContentLoaded', () => {
    const session = localStorage.getItem('gupshup_session') || sessionStorage.getItem('gupshup_session');
    if (session) {
        window.location.href = 'dashboard.html';
    }
});

