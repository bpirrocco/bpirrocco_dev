// ******************
// HOMEPAGE SCRIPTING
// ******************


// TODO 4/1: All mobile optimization for this site. All pages should be responsive.
// Set up counter scripting on resume page
// Set up CI/CD pipeline DONE
// Create parent model and child models for pycasts
// Make user dashboard with tabs:
//                                Favorites (default)
//                                Podcasts
//                                Youtube Content
//                                Social Media
// Play with Youtube API
// Start React training

// TODO: Now that I know how to do it, I should programmatically set
//       the bounce heights and final heights for all of the welcome divs

// ^^^^^^

// TODO: Reformat script file to be more in line with industry conventions

// function getContentHeight() {
//     const content = document.getElementById("content");
//     return content.offsetHeight;   
// }

// function getNavHeight() {
//     const navbar = document.getElementById("navbar");
//     return navbar.offsetHeight;
// }

// function setNavbarComp() {
//     const blue = document.querySelector(".blueBounce");
//     const blueRadius = (blue.offsetHeight) / 2;
//     const contentHeight = Number(getContentHeight());
//     const navbarHeight = Number(getNavHeight());
//     let navbarComp = contentHeight - navbarHeight - blueRadius;
//     navbarComp = `${-navbarComp}px`;
//     const blueList = document.querySelectorAll(".blueBounce")
//     for(i=0; i<blueList.length; i++) {
//       blueList[i].style.setProperty('--navbar-comp', navbarComp);
//     }
// }

// function unwelcome() {
//     const welcome = document.getElementsByClassName("testdiv");
//     Array.from(welcome).forEach((el) =>
//         el.style.display = 'none'
//     );
// }

// function showContent() {
//     const content = document.getElementById("content")
//     const headline = document.getElementById("headline");
//     const textbar = document.getElementById("textbar");
//     textbar.style.display = 'flex';
//     headline.style.display = 'flex';
//     content.classList.add("index")
// }

// **************
// WELCOME COOKIE
// **************

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// function checkCookie() {
//     let welcome = getCookie("welcome");
//     if (welcome != "") {
//         unwelcome();
//         setTimeout(showContent, 200);
//     } else {
//         setTimeout(unwelcome, 7500);
//         setTimeout(showContent, 7510);
//         setCookie("welcome", true, 1);
//     }
//   }


// ********************
// ABOUT PAGE SCRIPTING
// ********************


function setWrapperDim() {
    const wrapper = document.querySelector(".wrapper");
    const textBox = document.querySelector(".textBox");
    // textBoxHeight = textBox.offsetHeight;
    let textBoxWidth = textBox.clientWidth;
    // textBoxHeight = `${textBoxHeight}px`;
    textBoxWidth = `${textBoxWidth}px`;
    // wrapper.style.setProperty("--height", textBoxHeight);
    wrapper.style.setProperty("--width", textBoxWidth);
}

function moveContact() {
    if (window.innerWidth <= 1150) {
        document.getElementById("thirdPage").appendChild(document.getElementById("wrapper"));
    };
}

function moveAbout() {
    if (window.innerWidth <= 715) {
        document.getElementById("thirdPage").appendChild(document.
        getElementById("textBox"));
    }
}

function removeContact() {
    const div = document.getElementById("twoThirdPage");
    if (window.innerWidth > 1150) {
        div.insertBefore(document.getElementById("wrapper"), div.firstChild);
    }
}

function removeAbout() {
    if (window.innerWidth > 715) {
        document.getElementById("twoThirdPage").appendChild(document.getElementById("textBox"));
    }
}

// function setMobileBodyHeight() {
//     if(window.innerHeight < 525) {
//         let height = window.innerHeight * 2.5;
//         height = `${Math.floor(height)}px`;
//         document.getElementById("aboutB").style.setProperty("--height", height)
//     }
// }


// *******************
// PORTFOLIO SCRIPTING
// *******************

function setPortfolioMargin() {
    const cardWrapper = document.getElementById("cardWrapper");
    const navbarHeight = getNavHeight();
    let margin = navbarHeight + 100;
    margin = `${margin}px`
    cardWrapper.style.setProperty("--margin", margin);
    return margin
}

// function setCardDim() {
//     setCardHeight();
//     setCardWidth();
// }

// function setCardHeight() {
//     const box = document.querySelector(".cardBox");
//     const cards = document.querySelectorAll(".pCard");
//     let boxHeight = box.clientHeight;
//     boxHeight = `${boxHeight}px`;
//     for (let i = 0; i <cards.length; i++) {
//         cards[i].style.setProperty("--height", boxHeight);
//     };
// }

// function setCardWidth() {
//     const screen = window.innerWidth;
//     const cards = document.querySelectorAll(".pCard");
//     let cardWidth = screen; // cardWidth = x / screen
//     boxWidth = `${boxWidth}px`;
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].style.setProperty("--width", boxWidth);
//     };
// }