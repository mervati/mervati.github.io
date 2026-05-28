/* ══════════════════════════════════════════
   MERVATI HUB — script.js
══════════════════════════════════════════ */

/* ── Loading screen ─────────────────────────────── */
(function () {
  const path   = window.location.pathname;
  const isHome = path === '/' || path.endsWith('/index.html') || path.endsWith('mervati.github.io/');
  if (!isHome) return;

  const navType      = performance.getEntriesByType('navigation')[0]?.type;
  const isReload     = navType === 'reload';
  const isFirstVisit = !sessionStorage.getItem('mg-visited');
  if (!isReload && !isFirstVisit) return;
  sessionStorage.setItem('mg-visited', '1');

  const screen = document.createElement('div');
  screen.id = 'loading-screen';
  screen.innerHTML = `
    <div class="loading-ufo-wrap">
      <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <!-- dome -->
        <ellipse cx="50" cy="30" rx="18" ry="13" fill="#0a0a1e" stroke="#00ff99" stroke-width="1.5"/>
        <ellipse cx="50" cy="24" rx="10" ry="7"  fill="rgba(0,207,255,0.07)" stroke="#00cfff" stroke-width="1"/>
        <!-- saucer -->
        <ellipse cx="50" cy="33" rx="34" ry="10" fill="#0d0d28" stroke="#00ff99" stroke-width="1.5"/>
        <!-- luzes -->
        <circle cx="24" cy="33" r="2.8" fill="#00ff99"/>
        <circle cx="35" cy="38" r="2.8" fill="#ff00cc"/>
        <circle cx="50" cy="40" r="2.8" fill="#00cfff"/>
        <circle cx="65" cy="38" r="2.8" fill="#ffe600"/>
        <circle cx="76" cy="33" r="2.8" fill="#00ff99"/>
      </svg>
      <div class="loading-beam"></div>
    </div>
    <p class="loading-label">MERVATI HUB</p>
    <p style="font-family:'Exo 2',sans-serif;font-size:0.72rem;letter-spacing:0.2em;color:#7080bb" class="loading-dots">Entrando na órbita</p>
  `;
  document.body.prepend(screen);
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    screen.classList.add('fade-out');
    document.body.style.overflow = '';
    setTimeout(() => screen.remove(), 420);
  }, 1100);
}());

/* ── Scroll progress bar ────────────────────────── */
const scrollBar = document.createElement('div');
scrollBar.className = 'scroll-progress';
document.body.prepend(scrollBar);

window.addEventListener('scroll', () => {
  const max      = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollBar.style.width = `${progress}%`;
}, { passive: true });

/* ── Back to top button ─────────────────────────── */
const backBtn = document.createElement('button');
backBtn.className = 'back-to-top';
backBtn.title = 'Voltar ao topo';
backBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
document.body.appendChild(backBtn);

window.addEventListener('scroll', () => {
  backBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Menu hamburger (mobile) ────────────────────── */
(function () {
  const btn  = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('headerControls');
  if (!btn || !menu) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
  });

  /* fecha ao clicar fora */
  document.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.classList.remove('open');
  });
  menu.addEventListener('click', e => e.stopPropagation());

  /* fecha ao clicar em link de nav */
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
    });
  });
}());

/* ── Transição entre páginas ────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  /* Fade in ao carregar */
  requestAnimationFrame(() => document.body.classList.add('page-visible'));

  /* Fade out ao navegar pelos links internos */
  document.querySelectorAll('a.nav-link, a.notfound-btn').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      e.preventDefault();
      document.body.classList.remove('page-visible');
      setTimeout(() => { window.location.href = href; }, 360);
    });
  });
});

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

/* ── Acessibilidade ─────────────────────── */
(function () {
  const fontBtn     = document.getElementById('fontSizeBtn');
  const contrastBtn = document.getElementById('contrastBtn');
  let fontLarge    = localStorage.getItem('mg-font-large') === '1';
  let highContrast = localStorage.getItem('mg-contrast')   === '1';

  function applyAccess() {
    document.documentElement.classList.toggle('font-large',    fontLarge);
    document.documentElement.classList.toggle('high-contrast', highContrast);
    fontBtn?.classList.toggle('active',     fontLarge);
    contrastBtn?.classList.toggle('active', highContrast);
  }

  applyAccess();

  fontBtn?.addEventListener('click', () => {
    fontLarge = !fontLarge;
    localStorage.setItem('mg-font-large', fontLarge ? '1' : '0');
    applyAccess();
  });

  contrastBtn?.addEventListener('click', () => {
    highContrast = !highContrast;
    localStorage.setItem('mg-contrast', highContrast ? '1' : '0');
    applyAccess();
  });
}());

/* ── Tema sazonal ───────────────────────── */
function getSeasonalTheme() {
  const d = new Date();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  if ((m === 12 && day >= 29) || (m === 1 && day <= 4))  return 'anonovo';
  if (m === 12 && day >= 1 && day <= 25)                  return 'natal';
  if (m === 2  && day >= 11 && day <= 17)                 return 'namorados';
  if ((m === 10 && day >= 28) || (m === 11 && day <= 3))  return 'halloween';
  return 'normal';
}
const SEASONAL_THEME = getSeasonalTheme();

/* ── Starfield + Shooting Stars ────────── */
const canvas   = document.getElementById('starfield');
const ctx      = canvas.getContext('2d');
const IS_404   = document.body.dataset.page === '404';

let stars    = [];
let shooters = [];
let themeParticles = [];
let confetti = [];
let mouse    = { x: 0, y: 0 };
const STAR_COUNT = 180;

