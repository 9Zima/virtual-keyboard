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
        document.addEventListener("keydown", this.inputSymbol)
        document.addEventListener("keyup", this.inputSymbol)
        return keyboard
    }

    inputSymbol(event) {
        let availableKeys = Object.values(engLayoutObj);
        if (availableKeys.includes(event.code) || event.type === "click"){
            let textarea = document.getElementById("text-input"),
                key,
                spans,
                symbol
            if (event.type === "keydown") {
            key = document.querySelector("." + event.code);
            spans = key.querySelectorAll("span");
            for (let span of spans) 
                span.hidden === true ? span : symbol = span.textContent
            key.classList.add("pressed")
            textarea.blur()
            if (symbol === "Backspace") {
                let arr = textarea.value.split("");
                if (arr.length > 0)
                arr.length--;
                arr = arr.join("");
                textarea.value = arr;
            }
            else if (symbol === "Delete") {
                textarea.focus()
            } 
            else if (symbol === "Tab") {
                textarea.focus()
                textarea.value += "    "
                textarea.focus()
            } 
            else if (symbol === "Home") {
                textarea.focus();
                textarea.setSelectionRange(0, 0);
            } 
            else if (symbol === "End") {
                textarea.focus()
                textarea.setSelectionRange(textarea.value.length, textarea.value.length);
            } 
            else if (symbol === "Capslock") {
                if (key.classList.contains("pressed"))
                key.classList.remove("pressed")
            } 
            else if (symbol === "Enter") {
                textarea.value += "\n"
            } 
            else if (symbol === "ShiftLeft") {
                textarea.focus()
            } 
            else if (symbol === "ShiftRight") {
                textarea.focus()
            } 
            else if (symbol === "Ctrl") {
                textarea.focus()
            } 
            else if (symbol === "Alt") {
                textarea.focus()
            } 
            else if (symbol === "Space") {
                textarea.value += " "
            } 
            else{
                textarea.blur()
                textarea.value += symbol;

            }
            } else if (event.type === "keyup") {
                window.setTimeout(() => {
                    key = document.querySelector("." + event.code)
                    if (event.code !== "CapsLock")
                    key.classList.remove("pressed")
                }, 60); 
            } else if (event.type === "click") {
                symbol = null;
                key = event.target;
                // console.log(key)
                spans = key.tagName === "SPAN" ? symbol = key.innerHTML : spans = key.querySelectorAll("span");
                // console.log(key.tagName, spans)
                if (!symbol)
                    for (let span of spans)
                        span.hidden === true ? span : symbol = span.textContent
                textarea.blur()
                key.classList.add("pressed")
                if (symbol === "Backspace") {
                    let arr = textarea.value.split("");
                    if (arr.length > 0)
                    arr.length--;
                    arr = arr.join("");
                    textarea.value = arr;
                }
                else if (symbol === "Delete") {
                    textarea.focus()
                } 
                else if (symbol === "Tab") {
                    textarea.focus()
                    textarea.value += "    "
                    textarea.focus()
                } 
                else if (symbol === "Home") {
                    textarea.focus();
                    textarea.setSelectionRange(0, 0);
                } 
                else if (symbol === "End") {
                    textarea.focus()
                    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
                } 
                else if (symbol === "Capslock") {
                    if (key.classList.contains("pressed"))
                    key.classList.remove("pressed")
                } 
                else if (symbol === "Enter") {
                    textarea.value += "\n"
                } 
                else if (symbol === "ShiftLeft") {
                    textarea.focus()
                } 
                else if (symbol === "ShiftRight") {
                    textarea.focus()
                } 
                else if (symbol === "Ctrl") {
                    textarea.focus()
                } 
                else if (symbol === "Alt") {
                    textarea.focus()
                } 
                else if (symbol === "Space") {
                    textarea.value += " "
                } 
                else{
                    textarea.blur()
                    textarea.value += symbol;
    
                }
                window.setTimeout(() => {
                    key.classList.remove("pressed")
                }, 150); 
            }
        }

    }



}

export {Keyboard};