// State Management
let cars = [];
let gallery = [];
let testimonials = [];
let cart = JSON.parse(localStorage.getItem('yourcar_cart')) || [];

// DOM Elements
const carsGrid = document.getElementById('cars-grid');
const galleryGrid = document.getElementById('gallery-grid');
const testimonialCard = document.getElementById('testimonial-card');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const navbar = document.getElementById('navbar');

// Initialize
async function init() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        cars = data.cars;
        gallery = data.gallery;
        testimonials = data.testimonials;

        renderCars();
        renderGallery();
        renderTestimonial();
        updateCartUI();
        initScrollAnimations();
    } catch (error) {
        console.error('Core error:', error);
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .car-card, .gallery-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function renderCars() {
    if (!carsGrid) return;
    carsGrid.innerHTML = cars.map((car, idx) => `
        <div class="car-card" style="transition-delay: ${idx * 0.1}s">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <h3 class="car-name">${car.name}</h3>
            <p>${car.description}</p>
            <div class="car-meta">
                <span><i class="fas fa-user-friends"></i> ${car.seats}</span>
                <span><i class="fas fa-suitcase"></i> ${car.luggage}</span>
                <span style="margin-left: auto; font-weight: 700; color: white;">Explore <i class="fas fa-arrow-right"></i></span>
            </div>
            <button class="btn btn-primary" onclick="addToCart('${car.name}')" style="width: 100%; margin-top: 30px; justify-content: center;">
                Reserve
            </button>
        </div>
    `).join('');
}

function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = gallery.map(img => `
        <div class="gallery-item">
            <img src="${img}" alt="Luxury Showcase">
        </div>
    `).join('');
}

function renderTestimonial() {
    if (!testimonialCard || testimonials.length === 0) return;
    const t = testimonials[0];
    testimonialCard.innerHTML = `
        <div style="font-size: 2rem; color: #e61e14; margin-bottom: 30px;"><i class="fas fa-quote-left"></i></div>
        <p style="font-size: 1.5rem; font-family: 'Outfit'; max-width: 800px; margin: 0 auto 40px; color: #e2e8f0;">${t.description}</p>
        <h4 style="font-size: 1.2rem; color: white;">${t.name}</h4>
        <span style="color: #64748b; font-size: 0.9rem;">Verified Client</span>
    `;
}

// Cart Logic
window.addToCart = (carName) => {
    const car = cars.find(c => c.name === carName);
    const existing = cart.find(i => i.name === carName);

    if (existing) existing.quantity++;
    else cart.push({ ...car, quantity: 1 });

    saveCart();
    updateCartUI();
    openCart();
};

window.updateQuantity = (name, delta) => {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) cart = cart.filter(i => i.name !== name);
    }
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('yourcar_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const total = cart.reduce((acc, i) => acc + i.quantity, 0);
    if (cartCount) cartCount.innerText = total;

    if (!cartSidebar) return;

    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
            <h2 style="font-size: 1.5rem;">Your Selection</h2>
            <i class="fas fa-times" id="close-cart" style="cursor: pointer; font-size: 1.2rem; color: #94a3b8;"></i>
        </div>
        <div style="flex: 1; overflow-y: auto;">
    `;

    if (cart.length === 0) {
        html += `<p style="color: #64748b; text-align: center; margin-top: 100px;">Your garage is empty.</p>`;
    } else {
        html += cart.map(item => `
            <div style="display: flex; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <img src="${item.image}" style="width: 80px; height: 50px; object-fit: contain;">
                <div style="flex: 1;">
                    <h4 style="font-size: 0.9rem; margin-bottom: 5px;">${item.name}</h4>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <button onclick="updateQuantity('${item.name}', -1)" style="background: none; border: 1px solid #475569; color: white; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">-</button>
                        <span style="font-size: 0.9rem;">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.name}', 1)" style="background: none; border: 1px solid #475569; color: white; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">+</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    html += `</div>`;

    if (cart.length > 0) {
        html += `
            <div style="margin-top: 30px;">
                <button class="btn btn-primary" style="width: 100%; justify-content: center;">Proceed to Reserve</button>
            </div>
        `;
    }

    cartSidebar.innerHTML = html;
    document.getElementById('close-cart')?.addEventListener('click', closeCartSidebar);
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

cartBtn?.addEventListener('click', openCart);
cartOverlay?.addEventListener('click', closeCartSidebar);

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

init();
