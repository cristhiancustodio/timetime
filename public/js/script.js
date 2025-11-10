// Crear copos de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);

// Cuenta regresiva
function updateCountdown() {
    const christmas = new Date('December 25, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = christmas - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Calcular progreso basado en días del año
    const yearStart = new Date('January 1, 2025 00:00:00');
    const yearEnd = new Date('December 31, 2025 23:59:59');
    const totalDaysInYear = Math.ceil((yearEnd - yearStart) / (1000 * 60 * 60 * 24));
    const daysPassed = Math.floor((now - yearStart) / (1000 * 60 * 60 * 24));
    const progress = Math.min((daysPassed / totalDaysInYear) * 100, 100);

    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressPercentage').textContent = progress.toFixed(1) + '%';

    if (distance < 0) {
        document.querySelector('.subtitle').textContent = '¡Feliz Navidad! 🎄🎅🎁';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('progressBar').style.width = '100%';
        document.getElementById('progressPercentage').textContent = '100%';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);