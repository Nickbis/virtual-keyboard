import Creater from "./creater.js";

class Header extends Creater {
  constructor(parent) {
    super(parent, 'div', 'header');
    this.title = new Creater(this.element, 'h1', 'title');
    this.title.element.textContent = 'Virtual keyboard';
    this.subtitle = new Creater(this.element, 'h2', 'subtitle');
    this.subtitle.element.textContent = 'windows version';
    this.subtitle_second = new Creater(this.element, 'h3', 'subtitle-second');
    this.subtitle_second.element.textContent = 'Change lang: Alt + Ctr';
    }
}

const createHeader = () => new Header(document.body);

export default createHeader;
