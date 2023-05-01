import createHeader from "./js/header.js";
import createKeyboard from "./js/keyboard.js";
import createTextbox from "./js/textbox.js";

createHeader();
const text = createTextbox();
createKeyboard(text);