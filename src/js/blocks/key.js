class Key {

    constructor (eng, engShifted, rus, rusShifted) {
        this.rus = rus;
        this.rusShifted = rusShifted;
        this.eng = eng;
        this.engShifted = engShifted;
        this.keyElement = this.makeKeyElement();
    }

    makeKeyElement() {
        let key = document.createElement("div"),
            rus = document.createElement("div"),
            eng = document.createElement("div"),
            span = document.createElement("span")

        key.classList.add("key");
        eng.classList.add("eng");
        rus.classList.add("rus");
        rus.hidden = true;
        key.append(eng);
        key.append(rus);

        for (let i = 0; i < 4; i++) {
            span = document.createElement("span");
            switch (i) {
            case 0:
                span.innerHTML = this.eng;
                eng.append(span);
                break;
            case 1:
                span.innerHTML = this.engShifted;
                eng.append(span);
                span.hidden = true;
                break;
            case 2:
                span.innerHTML = this.rus;
                rus.append(span);
                span.hidden = true;
                break;
            case 3:
                span.innerHTML = this.rusShifted;
                rus.append(span);
                span.hidden = true;
                break;
            }
        }
        return key
    }

}

export {Key};