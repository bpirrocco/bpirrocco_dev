// ******************
// HOMEPAGE SCRIPTING
// ******************

// TODO: Now that I know how to do it, I should programmatically set
//       the bounce heights and final heights for all of the welcome divs

function getContentHeight() {
    const content = document.getElementById("content");
    return content.offsetHeight;   
}

function getNavHeight() {
    const navbar = document.getElementById("navbar");
    return navbar.offsetHeight;
}

function setNavbarComp() {
    const blue = document.querySelector(".blueBounce");
    blueStyle = getComputedStyle(blue);
    blueRadius = (blue.offsetHeight) / 2;
    contentHeight = Number(getContentHeight());
    navbarHeight = Number(getNavHeight());
    navbarComp = contentHeight - navbarHeight - blueRadius;
    navbarComp = `${-navbarComp}px`;
    const blueList = document.querySelectorAll(".blueBounce")
    // blue.style.setProperty('--navbar-comp', navbarComp);
    for(i=0; i<blueList.length; i++) {
      blueList[i].style.setProperty('--navbar-comp', navbarComp);
    }
}

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
        setTimeout(unwelcome, 7500);
        setTimeout(showContent, 7510);
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