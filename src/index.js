// import {engLayout} from "./js/key_layouts/eng_layout";
import {Keyboard} from "./js/blocks/keyboard.js"


let keyboard = new Keyboard()
document.body.append(keyboard.keyboardElement)
console.log(keyboard)