window.addEventListener('mousemove', e => {
  mouse.x = (e.clientX / window.innerWidth  - 0.5) * 20;
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 20;
});

/* ── Nebulosa (página 404) ──────────────── */
let nebulaClouds = [];

function buildNebula() {
  nebulaClouds = Array.from({ length: 220 }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     60 + Math.random() * 140,
    hue:   Math.floor(Math.random() * 360),
    alpha: 0.03 + Math.random() * 0.06,
    drift: (Math.random() - 0.5) * 0.08,
    pulse: Math.random() * Math.PI * 2,
  }));
  /* adiciona estrelas de fundo */
  if (!stars.length) buildStars();
}

function drawNebula() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* estrelas de fundo pequenas */
  stars.forEach(s => {
    s.o += 0.004 * s.d;
    if (s.o >= 1 || s.o <= 0) s.d *= -1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200,215,255,${0.15 + s.o * 0.4})`;
    ctx.fill();
  });

  /* nuvens de nebulosa */
  nebulaClouds.forEach(c => {
    c.pulse += 0.005;
    c.x += c.drift;
    if (c.x > canvas.width + c.r)  c.x = -c.r;
    if (c.x < -c.r)                 c.x = canvas.width + c.r;
    const a = c.alpha * (0.85 + Math.sin(c.pulse) * 0.15);
    const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
    g.addColorStop(0, `hsla(${c.hue},90%,65%,${a})`);
    g.addColorStop(1, `hsla(${c.hue},90%,65%,0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  });

  /* estrelas brilhantes sobre a nebulosa */
  stars.slice(0, 40).forEach(s => {
    if (s.o > 0.7) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r + 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${(s.o - 0.7) * 3})`;
      ctx.fill();
    }
  });

  if (!animPaused) requestAnimationFrame(drawNebula);
}

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  if (IS_404) { buildNebula(); return; }
  if (SEASONAL_THEME === 'normal') buildStars();
  else buildThemeParticles();
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

/* ── Partículas temáticas ───────────────── */
const NATAL_CHARS     = ['❄','❅','❆','*'];
const NAMORADOS_CHARS = ['♥','❤','💕','💗','💖','✨'];
const HALLOWEEN_CHARS = ['🎃','💀','🕷','🦇','👻','🕸'];
const CONFETTI_COLORS = ['#ffe600','#00ff99','#ff00cc','#00cfff','#ff6b35','#ffffff'];

function buildThemeParticles() {
  if (SEASONAL_THEME === 'natal') {
    themeParticles = Array.from({ length: 120 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      size:  10 + Math.random() * 18,
      speed: 0.4 + Math.random() * 0.8,
      drift: (Math.random() - 0.5) * 0.4,
      alpha: 0.4 + Math.random() * 0.6,
      char:  NATAL_CHARS[Math.floor(Math.random() * NATAL_CHARS.length)],
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.02,
    }));
  } else if (SEASONAL_THEME === 'namorados') {
    themeParticles = Array.from({ length: 80 }, () => ({
      x:     Math.random() * canvas.width,
      y:     canvas.height + Math.random() * canvas.height,
      size:  12 + Math.random() * 22,
      speed: 0.3 + Math.random() * 0.7,
      drift: (Math.random() - 0.5) * 0.5,
      alpha: 0.3 + Math.random() * 0.7,
      char:  NAMORADOS_CHARS[Math.floor(Math.random() * NAMORADOS_CHARS.length)],
      pulse: Math.random() * Math.PI * 2,
    }));
  } else if (SEASONAL_THEME === 'halloween') {
    themeParticles = Array.from({ length: 60 }, () => ({
      x:      Math.random() * canvas.width,
      y:      Math.random() * canvas.height,
      size:   14 + Math.random() * 24,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: 0.2 + Math.random() * 0.5,
      alpha:  0.3 + Math.random() * 0.7,
      char:   HALLOWEEN_CHARS[Math.floor(Math.random() * HALLOWEEN_CHARS.length)],
      wobble: Math.random() * Math.PI * 2,
    }));
  }
}

function confettiBurst() {
  const cx = 0.1 * canvas.width  + Math.random() * 0.8 * canvas.width;
  const cy = 0.1 * canvas.height + Math.random() * 0.5 * canvas.height;
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.2 + Math.random() * 2.5;
    confetti.push({
      x:     cx,
      y:     cy,
      vx:    Math.cos(angle) * speed,
      vy:    Math.sin(angle) * speed - 2,
      size:  4 + Math.random() * 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      alpha: 1,
      rot:   Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    });
  }
}

if (SEASONAL_THEME === 'anonovo') {
  setInterval(confettiBurst, 2500);
  setTimeout(confettiBurst, 300);
}

function spawnShooter() {
  const fromLeft = Math.random() > 0.5;
  shooters.push({
    x:     fromLeft ? -20 : canvas.width + 20,
    y:     Math.random() * canvas.height * 0.6,
    vx:    fromLeft ? 9 + Math.random() * 6 : -(9 + Math.random() * 6),
    vy:    2 + Math.random() * 3,
    r:     0.8 + Math.random() * 0.8,
    tail:  [],
    alpha: 1
  });
}

setInterval(spawnShooter, 2800);

const LIGHT_STAR_COLORS = [
  '139,92,246',
  '236,72,153',
  '6,182,212',
  '251,146,60',
  '34,197,94',
];

function drawStars() {
  const dark = html.dataset.theme === 'dark';
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (SEASONAL_THEME === 'normal') {
    const ox = mouse.x;
    const oy = mouse.y;

    stars.forEach(s => {
      s.o += 0.006 * s.d;
      if (s.o >= 1 || s.o <= 0) s.d *= -1;
      if (dark) {
        ctx.beginPath();
        ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${0.35 + s.o * 0.65})`;
        ctx.fill();
      } else {
        const color = LIGHT_STAR_COLORS[Math.floor(s.x * s.y) % LIGHT_STAR_COLORS.length];
        ctx.beginPath();
        ctx.arc(s.x + ox, s.y + oy, s.r * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${0.4 + s.o * 0.6})`;
        ctx.fill();
      }
    });

    shooters.forEach((s, i) => {
      s.tail.unshift({ x: s.x, y: s.y });
      if (s.tail.length > 22) s.tail.pop();
      s.x += s.vx; s.y += s.vy; s.alpha -= 0.012;
      s.tail.forEach((pt, ti) => {
        const ratio = 1 - ti / s.tail.length;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, s.r * ratio * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(255,220,0,${s.alpha * ratio * 0.9})`
          : `rgba(255,220,0,${s.alpha * ratio * 0.8})`;
        ctx.fill();
      });
      if (s.alpha <= 0 || s.x < -60 || s.x > canvas.width + 60) shooters.splice(i, 1);
    });

  } else if (SEASONAL_THEME === 'natal') {
    themeParticles.forEach(f => {
      f.y += f.speed; f.x += f.drift; f.angle += f.spin;
      if (f.y > canvas.height + 30) { f.y = -30; f.x = Math.random() * canvas.width; }
      if (f.x > canvas.width  + 30) f.x = -30;
      if (f.x < -30)                 f.x = canvas.width + 30;
      ctx.save();
      ctx.globalAlpha = f.alpha;
      ctx.translate(f.x, f.y); ctx.rotate(f.angle);
      ctx.font = `${f.size}px serif`;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(f.char, 0, 0);
      ctx.restore();
    });

  } else if (SEASONAL_THEME === 'namorados') {
    themeParticles.forEach(h => {
      h.y -= h.speed; h.x += h.drift; h.pulse += 0.03;
      const scale = 1 + Math.sin(h.pulse) * 0.08;
      if (h.y < -40) { h.y = canvas.height + 40; h.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.globalAlpha = h.alpha;
      ctx.translate(h.x, h.y); ctx.scale(scale, scale);
      ctx.font = `${h.size}px serif`;
      ctx.fillStyle = '#ff6eb4';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(h.char, 0, 0);
      ctx.restore();
    });

  } else if (SEASONAL_THEME === 'halloween') {
    themeParticles.forEach(it => {
      it.y += it.speedY; it.wobble += 0.02;
      it.x += Math.sin(it.wobble) * 0.4;
      if (it.y > canvas.height + 40) { it.y = -40; it.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.globalAlpha = it.alpha;
      ctx.font = `${it.size}px serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(it.char, it.x, it.y);
      ctx.restore();
    });

  } else if (SEASONAL_THEME === 'anonovo') {
    /* estrelas de fundo */
    stars.forEach(s => {
      s.o += 0.006 * s.d;
      if (s.o >= 1 || s.o <= 0) s.d *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${0.2 + s.o * 0.5})`;
      ctx.fill();
    });
    /* confetes */
    confetti = confetti.filter(p => p.alpha > 0.02);
    confetti.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.06; p.vx *= 0.98;
      p.alpha -= 0.007; p.rot += p.spin;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    });
  }

  if (!animPaused) requestAnimationFrame(drawStars);
}

