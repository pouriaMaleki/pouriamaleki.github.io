export class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) {
      return;
    }

    this.innerHTML = `
      <footer class="contact-footer" aria-labelledby="contact-title">
        <section class="contact-card">
          <h2 id="contact-title" class="section-title">Contact</h2>
          <address class="contact-address">
            <ul class="contact-list">
              <li>
                <contact-icon icon="location"></contact-icon>
                <span>Helsinki, Finland</span>
              </li>
              <li>
                <contact-icon icon="email"></contact-icon>
                <a href="mailto:pouria@fiksu.me">pouria@fiksu.me</a>
              </li>
              <li>
                <contact-icon icon="linkedin"></contact-icon>
                <a href="https://www.linkedin.com/in/pamaleki/" rel="me">linkedin.com/in/pamaleki</a>
              </li>
              <li>
                <contact-icon icon="github"></contact-icon>
                <a href="https://github.com/pouriaMaleki">github.com/pouriaMaleki</a>
              </li>
            </ul>
          </address>
        </section>
      </footer>
    `;
  }
}
