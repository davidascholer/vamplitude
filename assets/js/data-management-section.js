const dbManagementHeader = document.querySelector("#data-management-section .title-container");
const dbManagementLowerContainer = document.querySelector("#data-management-section .lower-container");
const dbTypingElements = document.querySelectorAll("#data-management-section .under-the-hood-container .left-side span");
const dbOverlayTypingElement = document.querySelector("#data-management-section .under-the-hood-container .left-side div.cursor:nth-of-type(2)");
const dbDataFlowElements = document.querySelectorAll("#data-management-section .under-the-hood-container .right-side .ball");
const dbEmptyCart = document.querySelector("#data-management-section .under-the-hood-container .empty-cart");
const dbSignIn = document.querySelector("#data-management-section .under-the-hood-container .sign-in");
const dbLoadingGif= document.querySelector("#data-management-section .under-the-hood-container .loading-gif");
const dbLeftImage = document.querySelector("#data-management-section .under-the-hood-container .db-left-img");
const dbRightImage = document.querySelector("#data-management-section .under-the-hood-container .db-right-img");
const dbSecurityChecked = document.querySelector("#data-management-section .under-the-hood-container .security-img-checked");
const dbAnimButton = document.querySelector("#data-management-section .play-anim-button");
const dbTypingAnimationTime = 1000;
const dbTypingAnimationDelay = dbTypingAnimationTime / 10;
let dbAnimationPlayed = false;
let dbAnimationPlaying = false;

function initDataManagementFunction(pos) {
    console.log("datamangementscroll: " + pos);

    const headerRect = dbManagementHeader.getBoundingClientRect();
    const lowerRect = dbManagementLowerContainer.getBoundingClientRect();

    //Animate if header is in full view of the window (scrolling down) or the second quarter from the top of the window (scrolling up);
    if (headerRect.bottom < window.innerHeight && headerRect.top > 0) {
        dbManagementHeader.classList.add("grow");
    }
    //Remove animation class if header is no longer in the viewport.
    if (headerRect.top > window.innerHeight || headerRect.bottom < 0) {
        dbManagementHeader.classList.remove("grow");
    }
    //Animate if the lower section is in the top half of the window (scrolling down) or the second quarter from the top of the window (scrolling down);
    if (lowerRect.top < window.innerHeight / 2 && lowerRect.top > 0) {
        if (!dbAnimationPlayed) {
            dbAnimationPlayed = true;
            startDBAnimation();
        }
    }
}