let animPaused = false;

document.addEventListener('visibilitychange', () => {
  animPaused = document.hidden;
  if (!animPaused) {
    if (IS_404) drawNebula();
    else        drawStars();
  }
});

window.addEventListener('resize', resize);
resize();
if (IS_404) {
  drawNebula();
} else {
  if (SEASONAL_THEME === 'anonovo') buildStars();
  drawStars();
}

/* ── Typing effect na frase de missão ──── */
const missionEl = document.querySelector('.mission-text');
if (missionEl) {
  const missionText = missionEl.textContent.trim();
  missionEl.textContent = '';
  missionEl.style.borderRight = '2px solid var(--accent)';

  let charIndex = 0;
  function typeNext() {
    if (charIndex < missionText.length) {
      missionEl.textContent += missionText[charIndex++];
      setTimeout(typeNext, 55 + Math.random() * 40);
    } else {
      setTimeout(() => { missionEl.style.borderRight = 'none'; }, 1200);
    }
  }
  setTimeout(typeNext, 600);
}

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

/* ── Share button ───────────────────────────── */
const shareBtn      = document.getElementById('shareBtn');
const shareDropdown = document.getElementById('shareDropdown');

if (shareBtn && shareDropdown) {
  const url  = encodeURIComponent(window.location.href);
  const msg  = window._shareMsg || 'Confira o Mervati Hub — portal de projetos da Mariana! 🛸';
  const text = encodeURIComponent(msg);

  document.getElementById('shareWhatsapp').href = `https://wa.me/?text=${text}%20${url}`;
  document.getElementById('shareLinkedin').href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
  document.getElementById('shareX').href        = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

  shareBtn.addEventListener('click', e => {
    e.stopPropagation();
    shareDropdown.classList.toggle('open');
  });

  document.getElementById('shareCopy').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const label      = document.getElementById('copyLabel');
      const copiedText = TRANSLATIONS[currentLang]?.['share.copied'] || 'Copiado! ✓';
      const copyText   = TRANSLATIONS[currentLang]?.['share.copy']   || 'Copiar link';
      label.textContent = copiedText;
      setTimeout(() => { label.textContent = copyText; }, 2000);
    });
  });

  document.addEventListener('click', () => shareDropdown.classList.remove('open'));
  shareDropdown.addEventListener('click', e => e.stopPropagation());
}

