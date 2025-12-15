// ============================================
// Dashboard JavaScript
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

// Check Authentication
const session = JSON.parse(localStorage.getItem('gupshup_session') || sessionStorage.getItem('gupshup_session') || 'null');
if (!session) {
    window.location.href = 'auth.html';
}

// College Data with Photos
const colleges = [
    {
        id: 1,
        name: "Indian Institute of Technology, Delhi",
        shortName: "IIT Delhi",
        location: "New Delhi, Delhi",
        state: "delhi",
        category: "iit",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 2890,
        students: 12500,
        established: 1961,
        isPartner: true,
        subscription: "enterprise", // enterprise, professional, starter, or null
        description: "IIT Delhi is one of the most prestigious engineering institutions in India, known for its excellent faculty, cutting-edge research, and outstanding placement records.",
        courses: ["B.Tech", "M.Tech", "MBA", "M.Sc", "Ph.D"],
        highlights: ["NIRF Rank #2", "100% Placements", "World-class Research", "Strong Alumni Network"]
    },
    {
        id: 2,
        name: "Indian Institute of Technology, Bombay",
        shortName: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        state: "maharashtra",
        category: "iit",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
        rating: 4.8,
        reviews: 3200,
        students: 11800,
        established: 1958,
        isPartner: true,
        subscription: "enterprise",
        description: "IIT Bombay is consistently ranked among the top engineering colleges in India and Asia, famous for Techfest and exceptional campus life.",
        courses: ["B.Tech", "M.Tech", "MBA", "M.Des", "Ph.D"],
        highlights: ["NIRF Rank #3", "Techfest", "Beautiful Campus", "Top Recruiters"]
    },
    {
        id: 3,
        name: "Indian Institute of Technology, Madras",
        shortName: "IIT Madras",
        location: "Chennai, Tamil Nadu",
        state: "tamil-nadu",
        category: "iit",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        rating: 4.9,
        reviews: 2750,
        students: 10200,
        established: 1959,
        isPartner: true,
        subscription: "enterprise",
        description: "IIT Madras is ranked #1 among engineering institutions in India, known for its research output, startup ecosystem, and beautiful campus.",
        courses: ["B.Tech", "M.Tech", "MBA", "M.Sc", "Ph.D"],
        highlights: ["NIRF Rank #1", "Research Excellence", "Startup Incubator", "Deer Campus"]
    },
    {
        id: 4,
        name: "BITS Pilani",
        shortName: "BITS Pilani",
        location: "Pilani, Rajasthan",
        state: "rajasthan",
        category: "private",
        image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&h=600&fit=crop",
        rating: 4.5,
        reviews: 2100,
        students: 14500,
        established: 1964,
        isPartner: true,
        subscription: "professional",
        description: "BITS Pilani offers flexible curriculum, dual degrees, and Practice School program that provides excellent industry exposure.",
        courses: ["B.E.", "M.E.", "MBA", "M.Sc", "Ph.D"],
        highlights: ["Flexible Curriculum", "Practice School", "BITS Fests", "Strong Alumni"]
    },
    {
        id: 5,
        name: "Delhi University",
        shortName: "DU",
        location: "New Delhi, Delhi",
        state: "delhi",
        category: "state",
        image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop",
        rating: 4.3,
        reviews: 4500,
        students: 132000,
        established: 1922,
        isPartner: false,
        subscription: null,
        description: "Delhi University is one of India's largest and most prestigious universities, offering diverse programs across multiple colleges.",
        courses: ["B.A.", "B.Sc", "B.Com", "M.A.", "Ph.D"],
        highlights: ["Historic Campus", "Cultural Hub", "Top Colleges", "Research Opportunities"]
    },
    {
        id: 6,
        name: "National Institute of Technology, Trichy",
        shortName: "NIT Trichy",
        location: "Tiruchirappalli, Tamil Nadu",
        state: "tamil-nadu",
        category: "nit",
        image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&h=600&fit=crop",
        rating: 4.4,
        reviews: 1650,
        students: 6800,
        established: 1964,
        isPartner: true,
        subscription: "professional",
        description: "NIT Trichy is one of the premier NITs in India, known for excellent academics, Pragyan fest, and strong placement records.",
        courses: ["B.Tech", "M.Tech", "MBA", "M.Sc", "Ph.D"],
        highlights: ["Top NIT", "Pragyan Fest", "Good Placements", "Research Focus"]
    },
    {
        id: 7,
        name: "VIT Vellore",
        shortName: "VIT",
        location: "Vellore, Tamil Nadu",
        state: "tamil-nadu",
        category: "private",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
        rating: 4.1,
        reviews: 2800,
        students: 28000,
        established: 1984,
        isPartner: true,
        subscription: "professional",
        description: "VIT is one of India's top private universities with excellent infrastructure, diverse student body, and strong industry connections.",
        courses: ["B.Tech", "M.Tech", "MBA", "M.Sc", "Ph.D"],
        highlights: ["Modern Campus", "Industry Tie-ups", "International Exposure", "Good Hostels"]
    },
    {
        id: 8,
        name: "Manipal Institute of Technology",
        shortName: "MIT Manipal",
        location: "Manipal, Karnataka",
        state: "karnataka",
        category: "private",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        rating: 4.2,
        reviews: 1920,
        students: 18500,
        established: 1957,
        isPartner: true,
        subscription: "professional",
        description: "MIT Manipal offers a unique coastal campus experience with excellent medical and engineering programs and international collaborations.",
        courses: ["B.Tech", "M.Tech", "MBBS", "MBA", "Ph.D"],
        highlights: ["Beautiful Campus", "Medical Excellence", "Beach Town", "Global Exposure"]
    },
    {
        id: 9,
        name: "Indian Institute of Science",
        shortName: "IISc Bangalore",
        location: "Bangalore, Karnataka",
        state: "karnataka",
        category: "iit",
        image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800&h=600&fit=crop",
        rating: 4.9,
        reviews: 980,
        students: 4200,
        established: 1909,
        isPartner: true,
        subscription: "enterprise",
        description: "IISc Bangalore is India's premier research institution, consistently ranked #1 for research output and scientific innovation.",
        courses: ["B.Sc (Research)", "M.Tech", "M.Sc", "Ph.D"],
        highlights: ["Research #1", "Nobel Laureates", "Green Campus", "Science Excellence"]
    },
    {
        id: 10,
        name: "SRM Institute of Science and Technology",
        shortName: "SRM University",
        location: "Chennai, Tamil Nadu",
        state: "tamil-nadu",
        category: "private",
        image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&h=600&fit=crop",
        rating: 3.9,
        reviews: 2200,
        students: 52000,
        established: 1985,
        isPartner: false,
        subscription: "starter",
        description: "SRM is one of India's largest private universities with multiple campuses and a wide range of programs.",
        courses: ["B.Tech", "M.Tech", "MBBS", "MBA", "Ph.D"],
        highlights: ["Large Campus", "Many Branches", "Good Infrastructure", "Diverse Programs"]
    },
    {
        id: 11,
        name: "National Institute of Technology, Karnataka",
        shortName: "NIT Surathkal",
        location: "Surathkal, Karnataka",
        state: "karnataka",
        category: "nit",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
        rating: 4.5,
        reviews: 1450,
        students: 5800,
        established: 1960,
        isPartner: true,
        subscription: "professional",
        description: "NIT Surathkal is among the top NITs, located on a beautiful coastal campus with excellent academics and placements.",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA", "Ph.D"],
        highlights: ["Beach Campus", "Top Placements", "Engineer Fest", "Sports Culture"]
    },
    {
        id: 12,
        name: "Jadavpur University",
        shortName: "JU",
        location: "Kolkata, West Bengal",
        state: "west-bengal",
        category: "state",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        rating: 4.4,
        reviews: 1680,
        students: 11200,
        established: 1955,
        isPartner: false,
        subscription: null,
        description: "Jadavpur University is one of West Bengal's most prestigious institutions, known for engineering and humanities programs.",
        courses: ["B.E.", "M.E.", "B.A.", "M.A.", "Ph.D"],
        highlights: ["Cultural Hub", "Research Focus", "Historic Campus", "Affordable Fees"]
    },
    {
        id: 13,
        name: "IIIT Hyderabad",
        shortName: "IIIT-H",
        location: "Hyderabad, Telangana",
        state: "telangana",
        category: "iit",
        image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&h=600&fit=crop",
        rating: 4.6,
        reviews: 890,
        students: 2800,
        established: 1998,
        isPartner: true,
        subscription: "professional",
        description: "IIIT Hyderabad is India's top IT-focused institution with cutting-edge research in AI, ML, and computer science.",
        courses: ["B.Tech", "M.Tech", "M.S.", "Ph.D"],
        highlights: ["AI Research", "Startup Culture", "Tech Focus", "Industry Ready"]
    },
    {
        id: 14,
        name: "Christ University",
        shortName: "Christ",
        location: "Bangalore, Karnataka",
        state: "karnataka",
        category: "private",
        image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop",
        rating: 4.1,
        reviews: 1350,
        students: 26000,
        established: 1969,
        isPartner: true,
        subscription: "starter",
        description: "Christ University is known for its disciplined environment, excellent management programs, and beautiful campus.",
        courses: ["BBA", "B.Com", "MBA", "B.A.", "M.A."],
        highlights: ["Discipline", "Management Focus", "Cultural Events", "City Campus"]
    },
    {
        id: 15,
        name: "Amity University",
        shortName: "Amity",
        location: "Noida, Uttar Pradesh",
        state: "uttar-pradesh",
        category: "private",
        image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&h=600&fit=crop",
        rating: 3.6,
        reviews: 1890,
        students: 125000,
        established: 2005,
        isPartner: false,
        subscription: null,
        description: "Amity University is one of India's largest private university groups with campuses across India and abroad.",
        courses: ["B.Tech", "BBA", "B.Com", "Law", "Media"],
        highlights: ["Large Network", "Multiple Campuses", "Industry Visits", "Diverse Programs"]
    },
    {
        id: 16,
        name: "IIT Kanpur",
        shortName: "IIT Kanpur",
        location: "Kanpur, Uttar Pradesh",
        state: "uttar-pradesh",
        category: "iit",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        rating: 4.7,
        reviews: 2100,
        students: 8900,
        established: 1959,
        isPartner: true,
        subscription: "enterprise",
        description: "IIT Kanpur is known for pioneering computer science education in India and exceptional research output.",
        courses: ["B.Tech", "M.Tech", "MBA", "M.Des", "Ph.D"],
        highlights: ["CS Pioneer", "Antaragni Fest", "Research Excellence", "Strong Alumni"]
    }
];

