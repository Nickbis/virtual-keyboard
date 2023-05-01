import Creater from "./creater.js";

class Header extends Creater {
  constructor(parent) {
    super(parent, 'div', 'header');
    this.title = new Creater(this.element, 'h1', 'title');
    this.title.element.textContent = 'RSS virtual keyboard';
    this.subtitle = new Creater(this.element, 'h2', 'subtitle');
    this.subtitle.element.textContent = 'Windows version';
    this.subtitle_second = new Creater(this.element, 'h3', 'subtitle-second');
    this.subtitle_second.element.textContent = 'To switch the language combination: left Alt + Ctr';
    }
}

const createHeader = () => new Header(document.body);

export default createHeader;
