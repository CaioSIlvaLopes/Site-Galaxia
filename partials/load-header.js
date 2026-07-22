const headerHTML = `<header class="header" id="header">
    <div class="container">
      
      <!-- [EDITAR LOGO E NOME DA EMPRESA] -->
      <a href="#hero" class="header-logo">
        <img src="assets/images/logo.png" alt="Galáxia Logo" />
      </a>

      <!-- [EDITAR LINKS DO MENU DE NAVEGAÇÃO] -->
      <nav class="header-nav" id="mainNav">
        <a href="index.html">Home</a>

        <a href="quem-somos.html">Quem Somos</a>
        <a href="frota.html">Frota</a>
        <a href="responsabilidade-social.html">Responsabilidade Social</a>
        <a href="index.html#servicos">Serviços</a>
        <a href="noticias.html">Notícias</a>
        <div class="nav-dropdown" id="qsmsDropdown">
          <button class="nav-dropdown-toggle" aria-expanded="false" onclick="this.parentElement.classList.toggle('open')">
            QSMS
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="dropdown-arrow"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="nav-dropdown-menu">
            <a href="autoridade-parar-trabalho.html">Autoridade de Parar o Trabalho</a>
            <a href="principios-eticos.html">Princípios Éticos</a>
            <a href="politica-qsms.html">Política de QSMS</a>
            <a href="politica-alcool-drogas.html">Política de Álcool, Drogas e Tabaco</a>
            <a href="programa-gestao-ambiental.html">Programa de Gestão Ambiental</a>
            <a href="programa-qualidade-vida.html">Programa de Qualidade de Vida</a>
            <a href="politica-esg.html">Política de ESG</a>
          </div>
        </div>
      </nav>

      <!-- SELETOR DE IDIOMAS & CTA DO CABEÇALHO -->
      <div class="header-actions">
        <div class="lang-selector" aria-label="Seletor de Idioma">
          <a href="#" class="lang-flag active" title="Português (Brasil)" aria-label="Português">
            <img src="assets/images/flag-br.svg" alt="PT-BR" />
          </a>
          <a href="#" class="lang-flag" title="English (UK)" aria-label="English">
            <img src="assets/images/flag-uk.svg" alt="EN-UK" />
          </a>
        </div>

        <div class="header-cta">
          <a href="fale-conosco.html" class="btn btn-primary">
            Fale conosco
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Botão Menu Mobile (Hamburger) -->
      <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>`;

const headerPlaceholder = document.getElementById("header-placeholder");
if (headerPlaceholder) {
  headerPlaceholder.innerHTML = headerHTML;
}
