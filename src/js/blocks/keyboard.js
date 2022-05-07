import { Key } from "./key";
import {rusLayout, rusLayoutShifted} from "./js/key_layouts/rus_layout";
import {engLayout, engLayoutShifted} from "./js/key_layouts/eng_layout";

class Keyboard {

    constructor () {
        this.keyboardElement = this.makeKeyboardElement();
    }

    makeKeyboardElement() {
        let key,
            keyboard = document.createElement("div")
        keyboard.classList.add("keyboard")
        for (let i = 0; i < 47; i++) {
            key = new Key(rusLayout[i], rusLayoutShifted[i], engLayout[i], engLayoutShifted[i]);
            
        }
    }


}