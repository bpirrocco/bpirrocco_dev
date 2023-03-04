const welcome = document.getElementsByClassName("testdiv")

function unwelcome() {
    Array.from(welcome).forEach((el) =>
        el.style.display = 'none'
    );
    
    // welcome.style.display = 'none';
}

function showContent() {
    Array.from(content).forEach((el) =>
        el.style.display = 'flex'
    );
}

// TODO: I need to turn this HTMLCollection object into an array, so I can iterate
// over it

unwelcome();
// setTimeout(unwelcome, 10000);
// setTimeout(showContent, 10010);