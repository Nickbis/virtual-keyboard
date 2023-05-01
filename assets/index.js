import createHeader from "./js/header.js";
import createKeyboard from "./js/keyboard.js";
import createTextarea from "./js/textbox.js";

createHeader();
const text = createTextarea();
createKeyboard(text);