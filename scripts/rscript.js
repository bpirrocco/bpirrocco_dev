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

async function getCount() {
    const response = await fetch("https://l0qqg7foje.execute-api.us-east-1.amazonaws.com/default/counter_function");
    const count = await response.json();
    console.log(count);
}

// Need to enable CORS on the API Gateway or the Lambda Function

function updateCounter() {
    const counter = document.getElementById("counter");
    // let value = checkCookie();
    let value = getCount();
    counter.textContent = value;
}