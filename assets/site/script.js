// ******************
// HOMEPAGE SCRIPTING
// ******************


function unwelcome() {
    const welcome = document.getElementsByClassName("testdiv");
    Array.from(welcome).forEach((el) =>
        el.style.display = 'none'
    );
}

function showContent() {
    const headline = document.getElementById("headline");
    const textbar = document.getElementById("textbar");
    textbar.style.display = 'flex';
    headline.style.display = 'flex';
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let welcome = getCookie("welcome");
    if (welcome != "") {
        unwelcome();
        setTimeout(showContent, 200);
    } else {
        setTimeout(unwelcome, 10000);
        setTimeout(showContent, 10010);
        setCookie("welcome", true, 1);
    }
  }

// ********************
// ABOUT PAGE SCRIPTING
// ********************

const contact = document.getElementById("contact");
contact.addEventListener("mouseenter", (event) => {
    const contactInfo = document.getElementById("contactInfo");
    contactInfo.classList.remove("hidden");
    if (contactInfo.classList.contains("disappear")){
        contactInfo.classList.replace("disappear", "reveal");
    } else {
        contactInfo.classList.add("reveal");
    }
    
});

contact.addEventListener("mouseleave", (event) => {
    const contactInfo = document.getElementById("contactInfo");
    contactInfo.classList.replace("reveal", "disappear");

    setTimeout(function() {
        contactInfo.classList.add("hidden");
    }, 5000);
})

function showContact() {
    contact.classList.remove("hidden");
    contact.classList.add("reveal");
}

function addHidden(el) {
    el.classList.add("hidden");
}