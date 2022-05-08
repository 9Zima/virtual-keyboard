import { Key } from "./key.js";
import {engLayout, engLayoutShifted, rusLayout, rusLayoutShifted} from "../layouts.js"

class Keyboard {

    constructor () {
        this.keyboardElement = this.makeKeyboardElement();
    }

    makeKeyboardElement() {
        let key,
            keyboard = document.createElement("div")
        keyboard.classList.add("keyboard")
        for (let i = 0; i < 65; i++) {
            key = new Key(rusLayout[i], rusLayoutShifted[i], engLayout[i], engLayoutShifted[i]);
            switch (key.keyElement.querySelector("span").innerHTML) {
            case "BackSpace":
                key.keyElement.classList.add("backspace")
            break;
            case "DEL":
                key.keyElement.classList.add("del")
            break;
            case "TAB":
                key.keyElement.classList.add("tab")
            break;
            case "HOME":
                key.keyElement.classList.add("home")
            break;
            case "CapsLock":
                key.keyElement.classList.add("capslock")
            break;
            case "Enter":
                key.keyElement.classList.add("enter")
            break;
            case "Shift":
                key.keyElement.classList.add("shift")
            break;
            case "END":
                key.keyElement.classList.add("end")
            break;
            case "CTRL":
                key.keyElement.classList.add("ctrl")
            break;
            case "ALT":
                key.keyElement.classList.add("alt")
            break;
            case "RollingScopesSchool":
                key.keyElement.classList.add("space")
            break;
            }
            keyboard.append(key.keyElement);
        }
        return keyboard
    }


}

export {Keyboard};