const startDBAnimation = () => {

    const dbAnimateAutoTyping = () => {
        dbTypingElements[0].style.visibility = "hidden";
        dbTypingElements[1].style.visibility = "visible";
        setTimeout(() => {
            dbTypingElements[2].style.visibility = "visible";
        }, dbTypingAnimationTime * .2);
        setTimeout(() => {
            dbTypingElements[3].style.visibility = "visible";
        }, dbTypingAnimationTime * .4);
        setTimeout(() => {
            dbTypingElements[4].style.visibility = "visible";
        }, dbTypingAnimationTime * .6);
        setTimeout(() => {
            dbTypingElements[5].style.visibility = "visible";
            dbTypingElements[6].style.visibility = "visible";
            startServerAnimation();
        }, dbTypingAnimationTime * .8);
    }

    const startServerAnimation = () => {

        setTimeout(() => {
            dbAnimateToServer();
        }, dbTypingAnimationTime);

        setTimeout(() => {
            dbAnimateToDocument();
        }, dbTypingAnimationTime * 3);
        setTimeout(() => {
            dbResetToFromDocument();
        }, dbTypingAnimationTime * 5);
        setTimeout(() => {
            dbFadeIn(dbLeftImage, .3, .6);
            dbAnimateFromDocument();
        }, dbTypingAnimationTime * 5 + dbTypingAnimationDelay);

        setTimeout(() => {
            dbAnimateToSecurity();
        }, dbTypingAnimationTime * 7);
        setTimeout(() => {
            dbResetToFromSecurity();
        }, dbTypingAnimationTime * 9);
        setTimeout(() => {
            dbFadeIn(dbSecurityChecked, 0, 1);
            dbAnimateFromSecurity();
        }, dbTypingAnimationTime * 9 + dbTypingAnimationDelay);

        setTimeout(() => {
            dbResetToFromServer();
        }, dbTypingAnimationTime * 11);
        setTimeout(() => {
            dbAnimateFromServer();
        }, dbTypingAnimationTime * 11 + dbTypingAnimationDelay);

        setTimeout(() => {
            dbResetToFromServer();
        }, dbTypingAnimationTime * 13);
        setTimeout(() => {
            dbHideAutoTyping();
            dbFadeIn(dbSignIn, 1, 0);
            dbAnimateToServer();
        }, dbTypingAnimationTime * 13 + dbTypingAnimationDelay);

        setTimeout(() => {
            dbAnimateToRelational();
        }, dbTypingAnimationTime * 15);
        setTimeout(() => {
            dbResetToFromRelational();
        }, dbTypingAnimationTime * 17);
        setTimeout(() => {
            dbFadeIn(dbRightImage, .3, .6);
            dbAnimateFromRelational();
        }, dbTypingAnimationTime * 17 + dbTypingAnimationDelay);

        setTimeout(() => {
            dbResetToFromServer();
        }, dbTypingAnimationTime * 19);
        setTimeout(() => {
            dbAnimateFromServer();
        }, dbTypingAnimationTime * 19 + dbTypingAnimationDelay);

        setTimeout(() => {
            dbFadeIn(dbEmptyCart, 1, 0);
            dbLoadingGif.style.visibility = "hidden";
            dbOverlayTypingElement.style.visibility = "hidden";
            dbAnimationPlaying = false;
        }, dbTypingAnimationTime * 21);

    }
    const dbAnimateToServer = () => {
        dbDataFlowElements[0].classList.add("circle-fade-1");
        dbDataFlowElements[1].classList.add("circle-fade-2");
        dbDataFlowElements[2].classList.add("circle-fade-3");
        dbDataFlowElements[3].classList.add("circle-fade-4");
        dbDataFlowElements[4].classList.add("circle-fade-5");
    }
    const dbAnimateFromServer = () => {
        dbDataFlowElements[0].classList.add("circle-fade-1-reverse");
        dbDataFlowElements[1].classList.add("circle-fade-2-reverse");
        dbDataFlowElements[2].classList.add("circle-fade-3-reverse");
        dbDataFlowElements[3].classList.add("circle-fade-4-reverse");
        dbDataFlowElements[4].classList.add("circle-fade-5-reverse");
    }
    const dbAnimateToDocument = () => {
        dbDataFlowElements[5].classList.add("circle-fade-1");
        dbDataFlowElements[6].classList.add("circle-fade-2");
        dbDataFlowElements[7].classList.add("circle-fade-3");
        dbDataFlowElements[8].classList.add("circle-fade-4");
        dbDataFlowElements[9].classList.add("circle-fade-5");
    }
    const dbAnimateFromDocument = () => {
        dbDataFlowElements[5].classList.add("circle-fade-1-reverse");
        dbDataFlowElements[6].classList.add("circle-fade-2-reverse");
        dbDataFlowElements[7].classList.add("circle-fade-3-reverse");
        dbDataFlowElements[8].classList.add("circle-fade-4-reverse");
        dbDataFlowElements[9].classList.add("circle-fade-5-reverse");
    }
    const dbAnimateToSecurity = () => {
        dbDataFlowElements[10].classList.add("circle-fade-1");
        dbDataFlowElements[11].classList.add("circle-fade-2");
        dbDataFlowElements[12].classList.add("circle-fade-3");
        dbDataFlowElements[13].classList.add("circle-fade-4");
        dbDataFlowElements[14].classList.add("circle-fade-5");
    }
    const dbAnimateFromSecurity = () => {
        dbDataFlowElements[10].classList.add("circle-fade-1-reverse");
        dbDataFlowElements[11].classList.add("circle-fade-2-reverse");
        dbDataFlowElements[12].classList.add("circle-fade-3-reverse");
        dbDataFlowElements[13].classList.add("circle-fade-4-reverse");
        dbDataFlowElements[14].classList.add("circle-fade-5-reverse");
    }
    const dbAnimateToRelational = () => {
        dbDataFlowElements[15].classList.add("circle-fade-1");
        dbDataFlowElements[16].classList.add("circle-fade-2");
        dbDataFlowElements[17].classList.add("circle-fade-3");
        dbDataFlowElements[18].classList.add("circle-fade-4");
        dbDataFlowElements[19].classList.add("circle-fade-5");
    }
    const dbAnimateFromRelational = () => {
        dbDataFlowElements[15].classList.add("circle-fade-1-reverse");
        dbDataFlowElements[16].classList.add("circle-fade-2-reverse");
        dbDataFlowElements[17].classList.add("circle-fade-3-reverse");
        dbDataFlowElements[18].classList.add("circle-fade-4-reverse");
        dbDataFlowElements[19].classList.add("circle-fade-5-reverse");
    }

    dbAnimationPlaying = true;
    dbAnimateAutoTyping();

}

