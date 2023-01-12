const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        };
        // UNCOMMENT IF WANT ANIMATIONS TO REPEAT WHEN VISIBLE AGAIN
        //  else {
        //     entry.target.classList.remove('animate');
        // }
    }
    );
});

const targets = document.querySelectorAll('.animate-on-scroll');
targets.forEach((target) => {
    observer.observe(target);
});