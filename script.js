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

const LIGHT_STAR_COLORS = [
  '139,92,246',   /* roxo */
  '236,72,153',   /* rosa */
  '6,182,212',    /* ciano */
  '251,146,60',   /* laranja */
  '34,197,94',    /* verde */
];

function drawStars() {
  const dark = html.dataset.theme === 'dark';

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* parallax offset */
  const ox = mouse.x;
  const oy = mouse.y;

  /* static stars */
  stars.forEach(s => {
    s.o += 0.006 * s.d;
    if (s.o >= 1 || s.o <= 0) s.d *= -1;

    if (dark) {
      const alpha = 0.35 + s.o * 0.65;
      ctx.beginPath();
      ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,210,255,${alpha})`;
      ctx.fill();
    } else {
      const alpha = 0.4 + s.o * 0.6;
      const color = LIGHT_STAR_COLORS[Math.floor(s.x * s.y) % LIGHT_STAR_COLORS.length];
      ctx.beginPath();
      ctx.arc(s.x + ox, s.y + oy, s.r * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${alpha})`;
      ctx.fill();
    }
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
        : `rgba(139,92,246,${s.alpha * ratio * 0.8})`;
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
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current  = 0;
    const step   = target / 60;
    const timer  = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
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
  if (projectStat) {
    fetch('index.html')
      .then(r => r.text())
      .then(html => {
        const doc   = new DOMParser().parseFromString(html, 'text/html');
        const count = doc.querySelectorAll('.card:not(.card-soon)').length;
        if (count > 0) projectStat.dataset.target = count;
      })
      .catch(() => {})
      .finally(() => statNumbers.forEach(el => statObserver.observe(el)));
  } else {
    statNumbers.forEach(el => statObserver.observe(el));
  }
}

/* ── Formulário de contato ──────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn      = contactForm.querySelector('.form-send-btn');
    const feedback = document.getElementById('formFeedback');
    const dict     = typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS[currentLang] || {} : {};

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

/* ── Card image fallback ────────────────── */
document.querySelectorAll('.card-img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
  img.addEventListener('load',  () => { img.nextElementSibling.style.display = 'none'; });
});
