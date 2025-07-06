const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 5 + 's';
      starsContainer.appendChild(star);
    }

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('miAudio');

    // Cargar tiempo anterior si existe
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime !== null) {
      audio.currentTime = parseFloat(savedTime);
    }

    audio.volume = 0.2;
    audio.muted = false;
  
    audio.play();

    // Guardar tiempo cada segundo
    setInterval(() => {
      localStorage.setItem('audioTime', audio.currentTime);
    }, 1000);
  });