/* ── Entrada gradual dos blocos (sobre.html) ── */
const blocos = document.querySelectorAll('.bloco, .hero-sobre, .duas-colunas');
if (blocos.length) {
  const blocoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        blocoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  blocos.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    blocoObserver.observe(el);
  });
}

/* ── Heatmap de Skills (sobre.html) ────────── */
(function () {
  const hmHead = document.getElementById('hm-head');
  const hmBody = document.getElementById('hm-body');
  if (!hmHead || !hmBody) return;

  const YEARS  = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const LABELS = ['Nenhum', 'Ocasional', 'Regular', 'Frequente', 'Intenso'];

  const SKILLS = [
    { name: 'SAP BASIS',       data: [0, 0, 1, 3, 4, 4, 4, 3] },
    { name: 'Entra ID / IAM',  data: [0, 0, 1, 2, 3, 4, 4, 4] },
    { name: 'LGPD / GDPR',     data: [0, 1, 2, 3, 3, 4, 4, 3] },
    { name: 'Microsoft 365',   data: [0, 1, 2, 3, 4, 4, 3, 3] },
    { name: 'SharePoint',      data: [0, 0, 1, 2, 4, 3, 2, 2] },
    { name: 'JavaScript',      data: [0, 1, 1, 2, 3, 3, 4, 4] },
    { name: 'HTML / CSS',      data: [0, 1, 2, 2, 3, 3, 4, 4] },
    { name: 'ManageEngine',    data: [0, 0, 0, 1, 3, 4, 3, 2] },
  ];

  /* cabeçalho dos anos */
  YEARS.forEach(y => {
    const el = document.createElement('div');
    el.className = 'hm-year';
    el.textContent = y;
    hmHead.appendChild(el);
  });

  /* tooltip */
  let tooltip = document.querySelector('.hm-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.className = 'hm-tooltip';
    document.body.appendChild(tooltip);
  }

  /* linhas */
  SKILLS.forEach(skill => {
    const row   = document.createElement('div');
    row.className = 'hm-row';

    const label = document.createElement('div');
    label.className   = 'hm-skill';
    label.textContent = skill.name;
    row.appendChild(label);

    const cells = document.createElement('div');
    cells.className = 'hm-cells';

    skill.data.forEach((intensity, yi) => {
      const cell = document.createElement('div');
      cell.className = `hm-cell hm-i${intensity}`;

      cell.addEventListener('mousemove', e => {
        tooltip.textContent = `${skill.name} · ${YEARS[yi]} · ${LABELS[intensity]}`;
        tooltip.classList.add('show');
        tooltip.style.left = (e.clientX + 12) + 'px';
        tooltip.style.top  = (e.clientY - 34) + 'px';
      });
      cell.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
      cells.appendChild(cell);
    });

    row.appendChild(cells);
    hmBody.appendChild(row);
  });
}());

/* ── Scramble no nome (sobre.html) ─────────── */
const heroName = document.querySelector('.hero-name');
if (heroName) {
  const original = heroName.textContent;
  const chars    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*!?<>';
  let   animating = false;

  heroName.addEventListener('mouseenter', () => {
    if (animating) return;
    animating = true;

    const letters = original.split('');
    let  iterations = 0;
    const total     = letters.length * 3;

    const interval = setInterval(() => {
      heroName.textContent = letters
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iterations / 3) return original[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      iterations++;
      if (iterations > total) {
        heroName.textContent = original;
        clearInterval(interval);
        animating = false;
      }
    }, 35);
  });
}

