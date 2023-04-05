// ****************
// RESUME SCRIPTING
// ****************


// function visitCounter() {
    // const body = document.getElementById("resume");
window.addEventListener("DOMContentLoaded", updateCounter)

// }

function checkCookie() {
    let counter = getCookie("counter");
    if (!counter) {
        setCookie("counter", 0, 400);
        return 0
    } else {
        counter++;
        setCookie("counter", counter, 400);
        return counter
    }
}

function updateCounter() {
    const counter = document.getElementById("counter");
    let value = checkCookie();
    counter.textContent = value;
}