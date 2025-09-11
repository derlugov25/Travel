// Smooth scrolling and interactive animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Parallax effect for stars
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const stars = document.querySelectorAll('.stars, .stars2, .stars3');
        
        stars.forEach((star, index) => {
            const speed = 0.5 + (index * 0.1);
            star.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Interactive particle system
    createInteractiveParticles();
    
    // Typing animation for company name
    typeWriter();
    
    // Smooth reveal animations on scroll
    initScrollAnimations();
    
    // Interactive button effects
    initButtonEffects();
    
    // Chat widget functionality
});

// Create floating particles that follow mouse
function createInteractiveParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'interactive-particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            transition: all 0.3s ease;
        `;
        particlesContainer.appendChild(particle);
    }
    
    let mouseX = 0, mouseY = 0;
    let particles = document.querySelectorAll('.interactive-particle');
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        particles.forEach((particle, index) => {
            const delay = index * 0.1;
            setTimeout(() => {
                const x = mouseX + (Math.random() - 0.5) * 100;
                const y = mouseY + (Math.random() - 0.5) * 100;
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.opacity = '1';
            }, delay * 1000);
        });
    });
    
    document.addEventListener('mouseleave', () => {
        particles.forEach(particle => {
            particle.style.opacity = '0';
        });
    });
}

// Typing animation for company name (simplified for "Expi")
function typeWriter() {
    const expiElement = document.querySelector('.expi');
    
    if (!expiElement) return;
    
    const expiText = expiElement.textContent;
    expiElement.textContent = '';
    
    let i = 0;
    const typeSpeed = 200;
    
    function typeExpi() {
        if (i < expiText.length) {
            expiElement.textContent += expiText.charAt(i);
            i++;
            setTimeout(typeExpi, typeSpeed);
        }
    }
    
    setTimeout(typeExpi, 1000);
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
    
    // Observe contact section
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.style.animationPlayState = 'paused';
        observer.observe(contactSection);
    }
}

// Enhanced button effects
function initButtonEffects() {
    const ctaButton = document.querySelector('.cta-button');
    if (!ctaButton) return;
    
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.6)';
        
        // Create ripple effect
        createRipple(this, event);
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
    });
    
    ctaButton.addEventListener('click', function(e) {
        createRipple(this, e);
        
        // Show notification
        showNotification('Thank you! We\'ll notify you when we launch.');
    });
}

// Create ripple effect on button click
function createRipple(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Chat widget functionality
    const chatWidget = document.querySelector('.chat-widget');
    if (!chatWidget) return;
    
    chatWidget.addEventListener('click', function() {
        showNotification('Chat feature coming soon! Contact us at hello@expi.travel');
        
        // Add bounce animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 2s infinite';
        }, 100);
    });
}

// Add floating animation to feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0deg)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        });
    });
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
