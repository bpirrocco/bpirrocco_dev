const welcome = document.getElementsByClassName("testdiv")

function unwelcome() {
    Array.from(welcome).forEach((el) =>
        el.style.display = 'none'
    );
    
    // welcome.style.display = 'none';
}

// TODO: I need to turn this HTMLCollection object into an array, so I can iterate
// over it

setTimeout(unwelcome, 10000);