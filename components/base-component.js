export class BaseComponent extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) return;
    this.innerHTML = this.render();
  }

  render() {
    return "";
  }
}
