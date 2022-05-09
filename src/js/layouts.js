const engLayoutArray = "`1234567890-=   qwertyuiop[]\\  asdfghjkl;'  zxcvbnm,./".split("");
const engLayoutShiftedArray = "~!@#$%^&*()_+   QWERTYUIOP{}|  ASDFGHJKL:\"  ZXCVBNM<>?".split("");
const rusLayoutArray = "ё1234567890-=   йцукенгшщзхъ\\  фывапролджэ  ячсмитьбю.".split("");
const rusLayoutShiftedArray = "Ё!\"№;%:?*()_+   ЙЦУКЕНГШЩЗХЪ/  ФЫВАПРОЛДЖЭ  ЯЧСМИТЬБЮ,".split("");
const engLayoutObj = {
    "`": "Backquote",
    " 1": "Digit1",
    " 2": "Digit2",
    " 3": "Digit3",
    " 4": "Digit4",
    " 5": "Digit5",
    " 6": "Digit6",
    " 7": "Digit7",
    " 8": "Digit8",
    " 9": "Digit9",
    " 0": "Digit0",
    "-": "Minus",
    "=": "Equal",
    "Backspace": "Backspace",
    "Delete": "Delete",
    "Tab": "Tab",
    "q": "KeyQ",
    "w": "KeyW",
    "e": "KeyE",
    "r": "KeyR",
    "t": "KeyT",
    "y": "KeyY",
    "u": "KeyU",
    "i": "KeyI",
    "o": "KeyO",
    "p": "KeyP",
    "[": "BracketLeft",
    "]": "BracketRight",
    "\\": "Backslash",
    "Home": "Home",
    "Capslock": "CapsLock",
    "a": "KeyA",
    "s": "KeyS",
    "d": "KeyD",
    "f": "KeyF",
    "g": "KeyG",
    "h": "KeyH",
    "j": "KeyJ",
    "k": "KeyK",
    "l": "KeyL",
    ";": "Semicolon",
    "'": "Quote",
    "Enter": "Enter",
    "ShiftLeft": "ShiftLeft",
    "z": "KeyZ",
    "x": "KeyX",
    "c": "KeyC",
    "v": "KeyV",
    "b": "KeyB",
    "n": "KeyN",
    "m": "KeyM",
    ",": "Comma",
    ".": "Period",
    "/": "Slash",
    "ShiftRight": "ShiftRight",
    "&and;": "ArrowUp",
    "End": "End",
    "Ctrl": "ControlLeft",
    "Alt": "AltLeft",
    "Space": "Space",
    "Alt ": "AltRight",
    "Ctrl ": "ControlRight",
    "&lt;": "ArrowLeft",
    "&or;": "ArrowDown",
    ">": "ArrowRight",
};

let engLayout = [],
    engLayoutShifted = [],
    rusLayout = [],
    rusLayoutShifted = [];

