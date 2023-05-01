class Creater {
  constructor(parent, tag, name) {
    this.element = document.createElement(tag);
    this.element.className = name;
    parent.append(this.element);
  }
}

export default Creater;