import { Key } from "./key.js";
import {engLayoutShifted, rusLayout, rusLayoutShifted, engLayoutObj} from "../layouts.js"

class Keyboard {

    constructor () {
        this.keyboardElement = this.makeKeyboardElement();
        // this.textarea;
    }

    makeKeyboardElement() {
        let key,
            keyboard = document.createElement("div"),
            i = 0
            // textarea = document.getElementById("text-input")
        // this.textarea = textarea;
        // console.log(textarea)
        keyboard.classList.add("keyboard")
        // keyboard.append(textarea)

        for (let item in engLayoutObj) {
            key = new Key(item.trim(), engLayoutShifted[i], rusLayout[i], rusLayoutShifted[i]);
            key.keyElement.classList.add(engLayoutObj[item])
            key.keyElement.addEventListener("click", this.inputSymbol)
            // console.log(item, engLayoutObj[item])
            keyboard.append(key.keyElement);
            i++;
        }

        // for (let i = 0; i < 65; i++) {
        //     key = new Key(engLayout[i], engLayoutShifted[i], rusLayout[i], rusLayoutShifted[i]);
        //     switch (key.keyElement.querySelector("span").innerHTML) {
        //     case "BackSpace":
        //         key.keyElement.classList.add("backspace", "darken")
        //         key.keyElement.id = engLayout[i];
        //     break;
        //     case "DEL":
        //         key.keyElement.classList.add("del", "darken")
        //     break;
        //     case "TAB":
        //         key.keyElement.classList.add("tab", "darken")
        //     break;
        //     case "HOME":
        //         key.keyElement.classList.add("home", "darken")
        //     break;
        //     case "CapsLock":
        //         key.keyElement.classList.add("capslock", "darken")
        //     break;
        //     case "Enter":
        //         key.keyElement.classList.add("enter", "darken")
        //     break;
        //     case "Shift":
        //         key.keyElement.classList.add("shift", "darken")
        //     break;
        //     case "END":
        //         key.keyElement.classList.add("end", "darken")
        //     break;
        //     case "CTRL":
        //         key.keyElement.classList.add("ctrl", "darken")
        //     break;
        //     case "ALT":
        //         key.keyElement.classList.add("alt", "darken")
        //     break;
        //     case "RollingScopesSchool":
        //         key.keyElement.classList.add("space", "darken")
        //     break;
        //     }
        //     keyboard.append(key.keyElement);
        // }
        document.addEventListener("keydown", this.inputSymbol)
        document.addEventListener("keyup", this.inputSymbol)
        return keyboard
    }

    inputSymbol(event) {
        let textarea = document.getElementById("text-input"),
            key,
            spans,
            symbol
        if (event.type === "keydown") {
        key = document.querySelector("." + event.code);
        spans = key.querySelectorAll("span");
        for (let span of spans) 
            span.hidden === true ? span : symbol = span.innerHTML
        textarea.blur()
        textarea.value += symbol;
        key.classList.add("pressed")
        } else if (event.type === "keyup") {
            window.setTimeout(() => {
                key = document.querySelector("." + event.code)
                key.classList.remove("pressed")
            }, 60); 
        } else if (event.type === "click") {
            key = event.target
            spans = event.target.tagName === "SPAN" ? symbol = key.innerHTML : key.querySelectorAll("span");
            // console.log(key.tagName, spans)
            if (!symbol)
                for (let span of spans)
                    span.hidden === true ? span : symbol = span.innerHTML
            textarea.blur()
            textarea.value += symbol;
            symbol = null;
        }
        // event.currentTarget.classList.add("pressed")
    }



}

export {Keyboard};