const dbResetToFromServer = () => {
    dbDataFlowElements[0].classList.remove("circle-fade-1");
    dbDataFlowElements[1].classList.remove("circle-fade-2");
    dbDataFlowElements[2].classList.remove("circle-fade-3");
    dbDataFlowElements[3].classList.remove("circle-fade-4");
    dbDataFlowElements[4].classList.remove("circle-fade-5");
    dbDataFlowElements[0].classList.remove("circle-fade-1-reverse");
    dbDataFlowElements[1].classList.remove("circle-fade-2-reverse");
    dbDataFlowElements[2].classList.remove("circle-fade-3-reverse");
    dbDataFlowElements[3].classList.remove("circle-fade-4-reverse");
    dbDataFlowElements[4].classList.remove("circle-fade-5-reverse");
}
const dbResetToFromDocument = () => {
    dbDataFlowElements[5].classList.remove("circle-fade-1");
    dbDataFlowElements[6].classList.remove("circle-fade-2");
    dbDataFlowElements[7].classList.remove("circle-fade-3");
    dbDataFlowElements[8].classList.remove("circle-fade-4");
    dbDataFlowElements[9].classList.remove("circle-fade-5");
    dbDataFlowElements[5].classList.remove("circle-fade-1-reverse");
    dbDataFlowElements[6].classList.remove("circle-fade-2-reverse");
    dbDataFlowElements[7].classList.remove("circle-fade-3-reverse");
    dbDataFlowElements[8].classList.remove("circle-fade-4-reverse");
    dbDataFlowElements[9].classList.remove("circle-fade-5-reverse");
}
const dbResetToFromSecurity = () => {
    dbDataFlowElements[10].classList.remove("circle-fade-1");
    dbDataFlowElements[11].classList.remove("circle-fade-2");
    dbDataFlowElements[12].classList.remove("circle-fade-3");
    dbDataFlowElements[13].classList.remove("circle-fade-4");
    dbDataFlowElements[14].classList.remove("circle-fade-5");
    dbDataFlowElements[10].classList.remove("circle-fade-1-reverse");
    dbDataFlowElements[11].classList.remove("circle-fade-2-reverse");
    dbDataFlowElements[12].classList.remove("circle-fade-3-reverse");
    dbDataFlowElements[13].classList.remove("circle-fade-4-reverse");
    dbDataFlowElements[14].classList.remove("circle-fade-5-reverse");
}
const dbResetToFromRelational = () => {
    dbDataFlowElements[15].classList.remove("circle-fade-1");
    dbDataFlowElements[16].classList.remove("circle-fade-2");
    dbDataFlowElements[17].classList.remove("circle-fade-3");
    dbDataFlowElements[18].classList.remove("circle-fade-4");
    dbDataFlowElements[19].classList.remove("circle-fade-5");
    dbDataFlowElements[15].classList.remove("circle-fade-1-reverse");
    dbDataFlowElements[16].classList.remove("circle-fade-2-reverse");
    dbDataFlowElements[17].classList.remove("circle-fade-3-reverse");
    dbDataFlowElements[18].classList.remove("circle-fade-4-reverse");
    dbDataFlowElements[19].classList.remove("circle-fade-5-reverse");
}
const dbHideAutoTyping = () => {
    dbTypingElements[0].style.visibility = "hidden";
    dbTypingElements[1].style.visibility = "hidden";
    dbTypingElements[2].style.visibility = "hidden";
    dbTypingElements[3].style.visibility = "hidden";
    dbTypingElements[4].style.visibility = "hidden";
    dbTypingElements[5].style.visibility = "hidden";
    dbTypingElements[6].style.visibility = "hidden";
}

const dbResetDBAnimation = () => {
    dbTypingElements[0].style.visibility = "visibile";
    dbResetToFromServer();
    dbResetToFromDocument();
    dbResetToFromSecurity();
    dbResetToFromRelational();
    dbFadeIn(dbLeftImage, .6, .3);
    dbFadeIn(dbRightImage, .6, .3);
    dbFadeIn(dbSecurityChecked, 1, 0);
    dbFadeIn(dbSignIn, 0, 1);
    dbFadeIn(dbEmptyCart, 0, 1);
    dbLoadingGif.style.visibility = "visible";
}

const dbFadeIn = (element, oldOpacity, newOpacity) => {

    const animationDuration = 250;
    element.animate([
        { opacity: oldOpacity },
        { opacity: newOpacity }
    ],
        {
            duration: animationDuration,
            iterations: 1,
            easing: "linear",
            fill: 'forwards',
        }
    );
}

function dbManagementAnimation(){
    if (!dbAnimationPlaying) {
        dbResetDBAnimation();
        setTimeout(() => {
            startDBAnimation();
        }, 500);
    }
};
