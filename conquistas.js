/* ══════════════════════════════════════════
   MERVATI HUB — conquistas.js
══════════════════════════════════════════ */

window.Conquistas = (function () {
  'use strict';

  /* ── Configuração ───────────────────── */
  const ALL_PAGES       = ['home', 'sobre', 'artigos'];
  const ALL_EGGS        = ['ovni', 'et', 'matrix', 'ervati'];
  const ARTICLES_NEEDED = 3;
  const TIME_GOAL_MS    = 5 * 60 * 1000;

  const BADGES = [
    {
      id:    'explorer',
      icon:  '🗺️',
      title: 'Explorador',
      desc:  'Visitou todas as páginas do hub',
      hint:  s => `${s.pages.length} / ${ALL_PAGES.length} páginas visitadas`,
    },
    {
      id:    'hunter',
      icon:  '🥚',
      title: 'Caçador de Easter Eggs',
      desc:  'Encontrou 2 easter eggs escondidos',
      hint:  s => `${s.eggs.length} / ${ALL_EGGS.length} easter eggs encontrados`,
    },
    {
      id:    'reader',
      icon:  '📚',
      title: 'Leitor Galáctico',
      desc:  'Leu 3 artigos completos',
      hint:  s => `${s.articles.length} / ${ARTICLES_NEEDED} artigos lidos`,
    },
    {
      id:    'veteran',
      icon:  '⏱️',
      title: 'Veterano',
      desc:  'Ficou 5 minutos explorando o hub',
      hint:  s => `${Math.floor(Math.min(s.time, TIME_GOAL_MS) / 60000)} / 5 minutos no hub`,
    },
  ];

  /* ── Persistência ───────────────────── */
  const K = {
    pages:    'mg-ach-pages',
    eggs:     'mg-ach-eggs',
    articles: 'mg-ach-articles',
    time:     'mg-ach-time',
    badges:   'mg-ach-badges',
    certId:   'mg-ach-cert-id',
  };

  function load(key, def) {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; }
    catch { return def; }
  }
  function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  const state = {
    pages:    load(K.pages,    []),
    eggs:     load(K.eggs,     []),
    articles: load(K.articles, []),
    time:     load(K.time,     0),
    badges:   load(K.badges,   []),
  };

  if (!localStorage.getItem(K.certId)) {
    save(K.certId, Math.random().toString(36).slice(2, 8).toUpperCase());
  }
  const CERT_ID = localStorage.getItem(K.certId);

  /* ── Detecção de página ─────────────── */
  function currentPage() {
    const p = window.location.pathname;
    if (p.endsWith('sobre.html'))   return 'sobre';
    if (p.endsWith('artigos.html')) return 'artigos';
    return 'home';
  }

  /* ── Tracking ───────────────────────── */
  function trackPage() {
    const page = currentPage();
    if (state.pages.includes(page)) return;
    state.pages.push(page);
    save(K.pages, state.pages);
    if (ALL_PAGES.every(p => state.pages.includes(p))) unlock('explorer');
  }

  function trackEgg(id) {
    if (state.eggs.includes(id)) return;
    state.eggs.push(id);
    save(K.eggs, state.eggs);
    if (state.eggs.length === 2) unlock('hunter');
    if (ALL_EGGS.every(e => state.eggs.includes(e))) {
      setTimeout(showCertificate, 900);
    }
  }

  function trackArticle(id) {
    const key = String(id);
    if (state.articles.includes(key)) return;
    state.articles.push(key);
    save(K.articles, state.articles);
    if (state.articles.length >= ARTICLES_NEEDED) unlock('reader');
  }

  /* ── Temporizador de 5 min ──────────── */
  if (!state.badges.includes('veteran')) {
    const sessionStart = Date.now();

    const timerCheck = setInterval(() => {
      const total = state.time + (Date.now() - sessionStart);
      if (total >= TIME_GOAL_MS) {
        state.time = total;
        save(K.time, state.time);
        unlock('veteran');
        clearInterval(timerCheck);
      }
    }, 15000);

    window.addEventListener('beforeunload', () => {
      state.time = Math.min(state.time + (Date.now() - sessionStart), TIME_GOAL_MS + 60000);
      save(K.time, state.time);
    });
  }

  /* ── Unlock ─────────────────────────── */
  function unlock(id) {
    if (state.badges.includes(id)) return;
    state.badges.push(id);
    save(K.badges, state.badges);
    const badge = BADGES.find(b => b.id === id);
    if (badge) showToast(badge);
  }

  /* ── Toast de notificação ───────────── */
  function showToast(badge) {
    const t = document.createElement('div');
    t.className = 'ach-toast';
    t.innerHTML = `
      <div class="ach-toast-icon">${badge.icon}</div>
      <div class="ach-toast-body">
        <div class="ach-toast-label">CONQUISTA DESBLOQUEADA</div>
        <div class="ach-toast-title">${badge.title}</div>
        <div class="ach-toast-desc">${badge.desc}</div>
      </div>`;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('ach-in'));
    setTimeout(() => {
      t.classList.remove('ach-in');
      setTimeout(() => t.remove(), 420);
    }, 4500);
  }

  /* ── Painel de conquistas ───────────── */
  function showPanel() {
    if (document.getElementById('ach-panel')) return;

    const allEggsFound = ALL_EGGS.every(e => state.eggs.includes(e));
    const totalDone    = state.badges.length;
    const pct          = Math.round((totalDone / BADGES.length) * 100);

    const panel = document.createElement('div');
    panel.id = 'ach-panel';
    panel.innerHTML = `
      <div class="ach-inner">
        <div class="ach-head">
          <span class="ach-head-title">🏆 CONQUISTAS SECRETAS</span>
          <button class="ach-close" id="achClose" aria-label="Fechar">✕</button>
        </div>

        <div class="ach-list">
          ${BADGES.map(b => {
            const done = state.badges.includes(b.id);
            return `
            <div class="ach-item ${done ? 'done' : 'locked'}">
              <div class="ach-item-icon">${done ? b.icon : '🔒'}</div>
              <div class="ach-item-info">
                <div class="ach-item-name">${done ? b.title : '???'}</div>
                <div class="ach-item-desc">${done ? b.desc : b.hint(state)}</div>
              </div>
              ${done ? '<span class="ach-check">✓</span>' : ''}
            </div>`;
          }).join('')}
        </div>

        <div class="ach-foot">
          <div class="ach-progress-wrap">
            <div class="ach-progress-bar">
              <div class="ach-progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="ach-progress-label">${totalDone} / ${BADGES.length} desbloqueadas</span>
          </div>
          ${allEggsFound
            ? '<button class="ach-cert-trigger" id="achCertTrigger">🎓 Ver certificado</button>'
            : `<span class="ach-cert-hint">${state.eggs.length}/${ALL_EGGS.length} easter eggs · encontre todos para o certificado</span>`
          }
        </div>
      </div>`;

    document.body.appendChild(panel);
    requestAnimationFrame(() => panel.classList.add('ach-open'));

    panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });
    document.getElementById('achClose').addEventListener('click', closePanel);
    document.getElementById('achCertTrigger')?.addEventListener('click', () => {
      closePanel();
      setTimeout(showCertificate, 280);
    });

    document.addEventListener('keydown', function escPanel(e) {
      if (e.key === 'Escape') { closePanel(); document.removeEventListener('keydown', escPanel); }
    });
  }

  function closePanel() {
    const p = document.getElementById('ach-panel');
    if (!p) return;
    p.classList.remove('ach-open');
    setTimeout(() => p.remove(), 300);
  }

  /* ── Certificado ────────────────────── */
  function showCertificate() {
    if (document.getElementById('ach-cert')) return;

    const wrap   = document.createElement('div');
    wrap.id      = 'ach-cert';

    const canvas  = document.createElement('canvas');
    canvas.id     = 'ach-cert-canvas';
    canvas.width  = 800;
    canvas.height = 560;

    const btns    = document.createElement('div');
    btns.className = 'ach-cert-btns';
    btns.innerHTML = `
      <button class="ach-cert-save"  id="achCertSave">💾 Salvar como imagem</button>
      <button class="ach-cert-close2" id="achCertClose">✕ Fechar</button>`;

    wrap.append(canvas, btns);
    document.body.appendChild(wrap);
    requestAnimationFrame(() => wrap.classList.add('ach-cert-open'));

    document.fonts.ready.then(() => drawCert(canvas));

    document.getElementById('achCertClose').addEventListener('click', () => {
      wrap.classList.remove('ach-cert-open');
      setTimeout(() => wrap.remove(), 300);
    });

    document.getElementById('achCertSave').addEventListener('click', () => {
      const a      = document.createElement('a');
      a.download   = `certificado-explorador-mervati-${CERT_ID}.png`;
      a.href       = canvas.toDataURL('image/png');
      a.click();
    });
  }

  /* ── Desenho do certificado ─────────── */
  function drawCert(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    /* fundo */
    ctx.fillStyle = '#05050f';
    ctx.fillRect(0, 0, W, H);

    /* estrelas */
    for (let i = 0; i < 160; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 1.3 + 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,210,255,${0.15 + Math.random() * 0.65})`;
      ctx.fill();
    }

    /* borda externa neon */
    ctx.strokeStyle = '#00ff99';
    ctx.lineWidth   = 2;
    ctx.strokeRect(16, 16, W - 32, H - 32);

    /* borda interna sutil */
    ctx.strokeStyle = 'rgba(0,255,153,0.2)';
    ctx.lineWidth   = 1;
    ctx.strokeRect(26, 26, W - 52, H - 52);

    /* ornamentos de canto */
    const corners = [[32,32],[W-32,32],[32,H-32],[W-32,H-32]];
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00ff99';
      ctx.fill();

      const d = 18;
      ctx.strokeStyle = '#00ff99';
      ctx.lineWidth   = 1.5;
      const lx = cx < W / 2 ? 1 : -1;
      const ly = cy < H / 2 ? 1 : -1;
      ctx.beginPath(); ctx.moveTo(cx + lx * 8, cy); ctx.lineTo(cx + lx * (8 + d), cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy + ly * 8); ctx.lineTo(cx, cy + ly * (8 + d)); ctx.stroke();
    });

    /* glow header */
    const hg = ctx.createLinearGradient(0, 26, 0, 110);
    hg.addColorStop(0, 'rgba(0,255,153,0.07)');
    hg.addColorStop(1, 'transparent');
    ctx.fillStyle = hg;
    ctx.fillRect(26, 26, W - 52, 84);

    ctx.textAlign = 'center';

    /* cabeçalho */
    ctx.font      = '500 11px "Segoe UI", sans-serif';
    ctx.fillStyle = '#2a3058';
    ctx.fillText('🛸   MERVATI HUB   ·   PORTAL CENTRAL DE PROJETOS   ·   mervati.github.io', W / 2, 55);

    /* linha */
    ctx.strokeStyle = 'rgba(0,255,153,0.22)';
    ctx.lineWidth   = 1;
    ctx.beginPath(); ctx.moveTo(60, 69); ctx.lineTo(W - 60, 69); ctx.stroke();

    /* título */
    ctx.shadowColor = '#00ff99';
    ctx.shadowBlur  = 24;
    ctx.fillStyle   = '#00ff99';
    ctx.font        = '900 25px Orbitron, "Courier New", monospace';
    ctx.fillText('CERTIFICADO DE EXPLORADOR', W / 2, 112);
    ctx.font = '900 19px Orbitron, "Courier New", monospace';
    ctx.fillText('ALIENÍGENA', W / 2, 143);
    ctx.shadowBlur  = 0;

    /* linha */
    ctx.strokeStyle = 'rgba(0,255,153,0.14)';
    ctx.beginPath(); ctx.moveTo(80, 160); ctx.lineTo(W - 80, 160); ctx.stroke();

    /* texto principal */
    ctx.font      = '400 11.5px "Segoe UI", sans-serif';
    ctx.fillStyle = '#7080bb';
    ctx.fillText('ESTE DOCUMENTO CERTIFICA QUE O EXPLORADOR', W / 2, 196);

    ctx.shadowColor = '#00cfff';
    ctx.shadowBlur  = 18;
    ctx.fillStyle   = '#00cfff';
    ctx.font        = '700 19px Orbitron, "Courier New", monospace';
    ctx.fillText(`EXPLORADOR  Nº ${CERT_ID}`, W / 2, 233);
    ctx.shadowBlur  = 0;

    ctx.font      = '400 12px "Segoe UI", sans-serif';
    ctx.fillStyle = '#7080bb';
    ctx.fillText('NAVEGOU POR TODAS AS GALÁXIAS DO MERVATI HUB', W / 2, 268);
    ctx.fillText('E DESVENDOU TODOS OS SEGREDOS OCULTOS', W / 2, 288);

    /* selos de conquista */
    const seals      = ['🗺️', '🥚', '📚', '⏱️', '🛸'];
    const sealLabels = ['Explorador', 'Caçador', 'Leitor', 'Veterano', 'Mestre'];
    const sealGap    = 68;
    const sealX0     = W / 2 - (seals.length - 1) * sealGap / 2;

    ctx.font = '24px serif';
    seals.forEach((s, i) => ctx.fillText(s, sealX0 + i * sealGap, 332));

    ctx.font      = '400 9px "Segoe UI", sans-serif';
    ctx.fillStyle = '#2a3058';
    sealLabels.forEach((l, i) => ctx.fillText(l, sealX0 + i * sealGap, 348));

    /* linha */
    ctx.strokeStyle = 'rgba(0,255,153,0.14)';
    ctx.beginPath(); ctx.moveTo(80, 362); ctx.lineTo(W - 80, 362); ctx.stroke();

    /* rodapé */
    const dateStr = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

    ctx.font      = '400 10px "Courier New", monospace';
    ctx.fillStyle = '#2a3058';
    ctx.textAlign = 'left';
    ctx.fillText(`EXPEDIDO EM: ${dateStr.toUpperCase()}`, 56, 400);
    ctx.textAlign = 'right';
    ctx.fillText('AUTENTICADO POR: MERVATI COMMAND', W - 56, 400);

    /* assinatura */
    ctx.textAlign = 'center';
    ctx.font      = '26px serif';
    ctx.fillText('👽', W / 2, 442);

    ctx.font      = '400 9px "Courier New", monospace';
    ctx.fillStyle = '#161630';
    ctx.fillText(
      `MERVATI HUB · mervati.github.io · CERT-ID: ${CERT_ID} · DOCUMENTO DIGITAL SEM VALIDADE JURÍDICA`,
      W / 2, 486
    );

    /* brilho central */
    const glow = ctx.createRadialGradient(W / 2, H / 2, 50, W / 2, H / 2, 330);
    glow.addColorStop(0, 'rgba(0,255,153,0.05)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);
  }

  /* ── Estilos ────────────────────────── */
  function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
      /* Toast */
      .ach-toast {
        position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 99990;
        display: flex; align-items: center; gap: 0.85rem;
        background: #0a0a1e; border: 1px solid #00ff99;
        border-radius: 0.75rem; padding: 0.85rem 1rem;
        box-shadow: 0 0 28px rgba(0,255,153,0.18);
        max-width: 290px; font-family: 'Segoe UI', sans-serif;
        transform: translateX(115%); opacity: 0;
        transition: transform 0.42s cubic-bezier(.22,1,.36,1), opacity 0.42s;
      }
      .ach-toast.ach-in { transform: translateX(0); opacity: 1; }
      .ach-toast-icon  { font-size: 2rem; flex-shrink: 0; }
      .ach-toast-label { font-size: 0.52rem; font-weight: 700; letter-spacing: 0.18em; color: #00ff99; text-transform: uppercase; }
      .ach-toast-title { font-size: 0.88rem; font-weight: 700; color: #e0e8ff; margin-top: 0.1rem; }
      .ach-toast-desc  { font-size: 0.7rem; color: #7080bb; margin-top: 0.08rem; }

      /* Painel */
      #ach-panel {
        position: fixed; inset: 0; z-index: 99991;
        background: rgba(5,5,15,0.82); backdrop-filter: blur(10px);
        display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.3s;
      }
      #ach-panel.ach-open { opacity: 1; }
      .ach-inner {
        background: #0a0a1e; border: 1px solid #1e1e50;
        border-radius: 1rem; padding: 1.4rem 1.6rem;
        max-width: 450px; width: 92%; max-height: 88vh; overflow-y: auto;
        box-shadow: 0 0 50px rgba(0,0,0,0.7);
        transform: scale(0.93); transition: transform 0.3s;
        font-family: 'Segoe UI', sans-serif;
      }
      #ach-panel.ach-open .ach-inner { transform: scale(1); }
      .ach-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; }
      .ach-head-title { font-size: 0.92rem; font-weight: 900; color: #00ff99; letter-spacing: 0.1em; }
      .ach-close { background: none; border: none; color: #4a5080; font-size: 1rem; cursor: pointer; padding: 0.2rem; line-height: 1; transition: color 0.2s; }
      .ach-close:hover { color: #e0e8ff; }
      .ach-list { display: flex; flex-direction: column; gap: 0.5rem; }
      .ach-item {
        display: flex; align-items: center; gap: 0.85rem;
        border-radius: 0.6rem; padding: 0.75rem 0.9rem; border: 1px solid;
      }
      .ach-item.done   { border-color: rgba(0,255,153,0.28); background: rgba(0,255,153,0.03); }
      .ach-item.locked { border-color: #141430; opacity: 0.55; }
      .ach-item-icon   { font-size: 1.5rem; flex-shrink: 0; width: 2rem; text-align: center; }
      .ach-item-info   { flex: 1; min-width: 0; }
      .ach-item-name   { font-size: 0.85rem; font-weight: 700; color: #e0e8ff; }
      .ach-item-desc   { font-size: 0.7rem; color: #7080bb; margin-top: 0.1rem; }
      .ach-check       { color: #00ff99; font-weight: 900; font-size: 1rem; flex-shrink: 0; }
      .ach-foot {
        margin-top: 1.2rem; padding-top: 1rem; border-top: 1px solid #141430;
        display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; flex-wrap: wrap;
      }
      .ach-progress-wrap  { display: flex; flex-direction: column; gap: 0.35rem; }
      .ach-progress-bar   { width: 140px; height: 4px; background: #141430; border-radius: 2px; overflow: hidden; }
      .ach-progress-fill  { height: 100%; background: linear-gradient(90deg,#00ff99,#00cfff); border-radius: 2px; transition: width 0.7s ease; }
      .ach-progress-label { font-size: 0.65rem; color: #4a5080; letter-spacing: 0.06em; }
      .ach-cert-trigger {
        background: none; border: 1px solid #00ff99; border-radius: 0.4rem;
        color: #00ff99; font-size: 0.72rem; font-weight: 700; padding: 0.35rem 0.9rem;
        cursor: pointer; letter-spacing: 0.08em; white-space: nowrap; font-family: inherit;
        transition: background 0.2s, box-shadow 0.2s;
      }
      .ach-cert-trigger:hover { background: rgba(0,255,153,0.08); box-shadow: 0 0 10px rgba(0,255,153,0.2); }
      .ach-cert-hint { font-size: 0.65rem; color: #2a2a50; letter-spacing: 0.04em; }

      /* Certificado */
      #ach-cert {
        position: fixed; inset: 0; z-index: 99992;
        background: rgba(5,5,15,0.95); backdrop-filter: blur(14px);
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2rem;
        opacity: 0; transition: opacity 0.3s;
      }
      #ach-cert.ach-cert-open { opacity: 1; }
      #ach-cert-canvas {
        max-width: min(800px, 94vw);
        height: auto;
        border-radius: 0.5rem;
        box-shadow: 0 0 50px rgba(0,255,153,0.16), 0 0 120px rgba(0,255,153,0.05);
      }
      .ach-cert-btns { display: flex; gap: 0.8rem; }
      .ach-cert-save, .ach-cert-close2 {
        border-radius: 0.4rem; font-size: 0.78rem; font-weight: 700;
        padding: 0.5rem 1.2rem; cursor: pointer; letter-spacing: 0.08em;
        transition: background 0.2s, box-shadow 0.2s; font-family: 'Segoe UI', sans-serif;
      }
      .ach-cert-save   { background: none; border: 1px solid #00ff99; color: #00ff99; }
      .ach-cert-save:hover { background: rgba(0,255,153,0.1); box-shadow: 0 0 14px rgba(0,255,153,0.25); }
      .ach-cert-close2 { background: none; border: 1px solid #2a2a50; color: #7080bb; }
      .ach-cert-close2:hover { border-color: #7080bb; color: #e0e8ff; }

      /* Logo alien clicável */
      .logo-et { cursor: pointer; transition: transform 0.15s; display: inline-block; }
      .logo-et:hover { transform: scale(1.25) rotate(-8deg); }
    `;
    document.head.appendChild(s);
  }

  /* ── Init ───────────────────────────── */
  function init() {
    injectStyles();
    trackPage();

    document.querySelectorAll('.logo-et').forEach(el => {
      el.title = 'Conquistas secretas (clique para ver)';
      el.addEventListener('click', showPanel);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { trackEgg, trackArticle, showPanel, showCertificate };
}());
