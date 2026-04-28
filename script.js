/* ═══════════════════════════════════════════════════════════════════
   SAHAYAK CONNECT — Shared JavaScript
   Contains: dummy data, utility functions, card builders, toast system
   This file is loaded by ALL pages via <script src="script.js">
═══════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════
   1. SHARED CONSTANTS — Help type metadata
══════════════════════════════════════════ */
const HELP_TYPES = {
  food:    { label: 'Food',    icon: '🍱', color: '#F97316', bg: '#FFF7ED', border: '#FED7AA' },
  medical: { label: 'Medical', icon: '🏥', color: '#EF4444', bg: '#FEF2F2', border: '#FECACA' },
  shelter: { label: 'Shelter', icon: '🏠', color: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE' },
  blood:   { label: 'Blood',   icon: '🩸', color: '#E11D48', bg: '#FFF1F2', border: '#FECDD3' },
};

const URGENCY_CONFIG = {
  critical: { text: '#DC2626', bg: '#FEF2F2', label: '🔴 Critical' },
  high:     { text: '#D97706', bg: '#FFFBEB', label: '🟡 High'     },
  medium:   { text: '#0891B2', bg: '#ECFEFF', label: '🔵 Medium'   },
};

const STATUS_CONFIG = {
  pending:  { label: 'Pending',     color: '#F59E0B', bg: '#FFFBEB' },
  accepted: { label: 'In Progress', color: '#3B82F6', bg: '#EFF6FF' },
  resolved: { label: 'Resolved',    color: '#10B981', bg: '#ECFDF5' },
};

/* ══════════════════════════════════════════
   2. DUMMY DATA — Volunteers
══════════════════════════════════════════ */
const VOLUNTEERS = [
  {
    id: 'v1', name: 'Arjun Sharma', avatar: 'AS',
    city: 'New Delhi',
    location: { lat: 28.6139, lng: 77.2090 },
    skills: ['medical', 'food'],
    rating: 4.9, helpedCount: 127, active: true,
    phone: '+91-9876543210'
  },
  {
    id: 'v2', name: 'Priya Menon', avatar: 'PM',
    city: 'Mumbai',
    location: { lat: 19.0760, lng: 72.8777 },
    skills: ['shelter', 'food'],
    rating: 4.8, helpedCount: 93, active: true,
    phone: '+91-9876543211'
  },
  {
    id: 'v3', name: 'Rohan Gupta', avatar: 'RG',
    city: 'Bangalore',
    location: { lat: 12.9716, lng: 77.5946 },
    skills: ['blood', 'medical'],
    rating: 4.7, helpedCount: 64, active: true,
    phone: '+91-9876543212'
  },
  {
    id: 'v4', name: 'Sneha Patel', avatar: 'SP',
    city: 'New Delhi',
    location: { lat: 28.6200, lng: 77.2100 },
    skills: ['food', 'shelter'],
    rating: 5.0, helpedCount: 201, active: true,
    phone: '+91-9876543213'
  },
  {
    id: 'v5', name: 'Amit Yadav', avatar: 'AY',
    city: 'Kolkata',
    location: { lat: 22.5726, lng: 88.3639 },
    skills: ['medical', 'blood'],
    rating: 4.6, helpedCount: 47, active: false,
    phone: '+91-9876543214'
  },
];

/* ══════════════════════════════════════════
   3. DUMMY DATA — NGOs
══════════════════════════════════════════ */
const NGOS = [
  {
    id: 'n1', name: 'Seva Foundation', avatar: 'SF',
    city: 'New Delhi',
    location: { lat: 28.6200, lng: 77.2100 },
    services: ['food', 'shelter'],
    description: 'Providing free meals and emergency shelter across Delhi NCR since 2010.',
    contact: 'seva@foundation.org',
    campActive: true, campsRunning: 3
  },
  {
    id: 'n2', name: 'LifeLine NGO', avatar: 'LL',
    city: 'Mumbai',
    location: { lat: 19.0800, lng: 72.8800 },
    services: ['medical', 'blood'],
    description: '24/7 medical assistance and blood bank coordination in Mumbai.',
    contact: 'help@lifeline.org',
    campActive: true, campsRunning: 5
  },
  {
    id: 'n3', name: 'AaharDaan Trust', avatar: 'AD',
    city: 'Bangalore',
    location: { lat: 12.9800, lng: 77.5900 },
    services: ['food'],
    description: 'Zero hunger initiative — daily community kitchens across Bangalore.',
    contact: 'contact@aahardaan.org',
    campActive: true, campsRunning: 8
  },
  {
    id: 'n4', name: 'SurakshaSangh', avatar: 'SS',
    city: 'Kolkata',
    location: { lat: 22.5726, lng: 88.3639 },
    services: ['shelter', 'medical'],
    description: 'Emergency disaster relief and rehabilitation in West Bengal.',
    contact: 'info@suraksha.org',
    campActive: false, campsRunning: 0
  },
];

/* ══════════════════════════════════════════
   4. DUMMY DATA — Help Requests
══════════════════════════════════════════ */
const REQUESTS = [
  {
    id: 'r1', type: 'food', urgency: 'critical', status: 'pending',
    title: 'Family needs urgent food assistance',
    description: 'Family of 5, including 3 children. No food for 2 days. Located near Lajpat Nagar metro.',
    name: 'Rahul Kumar', phone: '+91-9811223344',
    city: 'New Delhi', time: '10 mins ago',
    location: { lat: 28.6100, lng: 77.2200 }, volunteerId: null
  },
  {
    id: 'r2', type: 'medical', urgency: 'high', status: 'accepted',
    title: 'Elderly man needs diabetic medication',
    description: '65-year-old diabetic patient ran out of insulin. Urgent delivery required to Bandra East.',
    name: "Maria D'Souza", phone: '+91-9822334455',
    city: 'Mumbai', time: '25 mins ago',
    location: { lat: 19.0700, lng: 72.8500 }, volunteerId: 'v2'
  },
  {
    id: 'r3', type: 'blood', urgency: 'critical', status: 'pending',
    title: 'O- blood needed urgently for surgery',
    description: 'O negative blood required immediately at AIIMS Delhi. Patient in critical post-accident condition.',
    name: 'Pooja Singh', phone: '+91-9833445566',
    city: 'New Delhi', time: '5 mins ago',
    location: { lat: 28.6300, lng: 77.2100 }, volunteerId: null
  },
  {
    id: 'r4', type: 'shelter', urgency: 'high', status: 'resolved',
    title: 'Flood-affected family needs shelter',
    description: '4 family members displaced due to flooding. Need temporary accommodation for 3-4 days.',
    name: 'Bablu Das', phone: '+91-9844556677',
    city: 'Kolkata', time: '2 hours ago',
    location: { lat: 22.5600, lng: 88.3700 }, volunteerId: 'v5'
  },
  {
    id: 'r5', type: 'food', urgency: 'medium', status: 'pending',
    title: 'Migrant workers need food support',
    description: 'Group of 12 migrant construction workers stranded without food or water near Whitefield area.',
    name: 'Lakshmi Nair', phone: '+91-9855667788',
    city: 'Bangalore', time: '1 hour ago',
    location: { lat: 12.9600, lng: 77.7400 }, volunteerId: null
  },
  {
    id: 'r6', type: 'medical', urgency: 'critical', status: 'pending',
    title: 'Child with high fever needs doctor',
    description: '2-year-old running 104°F fever. Parents cannot afford hospital. Need volunteer doctor or nurse.',
    name: 'Faisal Khan', phone: '+91-9866778899',
    city: 'New Delhi', time: '15 mins ago',
    location: { lat: 28.6200, lng: 77.1900 }, volunteerId: null
  },
];

/* ══════════════════════════════════════════
   5. UTILITY — Distance calculation
   Uses Haversine formula to get km between two lat/lng points
══════════════════════════════════════════ */
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
}