/* ── Contador animado (stats) ───────────── */
const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length) {
  function animateStat(el) {
    const target  = parseFloat(el.dataset.target);
    const suffix  = el.dataset.suffix || '';
    const decimal = parseInt(el.dataset.decimal || '0');
    let current   = 0;
    const step    = target / 60;
    const timer   = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = (decimal > 0 ? current.toFixed(decimal) : Math.floor(current)) + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  let locAnimated = false;

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (entry.target === locStat) locAnimated = true;
      animateStat(entry.target);
      statObserver.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  /* anos em TI — calcula a partir do ano de início */
  const yearsStat = document.querySelector('.stat-number[data-stat="years"]');
  if (yearsStat) {
    const startYear = parseInt(yearsStat.dataset.start);
    const years     = new Date().getFullYear() - startYear;
    yearsStat.dataset.target = years;
    yearsStat.textContent    = '0+';
  }

  /* certificações — conta os itens já na página */
  const certsStat = document.querySelector('.stat-number[data-stat="certs"]');
  if (certsStat) {
    const count = document.querySelectorAll('.cert-item').length;
    if (count > 0) certsStat.dataset.target = count;
  }

  /* projetos ativos — busca index.html e conta cards ativos */
  const projectStat = document.querySelector('.stat-number[data-stat="projects"]');

  /* linhas de código — soma todos os repositórios via codetabs API */
  const locStat = document.querySelector('.stat-number[data-stat="loc"]');

  const REPOS = [
    'mervati/mervati.github.io',
    'mervati/Jogo-da-Memoria',
    'mervati/thalita-jantorno',
  ];

  const LOC_CACHE_KEY = 'mg-loc';
  const LOC_CACHE_TTL = 24 * 60 * 60 * 1000; /* 1 dia */
  const BYTES_PER_LINE = 40;

  function applyLOC(k) {
    if (!locStat || !k) return;
    locStat.dataset.target  = k;
    locStat.dataset.suffix  = 'k';
    locStat.dataset.decimal = '1';
    if (locAnimated) animateStat(locStat);
  }

  function fetchLOC() {
    if (!locStat) return Promise.resolve();

    /* mostra valor cacheado imediatamente se ainda válido */
    try {
      const cached = JSON.parse(localStorage.getItem(LOC_CACHE_KEY) || 'null');
      if (cached && Date.now() - cached.ts < LOC_CACHE_TTL) {
        applyLOC(cached.k);
        return Promise.resolve();
      }
    } catch {}

    /* GitHub Languages API — retorna bytes por linguagem, converte para linhas */
    return Promise.all(
      REPOS.map(repo =>
        fetch(`https://api.github.com/repos/${repo}/languages`, { cache: 'no-store' })
          .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
          .then(data => {
            const bytes = Object.values(data).reduce((a, b) => a + b, 0);
            return Math.round(bytes / BYTES_PER_LINE);
          })
          .catch(() => 0)
      )
    ).then(counts => {
      const total = counts.reduce((a, b) => a + b, 0);
      if (total > 0) {
        const k = Math.round(total / 100) / 10;
        localStorage.setItem(LOC_CACHE_KEY, JSON.stringify({ k, ts: Date.now() }));
        applyLOC(k);
      }
    });
  }

  const projectFetch = projectStat
    ? fetch('index.html')
        .then(r => r.text())
        .then(html => {
          const doc   = new DOMParser().parseFromString(html, 'text/html');
          const count = doc.querySelectorAll('.card:not(.card-soon)').length;
          if (count > 0) projectStat.dataset.target = count;
        })
        .catch(() => {})
    : Promise.resolve();

  /* stats animam imediatamente, LOC atualiza em segundo plano */
  projectFetch.finally(() => statNumbers.forEach(el => statObserver.observe(el)));
  fetchLOC();
}

/* ── Formulário de contato ──────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn      = contactForm.querySelector('.form-send-btn');
    const feedback = document.getElementById('formFeedback');
    const dict     = typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS[typeof currentLang !== 'undefined' ? currentLang : 'pt-BR'] || {} : {};

    btn.disabled    = true;
    btn.textContent = dict['contact.form.sending'] || 'Enviando...';
    feedback.textContent = '';
    feedback.className   = 'form-feedback';

    try {
      const res = await fetch(contactForm.action, {
        method:  'POST',
        body:    new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        feedback.textContent = dict['contact.form.success'] || 'Mensagem enviada!';
        feedback.classList.add('success');
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      feedback.textContent = dict['contact.form.error'] || 'Erro. Tente novamente.';
      feedback.classList.add('error');
    } finally {
      btn.disabled    = false;
      btn.textContent = dict['contact.form.send'] || '🚀 ENVIAR';
    }
  });
}

/* ── Painel secreto (double-click no logo) ─── */
(function () {
  const logoGroup = document.querySelector('.logo-group');
  if (!logoGroup) return;

  function formatUptime(startMs) {
    const diff = Date.now() - startMs;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    return `${d}d ${h}h`;
  }

  function getStartMs() {
    const CACHE_KEY = 'mg-hub-created';
    const CACHE_TTL = 24 * 60 * 60 * 1000;
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
      if (cached && Date.now() - cached.ts < CACHE_TTL) return Promise.resolve(cached.ms);
    } catch {}
    return fetch('https://api.github.com/repos/mervati/mervati.github.io')
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(data => {
        const ms = new Date(data.created_at).getTime();
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ms, ts: Date.now() })); } catch {}
        return ms;
      })
      .catch(() => null);
  }

  function openSecretPanel() {
    if (document.getElementById('secret-panel')) return;

    const eggs   = (() => { try { return JSON.parse(localStorage.getItem('mg-ach-eggs') || '[]'); } catch { return []; } })();
    const badges = (() => { try { return JSON.parse(localStorage.getItem('mg-ach-badges') || '[]'); } catch { return []; } })();

    function buildPanel(uptimeStr, lastUpdStr) {
      const panel = document.createElement('div');
      panel.id = 'secret-panel';
      panel.innerHTML = `
        <div class="sp-inner">
          <div class="sp-head">
            <span class="sp-title">🛸 DADOS DA NAVE</span>
            <button class="sp-close" id="spClose">✕</button>
          </div>
          <div class="sp-stats">
            <div class="sp-stat">
              <span class="sp-stat-label">⭐ Estrelas no canvas</span>
              <span class="sp-stat-value">${STAR_COUNT}</span>
            </div>
            <div class="sp-stat">
              <span class="sp-stat-label">⏱ Hub online há</span>
              <span class="sp-stat-value">${uptimeStr}</span>
            </div>
            <div class="sp-stat">
              <span class="sp-stat-label">📅 Última atualização</span>
              <span class="sp-stat-value">${lastUpdStr}</span>
            </div>
            <div class="sp-stat">
              <span class="sp-stat-label">🥚 Easter eggs achados</span>
              <span class="sp-stat-value">${eggs.length} / 4</span>
            </div>
            <div class="sp-stat">
              <span class="sp-stat-label">🏆 Conquistas</span>
              <span class="sp-stat-value">${badges.length} / 4</span>
            </div>
          </div>
          <p class="sp-foot">ACESSO NÍVEL Σ · MERVATI COMMAND · CONFIDENCIAL</p>
        </div>`;
      document.body.appendChild(panel);
      requestAnimationFrame(() => panel.classList.add('sp-open'));
      panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });
      document.getElementById('spClose').addEventListener('click', closePanel);
      document.addEventListener('keydown', function escSP(e) {
        if (e.key === 'Escape') { closePanel(); document.removeEventListener('keydown', escSP); }
      });
    }

    Promise.all([
      getStartMs(),
      fetch('https://api.github.com/repos/mervati/mervati.github.io/commits?per_page=1').then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).catch(() => null),
    ]).then(([startMs, commits]) => {
      const uptimeStr  = startMs ? formatUptime(startMs) : '—';
      const lastUpdMs  = commits?.[0]?.commit?.committer?.date;
      const lastUpdStr = lastUpdMs
        ? new Date(lastUpdMs).toLocaleDateString('pt-BR')
        : '—';
      buildPanel(uptimeStr, lastUpdStr);
    });

  }

  function closePanel() {
    const p = document.getElementById('secret-panel');
    if (!p) return;
    p.classList.remove('sp-open');
    setTimeout(() => p.remove(), 300);
  }

  logoGroup.addEventListener('dblclick', e => {
    e.preventDefault();
    openSecretPanel();
  });
}());