// Chat Messages Data
const chatMessages = {
    default: [
        { id: 1, name: "Anonymous Panther", message: "Hey! Anyone from CSE batch? How's the placement prep going?", time: "2:30 PM", type: "received" },
        { id: 2, name: "Anonymous Eagle", message: "Placements are crazy this year! Microsoft, Google all came.", time: "2:32 PM", type: "received" },
        { id: 3, name: "Anonymous Tiger", message: "What about the hostel food? Is it edible? 😅", time: "2:35 PM", type: "received" },
        { id: 4, name: "Anonymous Eagle", message: "Mess food is decent. But most of us order from outside.", time: "2:36 PM", type: "received" },
        { id: 5, name: "Anonymous Wolf", message: "Pro tip: Join the coding clubs early. They help a lot!", time: "2:40 PM", type: "received" }
    ]
};

// State
let currentFilter = 'all';
let currentSort = 'rating';
let currentState = '';
let displayedColleges = 8;
let currentChatCollege = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeUser();
    renderColleges();
    initializeFilters();
});

// Initialize User
function initializeUser() {
    if (session) {
        document.getElementById('userName').textContent = session.name.split(' ')[0];
        document.getElementById('welcomeName').textContent = session.name.split(' ')[0];
        document.getElementById('userAvatar').src = session.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(session.name)}&background=ff6b35&color=fff`;
    }
}

// Render Colleges
function renderColleges() {
    let filteredColleges = [...colleges];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredColleges = filteredColleges.filter(c => c.category === currentFilter);
    }
    
    // Apply state filter
    if (currentState) {
        filteredColleges = filteredColleges.filter(c => c.state === currentState);
    }
    
    // Apply search (check both desktop and mobile search inputs)
    const desktopSearch = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    const mobileSearch = document.getElementById('mobileSearchInput')?.value?.toLowerCase() || '';
    const searchTerm = desktopSearch || mobileSearch;
    
    if (searchTerm) {
        filteredColleges = filteredColleges.filter(c => 
            c.name.toLowerCase().includes(searchTerm) ||
            c.shortName.toLowerCase().includes(searchTerm) ||
            c.location.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sort
    switch (currentSort) {
        case 'rating':
            filteredColleges.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            filteredColleges.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'name':
            filteredColleges.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    // Display colleges
    const grid = document.getElementById('collegesGrid');
    const collegesToShow = filteredColleges.slice(0, displayedColleges);
    
    grid.innerHTML = collegesToShow.map((college, index) => `
        <div class="college-card ${college.isPartner ? 'partner' : ''} ${college.subscription || ''}" style="animation-delay: ${index * 0.1}s">
            <div class="college-image">
                <img src="${college.image}" alt="${college.name}" loading="lazy">
                <div class="college-badge-overlay">
                    ${getSubscriptionBadge(college.subscription)}
                    <span class="badge-tag category">${college.category.toUpperCase()}</span>
                </div>
                <div class="college-rating-overlay">
                    <span class="rating-value">${college.rating}</span>
                    <span class="rating-stars">${getStars(college.rating)}</span>
                </div>
            </div>
            <div class="college-info">
                <h3 class="college-name">${college.name}</h3>
                <div class="college-location">
                    <span>📍</span>
                    <span>${college.location}</span>
                </div>
                <div class="college-stats-row">
                    <div class="college-stat-item">
                        <span class="value">${formatNumber(college.reviews)}</span>
                        <span class="label">Reviews</span>
                    </div>
                    <div class="college-stat-item">
                        <span class="value">${formatNumber(college.students)}</span>
                        <span class="label">Students</span>
                    </div>
                    <div class="college-stat-item">
                        <span class="value">${college.established}</span>
                        <span class="label">Est.</span>
                    </div>
                </div>
                <div class="college-actions">
                    <button class="btn btn-chat" onclick="openChat(${college.id})">
                        <span>💬</span> Student Chat
                    </button>
                    <button class="btn btn-details" onclick="openCollegeDetails(${college.id})">
                        <span>📋</span> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update load more button visibility
    const loadMoreBtn = document.querySelector('.load-more-section');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedColleges >= filteredColleges.length ? 'none' : 'block';
    }
}