/* ══════════════════════════════════════════
   6. CARD BUILDER — builds a request card HTML string
   @param  {Object}  r          — request object
   @param  {boolean} showDesc   — whether to show description text
   @param  {string}  actionHtml — optional action button HTML
   @returns {string} HTML string
══════════════════════════════════════════ */
function buildRequestCard(r, showDesc = false, actionHtml = '') {
  const type    = HELP_TYPES[r.type]   || HELP_TYPES.food;
  const status  = STATUS_CONFIG[r.status];
  const urgency = URGENCY_CONFIG[r.urgency];

  return `
    <div class="card req-card" style="border-left-color:${type.color}">

      <div class="req-card-top">
        <!-- Type icon -->
        <div class="req-card-icon" style="background:${type.bg}">
          ${type.icon}
        </div>

        <div style="flex:1">
          <!-- Badges row -->
          <div class="req-card-badges">
            <span class="urgency-badge urgency-${r.urgency}">${urgency.label}</span>
            <span class="status-badge status-${r.status}">${status.label}</span>
            <span class="tag tag-${r.type}">${type.icon} ${type.label}</span>
          </div>
          <!-- Title -->
          <div class="req-card-title">${r.title}</div>
        </div>
      </div>

      ${showDesc && r.description
        ? `<p class="req-card-desc">${r.description}</p>`
        : ''}

      <!-- Meta info -->
      <div class="req-card-meta">
        <span>👤 ${r.name}</span>
        <span>📍 ${r.city}</span>
        <span>⏱ ${r.time}</span>
        ${r.phone ? `<span>📞 ${r.phone}</span>` : ''}
      </div>

      ${actionHtml}
    </div>
  `;
}

