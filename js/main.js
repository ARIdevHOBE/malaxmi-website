// ===== MA LAXMI SALE & SERVICE — Main JavaScript =====

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');

    // Only apply scroll-based nav on pages with hero (home)
    if (hero) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        navOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== SCROLL REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== HERO PARALLAX =====
    const heroBg = document.getElementById('heroBg');

    if (heroBg && hero) {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    const heroHeight = hero.offsetHeight;

                    if (scrolled <= heroHeight) {
                        const parallaxValue = scrolled * 0.35;
                        heroBg.style.transform = `scale(1.1) translateY(${parallaxValue}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ===== PORTFOLIO FILTER =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item[data-category]');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';

                        setTimeout(() => {
                            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';

                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }

    // ===== CONTACT FORM — Google Sheets Integration =====
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Collect form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                service: document.getElementById('service').value,
                message: document.getElementById('message').value.trim()
            };

            // Simple validation
            if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
                return;
            }

            // Update button state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;

            try {
                const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzE0OCdqepfleLWtPX1lwXym_bQTMyCeUehLel13a8UEncar1lr2FQJe1kv9Qirnn_a/exec';

                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                // Show success (no-cors means we can't read the response, but data still sends)
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');

            } catch (error) {
                console.error('Form submission error:', error);
                submitBtn.textContent = 'Error! Try Again';
                submitBtn.disabled = false;

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                }, 3000);
            }
        });

        // Add focus/blur effects to inputs
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight + 20;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== COUNTER ANIMATION FOR STATS =====
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const text = target.textContent;
                    const match = text.match(/(\d+)/);

                    if (match) {
                        const endValue = parseInt(match[1]);
                        const suffix = text.replace(match[1], '');
                        let startValue = 0;
                        const duration = 2000;
                        const increment = endValue / (duration / 16);

                        const counter = setInterval(() => {
                            startValue += increment;
                            if (startValue >= endValue) {
                                target.textContent = text;
                                clearInterval(counter);
                            } else {
                                target.textContent = Math.floor(startValue) + suffix;
                            }
                        }, 16);
                    }

                    counterObserver.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => counterObserver.observe(num));
    }

});
