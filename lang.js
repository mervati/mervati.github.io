/* ══════════════════════════════════════════
   MERVATI HUB — lang.js  (i18n)
══════════════════════════════════════════ */

const TRANSLATIONS = {
  'pt-BR': {
    /* ── Nav / Header ── */
    'nav.home':               'Início',
    'nav.about':              'Sobre Mim',
    'nav.articles':           'Artigos',
    'logo.sub':               'Portal Central de Projetos',
    /* ── Share ── */
    'share.copy':             'Copiar link',
    'share.copied':           'Copiado! ✓',
    'share.msg':              'Confira o Mervati Hub — portal de projetos da Mariana! 🛸',
    /* ── Footer ── */
    'footer.text':            '© 2026 Mervati Hub · Feito com 👽 e muito JavaScript',
    /* ── index.html ── */
    'page.title':             'Mervati Hub',
    'mission':                'Selecione sua missão, Comandante',
    'section.games':          'Jogos',
    'section.programs':       'Programas',
    'section.sites':          'Sites',
    'card.memoria.title':     'Jogo da Memória',
    'card.memoria.desc':      'Encontre os pares antes que o tempo acabe. Sua memória é mais forte que a dos ETs?',
    'card.soon.title':        'Em Breve',
    'card.soon.title.2':      'Em Breve',
    'card.soon.title.3':      'Em Breve',
    'card.soon.games.desc':   'Novo jogo sendo preparado na base alienígena...',
    'card.soon.prog.desc':    'Programa em desenvolvimento no hangar intergaláctico...',
    'card.soon.sites.desc':   'Novo site sendo construído nas estrelas...',
    'card.access':            '🚀 ACESSAR',
    'card.orbit':             'EM ÓRBITA',
    'card.orbit.2':           'EM ÓRBITA',
    'card.orbit.3':           'EM ÓRBITA',
    'card.thalita.desc':      'Site de fotografia de eventos — selecione as fotos e finalize o pedido pelo WhatsApp.',
    /* ── sobre.html ── */
    'page.title.about':       'Sobre Mim · Mervati Hub',
    'about.sec.sobre':        'Sobre',
    'about.sec.exp':          'Experiência',
    'about.sec.skills':       'Competências',
    'about.sec.edu':          'Formação',
    'about.sec.certs':        'Certificações',
    'about.linkedin':         '🔗 LinkedIn',
    'about.cv':               '⬇ Baixar CV',
    'stat.ti':                'anos em TI',
    'stat.certs':             'certificações',
    'stat.projects':          'projetos ativos',
    'about.p1':               'Profissional com experiência em Tecnologia da Informação e Gestão Financeira, atuando em diferentes áreas, como Gestão de Identidade, Segurança da Informação e Atendimento ao Cliente.',
    'about.p2':               'Atualmente, atuo na área de Gestão de Riscos e Gestão de Acessos da empresa Vennx, com foco nos sistemas SAP, ADP e Entra ID, sendo responsável pelo controle, governança e conformidade dos acessos.',
    'about.p3':               'Anteriormente, na Venko IT, fui responsável pela Gestão de Patches de Segurança e outras funções do VSS, utilizando a solução ManageEngine Endpoint Central.',
    'about.p4':               'Tenho habilidades em gerenciamento de identidades, segurança da informação, administração de sistemas e atendimento ao cliente, buscando sempre soluções eficientes e inovadoras para otimização de processos.',
    /* Experience */
    'vennx.location':         'Vitória, ES · Tempo integral',
    'vennx.job1':             'Analista de Segurança da Informação Jr. II',
    'vennx.job1.period':      'mai/2025 – presente · Presencial',
    'vennx.job2':             'Analista de Segurança da Informação Jr. I',
    'vennx.job2.period':      'abr/2025 – mai/2025 · 2 meses · Híbrido',
    'vennx.job2.desc':        'Atuo focado em proteger dados e informações sensíveis, garantindo conformidade com normas e regulamentos. Competências: Análise de Vulnerabilidades, Gestão de Riscos, Monitoramento de Sistemas e Conformidade (LGPD, GDPR).',
    'yibnet.location':        'ES · Remoto · Tempo integral',
    'yibnet.job1':            'Financeiro e Suporte Técnico',
    'yibnet.job1.period':     'mai/2024 – abr/2025 · 1 ano',
    'venko.location':         'Vitória, ES · Tempo integral',
    'venko.job1':             'Analista de Suporte Jr.',
    'venko.job1.period':      'fev/2024 – abr/2024 · 3 meses',
    'venko.job1.desc':        'Responsável pela Gestão de Patches de Segurança e outras funções do VSS. Solução: ManageEngine Endpoint Central.',
    'fortlev.location':       'Serra, ES · Tempo integral',
    'fortlev.job1':           'Analista de TI Júnior',
    'fortlev.job1.period':    'set/2023 – dez/2023 · 4 meses',
    'fortlev.job1.desc':      'Responsável pela torre de Gestão de Identidade da empresa. Soluções: Office365, ManageEngine ADAudit e ADManager, ASC Brasil, SAP.',
    'fortlev.job2':           'IT Infrastructure',
    'fortlev.job2.period':    'out/2020 – set/2023 · 3 anos',
    'fortlev.job2.desc':      'Responsável por Roles & Authorizations | Torre de Gestão de Identidade. Solução: SAP | Office365, ManageEngine ADAudit e ADManager, ASC Brasil.',
    'fortlev.job3':           'IT Support Technician',
    'fortlev.job3.period':    'ago/2018 – out/2020 · 2 anos 3 meses',
    'nexa.location':          'Vitória, ES · Tempo integral',
    'nexa.job1':              'IT Support Technician',
    'nexa.job1.period':       'jan/2017 – ago/2018 · 1 ano 8 meses',
    /* Skills */
    'skill.vuln':             'Análise de Vulnerabilidades e Ameaças',
    'skill.risk':             'Gestão de Riscos de Segurança',
    'skill.monitor':          'Monitoramento de Sistemas',
    'skill.incident':         'Detecção de Incidentes',
    'skill.compliance':       'Conformidade LGPD / GDPR',
    'skill.iam':              'Gerenciamento de Identidades (IAM)',
    'skill.critical':         'Pensamento Crítico',
    /* Education */
    'edu.faesa.course':       'Tecnólogo em Redes de Computadores',
    'edu.faesa.period':       'jan/2020 – jun/2022',
    'edu.gomes.course':       'Ensino Técnico — Montagem e Manutenção de Computadores',
    'edu.gomes.period':       'jan/2012 – jul/2013',
    /* Certifications */
    'cert.sp.name':           '55215 · SharePoint Online Power User',
    'cert.sp.issuer':         'Ka Solution · ago/2023',
    'cert.sap.name':          'SAP BASIS Netweaver — Administração de Sistemas SAP',
    'cert.sap.issuer':        'Udemy Brasil · jul/2023',
    'cert.ms.name':           '32101 · Microsoft 365 Mobilidade e Segurança (MS-101)',
    'cert.ms.issuer':         'Ka Solution · set/2021',
    'cert.spp.name':          'SharePoint na Prática',
    'cert.spp.issuer':        'Udemy Brasil · jun/2023',
    'cert.itil.name':         'A Nova Gestão de Serviços de TI através do ITIL 4',
    'cert.itil.issuer':       'ITIL4 · FORTLEV',
    'cert.aws.name':          'AWS Cloud Practitioner Essentials',
    'cert.aws.issuer':        'AWS',
    'cert.verify':            '✓ Verificar',
    /* ── 404 ── */
    'page.title.404':         '404 — Perdido no Espaço · Mervati Hub',
    'notfound.title':         'Você se perdeu no espaço',
    'notfound.sub':           'A página que você procura não existe ou foi abduzida pelos ETs. Nossos sensores alienígenas não conseguem localizá-la.',
    'notfound.btn':           '🛸 Voltar para a base',
    'notfound.coords':        'COORD: 404 · SETOR: NULL · STATUS: PERDIDO',
    /* ── Contato ── */
    'contact.title':          'Contato',
    'contact.alien.msg':      '👽 Nossos sensores captaram sua presença nesta galáxia. Transmita sua mensagem — a base responderá antes que os ETs cheguem primeiro.',
    'contact.email.label':    'E-mail',
    'contact.form.name':      'Seu nome',
    'contact.form.email':     'Seu e-mail',
    'contact.form.msg':       'Escreva sua mensagem...',
    'contact.form.send':      '🚀 ENVIAR',
    'contact.form.sending':   'Enviando...',
    'contact.form.success':   'Mensagem enviada! Logo entro em contato. 🛸',
    'contact.form.error':     'Algo deu errado. Tente novamente.',
    /* ── artigos.html ── */
    'page.title.articles':    'Artigos · Mervati Hub',
    'artigos.hero.title':     'Artigos',
    'artigos.hero.sub':       'Reflexões sobre IAM, LGPD e o universo da segurança da informação',
    'artigos.filter.all':     'Todos',
    'artigos.readtime':       'min de leitura',
    'artigos.readmore':       'Ler artigo',
  },

  'en': {
    /* ── Nav / Header ── */
    'nav.home':               'Home',
    'nav.about':              'About Me',
    'nav.articles':           'Articles',
    'logo.sub':               'Central Projects Portal',
    /* ── Share ── */
    'share.copy':             'Copy link',
    'share.copied':           'Copied! ✓',
    'share.msg':              'Check out Mervati Hub — Mariana\'s projects portal! 🛸',
    /* ── Footer ── */
    'footer.text':            '© 2026 Mervati Hub · Made with 👽 and lots of JavaScript',
    /* ── index.html ── */
    'page.title':             'Mervati Hub',
    'mission':                'Select your mission, Commander',
    'section.games':          'Games',
    'section.programs':       'Programs',
    'section.sites':          'Sites',
    'card.memoria.title':     'Memory Game',
    'card.memoria.desc':      'Find the pairs before time runs out. Is your memory stronger than the aliens?',
    'card.soon.title':        'Coming Soon',
    'card.soon.title.2':      'Coming Soon',
    'card.soon.title.3':      'Coming Soon',
    'card.soon.games.desc':   'New game being prepared at the alien base...',
    'card.soon.prog.desc':    'Program under development in the intergalactic hangar...',
    'card.soon.sites.desc':   'New site being built among the stars...',
    'card.access':            '🚀 ACCESS',
    'card.orbit':             'IN ORBIT',
    'card.orbit.2':           'IN ORBIT',
    'card.orbit.3':           'IN ORBIT',
    'card.thalita.desc':      'Event photography site — select your photos and place your order via WhatsApp.',
    /* ── sobre.html ── */
    'page.title.about':       'About Me · Mervati Hub',
    'about.sec.sobre':        'About',
    'about.sec.exp':          'Experience',
    'about.sec.skills':       'Skills',
    'about.sec.edu':          'Education',
    'about.sec.certs':        'Certifications',
    'about.linkedin':         '🔗 LinkedIn',
    'about.cv':               '⬇ Download CV',
    'stat.ti':                'years in IT',
    'stat.certs':             'certifications',
    'stat.projects':          'active projects',
    'about.p1':               'Professional with experience in Information Technology and Financial Management, working across different areas such as Identity Management, Information Security, and Customer Service.',
    'about.p2':               'Currently working in Risk Management and Access Management at Vennx, focused on SAP, ADP, and Entra ID systems, responsible for access control, governance, and compliance.',
    'about.p3':               'Previously at Venko IT, was responsible for Security Patch Management and other VSS functions, using the ManageEngine Endpoint Central solution.',
    'about.p4':               'Skilled in identity management, information security, systems administration, and customer service, always seeking efficient and innovative solutions for process optimization.',
    /* Experience */
    'vennx.location':         'Vitória, ES · Full-time',
    'vennx.job1':             'Information Security Analyst Jr. II',
    'vennx.job1.period':      'May/2025 – present · On-site',
    'vennx.job2':             'Information Security Analyst Jr. I',
    'vennx.job2.period':      'Apr/2025 – May/2025 · 2 months · Hybrid',
    'vennx.job2.desc':        'Focused on protecting sensitive data and information, ensuring compliance with standards and regulations. Skills: Vulnerability Analysis, Risk Management, Systems Monitoring, and Compliance (LGPD, GDPR).',
    'yibnet.location':        'ES · Remote · Full-time',
    'yibnet.job1':            'Finance and Technical Support',
    'yibnet.job1.period':     'May/2024 – Apr/2025 · 1 year',
    'venko.location':         'Vitória, ES · Full-time',
    'venko.job1':             'Jr. Support Analyst',
    'venko.job1.period':      'Feb/2024 – Apr/2024 · 3 months',
    'venko.job1.desc':        'Responsible for Security Patch Management and other VSS functions. Solution: ManageEngine Endpoint Central.',
    'fortlev.location':       'Serra, ES · Full-time',
    'fortlev.job1':           'Junior IT Analyst',
    'fortlev.job1.period':    'Sep/2023 – Dec/2023 · 4 months',
    'fortlev.job1.desc':      'Responsible for the company\'s Identity Management tower. Solutions: Office365, ManageEngine ADAudit and ADManager, ASC Brasil, SAP.',
    'fortlev.job2':           'IT Infrastructure',
    'fortlev.job2.period':    'Oct/2020 – Sep/2023 · 3 years',
    'fortlev.job2.desc':      'Responsible for Roles & Authorizations | Identity Management Tower. Solution: SAP | Office365, ManageEngine ADAudit and ADManager, ASC Brasil.',
    'fortlev.job3':           'IT Support Technician',
    'fortlev.job3.period':    'Aug/2018 – Oct/2020 · 2 years 3 months',
    'nexa.location':          'Vitória, ES · Full-time',
    'nexa.job1':              'IT Support Technician',
    'nexa.job1.period':       'Jan/2017 – Aug/2018 · 1 year 8 months',
    /* Skills */
    'skill.vuln':             'Vulnerability and Threat Analysis',
    'skill.risk':             'Security Risk Management',
    'skill.monitor':          'Systems Monitoring',
    'skill.incident':         'Incident Detection',
    'skill.compliance':       'LGPD / GDPR Compliance',
    'skill.iam':              'Identity Management (IAM)',
    'skill.critical':         'Critical Thinking',
    /* Education */
    'edu.faesa.course':       'Computer Networks Technologist',
    'edu.faesa.period':       'Jan/2020 – Jun/2022',
    'edu.gomes.course':       'Technical Education — Computer Assembly and Maintenance',
    'edu.gomes.period':       'Jan/2012 – Jul/2013',
    /* Certifications */
    'cert.sp.name':           '55215 · SharePoint Online Power User',
    'cert.sp.issuer':         'Ka Solution · Aug/2023',
    'cert.sap.name':          'SAP BASIS Netweaver — SAP Systems Administration',
    'cert.sap.issuer':        'Udemy Brasil · Jul/2023',
    'cert.ms.name':           '32101 · Microsoft 365 Mobility and Security (MS-101)',
    'cert.ms.issuer':         'Ka Solution · Sep/2021',
    'cert.spp.name':          'SharePoint in Practice',
    'cert.spp.issuer':        'Udemy Brasil · Jun/2023',
    'cert.itil.name':         'The New IT Service Management through ITIL 4',
    'cert.itil.issuer':       'ITIL4 · FORTLEV',
    'cert.aws.name':          'AWS Cloud Practitioner Essentials',
    'cert.aws.issuer':        'AWS',
    'cert.verify':            '✓ Verify',
    /* ── 404 ── */
    'page.title.404':         '404 — Lost in Space · Mervati Hub',
    'notfound.title':         'You got lost in space',
    'notfound.sub':           'The page you\'re looking for doesn\'t exist or was abducted by aliens. Our alien sensors can\'t locate it.',
    'notfound.btn':           '🛸 Back to base',
    'notfound.coords':        'COORD: 404 · SECTOR: NULL · STATUS: LOST',
    /* ── Contact ── */
    'contact.title':          'Contact',
    'contact.alien.msg':      '👽 Our sensors have detected your presence in this galaxy. Transmit your message — the base will respond before the aliens get there first.',
    'contact.email.label':    'E-mail',
    'contact.form.name':      'Your name',
    'contact.form.email':     'Your e-mail',
    'contact.form.msg':       'Write your message...',
    'contact.form.send':      '🚀 SEND',
    'contact.form.sending':   'Sending...',
    'contact.form.success':   'Message sent! I\'ll get back to you soon. 🛸',
    'contact.form.error':     'Something went wrong. Please try again.',
    /* ── artigos.html ── */
    'page.title.articles':    'Articles · Mervati Hub',
    'artigos.hero.title':     'Articles',
    'artigos.hero.sub':       'Reflections on IAM, LGPD and the world of information security',
    'artigos.filter.all':     'All',
    'artigos.readtime':       'min read',
    'artigos.readmore':       'Read article',
  },

  'es': {
    /* ── Nav / Header ── */
    'nav.home':               'Inicio',
    'nav.about':              'Sobre Mí',
    'nav.articles':           'Artículos',
    'logo.sub':               'Portal Central de Proyectos',
    /* ── Share ── */
    'share.copy':             'Copiar enlace',
    'share.copied':           '¡Copiado! ✓',
    'share.msg':              '¡Visita Mervati Hub — el portal de proyectos de Mariana! 🛸',
    /* ── Footer ── */
    'footer.text':            '© 2026 Mervati Hub · Hecho con 👽 y mucho JavaScript',
    /* ── index.html ── */
    'page.title':             'Mervati Hub',
    'mission':                'Selecciona tu misión, Comandante',
    'section.games':          'Juegos',
    'section.programs':       'Programas',
    'section.sites':          'Sitios',
    'card.memoria.title':     'Juego de Memoria',
    'card.memoria.desc':      'Encuentra los pares antes de que se acabe el tiempo. ¿Tu memoria es más fuerte que la de los ETs?',
    'card.soon.title':        'Próximamente',
    'card.soon.title.2':      'Próximamente',
    'card.soon.title.3':      'Próximamente',
    'card.soon.games.desc':   'Nuevo juego siendo preparado en la base alienígena...',
    'card.soon.prog.desc':    'Programa en desarrollo en el hangar intergaláctico...',
    'card.soon.sites.desc':   'Nuevo sitio siendo construido entre las estrellas...',
    'card.access':            '🚀 ACCEDER',
    'card.orbit':             'EN ÓRBITA',
    'card.orbit.2':           'EN ÓRBITA',
    'card.orbit.3':           'EN ÓRBITA',
    'card.thalita.desc':      'Sitio de fotografía de eventos — selecciona las fotos y finaliza el pedido por WhatsApp.',
    /* ── sobre.html ── */
    'page.title.about':       'Sobre Mí · Mervati Hub',
    'about.sec.sobre':        'Sobre',
    'about.sec.exp':          'Experiencia',
    'about.sec.skills':       'Competencias',
    'about.sec.edu':          'Formación',
    'about.sec.certs':        'Certificaciones',
    'about.linkedin':         '🔗 LinkedIn',
    'about.cv':               '⬇ Descargar CV',
    'stat.ti':                'años en TI',
    'stat.certs':             'certificaciones',
    'stat.projects':          'proyectos activos',
    'about.p1':               'Profesional con experiencia en Tecnología de la Información y Gestión Financiera, trabajando en diferentes áreas como Gestión de Identidad, Seguridad de la Información y Atención al Cliente.',
    'about.p2':               'Actualmente trabaja en el área de Gestión de Riesgos y Gestión de Accesos en Vennx, con enfoque en los sistemas SAP, ADP y Entra ID, siendo responsable del control, gobernanza y cumplimiento de accesos.',
    'about.p3':               'Anteriormente, en Venko IT, fue responsable de la Gestión de Parches de Seguridad y otras funciones del VSS, utilizando la solución ManageEngine Endpoint Central.',
    'about.p4':               'Cuenta con habilidades en gestión de identidades, seguridad de la información, administración de sistemas y atención al cliente, buscando siempre soluciones eficientes e innovadoras para la optimización de procesos.',
    /* Experience */
    'vennx.location':         'Vitória, ES · Tiempo completo',
    'vennx.job1':             'Analista de Seguridad de la Información Jr. II',
    'vennx.job1.period':      'may/2025 – presente · Presencial',
    'vennx.job2':             'Analista de Seguridad de la Información Jr. I',
    'vennx.job2.period':      'abr/2025 – may/2025 · 2 meses · Híbrido',
    'vennx.job2.desc':        'Enfocada en proteger datos e información sensible, garantizando el cumplimiento de normas y regulaciones. Competencias: Análisis de Vulnerabilidades, Gestión de Riesgos, Monitoreo de Sistemas y Cumplimiento (LGPD, GDPR).',
    'yibnet.location':        'ES · Remoto · Tiempo completo',
    'yibnet.job1':            'Finanzas y Soporte Técnico',
    'yibnet.job1.period':     'may/2024 – abr/2025 · 1 año',
    'venko.location':         'Vitória, ES · Tiempo completo',
    'venko.job1':             'Analista de Soporte Jr.',
    'venko.job1.period':      'feb/2024 – abr/2024 · 3 meses',
    'venko.job1.desc':        'Responsable de la Gestión de Parches de Seguridad y otras funciones del VSS. Solución: ManageEngine Endpoint Central.',
    'fortlev.location':       'Serra, ES · Tiempo completo',
    'fortlev.job1':           'Analista de TI Júnior',
    'fortlev.job1.period':    'sep/2023 – dic/2023 · 4 meses',
    'fortlev.job1.desc':      'Responsable de la torre de Gestión de Identidad de la empresa. Soluciones: Office365, ManageEngine ADAudit y ADManager, ASC Brasil, SAP.',
    'fortlev.job2':           'IT Infrastructure',
    'fortlev.job2.period':    'oct/2020 – sep/2023 · 3 años',
    'fortlev.job2.desc':      'Responsable de Roles & Authorizations | Torre de Gestión de Identidad. Solución: SAP | Office365, ManageEngine ADAudit y ADManager, ASC Brasil.',
    'fortlev.job3':           'IT Support Technician',
    'fortlev.job3.period':    'ago/2018 – oct/2020 · 2 años 3 meses',
    'nexa.location':          'Vitória, ES · Tiempo completo',
    'nexa.job1':              'IT Support Technician',
    'nexa.job1.period':       'ene/2017 – ago/2018 · 1 año 8 meses',
    /* Skills */
    'skill.vuln':             'Análisis de Vulnerabilidades y Amenazas',
    'skill.risk':             'Gestión de Riesgos de Seguridad',
    'skill.monitor':          'Monitoreo de Sistemas',
    'skill.incident':         'Detección de Incidentes',
    'skill.compliance':       'Cumplimiento LGPD / GDPR',
    'skill.iam':              'Gestión de Identidades (IAM)',
    'skill.critical':         'Pensamiento Crítico',
    /* Education */
    'edu.faesa.course':       'Tecnólogo en Redes de Computadoras',
    'edu.faesa.period':       'ene/2020 – jun/2022',
    'edu.gomes.course':       'Educación Técnica — Montaje y Mantenimiento de Computadoras',
    'edu.gomes.period':       'ene/2012 – jul/2013',
    /* Certifications */
    'cert.sp.name':           '55215 · SharePoint Online Power User',
    'cert.sp.issuer':         'Ka Solution · ago/2023',
    'cert.sap.name':          'SAP BASIS Netweaver — Administración de Sistemas SAP',
    'cert.sap.issuer':        'Udemy Brasil · jul/2023',
    'cert.ms.name':           '32101 · Microsoft 365 Movilidad y Seguridad (MS-101)',
    'cert.ms.issuer':         'Ka Solution · sep/2021',
    'cert.spp.name':          'SharePoint en la Práctica',
    'cert.spp.issuer':        'Udemy Brasil · jun/2023',
    'cert.itil.name':         'La Nueva Gestión de Servicios de TI a través de ITIL 4',
    'cert.itil.issuer':       'ITIL4 · FORTLEV',
    'cert.aws.name':          'AWS Cloud Practitioner Essentials',
    'cert.aws.issuer':        'AWS',
    'cert.verify':            '✓ Verificar',
    /* ── 404 ── */
    'page.title.404':         '404 — Perdido en el Espacio · Mervati Hub',
    'notfound.title':         'Te perdiste en el espacio',
    'notfound.sub':           'La página que buscas no existe o fue abducida por los ETs. Nuestros sensores alienígenas no pueden localizarla.',
    'notfound.btn':           '🛸 Volver a la base',
    'notfound.coords':        'COORD: 404 · SECTOR: NULL · ESTADO: PERDIDO',
    /* ── Contacto ── */
    'contact.title':          'Contacto',
    'contact.alien.msg':      '👽 Nuestros sensores han detectado tu presencia en esta galaxia. Transmite tu mensaje — la base responderá antes de que los ETs lleguen primero.',
    'contact.email.label':    'E-mail',
    'contact.form.name':      'Tu nombre',
    'contact.form.email':     'Tu correo electrónico',
    'contact.form.msg':       'Escribe tu mensaje...',
    'contact.form.send':      '🚀 ENVIAR',
    'contact.form.sending':   'Enviando...',
    'contact.form.success':   '¡Mensaje enviado! Pronto me pongo en contacto. 🛸',
    'contact.form.error':     'Algo salió mal. Inténtalo de nuevo.',
    /* ── artigos.html ── */
    'page.title.articles':    'Artículos · Mervati Hub',
    'artigos.hero.title':     'Artículos',
    'artigos.hero.sub':       'Reflexiones sobre IAM, LGPD y el universo de la seguridad de la información',
    'artigos.filter.all':     'Todos',
    'artigos.readtime':       'min de lectura',
    'artigos.readmore':       'Leer artículo',
  }
};

