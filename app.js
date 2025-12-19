// ============================================
// College GupShup - JavaScript
// A Platform Approved by UGC
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

// Initialize theme on page load
initTheme();

// Sample Data
const reviews = [
    {
        id: 1,
        university: "IIT Delhi",
        course: "B.Tech Computer Science",
        year: "3rd Year",
        rating: 4.5,
        pros: "Amazing faculty, world-class infrastructure, great peer learning environment. The research opportunities are unmatched and placement cell is very active.",
        cons: "Extremely competitive atmosphere can be stressful. Work-life balance is hard to maintain during exam seasons.",
        advice: "Focus on building projects alongside academics. Network with seniors.",
        tags: ["academics", "placements"],
        date: "2 days ago",
        ratings: { academics: 5, faculty: 4, placements: 5, campus: 4 }
    },
    {
        id: 2,
        university: "BITS Pilani",
        course: "M.Sc Economics",
        year: "2nd Year",
        rating: 4.2,
        pros: "Flexible curriculum lets you explore different fields. Campus life is vibrant with lots of clubs and fests. PS (Practice School) is a great way to get industry exposure.",
        cons: "Remote location can feel isolating. Limited faculty for some courses.",
        advice: "Make the most of the flexible system. Don't overload yourself with courses.",
        tags: ["campus", "academics"],
        date: "1 week ago",
        ratings: { academics: 4, faculty: 4, placements: 4, campus: 5 }
    },
    {
        id: 3,
        university: "Delhi University",
        course: "B.A. English Honours",
        year: "Alumni",
        rating: 4.0,
        pros: "Rich intellectual environment, excellent library resources. Being in Delhi gives access to internships and cultural events. Faculty includes renowned scholars.",
        cons: "Infrastructure varies greatly between colleges. Admission process is stressful.",
        advice: "Choose your college wisely. Participate in literary societies.",
        tags: ["faculty", "academics"],
        date: "2 weeks ago",
        ratings: { academics: 4, faculty: 5, placements: 3, campus: 4 }
    },
    {
        id: 4,
        university: "VIT Vellore",
        course: "B.Tech ECE",
        year: "4th Year",
        rating: 3.8,
        pros: "Good placement record with top companies visiting. Well-maintained hostels and food quality is decent. Many technical clubs to join.",
        cons: "Strict rules can feel restrictive. Course curriculum could be more updated.",
        advice: "Start preparing for placements from 3rd year. Join technical clubs early.",
        tags: ["placements", "campus"],
        date: "3 weeks ago",
        ratings: { academics: 4, faculty: 3, placements: 4, campus: 4 }
    },
    {
        id: 5,
        university: "IIT Bombay",
        course: "B.Tech Mechanical",
        year: "3rd Year",
        rating: 4.7,
        pros: "Best campus life in India hands down! Techfest and Mood Indigo are legendary. Strong alumni network and amazing research facilities.",
        cons: "Academic pressure is intense. Mumbai's weather takes getting used to.",
        advice: "Balance academics with extracurriculars. Don't miss the cultural fests!",
        tags: ["campus", "academics", "placements"],
        date: "4 days ago",
        ratings: { academics: 5, faculty: 5, placements: 5, campus: 4 }
    },
    {
        id: 6,
        university: "Manipal University",
        course: "MBBS",
        year: "2nd Year",
        rating: 4.1,
        pros: "Excellent medical facilities for practical learning. Beautiful coastal campus. International exposure with students from many countries.",
        cons: "Fees are on the higher side. Town has limited entertainment options.",
        advice: "Focus on practical skills. Join medical camps and health drives.",
        tags: ["academics", "campus"],
        date: "1 week ago",
        ratings: { academics: 4, faculty: 4, placements: 4, campus: 5 }
    },
    {
        id: 7,
        university: "NIT Trichy",
        course: "B.Tech Civil",
        year: "4th Year",
        rating: 4.3,
        pros: "Strong technical foundation. Good mix of academics and extracurriculars. Pragyan fest is amazing. Affordable compared to private colleges.",
        cons: "Placement opportunities for core branches could be better. Hot climate.",
        advice: "Learn coding regardless of your branch. Participate in Pragyan.",
        tags: ["academics", "faculty"],
        date: "5 days ago",
        ratings: { academics: 5, faculty: 4, placements: 4, campus: 4 }
    },
    {
        id: 8,
        university: "SRM University",
        course: "B.Tech CSE",
        year: "3rd Year",
        rating: 3.6,
        pros: "Good infrastructure and labs. Many company tie-ups for internships. Diverse student community.",
        cons: "Attendance requirements are strict. Some faculty lack industry experience.",
        advice: "Self-learning is key. Use online resources to supplement curriculum.",
        tags: ["placements", "faculty"],
        date: "2 weeks ago",
        ratings: { academics: 3, faculty: 3, placements: 4, campus: 4 }
    }
];

