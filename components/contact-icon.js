const ICON_URLS = {
  location: "assets/icons/location.svg",
  email: "assets/icons/email.svg",
  linkedin: "assets/icons/linkedin.svg",
  github: "assets/icons/github.svg",
  phone: "assets/icons/phone.svg",
};

export class ContactIcon extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) {
      return;
    }

    const iconName = this.getAttribute("icon");
    const iconUrl = ICON_URLS[iconName];
    if (!iconUrl) {
      return;
    }

    this.innerHTML = `
      <span class="contact-icon" aria-hidden="true">
        <img src="${iconUrl}" alt="" />
      </span>
    `;
  }
}
