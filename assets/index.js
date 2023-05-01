import createHeader from "./js/header.js";
import createKeyboard from "./js/keyboard.js";
import createTextarea from "./js/textbox.js";
import changeUppercase from "./js/uppercase.js";
import changeShift from "./js/shift.js"
import keyMaps from "./js/keyMaps.js";

createHeader();
const text = createTextarea();
createKeyboard(text);
changeUppercase();

changeShift();
