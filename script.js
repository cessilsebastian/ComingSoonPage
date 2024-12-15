// Countdown Timer Logic
const targetDate = new Date("2024-12-31T23:59:59").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.container').innerHTML = '<h1>We Are Live!</h1>';
    }
}, 1000);

// Random Floating Particles
function createParticles(count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const randomSize = Math.random() * 15 + 5;
        const randomDuration = Math.random() * 15 + 5;

        particle.style.position = 'absolute';
        particle.style.left = `${randomX}px`;
        particle.style.top = `${randomY}px`;
        particle.style.width = `${randomSize}px`;
        particle.style.height = `${randomSize}px`;
        particle.style.background = 'rgba(255, 255, 255, 0.2)';
        particle.style.borderRadius = '50%';
        particle.style.animation = `floatParticles ${randomDuration}s infinite linear`;

        // Add keyframes dynamically
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes floatParticles {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                50% {
                    transform: translateY(-50vh) scale(0.5);
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
            }
        `, styleSheet.cssRules.length);
    }
}

createParticles(50);
