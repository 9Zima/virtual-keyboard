import {Keyboard} from "./js/blocks/keyboard.js"

let wrapper = document.createElement("div");
let header = document.createElement("h2");
let textarea = document.createElement("textarea");
let keyboard = new Keyboard();
let describ = document.createElement("p")

wrapper.classList.add("wrapper")
header.textContent = "RSS Virtual Keyboard";
describ.innerHTML = "Created for Windows OS<br>ctrl + alt for changing language";
document.body.append(wrapper);
wrapper.append(header);
textarea.id = "text-input"
wrapper.append(textarea);
wrapper.append(keyboard.keyboardElement);
wrapper.append(describ);