const universities = [
    {
        id: 1,
        name: "IIT Delhi",
        location: "New Delhi, India",
        rating: 4.6,
        reviews: 2450,
        isPartner: true
    },
    {
        id: 2,
        name: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        rating: 4.7,
        reviews: 2890,
        isPartner: true
    },
    {
        id: 3,
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        rating: 4.4,
        reviews: 1920,
        isPartner: true
    },
    {
        id: 4,
        name: "Delhi University",
        location: "New Delhi, India",
        rating: 4.2,
        reviews: 3200,
        isPartner: false
    },
    {
        id: 5,
        name: "VIT Vellore",
        location: "Vellore, Tamil Nadu",
        rating: 4.0,
        reviews: 2100,
        isPartner: true
    },
    {
        id: 6,
        name: "NIT Trichy",
        location: "Tiruchirappalli, Tamil Nadu",
        rating: 4.3,
        reviews: 1450,
        isPartner: false
    },
    {
        id: 7,
        name: "Manipal University",
        location: "Manipal, Karnataka",
        rating: 4.1,
        reviews: 1780,
        isPartner: true
    },
    {
        id: 8,
        name: "SRM University",
        location: "Chennai, Tamil Nadu",
        rating: 3.8,
        reviews: 1650,
        isPartner: false
    },
    {
        id: 9,
        name: "Amity University",
        location: "Noida, Uttar Pradesh",
        rating: 3.5,
        reviews: 980,
        isPartner: false
    },
    {
        id: 10,
        name: "Christ University",
        location: "Bangalore, Karnataka",
        rating: 4.0,
        reviews: 1120,
        isPartner: true
    },
    {
        id: 11,
        name: "IIT Madras",
        location: "Chennai, Tamil Nadu",
        rating: 4.8,
        reviews: 2650,
        isPartner: true
    },
    {
        id: 12,
        name: "IIIT Hyderabad",
        location: "Hyderabad, Telangana",
        rating: 4.5,
        reviews: 890,
        isPartner: true
    }
];

