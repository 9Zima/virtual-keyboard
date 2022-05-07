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
                span.textContent = this.rus;
                // span.classList.add(this.eng);
                rus.append(span);
                break;
            case 1:
                span.textContent = this.rusShifted;
                // span.classList.add(this.engShifted);
                rus.append(span);
                span.hidden = true;
                break;
            case 2:
                span.textContent = this.eng;
                // span.classList.add(this.eng);
                eng.append(span);
                span.hidden = true;
                break;
            case 3:
                span.textContent = this.engShifted;
                // span.classList.add(this.engShifted);
                eng.append(span);
                span.hidden = true;
                break;

            }
        }


        return key

    }
}

export {Key};