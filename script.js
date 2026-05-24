/* ══════════════════════════════════════════
   MERVATI HUB — script.js
══════════════════════════════════════════ */

const html      = document.documentElement;
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

/* ── Theme ─────────────────────────────── */
const saved = localStorage.getItem('mg-theme') || 'dark';
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('mg-theme', next);
});

function applyTheme(theme) {
  html.dataset.theme = theme;
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ── Starfield + Shooting Stars ────────── */
const canvas = document.getElementById('starfield');
const ctx    = canvas.getContext('2d');

let stars    = [];
let shooters = [];
let mouse    = { x: 0, y: 0 };
const STAR_COUNT = 180;

window.addEventListener('mousemove', e => {
  mouse.x = (e.clientX / window.innerWidth  - 0.5) * 20;
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 20;
});

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  buildStars();
}

function buildStars() {
  stars = Array.from({ length: STAR_COUNT }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    r:  Math.random() * 1.5 + 0.3,
    o:  Math.random(),
    d:  Math.random() > 0.5 ? 1 : -1
  }));
}

function spawnShooter() {
  const fromLeft = Math.random() > 0.5;
  shooters.push({
    x:     fromLeft ? -20 : canvas.width + 20,
    y:     Math.random() * canvas.height * 0.6,
    vx:    fromLeft ? 9 + Math.random() * 6 : -(9 + Math.random() * 6),
    vy:    2 + Math.random() * 3,
    tail:  [],
    alpha: 1
  });
}

setInterval(spawnShooter, 2800);

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const dark = html.dataset.theme === 'dark';

  /* parallax offset */
  const ox = mouse.x;
  const oy = mouse.y;

  /* static stars */
  stars.forEach(s => {
    s.o += 0.006 * s.d;
    if (s.o >= 1 || s.o <= 0) s.d *= -1;
    const alpha = dark ? 0.35 + s.o * 0.65 : 0.06 + s.o * 0.10;
    ctx.beginPath();
    ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
    ctx.fillStyle = dark
      ? `rgba(180,210,255,${alpha})`
      : `rgba(79,70,229,${alpha})`;
    ctx.fill();
  });

  /* shooting stars */
  shooters.forEach((s, i) => {
    s.tail.unshift({ x: s.x, y: s.y });
    if (s.tail.length > 22) s.tail.pop();

    s.x += s.vx;
    s.y += s.vy;
    s.alpha -= 0.012;

    s.tail.forEach((pt, ti) => {
      const ratio = 1 - ti / s.tail.length;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, s.r * ratio * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = dark
        ? `rgba(0,255,180,${s.alpha * ratio * 0.9})`
        : `rgba(79,70,229,${s.alpha * ratio * 0.7})`;
      ctx.fill();
    });

    if (s.alpha <= 0 || s.x < -60 || s.x > canvas.width + 60) {
      shooters.splice(i, 1);
    }
  });

  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resize);
resize();
drawStars();

/* ── Typing effect na frase de missão ──── */
const missionEl   = document.querySelector('.mission-text');
const missionText = missionEl.textContent.trim();
missionEl.textContent = '';
missionEl.style.borderRight = '2px solid var(--accent)';

let charIndex = 0;
function typeNext() {
  if (charIndex < missionText.length) {
    missionEl.textContent += missionText[charIndex++];
    setTimeout(typeNext, 55 + Math.random() * 40);
  } else {
    /* cursor blink after done */
    setTimeout(() => { missionEl.style.borderRight = 'none'; }, 1200);
  }
}
setTimeout(typeNext, 600);

/* ── Card entrance (slide-up ao aparecer) ── */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-visible');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card').forEach(c => cardObserver.observe(c));

/* ── Glitch no título ───────────────────── */
const titleEl = document.querySelector('.logo-text h1');

function glitch() {
  titleEl.classList.add('glitching');
  setTimeout(() => titleEl.classList.remove('glitching'), 400);
}

setInterval(glitch, 5000 + Math.random() * 4000);

/* ── Card image fallback ────────────────── */
document.querySelectorAll('.card-img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
  img.addEventListener('load',  () => { img.nextElementSibling.style.display = 'none'; });
});
