const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealEls.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
  observer.observe(el);
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const parallax = document.querySelector('[data-parallax]');
const portrait = document.querySelector('.portrait-frame');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (parallax && portrait && !reduceMotion && window.innerWidth > 780) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * -8;
    portrait.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    portrait.style.transform = '';
  });
}
