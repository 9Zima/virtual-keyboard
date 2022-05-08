class Key {

    constructor (rus, rusShifted, eng, engShifted) {
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
        rus.classList.add("rus");
        key.append(rus);
        eng.classList.add("eng");
        eng.hidden = true;
        key.append(eng);

        for (let i = 0; i < 4; i++) {
            span = document.createElement("span");
            switch (i) {
            case 0:
                span.innerHTML = this.rus;
                rus.append(span);
                break;
            case 1:
                span.innerHTML = this.rusShifted;
                rus.append(span);
                span.hidden = true;
                break;
            case 2:
                span.innerHTML = this.eng;
                eng.append(span);
                span.hidden = true;
                break;
            case 3:
                span.innerHTML = this.engShifted;
                eng.append(span);
                span.hidden = true;
                break;

            }
        }


        return key

    }
}

export {Key};