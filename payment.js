// ============================================
// Payment Page JavaScript
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

// Get plan from URL params
const urlParams = new URLSearchParams(window.location.search);
const selectedPlan = urlParams.get('plan') || 'professional';
const billingCycle = urlParams.get('billing') || 'monthly';

// Plan data
const plans = {
    starter: {
        name: 'Starter Plan',
        badge: 'STARTER',
        desc: 'Perfect for small colleges',
        monthly: 9999,
        yearly: 7999,
        features: [
            '✓ Basic Analytics Dashboard',
            '✓ Up to 500 Student Reviews',
            '✓ College Profile Page',
            '✓ Email Support'
        ]
    },
    professional: {
        name: 'Professional Plan',
        badge: 'PROFESSIONAL',
        desc: 'Best for growing institutions',
        monthly: 24999,
        yearly: 19999,
        features: [
            '✓ Advanced Analytics Dashboard',
            '✓ Unlimited Student Reviews',
            '✓ UGC Approved Badge',
            '✓ Priority 24/7 Support',
            '✓ Featured College Listing'
        ]
    },
    enterprise: {
        name: 'Enterprise Plan',
        badge: 'ENTERPRISE',
        desc: 'For large universities & groups',
        monthly: 49999,
        yearly: 39999,
        features: [
            '✓ Everything in Professional',
            '✓ Custom Analytics Dashboard',
            '✓ Multiple Campus Support',
            '✓ Premium Verified Badge',
            '✓ Dedicated Account Manager',
            '✓ Full API Access'
        ]
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updatePlanDisplay();
    initPaymentMethods();
});

// Update plan display
function updatePlanDisplay() {
    const plan = plans[selectedPlan];
    const price = billingCycle === 'yearly' ? plan.yearly : plan.monthly;
    const gst = Math.round(price * 0.18);
    const total = price + gst;
    
    // Update plan card
    document.getElementById('planBadge').textContent = plan.badge;
    document.getElementById('planName').textContent = plan.name;
    document.getElementById('planDesc').textContent = plan.desc;
    document.getElementById('planPrice').textContent = formatCurrency(price);
    document.getElementById('planPeriod').textContent = billingCycle === 'yearly' ? '/mo (billed yearly)' : '/month';
    
    // Update summary
    document.getElementById('summaryPlanName').textContent = plan.name.replace(' Plan', '');
    document.getElementById('summaryBilling').textContent = billingCycle === 'yearly' ? 'Yearly' : 'Monthly';
    document.getElementById('summarySubtotal').textContent = formatCurrency(price);
    document.getElementById('summaryGst').textContent = formatCurrency(gst);
    document.getElementById('summaryTotal').textContent = formatCurrency(total);
    
    // Update features
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = plan.features.map(f => `<li>${f}</li>`).join('');
    
    // Update pay button
    document.querySelector('.pay-text').textContent = `Pay ${formatCurrency(total)}`;
}

// Format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Payment method toggle
function initPaymentMethods() {
    const methodInputs = document.querySelectorAll('input[name="method"]');
    
    methodInputs.forEach(input => {
        input.addEventListener('change', () => {
            // Hide all detail sections
            document.getElementById('cardDetails').classList.add('hidden');
            document.getElementById('upiDetails').classList.add('hidden');
            document.getElementById('netbankingDetails').classList.add('hidden');
            
            // Show selected section
            switch (input.value) {
                case 'card':
                    document.getElementById('cardDetails').classList.remove('hidden');
                    break;
                case 'upi':
                    document.getElementById('upiDetails').classList.remove('hidden');
                    break;
                case 'netbanking':
                    document.getElementById('netbankingDetails').classList.remove('hidden');
                    break;
            }
        });
    });
}

// Format card number with spaces
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    let formatted = '';
    
    for (let i = 0; i < value.length && i < 16; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += ' ';
        }
        formatted += value[i];
    }
    
    input.value = formatted;
    
    // Update card icon highlight
    const visaIcon = document.querySelector('.card-icon.visa');
    const mcIcon = document.querySelector('.card-icon.mc');
    
    if (value.startsWith('4')) {
        visaIcon.style.opacity = '1';
        mcIcon.style.opacity = '0.4';
    } else if (value.startsWith('5') || value.startsWith('2')) {
        visaIcon.style.opacity = '0.4';
        mcIcon.style.opacity = '1';
    } else {
        visaIcon.style.opacity = '0.4';
        mcIcon.style.opacity = '0.4';
    }
}

// Format expiry date
function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    input.value = value;
}

// Process payment
function processPayment(event) {
    event.preventDefault();
    
    const form = event.target;
    const payButton = document.getElementById('payButton');
    const payText = payButton.querySelector('.pay-text');
    const payLoader = payButton.querySelector('.pay-loader');
    
    // Show loading state
    payText.classList.add('hidden');
    payLoader.classList.remove('hidden');
    payButton.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const paymentData = {
        institution: formData.get('institution'),
        contact: formData.get('contact'),
        designation: formData.get('designation'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        gst: formData.get('gst'),
        paymentMethod: formData.get('method'),
        plan: selectedPlan,
        billing: billingCycle,
        timestamp: new Date().toISOString()
    };
    
    console.log('Payment Data:', paymentData);
    
    // Simulate payment processing
    setTimeout(() => {
        // Generate transaction ID
        const txnId = 'TXN_' + Math.random().toString(36).substr(2, 9).toUpperCase();
        document.getElementById('txnId').textContent = txnId;
        
        // Show success modal
        document.getElementById('successModal').classList.remove('hidden');
        
        // Reset button
        payText.classList.remove('hidden');
        payLoader.classList.add('hidden');
        payButton.disabled = false;
    }, 2500);
}

