import { BaseComponent } from "./base-component.js";

const ICON_SVGS = {
  location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 4.75 5.54 11.46 6.17 12.22a1 1 0 0 0 1.66 0C13.46 20.46 19 13.75 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5.33 8-5.33V7H4Zm16 10V9.6l-7.45 4.97a1 1 0 0 1-1.1 0L4 9.6V17h16Z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M6.94 8.5a1.62 1.62 0 1 1 0-3.24 1.62 1.62 0 0 1 0 3.24ZM5.6 9.74h2.68V18H5.6V9.74Zm4.34 0h2.57v1.13h.04c.36-.67 1.23-1.38 2.54-1.38 2.72 0 3.22 1.79 3.22 4.12V18h-2.68v-3.89c0-.93-.02-2.12-1.29-2.12-1.29 0-1.49 1-1.49 2.04V18H9.94V9.74Z"/><path stroke="currentColor" stroke-width="1.25" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.37-1.33-1.73-1.33-1.73-1.1-.75.09-.74.09-.74 1.2.08 1.84 1.24 1.84 1.24 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.22A11.3 11.3 0 0 1 12 6.58c1 .01 2.01.14 2.95.42 2.29-1.54 3.29-1.22 3.29-1.22.66 1.66.24 2.88.12 3.18.77.83 1.24 1.89 1.24 3.2 0 4.62-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z"/></svg>`,
};

export class ContactIcon extends BaseComponent {
  render() {
    const iconName = this.getAttribute("icon");
    const svg = ICON_SVGS[iconName];
    if (!svg) return "";
    return `<span class="contact-icon" aria-hidden="true">${svg}</span>`;
  }
}
