var pacificosta = {
    menu: null,
    navbar: null,
    btnlinesMenu: null,
    btnexitMenu: null,
    menuHide: true,
    menuDown: true,
    screenY: 0,
    menuStarted: false,
    showedSection: 0,
}

document.querySelector("#hamb-menu").onclick = () => {
    menuHideOrShow();
};
document.querySelector("#nav-mobile").onclick = () => {
    menuHideOrShow();
};
pacificosta.navbar = gsap.to("#pacificosta-navbar", 0, {
    className: "+=pacificosta-navbar-2",
});
pacificosta.navbar.play();
pacificosta.navbar.reverse();
//tl.to(contracted, 2, { className:"+=expanded" })
const menuHideOrShow = () => {
    if (screen.width < 1000) {
        if (!pacificosta.menuStarted) {
            pacificosta.menu = gsap.to("#nav-mobile", {
                top: 0,
                autoAlpha: 1,
                duration: 0.3

            });
            pacificosta.btnlinesMenu = gsap.to("#h-lines-img", {
                display: 'none',
                duration: 0

            });

            pacificosta.btnexitMenu = gsap.to("#x-exit-img", {
                display: 'block',
                duration: 0

            });

            pacificosta.menuStarted = true;
            pacificosta.menuHide = false;
        } else {
            if (pacificosta.menuHide) {
                pacificosta.menuHide = false;
                pacificosta.menu.play();
                pacificosta.btnexitMenu.play()
                pacificosta.btnlinesMenu.play()

            } else {
                pacificosta.menuHide = true;
                pacificosta.menu.reverse();
                pacificosta.btnexitMenu.reverse()
                pacificosta.btnlinesMenu.reverse()
            }
        }
    }
};

///Scrolling
window.onscroll = () => {
    console.log(window.scrollY)

    if (window.scrollY > 50) {
        pacificosta.navbar.play();
    } else {
        pacificosta.navbar.reverse();
    }
    if (window.scrollY > 300) {
        //showWorkers();
        //coniser.showedSection++;
    }
    if (window.scrollY > 30) {
        //menuDownUp();
    }
};
/*
var coniser = {
    menu: null,
    menuHide: true,
    menuDown: true,
    screenY: 0,
    menuStarted: false,
    showedSection: 0,
}

document.querySelector("#hamb-menu").onclick = () => {
    menuHideShow();
};
document.querySelector("#nav-mobile").onclick = () => {
    menuDownUp();
};
///Scrolling
window.onscroll = () => {
    coniser.screenY = window.scrollY;
    console.log(coniser.screenY)

    if (coniser.screenY > 100 && coniser.showedSection < 1) {
        showProjects();
        coniser.showedSection++;
    }
    if (coniser.screenY > 300 && coniser.showedSection < 2) {
        showWorkers();
        coniser.showedSection++;
    }
    if (coniser.screenY > 30 && !coniser.menuDown) {
        menuDownUp();
    }
};


const menuDownUp = () => {
    if (!coniser.menuHide) {
        menuHideShow();
    }
    if (coniser.menuDown) {
        gsap.to("#nav_coniser", {
            y: -100,
            duration: 0.5
        });
        setTimeout(() => { coniser.menuDown = false; }, 200);
    } else {
        gsap.to("#nav_coniser", {
            y: 0,
            duration: 0.5
        });
        coniser.menuDown = true;
    }


}
const menuHideShow = () => {
    if (screen.width < 1000) {
        if (!coniser.menuStarted) {
            coniser.menu = gsap.to("#nav-mobile", {
                autoAlpha: 1,
                duration: 0.25
            });
            gsap.set("#nav-mobile", {
                className: "+=mob-menu-coniser"
            });
            coniser.menuStarted = true;
            coniser.menuHide = false;
        } else {
            if (coniser.menuHide) {
                coniser.menuHide = false;
                coniser.menu.play();

            } else {
                coniser.menuHide = true;
                coniser.menu.reverse();
            }
        }
    }

};


const showInformation = () => {
    var t1 = gsap.timeline();
    t1.from("#right-information", {
            x: 80,
            duration: 1,
            delay: 0.5
        })
        .from("#left-information", {
            autoAlpha: 0,
            x: -150,
            duration: 1
        })
}
const showProjects = () => {
    gsap.to("#project-scroll", {
        duration: 2.5,
        x: -400
    });
}

const showWorkers = () => {
    var t2 = gsap.timeline();
    t2.from("#workers-photos-1", {
            x: 80,
            autoAlpha: 0,
            duration: 1,
        })
        .from("#workers-photos-2", {
            x: 80,
            autoAlpha: 0,
            duration: 1,
        })
        .from("#workers-photos-3", {
            y: 80,
            autoAlpha: 0,
            duration: 1,
        });
}
const starting = () => {
    showInformation();
}

starting();
*/