/* ── Shake easter egg (mobile) ───────────── */
(function () {
  if (typeof DeviceMotionEvent === 'undefined') return;

  let lastX = null, lastY = null, lastZ = null;
  let shakeCooldown = false;

  function handleMotion(e) {
    const acc = e.accelerationIncludingGravity || {};
    const x = acc.x || 0, y = acc.y || 0, z = acc.z || 0;
    if (lastX === null) { lastX = x; lastY = y; lastZ = z; return; }
    const delta = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
    lastX = x; lastY = y; lastZ = z;
    if (delta > 28 && !shakeCooldown) {
      shakeCooldown = true;
      setTimeout(() => { shakeCooldown = false; }, 3000);
      window.Conquistas?.trackEgg('ovni');
      triggerShakeEgg();
    }
  }

  function triggerShakeEgg() {
    /* faz chover aliens — mesma visual que eggET mas colorido */
    for (let i = 0; i < 16; i++) {
      setTimeout(() => {
        const el  = document.createElement('div');
        const dur = 1.1 + Math.random() * 0.8;
        el.textContent = ['👽','🛸','🌟','💫'][Math.floor(Math.random() * 4)];
        el.style.cssText = `position:fixed;left:${Math.random()*92}vw;top:-60px;font-size:${1.4+Math.random()*1.8}rem;z-index:99999;pointer-events:none;animation:eggEtFall ${dur}s ease-in forwards`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), dur * 1000 + 100);
      }, i * 80);
    }
  }

  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    /* iOS 13+ — precisa de gesto do usuário */
    document.addEventListener('touchstart', function reqPerm() {
      DeviceMotionEvent.requestPermission()
        .then(r => { if (r === 'granted') window.addEventListener('devicemotion', handleMotion, { passive: true }); })
        .catch(() => {});
      document.removeEventListener('touchstart', reqPerm);
    }, { once: true });
  } else {
    window.addEventListener('devicemotion', handleMotion, { passive: true });
  }
}());

/* ── Badges NOVO / ATUALIZADO nos cards ──── */
(function () {
  const DAY       = 86400000;
  const now       = Date.now();
  const CACHE_TTL = 6 * 60 * 60 * 1000;

  function applyBadges(card, addedMs, updatedMs) {
    const isNew     = (now - addedMs)   < 30 * DAY;
    const isUpdated = (now - updatedMs) <  7 * DAY;
    if (!isNew && !isUpdated) return;

    const wrap = document.createElement('div');
    wrap.className = 'card-badges';
    if (isNew)     wrap.innerHTML += '<span class="card-badge badge-novo">NOVO</span>';
    if (isUpdated) wrap.innerHTML += '<span class="card-badge badge-updated">ATUALIZADO</span>';

    const imgWrap = card.querySelector('.card-img-wrap');
    if (imgWrap) imgWrap.appendChild(wrap);
  }

  document.querySelectorAll('.card[data-repo]').forEach(card => {
    const repo     = card.dataset.repo;
    const cacheKey = `mg-card-${repo}`;

    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
      if (cached && now - cached.ts < CACHE_TTL) {
        applyBadges(card, cached.added, cached.updated);
        return;
      }
    } catch {}

    Promise.all([
      fetch(`https://api.github.com/repos/${repo}`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }),
      fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }),
    ]).then(([repoData, commits]) => {
      const added   = new Date(repoData.created_at).getTime();
      const updated = commits[0]?.commit?.committer?.date
        ? new Date(commits[0].commit.committer.date).getTime()
        : added;
      try { localStorage.setItem(cacheKey, JSON.stringify({ added, updated, ts: now })); } catch {}
      applyBadges(card, added, updated);
    }).catch(() => {});
  });
}());

