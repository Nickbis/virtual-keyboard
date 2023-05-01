import Creater from './creater.js';
import keyMaps from './keyMaps.js';

class Keyboard extends Creater {
  constructor(parent, text) {
    super(parent, 'div', 'keyboard');
    this.textarea = text;

    for (let i = 0; i < keyMaps.length; i += 1) {
      this.row = new Creater(this.element, 'div', 'row');

      keyMaps[i].forEach((el) => {
        const { element } = new Creater(this.row.element, 'button', el.class);

        element.textContent = el.key.en;
// TODO: 
      });
    }
  }
}

const createKeyboard = (text) => new Keyboard(document.body, text);

export default createKeyboard;
