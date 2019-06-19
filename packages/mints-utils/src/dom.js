const tempDom = document.createElement('div');

const query = (selector, element = document) => {
  selector = selector.trim();
  const maybeID = selector[0] === '#';
  const maybeClass = !maybeID && selector[0] === '.';
  const nameOnly = maybeID || maybeClass ? selector.slice(1) : selector;
  const isSimple = /^[\w-]*$/.test(nameOnly);
  let dom = [];

  if (maybeID && isSimple && element.getElementById) {
    const found = element.getElementById(nameOnly);
    if (found) {
      dom = [found];
    }
  } else if ([1, 9, 11].indexOf(element.nodeType) !== -1) {
    if (!maybeID && isSimple && element.getElementsByClassName) {
      if (maybeClass) {
        dom = element.getElementsByClassName(nameOnly);
      } else {
        dom = element.getElementsByTagName(selector);
      }
    } else {
      dom = element.querySelectorAll(selector);
    }
  }
  return Array.prototype.slice.call(dom);
};

class D {
  constructor(el = []) {
    this.el = el;
  }

  html(html) {
    this.el.forEach(item => {
      item.innerHTML = html;
    });
  }

  append(html = '') {
    tempDom.innerHTML = html;
    const htmlDom = tempDom.childNodes[0];
    this.el.forEach(item => {
      item.appendChild(htmlDom);
    });
  }

  remove() {
    this.el.forEach(item => {
      item.remove();
    });
  }

  show() {
    this.el.forEach(item => {
      if (item.style.display !== 'block') {
        item.style.display = 'block';
      }
    });
    return this;
  }

  hide() {
    this.el.forEach(item => {
      if (item.style.display !== 'none') {
        item.style.display = 'none';
      }
    });
    return this;
  }

  on(type, selector, cb) {
    this.el.forEach(item => {
      let dom = item;

      if (selector && typeof selector !== 'function') {
        dom = query(selector, item);

        dom.forEach(child => {
          child.addEventListener(type, cb.bind(new D([child])));
        });
      } else {
        dom.addEventListener(type, selector.bind(this));
      }
    });
  }
}

export default (selector, element) => {
  const el = query(selector, element);
  return new D(el);
};
