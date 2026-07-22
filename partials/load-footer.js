const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        
        <div class="footer-brand">
          <a href="index.html" class="header-logo">
            <img src="assets/images/Logo - Fonte Branca (1).png" alt="Galáxia" />
          </a>
          <p>Empresa Brasileira de Navegação com foco em apoio marítimo, apoio portuário e logística. Navegando com excelência desde 2002.</p>
          
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Instagram" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="quem-somos.html">Quem Somos</a></li>
            <li><a href="autoridade-parar-trabalho.html">Autoridade de Parar o Trabalho</a></li>
            <li><a href="principios-eticos.html">Princípios Éticos</a></li>
            <li><a href="responsabilidade-social.html">Responsabilidade Social</a></li>
            <li><a href="frota.html">Frota</a></li>
            <li><a href="fale-conosco.html">Fale Conosco</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Soluções</h4>
          <ul>
            <li><a href="index.html#areas-atuacao">Áreas de Atuação</a></li>
            <li><a href="index.html#servicos">Apoio Marítimo</a></li>
            <li><a href="index.html#servicos">Apoio Portuário</a></li>
            <li><a href="index.html#servicos">Logística Naval</a></li>
          </ul>
        </div>

        <div class="footer-col footer-col-contact">
          <h4>Contato</h4>
          
          <div class="footer-contact-item" style="align-items: flex-start;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 4px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <p style="margin-bottom: 4px; font-weight: 600;">Escritório Rio de Janeiro – RJ</p>
              <p style="font-size: 0.85rem; line-height: 1.5;">Edifício RB1 – Av. Rio Branco, nº 1<br>18º Andar 
                                                              | Salas 1804 a 1806<br>Rio de Janeiro | RJ | Brasil |<br> CEP 20090-003</p>
            </div>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <p>+55 (21) 3804-8100</p>
          </div>
          <div class="footer-contact-item" style="align-items: flex-start;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 4px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <p style="margin-bottom: 4px; font-weight: 600;">Base Macaé – RJ</p>
              <p style="font-size: 0.8.5rem; line-height: 1.5;">Rua Acapulco, 24 |<br> Cavaleiros Macaé, RJ</p>
              <p style="font-size: 0.8rem; line-height: 1.5;">CEP 27920-150 </p>
            </div>
          </div>
          
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <p>+55 (22) 2762-6912</p>
          </div>
          
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <p>galaxia@galaxiamaritima.com.br</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Galáxia. Todos os direitos reservados.</p>
        <p><a href="#">Política de Privacidade</a> · <a href="#">Termos de Uso</a> · <a href="#">SGI & SMS</a></p>
      </div>
    </div>
  </footer>
`;

const placeholder = document.getElementById("footer-placeholder");
if (placeholder) {
  placeholder.innerHTML = footerHTML;
}
