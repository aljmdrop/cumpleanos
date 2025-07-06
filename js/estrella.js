window.onload = function() {
    function crearEstrellaFugaz() {
  const star = document.createElement('img');
  star.src = 'img/harry.png';
  star.classList.add('shooting-star');
  star.alt = 'Estrella fugaz';
  document.body.appendChild(star);

  const topPos = Math.random() * window.innerHeight;
  star.style.top = `${topPos}px`;
  star.style.left = `-100px`;
  star.style.opacity = 1;

  star.animate([
    { left: '-100px', top: `${topPos}px`, opacity: 0 },
    { left: '50%', top: `${topPos + 100}px`, opacity: 1 },
    { left: '120%', top: `${topPos + 300}px`, opacity: 0 }
  ], {
    duration: 3000,
    easing: 'linear'
  });

  setTimeout(() => star.remove(), 3000);
}

setInterval(crearEstrellaFugaz, 3000);
};