for (let i = 0; i < 65; i++) {
    switch (i) {
    case 0:
        engLayout.push("`");
        engLayoutShifted.push("~");
        rusLayout.push("ё");
        rusLayoutShifted.push("Ё");
    break;
    case 1:
        engLayout.push("1");
        engLayoutShifted.push("1");
        rusLayout.push("1");
        rusLayoutShifted.push("1");
    break;
    case 2:
        engLayout.push("2");
        engLayoutShifted.push("2");
        rusLayout.push("2");
        rusLayoutShifted.push("2");
    break;
    case 3:
        engLayout.push("3");
        engLayoutShifted.push("3");
        rusLayout.push("3");
        rusLayoutShifted.push("3");
    break;
    case 4:
        engLayout.push("4");
        engLayoutShifted.push("4");
        rusLayout.push("4");
        rusLayoutShifted.push("4");
    break;
    case 5:
        engLayout.push("5");
        engLayoutShifted.push("5");
        rusLayout.push("5");
        rusLayoutShifted.push("5");
    break;
    case 6:
        engLayout.push("6");
        engLayoutShifted.push("6");
        rusLayout.push("6");
        rusLayoutShifted.push("6");
    break;
    case 7:
        engLayout.push("7");
        engLayoutShifted.push("7");
        rusLayout.push("7");
        rusLayoutShifted.push("7");
    break;
    case 8:
        engLayout.push("8");
        engLayoutShifted.push("8");
        rusLayout.push("8");
        rusLayoutShifted.push("8");
    break;
    case 9:
        engLayout.push("9");
        engLayoutShifted.push("9");
        rusLayout.push("9");
        rusLayoutShifted.push("9");
    break;
    case 10:
        engLayout.push("0");
        engLayoutShifted.push("0");
        rusLayout.push("0");
        rusLayoutShifted.push("0");
    break;
    case 11:
        engLayout.push("-");
        engLayoutShifted.push("_");
        rusLayout.push("-");
        rusLayoutShifted.push("_");
    break;
    case 12:
        engLayout.push("=");
        engLayoutShifted.push("+");
        rusLayout.push("=");
        rusLayoutShifted.push("+");
    break;
    case 13:
        engLayout.push("Backspace");
        engLayoutShifted.push("Backspace");
        rusLayout.push("Backspace");
        rusLayoutShifted.push("Backspace");
    break;
    case 14:
        engLayout.push("DEL");
        engLayoutShifted.push("DEL");
        rusLayout.push("DEL");
        rusLayoutShifted.push("DEL");
    break;
    case 15:
        engLayout.push("TAB");
        engLayoutShifted.push("TAB");
        rusLayout.push("TAB");
        rusLayoutShifted.push("TAB");
    break;
    case 29:
        engLayout.push("HOME");
        engLayoutShifted.push("HOME");
        rusLayout.push("HOME");
        rusLayoutShifted.push("HOME");
    break;
    case 30:
        engLayout.push("CapsLock");
        engLayoutShifted.push("CapsLock");
        rusLayout.push("CapsLock");
        rusLayoutShifted.push("CapsLock");
    break;
    case 42:
        engLayout.push("Enter");
        engLayoutShifted.push("Enter");
        rusLayout.push("Enter");
        rusLayoutShifted.push("Enter");
    break;
    case 43:
        engLayout.push("Shift");
        engLayoutShifted.push("Shift");
        rusLayout.push("Shift");
        rusLayoutShifted.push("Shift");
    break;
    case 54:
        engLayout.push("Shift");
        engLayoutShifted.push("Shift");
        rusLayout.push("Shift");
        rusLayoutShifted.push("Shift");
    break;
    case 55:
        engLayout.push("&and;");
        engLayoutShifted.push("&and;");
        rusLayout.push("&and;");
        rusLayoutShifted.push("&and;");
    break;
    case 56:
        engLayout.push("END");
        engLayoutShifted.push("END");
        rusLayout.push("END");
        rusLayoutShifted.push("END");
    break;
    case 57:
        engLayout.push("CTRL");
        engLayoutShifted.push("CTRL");
        rusLayout.push("CTRL");
        rusLayoutShifted.push("CTRL");
    break;
    case 58:
        engLayout.push("ALT");
        engLayoutShifted.push("ALT");
        rusLayout.push("ALT");
        rusLayoutShifted.push("ALT");
    break;
    case 59:
        engLayout.push("RollingScopesSchool");
        engLayoutShifted.push("RollingScopesSchool");
        rusLayout.push("RollingScopesSchool");
        rusLayoutShifted.push("RollingScopesSchool");
    break;
    case 60:
        engLayout.push("ALT");
        engLayoutShifted.push("ALT");
        rusLayout.push("ALT");
        rusLayoutShifted.push("ALT");
    break;
    case 61:
        engLayout.push("CTRL");
        engLayoutShifted.push("CTRL");
        rusLayout.push("CTRL");
        rusLayoutShifted.push("CTRL");
    break;
    case 62:
        engLayout.push("<");
        engLayoutShifted.push("<");
        rusLayout.push("<");
        rusLayoutShifted.push("<");
    break;
    case 63:
        engLayout.push("&or;");
        engLayoutShifted.push("&or;");
        rusLayout.push("&or;");
        rusLayoutShifted.push("&or;");
    break;
    case 64:
        engLayout.push(">");
        engLayoutShifted.push(">");
        rusLayout.push(">");
        rusLayoutShifted.push(">");
    break;

    default: 
        engLayout.push(engLayoutArray[i]);
        engLayoutShifted.push(engLayoutShiftedArray[i]);
        rusLayout.push(rusLayoutArray[i]);
        rusLayoutShifted.push(rusLayoutShiftedArray[i]);
    }
}

export {engLayout, engLayoutShifted, rusLayout, rusLayoutShifted, engLayoutObj}