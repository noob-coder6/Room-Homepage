document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const menuBtn = document.querySelector('.header__menu-btn');
    const closeBtn = document.querySelector('.header__close-btn');
    const nav = document.querySelector('.header__nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
    });

    // Slider
    const slides = [
        {
            title: "Discover innovative ways to decorate",
            description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            image: {
                mobile: "./images/mobile-image-hero-1.jpg",
                desktop: "./images/desktop-image-hero-1.jpg"
            }
        },
        {
            title: "We are available all across the globe",
            description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            image: {
                mobile: "./images/mobile-image-hero-2.jpg",
                desktop: "./images/desktop-image-hero-2.jpg"
            }
        },
        {
            title: "Manufactured with the best materials",
            description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
            image: {
                mobile: "./images/mobile-image-hero-3.jpg",
                desktop: "./images/desktop-image-hero-3.jpg"
            }
        }
    ];

    let currentSlide = 0;

    const heroImage = document.querySelector('.hero__image-container');
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateSlide(index) {
        const slide = slides[index];
        const imageUrl = window.innerWidth < 768 ? slide.image.mobile : slide.image.desktop;
        
        // Re-trigger animation
        const animatedElements = [heroTitle, heroDescription];
        animatedElements.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = '';
        });

        heroImage.style.backgroundImage = `url('${imageUrl}')`;
        heroTitle.textContent = slide.title;
        heroDescription.textContent = slide.description;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    });

    // Keyboard navigation for slider
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Initial slide load
    updateSlide(currentSlide);

    // Update image on resize
    window.addEventListener('resize', () => {
        // No need to re-fetch data, just update the image based on new width
        const imageUrl = window.innerWidth < 768 ? slides[currentSlide].image.mobile : slides[currentSlide].image.desktop;
        heroImage.style.backgroundImage = `url('${imageUrl}')`;
    });
});