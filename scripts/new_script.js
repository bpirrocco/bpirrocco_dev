const app = {

    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log('HTML loaded');
    },

    load: () => {
        app.runScript();
        console.log('Script Run');
    },

    runScript: () => {
        let page = document.body.id;
        switch (page) {
            case 'home':
                console.log('This is the home script')
                app.setNavbarComp();
                app.checkCookie();
                break;
            
        }
    },

    getContentHeight: () => {
        const content = document.getElementById("content");
        return content.offsetHeight; 
    },

    getNavHeight: () => {
        const navbar = document.getElementById("navbar");
        return navbar.offsetHeight;
    },

    setNavbarComp: () => {
        const blue = document.querySelector(".blueBounce");
        const blueRadius = (blue.offsetHeight) / 2;
        const contentHeight = Number(app.getContentHeight());
        const navbarHeight = Number(app.getNavHeight());
        const blueList = document.querySelectorAll(".blueBounce");

        let navbarComp = contentHeight - navbarHeight - blueRadius;
        navbarComp = `${-navbarComp}px`;

        for(i=0; i<blueList.length; i++) {
        blueList[i].style.setProperty('--navbar-comp', navbarComp);
        }
        console.log('Navbar comp')
    },

    unwelcome: () => {
        const welcome = document.getElementsByClassName("testdiv");
        Array.from(welcome).forEach((el) =>
            el.style.display = 'none'
        );
    },

    showContent: () => {
        const content = document.getElementById("content")
        const headline = document.getElementById("headline");
        const textbar = document.getElementById("textbar");

        textbar.style.display = 'flex';
        headline.style.display = 'flex';
        content.classList.add("index")
    },

    setCookie: (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie: (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');

        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    checkCookie: () => {
        let welcome = app.getCookie("welcome");
        
        if (welcome != "") {
            app.unwelcome();
            setTimeout(app.showContent, 200);
        } else {
            setTimeout(app.unwelcome, 7500);
            setTimeout(app.showContent, 7510);
            app.setCookie("welcome", true, 1);
        }
    },
}
app.init()