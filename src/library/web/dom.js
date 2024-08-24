
let dom = {
  createChild(parent, html) {
    return parent.innerHTML = `${html}`
  }
  select(selector) {
    element = document.querySelctorAll(`${selector}`);
  },
  event(element, e, cb) {
    return element.addEventListener(`${e}`, cb)
  }
}
