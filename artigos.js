/* ══════════════════════════════════════════
   MERVATI HUB — artigos.js
══════════════════════════════════════════ */

const ARTIGOS = {
  1: {
    tag:      'IAM',
    tagClass: 'iam',
    date:     'maio 2026',
    readtime: '2',
    title: 'O que é IAM e por que sua empresa precisa',
    body: `
      <p>Imagine uma empresa onde qualquer funcionário consegue acessar qualquer sistema, a qualquer hora, sem nenhum controle. Parece ficção científica — mas é a realidade de muitas organizações que ainda não implementaram IAM.</p>

      <h2>O que é IAM?</h2>
      <p><strong>Identity and Access Management (IAM)</strong> é o conjunto de processos, políticas e tecnologias que garantem que as pessoas certas acessem os recursos certos, no momento certo — e somente elas.</p>
      <p>Em termos práticos, IAM responde a três perguntas fundamentais:</p>
      <ul>
        <li><strong>Quem é você?</strong> — Autenticação (login, MFA, biometria)</li>
        <li><strong>O que você pode fazer?</strong> — Autorização (permissões, perfis, roles)</li>
        <li><strong>Quem fez o quê?</strong> — Auditoria (logs, rastreabilidade)</li>
      </ul>

      <h2>Por que IAM importa?</h2>
      <p>Segundo o Verizon Data Breach Report, mais de <strong>80% das violações de dados</strong> envolvem credenciais comprometidas ou acessos indevidos. IAM é a primeira linha de defesa contra isso.</p>
      <p>Além da segurança, a gestão de identidade traz benefícios diretos para o negócio:</p>
      <ul>
        <li>Reduz o tempo de onboarding e offboarding de colaboradores</li>
        <li>Garante conformidade com LGPD, GDPR e outros regulamentos</li>
        <li>Elimina acessos "fantasmas" de ex-funcionários</li>
        <li>Facilita auditorias e relatórios de compliance</li>
      </ul>

      <h2>Ferramentas comuns no mercado</h2>
      <p>No ecossistema corporativo, algumas soluções se destacam: <strong>Microsoft Entra ID</strong> (antigo Azure AD), <strong>SAP GRC Access Control</strong>, <strong>ManageEngine ADManager</strong> e <strong>SailPoint</strong>. Cada uma com foco diferente — desde ambientes cloud até ERPs complexos.</p>

      <h2>Conclusão</h2>
      <p>IAM não é um produto que se instala e esquece. É uma disciplina contínua. Quanto mais cedo uma empresa estrutura sua gestão de identidade, menor o risco e maior o controle sobre seus dados e sistemas.</p>
    `
  },

  2: {
    tag:      'LGPD',
    tagClass: 'lgpd',
    date:     'maio 2026',
    readtime: '2',
    title: 'LGPD e TI: o que você precisa saber',
    body: `
      <p>A Lei Geral de Proteção de Dados (LGPD) entrou em vigor em 2020 e, desde então, mudou a relação das empresas brasileiras com os dados pessoais. Mas o que isso muda na prática para quem trabalha com TI?</p>

      <h2>O que é a LGPD?</h2>
      <p>A <strong>LGPD (Lei nº 13.709/2018)</strong> regulamenta como dados pessoais de pessoas físicas devem ser coletados, armazenados, tratados e compartilhados por empresas e organizações. Inspirada no GDPR europeu, ela se aplica a qualquer organização que opere no Brasil ou trate dados de cidadãos brasileiros.</p>

      <h2>O que é dado pessoal?</h2>
      <p>Qualquer informação que identifique ou possa identificar uma pessoa: nome, CPF, e-mail, IP, localização, dados de saúde. Isso inclui dados que passam por sistemas de TI todos os dias.</p>

      <h2>O que muda para TI?</h2>
      <ul>
        <li><strong>Controle de acesso:</strong> Só quem precisa deve acessar dados pessoais. IAM entra como ferramenta essencial aqui.</li>
        <li><strong>Logs e rastreabilidade:</strong> É necessário saber quem acessou, modificou ou compartilhou dados e quando.</li>
        <li><strong>Criptografia:</strong> Dados sensíveis devem ser protegidos em trânsito e em repouso.</li>
        <li><strong>Gestão de incidentes:</strong> Vazamentos precisam ser notificados à ANPD em até 72 horas.</li>
        <li><strong>Minimização de dados:</strong> Coletar apenas o necessário. Sem dados desnecessários armazenados.</li>
      </ul>

      <h2>Quem fiscaliza?</h2>
      <p>A <strong>ANPD (Autoridade Nacional de Proteção de Dados)</strong> é o órgão regulador. As multas podem chegar a 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração.</p>

      <h2>Conclusão</h2>
      <p>LGPD não é só um problema jurídico — é uma responsabilidade técnica. As equipes de TI são peças-chave na implementação e manutenção da conformidade. Ignorar isso é colocar a empresa em risco real.</p>
    `
  },

  3: {
    tag:      'SAP BASIS',
    tagClass: 'sap',
    date:     'maio 2026',
    readtime: '2',
    title: 'SAP BASIS: o pilar técnico do seu ERP',
    body: `
      <p>Quando um sistema SAP está funcionando perfeitamente, ninguém pergunta quem está por trás. Quando algo dá errado, todos olham para o mesmo lugar: o time BASIS. Esse é o universo da administração técnica do SAP.</p>

      <h2>O que é SAP BASIS?</h2>
      <p><strong>SAP BASIS</strong> é a camada técnica que sustenta todo o ambiente SAP. É o conjunto de serviços de middleware que conecta o sistema operacional, o banco de dados e as aplicações SAP — garantindo que tudo funcione de forma integrada e estável.</p>
      <p>Sem BASIS, não há SAP funcionando. É simples assim.</p>

      <h2>O que faz um Administrador BASIS?</h2>
      <ul>
        <li><strong>Instalação e configuração</strong> de sistemas SAP (ABAP, Java, HANA)</li>
        <li><strong>Gerenciamento de usuários e autorizações</strong> — Roles, Profiles, SU01, PFCG</li>
        <li><strong>Transporte de mudanças</strong> entre ambientes (DEV → QAS → PRD)</li>
        <li><strong>Monitoramento de performance</strong> e afinação do sistema</li>
        <li><strong>Aplicação de notas SAP e Support Packages</strong></li>
        <li><strong>Backup e recuperação</strong> de sistema</li>
      </ul>

      <h2>Ferramentas do cotidiano BASIS</h2>
      <p>Transações como <strong>SM21</strong> (log do sistema), <strong>SM50/SM66</strong> (monitoramento de processos), <strong>ST22</strong> (dumps ABAP), <strong>RZ20</strong> (CCMS) e <strong>STMS</strong> (gerenciamento de transportes) são parte do vocabulário diário.</p>

      <h2>Por que é uma área tão valorizada?</h2>
      <p>SAP move bilhões em transações pelo mundo. Empresas grandes dependem 100% da disponibilidade do sistema. Um profissional BASIS qualificado é raro e estratégico — e o mercado paga bem por isso.</p>

      <h2>Conclusão</h2>
      <p>BASIS é a espinha dorsal do SAP. Entender essa camada técnica é o diferencial de quem quer ir além do básico e trabalhar com sistemas críticos de verdade.</p>
    `
  },

  4: {
    tag:      'IAM · LGPD',
    tagClass: 'iam',
    date:     'maio 2026',
    readtime: '3',
    title: 'IAM e LGPD: como a gestão de acessos protege sua empresa',
    body: `
      <p>IAM e LGPD parecem mundos separados — um é tecnologia, o outro é lei. Mas na prática, eles se encontram todos os dias dentro dos sistemas de qualquer empresa que trate dados pessoais.</p>

      <h2>O elo entre acesso e privacidade</h2>
      <p>A LGPD exige que dados pessoais sejam acessados <strong>apenas por quem tem necessidade legítima</strong> de fazê-lo. Isso é exatamente o princípio do IAM: controlar quem acessa o quê.</p>
      <p>Em outras palavras: uma boa implementação de IAM é, ao mesmo tempo, uma medida técnica de conformidade com a LGPD.</p>

      <h2>Onde IAM e LGPD se cruzam</h2>
      <ul>
        <li><strong>Princípio da necessidade:</strong> A LGPD diz que dados devem ser tratados no mínimo necessário. IAM implementa isso por meio de perfis de acesso mínimo (least privilege).</li>
        <li><strong>Rastreabilidade:</strong> Saber quem acessou dados pessoais é exigência da LGPD — e os logs de auditoria do IAM fornecem exatamente isso.</li>
        <li><strong>Offboarding seguro:</strong> Quando um colaborador sai da empresa, seus acessos precisam ser revogados imediatamente. Processos de IAM garantem isso de forma automatizada.</li>
        <li><strong>Revisão periódica de acessos:</strong> A LGPD incentiva boas práticas de governança. Campanhas de recertificação de acesso (Access Review) são uma prática de IAM alinhada a esse princípio.</li>
      </ul>

      <h2>O risco do acesso indevido</h2>
      <p>Um ex-funcionário com acesso ativo a dados de clientes é um incidente de segurança — e potencialmente uma violação da LGPD. Esse tipo de falha gera multas, danos à reputação e notificações obrigatórias à ANPD.</p>

      <h2>Boas práticas para unir IAM e LGPD</h2>
      <ul>
        <li>Mapeie quais sistemas armazenam dados pessoais e quem tem acesso a eles</li>
        <li>Implemente MFA (autenticação multifator) para dados sensíveis</li>
        <li>Estabeleça fluxos de aprovação para concessão de acesso</li>
        <li>Realize revisões periódicas de permissões (a cada 3 a 6 meses)</li>
        <li>Mantenha logs de acesso por pelo menos 1 ano</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Tratar IAM como ferramenta de conformidade com a LGPD não é exagero — é estratégia. Empresas que estruturam bem sua gestão de identidade ficam mais seguras, mais organizadas e mais preparadas para auditorias. A tecnologia e a lei, aqui, caminham juntas.</p>
    `
  }
};

