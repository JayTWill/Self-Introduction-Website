document.querySelector('.btn-more').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

new FinisherHeader({
  count: 10,
  size: {
    min: 2,
    max: 90,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0,
      max: 0.2,
    },
    y: {
      min: 0,
      max: 0.2,
    },
  },
  colors: {
    background: "#1e5486",
    particles: ["#ff926b", "#87ddfe", "#aaffcc", "#1bffc2", "#f9a5fe"],
  },
  blending: "screen",
  opacity: {
    center: 1,
    edge: 1,
  },
  skew: -1,
  shapes: ["c", "s", "t"],
});
