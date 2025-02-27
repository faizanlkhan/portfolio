// Typing effect
const texts = [
    "hello, world! 👋",
    "welcome to my portfolio 🚀",
    "scroll down to explore more ⬇️"
];

let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById('typed-text');
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

function type() {
    if (charIndex < texts[textIndex].length) {
        typedText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        setTimeout(type, typingDelay + 1000);
    }
}

// Start the typing animation
setTimeout(type, newTextDelay + 250);

// Section navigation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
}

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// Interactive elements
document.querySelectorAll('.project-card, .company-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});

// Add static noise effect
function createNoise() {
    const noise = document.createElement('div');
    noise.style.position = 'fixed';
    noise.style.top = '0';
    noise.style.left = '0';
    noise.style.width = '100%';
    noise.style.height = '100%';
    noise.style.pointerEvents = 'none';
    noise.style.zIndex = '1001';
    noise.style.opacity = '0.03';
    noise.style.backgroundImage = 'url("data:image/png;base64,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")';
    document.body.appendChild(noise);
}

createNoise();

// Add CRT flicker effect
function addCRTFlicker() {
    const flicker = document.createElement('div');
    flicker.style.position = 'fixed';
    flicker.style.top = '0';
    flicker.style.left = '0';
    flicker.style.width = '100%';
    flicker.style.height = '100%';
    flicker.style.pointerEvents = 'none';
    flicker.style.zIndex = '1002';
    flicker.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
    flicker.style.opacity = '0';
    document.body.appendChild(flicker);

    setInterval(() => {
        flicker.style.opacity = (Math.random() > 0.95) ? '0.05' : '0';
    }, 100);
}

addCRTFlicker();