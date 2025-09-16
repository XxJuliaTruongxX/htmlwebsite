/**
 * Scroll Animation Controller
 * Uses Intersection Observer API to trigger animations when elements enter viewport
 * Provides smooth, performant scroll-based animations for portfolio sections
 */

// Create observer to watch for elements entering the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // When element becomes visible, add animation class
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
        // UNCOMMENT IF WANT ANIMATIONS TO REPEAT WHEN VISIBLE AGAIN
        //  else {
        //     entry.target.classList.remove('animate');
        // }
    });
});

// Find all elements marked for scroll animation and start observing them
const targets = document.querySelectorAll('.animate-on-scroll');
targets.forEach((target) => {
    observer.observe(target);
});