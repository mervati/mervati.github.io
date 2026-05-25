# 🛸 Mervati Hub

<p align="center">
  <img src="https://img.shields.io/badge/versão-v1.4.0-brightgreen?style=flat" alt="Versão">
  <img src="https://img.shields.io/badge/status-online-brightgreen?style=flat" alt="Status">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=githubpages&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/dependências-nenhuma-brightgreen?style=flat" alt="Sem dependências">
</p>

> Portal central de projetos de Mariana Ervati — tema futurista alienígena com animações, modo escuro padrão e design responsivo.

🔗 **Acesse:** [mervati.github.io](https://mervati.github.io)

---

## 📄 Páginas

| Página | URL | Descrição |
|---|---|---|
| Hub principal | `/` | Portal com seções Jogos, Programas e Sites |
| Sobre Mim | `/sobre.html` | Perfil profissional completo |

---

## ✨ Funcionalidades

- 🌙 **Modo escuro** como padrão, alternável para modo claro com preferência salva
- ⭐ **Campo de estrelas animado** no canvas com estrelas cadentes e parallax no mouse
- 🎮 **Cards por categoria** — Jogos, Programas e Sites — com efeito flutuante e brilho no hover
- 🔤 **Efeito de digitação** na frase de missão ao carregar a página
- ✦ **Glitch no título** MERVATI HUB a cada intervalo aleatório
- 🖱️ **Cursor personalizado** — seta com borda verde neon via CSS
- 🔗 **Botão de compartilhar** com dropdown para WhatsApp, LinkedIn, X e copiar link
- 👽 **Página Sobre Mim** com perfil do LinkedIn, timeline de experiência, competências, formação e certificações
- 🔠 **Efeito scramble** no nome ao passar o mouse
- 🌀 **Animação de entrada** — blocos sobem gradualmente ao entrar na viewport
- 🌍 **Seletor de idioma** — PT-BR, English e Español com bandeiras reais e detecção automática por IP

---

## 🗂️ Estrutura

```
mervati.github.io/
├── index.html       # Hub principal
├── sobre.html       # Página Sobre Mim
├── style.css        # Estilos globais (hub + compartilhar + cursor)
├── sobre.css        # Estilos exclusivos da página Sobre Mim
├── lang.js          # Internacionalização (PT-BR / EN / ES) + detecção por IP
├── script.js        # Animações, tema, compartilhar, scramble
├── favicon.svg      # Ícone OVNI na aba do navegador
└── images/
    ├── memoria.png  # Screenshot do Jogo da Memória
    ├── thalita.jpg  # Screenshot do site Thalita Jantorno
    └── avatar.jpg   # Foto de perfil
```

---

## 🎮 Projetos

### Jogos
| Projeto | Link |
|---|---|
| Jogo da Memória v1.5.0 | [mervati.github.io/Jogo-da-Memoria](https://mervati.github.io/Jogo-da-Memoria) |

### Sites
| Projeto | Link |
|---|---|
| Thalita Jantorno — Fotografia de Eventos | [mervati.github.io/thalita-jantorno](https://mervati.github.io/thalita-jantorno/) |

---

## 📦 Changelog

### v1.4.0 — 25/05/2026
- Seletor de idioma com bandeiras reais (PT-BR, English, Español)
- Detecção automática de idioma pelo IP: Brasil → PT-BR, países hispanófonos → ES, demais → EN
- Preferência salva em localStorage — escolha manual tem prioridade sobre a detecção
- Tradução completa de todas as páginas: nav, cards, página Sobre Mim, experiência, competências, formação e certificações

### v1.3.0 — 25/05/2026
- Card Thalita Jantorno adicionado na seção Sites com imagem preview, descrição e botão de acesso
- Imagem `images/thalita.jpg` adicionada ao repositório com screenshot do site de fotografia de eventos

### v1.2.0 — 24/05/2026
- Favicon SVG de OVNI adicionado — visível na aba do navegador em todas as páginas

### v1.1.0 — 24/05/2026
- Barra de navegação no header com links Início e Sobre Mim
- Página Sobre Mim completa: perfil, experiência, competências, formação, certificações
- Foto de perfil e anel giratório animado no avatar
- Efeito scramble no nome ao passar o mouse
- Botão de compartilhar com dropdown (WhatsApp, LinkedIn, X, copiar link)
- Cursor personalizado — seta verde neon via CSS
- Cards "Em Órbita" com opacidade 60%
- Screenshot do Jogo da Memória atualizado (16:9)
- Script corrigido para funcionar em todas as páginas sem erros

### v1.0.0 — 24/05/2026
- Criação do hub com tema futurista alienígena
- Seções Jogos, Programas e Sites com cards animados
- Modo escuro padrão com alternância para modo claro
- Campo de estrelas no canvas com estrelas cadentes e parallax
- Efeito de digitação na frase de missão
- Glitch aleatório no título
- Animação de entrada dos cards via IntersectionObserver
