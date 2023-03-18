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
if (welcome) {
    setTimeout(unwelcome, 10000);
    setTimeout(showContent, 10010);
}

if (welcome !== null && headline) {
    setTimeout(showContent, 200);
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
    // setTimeout(addHidden, 2000);
}