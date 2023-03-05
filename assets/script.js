// ******************
// HOMEPAGE SCRIPTING
// ******************

const welcome = document.getElementsByClassName("testdiv");
const headline = document.getElementById("headline");
const textbar = document.getElementById("textbar");

function unwelcome() {
    Array.from(welcome).forEach((el) =>
        el.style.display = 'none'
    );
    
    // welcome.style.display = 'none';
}

function showContent() {
    textbar.style.display = 'flex';
    headline.style.display = 'flex';
}

// TODO: I need to turn this HTMLCollection object into an array, so I can iterate
// over it

// unwelcome();
if (window.location.pathname == '/index/') {
    setTimeout(unwelcome, 10000);
    setTimeout(showContent, 10010);
}

// ********************
// ABOUT PAGE SCRIPTING
// ********************

const contact = document.getElementById("contact");
contact.addEventListener("mouseenter", (event) => {
    const contactInfo = document.getElementById("contactInfo");
    if (contactInfo.classList.contains("disappear")){
        contactInfo.classList.remove("disappear");
    };
    if (contactInfo.classList.contains("hidden")) {
        contactInfo.classList.replace("hidden", "reveal");
    }else {
        contactInfo.classList.add("reveal");
    }
});

// contact.addEventListener("mouseleave", (event) => {
//     const contactInfo = document.getElementById("contactInfo");
//     contactInfo.classList.replace("reveal", "disappear");
//     addHidden(contactInfo);
// })

contact.addEventListener("mouseleave", (event) => {
    const contactInfo = document.getElementById("contactInfo");
    if (contactInfo.classList.contains("reveal")){
        contactInfo.classList.remove("reveal");
    };
    contactInfo.classList.add("disappear");

    // setTimeout(function() {
    //     contactInfo.classList.add("hidden");
    // }, 1000);
})

function showContact() {
    contact.classList.remove("hidden");
    contact.classList.add("reveal");
}

function addHidden(el) {
    el.classList.add("hidden");
    // setTimeout(addHidden, 2000);
}