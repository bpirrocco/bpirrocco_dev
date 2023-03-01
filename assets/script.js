function unwelcome() {
    let el = document.getElementsByClassName("testdiv");
    Array.from(el).forEach((el) =>
        el.classList.add("hidden")
    );
}

// TODO: I need to turn this HTMLCollection object into an array, so I can iterate
// over it

unwelcome();