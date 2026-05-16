const pages = [
  { key: "home", href: "index.html", label: "Accueil" },
  { key: "services", href: "services.html", label: "Services" },
  { key: "realisations", href: "realisations.html", label: "Réalisations" },
  { key: "a-propos", href: "a-propos.html", label: "À propos" },
  { key: "contact", href: "contact.html", label: "Contact" }
];

const currentPage = document.body.dataset.page;

function renderHeader() {
  const node = document.querySelector("[data-header]");
  if (!node) {
    return;
  }

  const links = pages
    .map(
      (page) =>
        `<a class="nav-link${page.key === currentPage ? " nav-link-active" : ""}" href="${page.href}">${page.label}</a>`
    )
    .join("");

  node.innerHTML = `
    <header class="site-header">
      <div class="container header-row">
        <a class="brand" href="index.html">
          <img alt="Nova" class="brand-mark" src="public/media/nova-mark.svg" />
          <span>
            NOVA
            <small>Agency Systems</small>
          </span>
        </a>
        <nav class="main-nav" aria-label="Navigation principale">
          ${links}
        </nav>
        <a class="button button-dark" href="contact.html">Lancer un projet</a>
      </div>
    </header>
  `;
}

function renderFooter() {
  const node = document.querySelector("[data-footer]");
  if (!node) {
    return;
  }

  const links = pages
    .map((page) => `<a href="${page.href}">${page.label}</a>`)
    .join("");

  node.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="index.html">
            <img alt="Nova" class="brand-mark" src="public/media/nova-mark.svg" />
            <span>
              NOVA
              <small>Agency Systems</small>
            </span>
          </a>
          <p>Studio premium pour agents IA, sites web, identités visuelles et systèmes de contenu social.</p>
        </div>
        <div>
          <span class="footer-label">Pages</span>
          <div class="footer-links">${links}</div>
        </div>
        <div>
          <span class="footer-label">Positionnement</span>
          <p>Pensé pour un fondateur orienté Europe, avec une offre capable de vendre du branding, du web, de l’IA et du contenu sans dispersion.</p>
        </div>
      </div>
    </footer>
  `;
}

function setupReveals() {
  const nodes = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function setupDemoForm() {
  const form = document.querySelector("[data-demo-form]");
  const note = document.querySelector("[data-form-note]");

  if (!form || !note) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent =
      "Prototype prêt: branche ici ton email, ton CRM ou ton outil d’automatisation pour recevoir les demandes.";
  });
}

renderHeader();
renderFooter();
setupReveals();
setupDemoForm();