/* ── Easter Eggs ─────────────────────────── */
(function () {
  let buffer = '';

  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key.length !== 1) return;
    buffer = (buffer + e.key.toLowerCase()).slice(-12);
    if      (buffer.endsWith('ovini'))     { eggOVNI();   buffer = ''; }
    else if (buffer.endsWith('easteregg')) { eggMatrix(); buffer = ''; }
    else if (buffer.endsWith('ervati'))    { eggErvati(); buffer = ''; }
    else if (buffer.endsWith("et's"))      { eggET();     buffer = ''; }
  });

  /* 1 ── OVNI voa pela tela com feixe */
  function eggOVNI() {
    window.Conquistas?.trackEgg('ovni');
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;top:18%;left:-160px;z-index:99999;pointer-events:none;animation:eggOvniFly 3s linear forwards';
    el.innerHTML = `
      <div style="position:relative">
        <svg width="110" height="65" viewBox="0 0 110 65">
          <ellipse cx="55" cy="32" rx="20" ry="14" fill="#0a0a1e" stroke="#00ff99" stroke-width="1.8"/>
          <ellipse cx="55" cy="26" rx="11" ry="8" fill="rgba(0,207,255,0.18)" stroke="#00cfff" stroke-width="1"/>
          <ellipse cx="55" cy="36" rx="38" ry="11" fill="#0d0d28" stroke="#00ff99" stroke-width="1.8"/>
          <circle cx="26" cy="36" r="3" fill="#00ff99"/>
          <circle cx="39" cy="42" r="3" fill="#ff00cc"/>
          <circle cx="55" cy="44" r="3" fill="#00cfff"/>
          <circle cx="71" cy="42" r="3" fill="#ffe600"/>
          <circle cx="84" cy="36" r="3" fill="#00ff99"/>
        </svg>
        <div style="position:absolute;left:50%;transform:translateX(-50%);top:60px;width:70px;height:140px;background:linear-gradient(to bottom,rgba(0,255,153,0.4),transparent);clip-path:polygon(20% 0%,80% 0%,100% 100%,0% 100%);animation:eggBeam 0.4s infinite alternate"></div>
      </div>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  /* 2 ── Chuva de 👽 */
  function eggET() {
    window.Conquistas?.trackEgg('et');
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const el  = document.createElement('div');
        const dur = 1.3 + Math.random() * 0.9;
        el.textContent = '👽';
        el.style.cssText = `position:fixed;left:${Math.random()*94}vw;top:-60px;font-size:${1.5+Math.random()*2}rem;z-index:99999;pointer-events:none;animation:eggEtFall ${dur}s ease-in forwards`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), dur * 1000 + 100);
      }, i * 90);
    }
  }

  /* 3 ── Chuva Matrix alienígena */
  function eggMatrix() {
    window.Conquistas?.trackEgg('matrix');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*!?<>01';
    const cv    = document.createElement('canvas');
    cv.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;opacity:0;transition:opacity 0.3s';
    cv.width  = window.innerWidth;
    cv.height = window.innerHeight;
    document.body.appendChild(cv);
    const ctx   = cv.getContext('2d');
    const cols  = Math.floor(cv.width / 18);
    const drops = Array(cols).fill(1);
    requestAnimationFrame(() => cv.style.opacity = '1');
    const timer = setInterval(() => {
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.font = '13px monospace';
      drops.forEach((y, i) => {
        ctx.fillStyle = Math.random() > 0.94 ? '#ffffff' : '#00ff99';
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 18, y * 18);
        if (y * 18 > cv.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 33);
    setTimeout(() => {
      clearInterval(timer);
      cv.style.opacity = '0';
      setTimeout(() => cv.remove(), 400);
    }, 3500);
  }

  /* 4 ── Mensagem pessoal com partículas */
  function eggErvati() {
    window.Conquistas?.trackEgg('ervati');
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;display:flex;align-items:center;justify-content:center';
    const box = document.createElement('div');
    box.style.cssText = "font-family:'Orbitron',sans-serif;text-align:center;color:#00ff99;text-shadow:0 0 20px #00ff99;border:2px solid #00ff99;border-radius:1rem;background:rgba(5,5,15,0.93);backdrop-filter:blur(12px);padding:2.5rem 3rem;opacity:0;transform:scale(0.5);transition:opacity 0.4s,transform 0.4s";
    box.innerHTML = `
      <div style="font-size:clamp(1rem,3.5vw,2rem);font-weight:900;letter-spacing:0.12em">👽 OLÁ ALIEN! 👽</div>
      <div style="font-size:clamp(0.55rem,1.4vw,0.78rem);color:#00cfff;letter-spacing:0.22em;margin-top:0.8rem">TRANSMISSÃO ALIENÍGENA INTERCEPTADA</div>
      <div style="font-size:clamp(0.55rem,1.3vw,0.75rem);color:#7080bb;margin-top:0.4rem;font-family:'Exo 2',sans-serif">COORD: MERVATI HUB · SETOR: SECRETO</div>`;
    wrap.appendChild(box);
    document.body.appendChild(wrap);

    for (let i = 0; i < 28; i++) {
      setTimeout(() => {
        const p = document.createElement('div');
        const angle = (i / 28) * 360;
        const dist  = 130 + Math.random() * 130;
        p.textContent = ['✦','✧','🌟','💫','⭐'][Math.floor(Math.random()*5)];
        p.style.cssText = `position:fixed;left:50%;top:50%;font-size:${0.8+Math.random()*0.9}rem;z-index:100000;pointer-events:none;transform:translate(-50%,-50%);transition:transform 0.9s ease-out,opacity 0.5s ease 0.4s;opacity:1`;
        document.body.appendChild(p);
        requestAnimationFrame(() => {
          const x = Math.cos(angle * Math.PI / 180) * dist;
          const y = Math.sin(angle * Math.PI / 180) * dist;
          p.style.transform = `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`;
          p.style.opacity = '0';
        });
        setTimeout(() => p.remove(), 1500);
      }, i * 18);
    }

    requestAnimationFrame(() => { box.style.opacity = '1'; box.style.transform = 'scale(1)'; });
    setTimeout(() => {
      box.style.opacity = '0'; box.style.transform = 'scale(1.1)';
      setTimeout(() => wrap.remove(), 500);
    }, 4000);
  }
}());

/* ── Status badge (GitHub Pages uptime) ── */
(function () {
  const dot   = document.getElementById('statusDot');
  const label = document.getElementById('statusLabel');
  if (!dot || !label) return;

  const LABELS = {
    ok:      { pt: 'sistema operacional', en: 'system operational',  es: 'sistema operacional' },
    warn:    { pt: 'instabilidade leve',  en: 'minor instability',   es: 'leve inestabilidad'  },
    down:    { pt: 'serviço indisponível',en: 'service unavailable', es: 'servicio no disponible' },
    unknown: { pt: 'status desconhecido', en: 'status unknown',      es: 'estado desconocido'  },
  };

  const TOOLTIPS = {
    pt: 'Monitora em tempo real se o GitHub Pages — serviço que hospeda este site — está no ar.',
    en: 'Monitors in real time whether GitHub Pages — the service hosting this site — is up.',
    es: 'Monitorea en tiempo real si GitHub Pages — el servicio que aloja este sitio — está activo.',
  };

  const badge = document.getElementById('statusBadge');

  function setStatus(state) {
    const lang = (typeof currentLang !== 'undefined' ? currentLang : 'pt-BR');
    const key  = lang === 'en' ? 'en' : lang === 'es' ? 'es' : 'pt';
    dot.className     = `status-dot ${state}`;
    label.textContent = LABELS[state]?.[key] ?? LABELS.unknown[key];
    if (badge) badge.dataset.tooltip = TOOLTIPS[key];
  }

  fetch('https://www.githubstatus.com/api/v2/status.json')
    .then(r => r.json())
    .then(data => {
      const ind = data.status?.indicator;
      if (ind === 'none')                         setStatus('ok');
      else if (ind === 'minor')                   setStatus('warn');
      else if (ind === 'major' || ind === 'critical') setStatus('down');
      else                                        setStatus('unknown');
    })
    .catch(() => setStatus('unknown'));
}());

/* ── CV PDF — verifica existência ──────── */
(function () {
  const cvBtn = document.querySelector('.cv-btn');
  if (!cvBtn) return;
  fetch('cv.pdf', { method: 'HEAD' })
    .then(r => {
      if (!r.ok) {
        cvBtn.href = '404.html';
        cvBtn.removeAttribute('target');
      }
    })
    .catch(() => {
      cvBtn.href = '404.html';
      cvBtn.removeAttribute('target');
    });
}());

/* ── Card image fallback ────────────────── */
document.querySelectorAll('.card-img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
  img.addEventListener('load',  () => { img.nextElementSibling.style.display = 'none'; });
});

/* ── Consola do navegador (Easter Egg DevTools) ── */
(function () {
  const S = {
    art:    'color:#00ff99;font-weight:900;font-family:monospace;font-size:11px;line-height:1.5;background:#05050f;padding:2px 0',
    header: 'color:#00cfff;font-weight:900;font-size:13px;letter-spacing:0.15em;background:#05050f',
    div:    'color:#1e1e50;font-family:monospace;font-size:11px;background:#05050f',
    text:   'color:#c8d4ff;font-family:monospace;font-size:11px;background:#05050f',
    warn:   'color:#ffe600;font-weight:700;font-family:monospace;font-size:11px;background:#05050f',
    muted:  'color:#4a5080;font-family:monospace;font-size:11px;background:#05050f',
    link:   'color:#00ff99;font-family:monospace;font-size:11px;background:#05050f',
  };
  const DIV = '%c────────────────────────────────────────────';

  console.log(
    `%c
  ██████╗  ███████╗ ██████╗
  ╚════██╗ ╚════██║ ╚════██╗
   █████╔╝  ████╔╝  █████╔╝
   ╚═══██╗ ██╔══╝   ╚═══██╗
  ██████╔╝ ███████╗ ██████╔╝
  ╚═════╝  ╚══════╝ ╚═════╝`, S.art);

  console.log('%c  🛸  MERVATI HUB  ·  SALA SECRETA  👽', S.header);
  console.log(DIV, S.div);
  console.log('%c  Ei, curioso(a)! Você encontrou o Easter Egg. 🥚', S.text);
  console.log('%c  Este hub foi construído com HTML, CSS e JavaScript puro —', S.muted);
  console.log('%c  sem frameworks, sem build tools. Só código direto.', S.muted);
  console.log(DIV, S.div);
  console.log('%c  ⚠  Não cole código aqui que você não entende.', S.warn);
  console.log('%c     Golpistas usam esse campo para roubar contas.', S.muted);
  console.log(DIV, S.div);
  console.log('%c  💼  Quer colaborar ou tem uma ideia de projeto?', S.text);
  console.log('%c  🔗  mervati.github.io/sobre', S.link);
  console.log('%c  🐙  github.com/mervati', S.link);
  console.log(DIV, S.div);

  const lang  = navigator.language || '?';
  const theme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
  console.log(`%c  🌍  Idioma detectado : ${lang}`, S.muted);
  console.log(`%c  🎨  Tema do sistema  : ${theme}`, S.muted);
  console.log(`%c  📐  Janela           : ${window.innerWidth} × ${window.innerHeight}px`, S.muted);
  console.log(DIV, S.div);
  console.log('%c  Feito com 👽 e muito JavaScript · © 2026 Mervati Hub', S.muted);
}());
