function createStars() {
    const spaceSection = document.getElementById('space-section');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        spaceSection.appendChild(star);
    }
}

function animateSatellite() {
    const satellite = document.getElementById('satellite');
    const spaceSection = document.getElementById('space-section');
    
    satellite.style.top = '50%';
    satellite.style.left = '0';
    
    function orbit() {
        satellite.animate([
            { transform: 'translateX(0) translateY(-50%) rotate(0deg)' },
            { transform: `translateX(${spaceSection.clientWidth}px) translateY(-50%) rotate(360deg)` }
        ], {
            duration: 5000,
            iterations: Infinity,
            easing: 'linear'
        });
    }
    
    orbit();
}

// Run these functions when the page loads
window.addEventListener('load', () => {
    createStars();
    animateSatellite();
});