// Initialize Filters
function initializeFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            displayedColleges = 8;
            renderColleges();
        });
    });
}

// Filter Colleges (search)
function filterColleges() {
    currentState = document.getElementById('stateFilter').value;
    displayedColleges = 8;
    renderColleges();
}

// Sort Colleges
function sortColleges() {
    currentSort = document.getElementById('sortBy').value;
    renderColleges();
}

// Load More
function loadMoreColleges() {
    displayedColleges += 8;
    renderColleges();
}

// Get Stars
function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return '★'.repeat(full) + (half ? '½' : '');
}

// Get Subscription Badge
function getSubscriptionBadge(subscription) {
    switch (subscription) {
        case 'enterprise':
            return '<span class="badge-tag enterprise">💎 Premium Verified</span>';
        case 'professional':
            return '<span class="badge-tag professional">✓ UGC Approved</span>';
        case 'starter':
            return '<span class="badge-tag starter">📋 Verified</span>';
        default:
            return '';
    }
}

// Format Number
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toString();
}

// Open College Details Modal
function openCollegeDetails(collegeId) {
    const college = colleges.find(c => c.id === collegeId);
    if (!college) return;
    
    const modal = document.getElementById('collegeModal');
    const body = document.getElementById('collegeModalBody');
    
    body.innerHTML = `
        <div class="modal-college-header">
            <img src="${college.image}" alt="${college.name}">
            <div class="modal-college-header-overlay">
                <h2>${college.name}</h2>
                <div class="location">
                    <span>📍</span>
                    <span>${college.location}</span>
                </div>
            </div>
        </div>
        <div class="modal-college-body">
            <div class="modal-stats-grid">
                <div class="modal-stat-card">
                    <div class="icon">⭐</div>
                    <span class="value">${college.rating}</span>
                    <span class="label">Rating</span>
                </div>
                <div class="modal-stat-card">
                    <div class="icon">📝</div>
                    <span class="value">${formatNumber(college.reviews)}</span>
                    <span class="label">Reviews</span>
                </div>
                <div class="modal-stat-card">
                    <div class="icon">👥</div>
                    <span class="value">${formatNumber(college.students)}</span>
                    <span class="label">Students</span>
                </div>
                <div class="modal-stat-card">
                    <div class="icon">🏛️</div>
                    <span class="value">${college.established}</span>
                    <span class="label">Established</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>📖 About</h3>
                <p>${college.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>🎓 Courses Offered</h3>
                <div class="modal-tags">
                    ${college.courses.map(c => `<span class="modal-tag">${c}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>✨ Highlights</h3>
                <div class="modal-tags">
                    ${college.highlights.map(h => `<span class="modal-tag">${h}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-chat btn-large" onclick="closeCollegeModal(); openChat(${college.id});">
                    💬 Chat with Students
                </button>
                <button class="btn btn-primary btn-large" onclick="writeReview(${college.id})">
                    ✍️ Write Review
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close College Modal
function closeCollegeModal() {
    document.getElementById('collegeModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Open Chat Modal
function openChat(collegeId) {
    const college = colleges.find(c => c.id === collegeId);
    if (!college) return;
    
    currentChatCollege = college;
    
    document.getElementById('chatCollegeName').textContent = college.shortName;
    document.getElementById('chatCollegeImg').src = college.image;
    document.getElementById('onlineCount').textContent = `${Math.floor(Math.random() * 50) + 10} students online`;
    
    // Load messages
    const messagesContainer = document.getElementById('chatMessages');
    const messages = chatMessages.default;
    
    messagesContainer.innerHTML = messages.map(msg => `
        <div class="chat-message ${msg.type}">
            <div class="message-header">
                <div class="message-avatar">${msg.name.split(' ')[1][0]}</div>
                <span class="message-name">${msg.name}</span>
                <span class="message-time">${msg.time}</span>
            </div>
            <div class="message-bubble">${msg.message}</div>
        </div>
    `).join('');
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    document.getElementById('chatModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('chatInput').focus();
}

// Close Chat Modal
function closeChatModal() {
    document.getElementById('chatModal').classList.remove('active');
    document.body.style.overflow = '';
    currentChatCollege = null;
}

// Send Message
function sendMessage(event) {
    event.preventDefault();
    
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('chatMessages');
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    
    // Add sent message
    const sentMsg = document.createElement('div');
    sentMsg.className = 'chat-message sent';
    sentMsg.innerHTML = `
        <div class="message-header">
            <span class="message-time">${time}</span>
            <span class="message-name">You (Anonymous)</span>
        </div>
        <div class="message-bubble">${escapeHtml(message)}</div>
    `;
    messagesContainer.appendChild(sentMsg);
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate reply after delay
    setTimeout(() => {
        const replies = [
            "That's a great question! Let me share my experience...",
            "I'm a 3rd year student here. The campus life is amazing!",
            "Placements are really good. Top companies visit every year.",
            "The hostel food could be better, but there are good cafes nearby.",
            "Join clubs and participate in fests - that's where you learn the most!",
            "Faculty is supportive if you show genuine interest in learning.",
            "The library is open 24/7 during exams. Very helpful!",
            "Internship opportunities are plenty if you're proactive."
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        const replyTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const animals = ['Panther', 'Eagle', 'Wolf', 'Tiger', 'Bear', 'Fox', 'Hawk', 'Lion'];
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        
        const replyMsg = document.createElement('div');
        replyMsg.className = 'chat-message received';
        replyMsg.innerHTML = `
            <div class="message-header">
                <div class="message-avatar">${randomAnimal[0]}</div>
                <span class="message-name">Anonymous ${randomAnimal}</span>
                <span class="message-time">${replyTime}</span>
            </div>
            <div class="message-bubble">${randomReply}</div>
        `;
        messagesContainer.appendChild(replyMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1500 + Math.random() * 1500);
}

// Write Review
function writeReview(collegeId) {
    closeCollegeModal();
    showToast('Review feature coming soon! 🚀');
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// User Menu Toggle
function toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('active');
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-menu')) {
        document.getElementById('userDropdown').classList.remove('active');
    }
});

// Notifications
function toggleNotifications() {
    showToast('Notifications coming soon!');
}

// Mobile Search Toggle
function toggleMobileSearch() {
    const searchBar = document.getElementById('mobileSearchBar');
    const searchInput = document.getElementById('mobileSearchInput');
    
    searchBar.classList.toggle('active');
    
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        filterColleges(); // Reset filter
    }
}

// Logout
function logout() {
    localStorage.removeItem('gupshup_session');
    sessionStorage.removeItem('gupshup_session');
    window.location.href = 'auth.html';
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

// Close modals on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCollegeModal();
        closeChatModal();
    }
});

