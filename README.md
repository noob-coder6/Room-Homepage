# Frontend Mentor - Room Homepage Solution

This is my solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Key Features](#key-features)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- ✅ View the optimal layout for the site depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ Navigate the slider using either their mouse/trackpad or keyboard (arrow keys)
- ✅ Experience smooth transitions and animations

### Links

- Solution URL: [Solution UR](https://github.com/noob-coder6/Room-Homepage.git)
- Live Site URL: [Live site URL](https://noob-coder6.github.io/Room-Homepage/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- Flexbox for navigation and content alignment
- CSS Grid for complex two-dimensional layouts
- Mobile-first workflow
- Vanilla JavaScript (no frameworks)
- CSS animations and transitions

### What I Learned

This project helped me understand:

#### **1. Advanced CSS Grid Layouts**
I learned how to create overlapping grid items and complex responsive layouts:

```css
.hero {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
}

.hero__slider-controls {
    grid-row: 1;
    grid-column: 1;
    align-self: end;
    justify-self: end;
}
```

#### **2. Combining Grid and Flexbox**
Understanding when to use Grid vs Flexbox was crucial:
- **Grid**: For the main page layout (2D positioning)
- **Flexbox**: For navigation and content flow (1D positioning)

#### **3. JavaScript Slider Implementation**
Created a dynamic image slider with:
- Content replacement technique
- Modulo operator for infinite looping
- Keyboard navigation support
- Responsive image switching

```javascript
currentSlide = (currentSlide + 1) % slides.length;
```

#### **4. CSS Animation Reset Trick**
Learned how to re-trigger CSS animations on content updates:

```javascript
el.style.animation = 'none';
el.offsetHeight; // Force reflow
el.style.animation = '';
```

#### **5. Responsive Design Patterns**
Implemented mobile-first approach with:
- Media queries for breakpoints
- Responsive navigation (hamburger menu)
- Dynamic image loading based on viewport

### Key Features

**🎨 Smooth Animations**
- Slide-up text animations on content change
- Hover effects on interactive elements
- CSS transitions for background image changes

**📱 Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Adaptive image loading (mobile/desktop versions)
- Flexible grid system that adapts to screen size

**♿ Accessibility Features**
- Keyboard navigation for slider (arrow keys)
- ARIA labels for screen readers
- Focus states for all interactive elements
- Semantic HTML structure

**⚡ Performance Optimizations**
- Single set of DOM elements (efficient rendering)
- CSS transitions instead of JavaScript animations
- Optimized image loading

### Code Highlights

**Responsive Grid Layout:**
```css
@media (min-width: 768px) {
    main {
        display: grid;
        grid-template-columns: 2fr 1.5fr;
        grid-template-rows: auto 1fr;
    }
}
```

**Infinite Slider Logic:**
```javascript
// Wraps around: 0 → 1 → 2 → 0 → 1...
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
});
```

**Overlay Navigation:**
```css
.header {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
}
```

### Useful Resources

**Learning Materials:**
- [CSS-Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Essential visual guide
- [CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Comprehensive Grid reference
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game for learning Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Interactive game for learning Grid
- [Kevin Powell's YouTube](https://www.youtube.com/@KevinPowell) - Excellent CSS tutorials
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Reliable documentation

**Tools Used:**
- Google Fonts (League Spartan)
- VS Code
- Chrome DevTools

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- GitHub - [@noob-coder6](https://github.com/noob-coder6)

---

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the community for feedback and support!

## License

This project is open source and available for learning purposes.