/* ── Filtros ──────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.artigo-card').forEach(card => {
      if (filter === 'all' || card.dataset.category.includes(filter)) {
        card.removeAttribute('data-hidden');
      } else {
        card.setAttribute('data-hidden', 'true');
      }
    });
  });
});

/* ── Animação de entrada dos cards ─────── */
const cardObserverArt = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      cardObserverArt.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.artigo-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
  cardObserverArt.observe(card);
});

/* ── Modal ────────────────────────────── */
const overlay   = document.getElementById('artigoModalOverlay');
const modalBody = document.getElementById('artigoModalContent');
const closeBtn  = document.getElementById('artigoModalClose');

function openModal(id) {
  const art = ARTIGOS[id];
  if (!art) return;
  window.Conquistas?.trackArticle(id);

  const dict = typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS[currentLang] || {} : {};
  const readtimeLabel = dict['artigos.readtime'] || 'min de leitura';

  modalBody.innerHTML = `
    <div class="artigo-modal-tag">
      <span class="artigo-tag ${art.tagClass}">${art.tag}</span>
    </div>
    <h2 class="artigo-modal-title" id="artigoModalTitle">${art.title}</h2>
    <div class="artigo-modal-meta">
      <span>${art.date}</span>
      <span>${art.readtime} ${readtimeLabel}</span>
    </div>
    <div class="artigo-modal-body">${art.body}</div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.artigo-read-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(parseInt(btn.dataset.artigo)));
});

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
