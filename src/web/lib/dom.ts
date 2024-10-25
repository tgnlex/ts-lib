
let dom = {
  create(tag: string, content?: string) {
    let text: Node;
    let elem: Node;
    elem = document.createElement(`${tag}`);
    if (content) {
      text = document.createTextNode(`${content}`)
      elem.appendChild(text);
      return elem;
    } 
    return elem;
  },
  insert(parent: HTMLElement, html: string) {
    return parent.innerHTML = `${html}`
  },
  select(selector: string) {
    let element: NodeList;
    element = document.querySelectorAll(`${selector}`);
    return element;
  },
  event(element: HTMLElement, e: Event, cb: () => any) {
    return element.addEventListener(`${e}`, cb)
  },
  attr(elem: HTMLElement, key: string, value: string | number) {
    return elem.setAttribute(`${key}`, `${value}`);
  }
}

export default dom;