const LANG_FLAG_SRCS = {
  'pt-BR': 'https://flagcdn.com/w40/br.png',
  'en':    'https://flagcdn.com/w40/gb.png',
  'es':    'https://flagcdn.com/w40/es.png'
};
const LANG_CODES = { 'pt-BR': 'PT', 'en': 'EN', 'es': 'ES' };
const LANG_ATTRS = { 'pt-BR': 'pt-BR', 'en': 'en', 'es': 'es' };

let currentLang = localStorage.getItem('mg-lang') || 'pt-BR';

function applyLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('mg-lang', lang);

  const dict = TRANSLATIONS[lang];

  /* Atualiza todos os elementos com data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Placeholders traduzidos */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* Título da página */
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl && dict[titleEl.dataset.i18n]) {
    document.title = dict[titleEl.dataset.i18n];
  }

  /* Atributo lang do html */
  document.documentElement.lang = LANG_ATTRS[lang];

  /* Botão: bandeira + código */
  const langFlag = document.getElementById('langFlag');
  const langCode = document.getElementById('langCode');
  if (langFlag) { langFlag.src = LANG_FLAG_SRCS[lang]; langFlag.alt = LANG_CODES[lang]; }
  if (langCode) langCode.textContent = LANG_CODES[lang];

  /* Destaque no item ativo */
  document.querySelectorAll('.lang-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Links de compartilhamento (atualiza se já existem no DOM) */
  const shareMsg = dict['share.msg'];
  if (shareMsg) {
    window._shareMsg = shareMsg;
    const url  = encodeURIComponent(window.location.href);
    const msg  = encodeURIComponent(shareMsg);
    const wa   = document.getElementById('shareWhatsapp');
    const li   = document.getElementById('shareLinkedin');
    const xb   = document.getElementById('shareX');
    if (wa) wa.href = `https://wa.me/?text=${msg}%20${url}`;
    if (li) li.href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${msg}`;
    if (xb) xb.href = `https://twitter.com/intent/tweet?url=${url}&text=${msg}`;
  }

  /* Rótulo do botão copiar (só reseta se não estiver no estado "copiado") */
  const copyLabel = document.getElementById('copyLabel');
  if (copyLabel) {
    const copiedText = dict['share.copied'] || 'Copiado! ✓';
    if (copyLabel.textContent !== copiedText) {
      copyLabel.textContent = dict['share.copy'] || 'Copiar link';
    }
  }
}

