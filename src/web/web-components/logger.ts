

class InlineLogger extends HTMLElement {
  constructor() {
    super()
    console.info(this.getAttribute('message'))
  }
}

window.customElements.define('logger', InlineLogger);

