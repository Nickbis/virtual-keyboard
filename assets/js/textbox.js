import Creater from "./creater.js";

class Textbox extends Creater {
  constructor(parent) {
    super(parent, 'textbox', 'text-content');
  }
}

const createTextbox =() => new Textbox(document.body);

export default createTextbox;