/* ── Detecção de idioma por IP ──────────────────── */
const SPANISH_COUNTRIES = new Set([
  'ES','MX','CO','AR','PE','VE','CL','EC','GT','CU',
  'BO','DO','HN','PY','SV','NI','CR','PA','UY','GQ','PR'
]);

async function detectLangByIP() {
  try {
    const res  = await fetch('https://api.country.is/');
    const data = await res.json();
    const cc   = (data.country || '').toUpperCase();
    if (cc === 'BR')                      return 'pt-BR';
    if (SPANISH_COUNTRIES.has(cc))        return 'es';
    return 'en';
  } catch {
    return null; /* falha silenciosa — mantém padrão */
  }
}

/* Executa imediatamente (antes do script.js) para que o typing effect
   já leia o texto correto na inicialização */
applyLang(currentLang);

/* Só auto-detecta se o usuário nunca escolheu manualmente */
if (!localStorage.getItem('mg-lang')) {
  detectLangByIP().then(lang => {
    if (lang && lang !== currentLang) applyLang(lang);
  });
}

/* Aguarda o DOM para ligar os botões */
document.addEventListener('DOMContentLoaded', () => {
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (!langBtn || !langDropdown) return;

  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = langDropdown.classList.toggle('open');
    const chevron = langBtn.querySelector('.lang-btn-chevron');
    if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : '';
  });

  const chevron = () => langBtn.querySelector('.lang-btn-chevron');

  langDropdown.querySelectorAll('.lang-item').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      langDropdown.classList.remove('open');
      if (chevron()) chevron().style.transform = '';
    });
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    if (chevron()) chevron().style.transform = '';
  });
  langDropdown.addEventListener('click', e => e.stopPropagation());
});
