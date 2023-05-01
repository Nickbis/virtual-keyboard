import Creater from "./creater.js";

class Textarea extends Creater {
  constructor(parent) {
    super(parent, 'textarea', 'text-content');
  }
}

const createTextarea =() => new Textarea(document.body);

export default createTextarea;