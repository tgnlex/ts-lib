

class InlineLogger extends HTMLElement {
  constructor() {
    console.info(this.getAttribute('message'))
  }
}

window.customElements.define('logger', InlineLogger);