/* ══════════════════════════════════════════
   7. TOAST NOTIFICATION SYSTEM
   Creates floating toast messages at top-right
   @param {string} message — text to show
   @param {string} type    — 'success' | 'error' | 'info'
══════════════════════════════════════════ */

// Create the toast container div once on load
(function initToastContainer() {
  if (document.getElementById('toastContainer')) return;
  const container = document.createElement('div');
  container.id = 'toastContainer';
  document.body.appendChild(container);
})();

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  // Icon per type
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(toast);

  // Auto-remove after 3.5 seconds
  setTimeout(() => toast.remove(), 3500);
}

/* ══════════════════════════════════════════
   8. ANIMATED STAT COUNTERS
   Finds all elements with class .stat-num and
   animates them from 0 → data-target value
══════════════════════════════════════════ */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;

  // Use IntersectionObserver to trigger when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const steps  = 60;
      const delay  = 1800 / steps; // ~1.8 seconds total
      let current  = 0;

      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          el.textContent = target.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current).toLocaleString() + suffix;
        }
      }, delay);

      observer.unobserve(el); // Only animate once
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ══════════════════════════════════════════
   9. MOBILE MENU TOGGLE
   Called from hamburger button onclick
══════════════════════════════════════════ */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.toggle('open');

  // Change hamburger icon
  const btn = document.querySelector('.hamburger');
  if (btn) btn.textContent = menu.classList.contains('open') ? '✕' : '☰';
}

/* ══════════════════════════════════════════
   10. SET ACTIVE NAV LINK
   Highlights the correct nav link based on
   current page filename
   @param {string} currentPage — e.g. 'index.html'
══════════════════════════════════════════ */
function setActiveNav(currentPage) {
  document.querySelectorAll('.nav-link').forEach(link => {
    // href could be relative path or just filename
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ══════════════════════════════════════════
   11. SESSION HELPERS
   Read/write logged-in user from sessionStorage
══════════════════════════════════════════ */

// Get current user (set by auth.html)
function getCurrentUser() {
  return {
    name: sessionStorage.getItem('userName') || 'Guest',
    role: sessionStorage.getItem('userRole') || 'user'
  };
}

// Show user name in dashboard header if element exists
function injectUserGreeting(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const user = getCurrentUser();
  el.textContent = `Welcome back, ${user.name}!`;
}

/* ══════════════════════════════════════════
   12. FILTER HELPERS
   Get requests filtered by type and/or status
══════════════════════════════════════════ */
function getFilteredRequests(type = 'all', status = 'all') {
  return REQUESTS.filter(r => {
    const typeOk   = type   === 'all' || r.type   === type;
    const statusOk = status === 'all' || r.status === status;
    return typeOk && statusOk;
  });
}

/* ══════════════════════════════════════════
   13. LOCATION RADIUS FILTER
   Returns requests within a given radius (km)
   from a provided lat/lng coordinate
══════════════════════════════════════════ */
function getRequestsNearby(lat, lng, radiusKm = 50) {
  return REQUESTS.filter(r => {
    const dist = parseFloat(getDistance(lat, lng, r.location.lat, r.location.lng));
    return dist <= radiusKm;
  });
}

/* ══════════════════════════════════════════
   14. INIT — Run on every page load
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.textContent = '☰';
    }
  });

  // Animate counters if present on this page
  animateCounters();
});