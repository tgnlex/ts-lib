
let dom = {
  create(tag: string, content?: string) {
    let elem = document.createElement(`${tag}`);
    if (content) {
      let text = document.createTextNode(`${content}`)
      elem.appendChild(content);
      return elem;
    } else {
      return elem;
    }
  },
  insert(parent: HTMLElement, html: string) {
    return parent.innerHTML = `${html}`
  }
  select(selector: string) {
    element = document.querySelctorAll(`${selector}`);
    return element;
  },
  event(element: HTMLElement, e: Event, cb: () => any) {
    return element.addEventListener(`${e}`, cb)
  },
  attr(elem: HTMLElement, key: string, value: string | number) {
    return elem.setAttribute(`${key}`, `${value}`);
  }
}