// State
let currentFilter = 'all';
let displayedReviews = 6;
let formRatings = {
    academics: 0,
    faculty: 0,
    placements: 0,
    campus: 0
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderReviews();
    renderUniversities();
    initializeStarRatings();
    initializeFilters();
    
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.step-card, .review-card, .university-card').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Render Reviews
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    const filteredReviews = currentFilter === 'all' 
        ? reviews 
        : reviews.filter(r => r.tags.includes(currentFilter));
    
    const reviewsToShow = filteredReviews.slice(0, displayedReviews);
    
    grid.innerHTML = reviewsToShow.map((review, index) => `
        <div class="review-card" style="animation-delay: ${index * 0.1}s">
            <div class="review-header">
                <div>
                    <div class="review-university">${review.university}</div>
                    <div class="review-course">${review.course} • ${review.year}</div>
                </div>
                <div class="review-rating">
                    <span>${review.rating}</span>
                    <span class="review-stars">${getStars(review.rating)}</span>
                </div>
            </div>
            
            <div class="review-content">
                <div class="review-section">
                    <div class="review-section-title">👍 What's Great</div>
                    <p>${review.pros}</p>
                </div>
                <div class="review-section">
                    <div class="review-section-title">👎 Could Be Better</div>
                    <p>${review.cons}</p>
                </div>
                ${review.advice ? `
                <div class="review-section">
                    <div class="review-section-title">💡 Advice</div>
                    <p>${review.advice}</p>
                </div>
                ` : ''}
            </div>
            
            <div class="review-tags">
                ${review.tags.map(tag => `<span class="review-tag">${capitalizeFirst(tag)}</span>`).join('')}
            </div>
            
            <div class="review-footer">
                <div class="review-anonymous">
                    <span>🎭</span>
                    <span>Anonymous Student</span>
                </div>
                <div class="review-date">${review.date}</div>
            </div>
        </div>
    `).join('');
}

