const engLayoutArray = "`1234567890-=   qwertyuiop[]\\  asdfghjkl;'  zxcvbnm,./".split("");
const engLayoutShiftedArray = "~!@#$%^&*()_+   QWERTYUIOP{}|  ASDFGHJKL:\"  ZXCVBNM<>?".split("");
const rusLayoutArray = "ё1234567890-=   йцукенгшщзхъ\\  фывапролджэ  ячсмитьбю.".split("");
const rusLayoutShiftedArray = "Ё!\"№;%:?*()_+   ЙЦУКЕНГШЩЗХЪ/  ФЫВАПРОЛДЖЭ  ЯЧСМИТЬБЮ,".split("");

let engLayout = [],
    engLayoutShifted = [],
    rusLayout = [],
    rusLayoutShifted = [];

for (let i = 0; i < 65; i++) {
    switch (i) {
    case 13:
        engLayout.push("BackSpace");
        engLayoutShifted.push("BackSpace");
        rusLayout.push("BackSpace");
        rusLayoutShifted.push("BackSpace");
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

export {engLayout, engLayoutShifted, rusLayout, rusLayoutShifted}