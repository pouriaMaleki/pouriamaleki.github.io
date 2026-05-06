import { BaseComponent } from "./base-component.js";

const NAV_ITEMS = [
  { id: "home", href: "index.html", label: "Home" },
  { id: "cv", href: "cv.html", label: "CV" },
  // { id: "portfolio", href: "portfolio.html", label: "Portfolio" },
  // { id: "blog", href: "blog.html", label: "Blog" },
];

export class SiteHeader extends BaseComponent {
  render() {
    const currentPage = this.getAttribute("current-page");
    const root = this.getAttribute("root") ?? "";
    const navItems = NAV_ITEMS.map((item) => {
      const currentAttr = item.id === currentPage ? ' aria-current="page"' : "";
      return `<li><a href="${root}${item.href}" class="primary-nav-link"${currentAttr}>${item.label}</a></li>`;
    }).join("");

    return `
      <header>
        <img src="${this.getAttribute("root") ?? ""}profile.jpg" alt="Portrait of Pouria Abdolmaleki" class="profile-avatar" />
        <h1 class="site-title">Pouria Abdolmaleki</h1>
        <nav aria-label="Primary">
          <ul class="primary-nav-list">
            ${navItems}
          </ul>
        </nav>
      </header>
    `;
  }
}