// Render Universities
function renderUniversities(searchTerm = '') {
    const grid = document.getElementById('universitiesGrid');
    let filteredUniversities = universities;
    
    if (searchTerm) {
        filteredUniversities = universities.filter(u => 
            u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Sort by rating, partners first
    filteredUniversities.sort((a, b) => {
        if (a.isPartner !== b.isPartner) return b.isPartner - a.isPartner;
        return b.rating - a.rating;
    });
    
    grid.innerHTML = filteredUniversities.map(uni => `
        <div class="university-card ${uni.isPartner ? 'partner' : ''}">
            ${uni.isPartner ? '<div class="university-badge">✓ UGC Approved</div>' : ''}
            <div class="university-name">${uni.name}</div>
            <div class="university-location">📍 ${uni.location}</div>
            <div class="university-stats">
                <div class="university-stat">
                    <span class="university-stat-value">${uni.rating}</span>
                    <span class="university-stat-label">Rating</span>
                </div>
                <div class="university-stat">
                    <span class="university-stat-value">${formatNumber(uni.reviews)}</span>
                    <span class="university-stat-label">Reviews</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Star Rating Helper
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalf) stars += '½';
    return stars;
}

// Format Number Helper
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Capitalize First Letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize Star Ratings in Form
function initializeStarRatings() {
    document.querySelectorAll('.star-rating').forEach(container => {
        const ratingType = container.dataset.rating;
        const stars = container.querySelectorAll('.star');
        
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.dataset.value);
                formRatings[ratingType] = value;
                
                stars.forEach(s => {
                    const sValue = parseInt(s.dataset.value);
                    s.classList.toggle('active', sValue <= value);
                });
            });
            
            star.addEventListener('mouseenter', () => {
                const value = parseInt(star.dataset.value);
                stars.forEach(s => {
                    const sValue = parseInt(s.dataset.value);
                    s.style.color = sValue <= value ? '#f7c331' : '';
                });
            });
            
            container.addEventListener('mouseleave', () => {
                stars.forEach(s => {
                    const sValue = parseInt(s.dataset.value);
                    s.style.color = s.classList.contains('active') ? '#f7c331' : '';
                });
            });
        });
    });
}

// Initialize Filters
function initializeFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            displayedReviews = 6;
            renderReviews();
        });
    });
}

// Search Universities
function searchUniversities() {
    const searchTerm = document.getElementById('universitySearch').value;
    renderUniversities(searchTerm);
}

// Load More Reviews
function loadMoreReviews() {
    displayedReviews += 4;
    renderReviews();
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// Toggle Mobile Menu
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// Submit Feedback Form
function submitFeedback(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Create review object
    const newReview = {
        university: form.university.options[form.university.selectedIndex].text,
        course: formData.get('course'),
        year: form.year.options[form.year.selectedIndex].text,
        pros: formData.get('pros'),
        cons: formData.get('cons'),
        advice: formData.get('advice'),
        ratings: { ...formRatings }
    };
    
    // Calculate average rating
    const ratingValues = Object.values(formRatings).filter(v => v > 0);
    newReview.rating = ratingValues.length > 0 
        ? (ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length).toFixed(1)
        : 4.0;
    
    console.log('New Review Submitted:', newReview);
    
    // Close modal
    closeModal('feedbackModal');
    
    // Reset form
    form.reset();
    formRatings = { academics: 0, faculty: 0, placements: 0, campus: 0 };
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
    
    // Show success toast
    showToast('Your review has been submitted successfully!');
    
    // Add to reviews (in real app, this would be saved to backend)
    reviews.unshift({
        id: reviews.length + 1,
        ...newReview,
        tags: ['academics'],
        date: 'Just now'
    });
    renderReviews();
}

// Submit Partner Form
function submitPartner(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const partnerData = {
        institution: formData.get('institution'),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        role: formData.get('role'),
        message: formData.get('message')
    };
    
    console.log('Partner Request:', partnerData);
    
    // Close modal
    closeModal('partnerModal');
    
    // Reset form
    form.reset();
    
    // Show success toast
    showToast('Partnership request submitted! We\'ll contact you soon.');
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('successToast');
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
});

// Pricing Toggle
let currentBilling = 'monthly';

function switchBilling(billing) {
    console.log('Switching billing to:', billing);
    currentBilling = billing;
    
    // Update toggle buttons
    document.querySelectorAll('.billing-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.billing === billing);
    });
    
    // Update prices
    document.querySelectorAll('.plan-price .amount').forEach(amount => {
        let price;
        switch(billing) {
            case 'semiannually':
                price = amount.dataset.semiannually;
                break;
            case 'annually':
                price = amount.dataset.annually;
                break;
            default:
                price = amount.dataset.monthly;
        }
        amount.textContent = price;
    });
    
    // Update period text
    let periodText;
    switch(billing) {
        case 'semiannually':
            periodText = '/6 months';
            break;
        case 'annually':
            periodText = '/year';
            break;
        default:
            periodText = '/month';
    }
    
    document.querySelectorAll('.plan-price .period').forEach(period => {
        period.textContent = periodText;
    });
}

// Subscription Plans Data
const subscriptionPlans = {
    institute: {
        name: 'Institute Plan',
        monthlyPrice: '₹10,000',
        semiannuallyPrice: '₹45,000',
        annuallyPrice: '₹80,000',
        features: ['Advanced Analytics', 'Unlimited Reviews', 'UGC Approved Badge', 'Dedicated Manager']
    },
    'student-premium': {
        name: 'Student Premium',
        monthlyPrice: '₹200',
        semiannuallyPrice: '₹450',
        annuallyPrice: '₹700',
        features: ['Ad-free Experience', 'Exclusive Insights', 'Placement Stats', 'Alumni Q&A']
    }
};

// Open Subscription / Payment Page
function openSubscription(planType) {
    // Redirect to payment page with plan details
    window.location.href = `payment.html?plan=${planType}&billing=${currentBilling}`;
}

// Process Subscription
function processSubscription(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const subscriptionData = {
        institution: formData.get('institution'),
        contactName: formData.get('contact_name'),
        designation: formData.get('designation'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        gst: formData.get('gst'),
        paymentMethod: formData.get('payment'),
        plan: document.getElementById('summaryPlan').textContent,
        billing: document.getElementById('summaryBilling').textContent,
        timestamp: new Date().toISOString()
    };
    
    console.log('Subscription Data:', subscriptionData);
    
    // Close modal
    closeModal('subscriptionModal');
    
    // Show success toast
    showToast('🎉 Subscription request received! Our team will contact you shortly.');
    
    // Reset form
    form.reset();
}

