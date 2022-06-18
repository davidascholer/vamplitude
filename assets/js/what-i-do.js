//Declare globally to save processing speed while scrolling
const whatIDoUIContainer = document.querySelector('.user-friendly-design');
const whatIDoDiceContainer = document.querySelector('.three-d');
const whatIDoBanner = document.querySelector('.banner');
const whatIDoLock = document.querySelector('.lock');
const whatIDoCloudSection = document.querySelector('.cloud-section');
const whatIDoDatabases = document.querySelector('.databases');
const whatIDoCardContainer = document.querySelector('.content-header-container');
const whatIDoFrontBackContainer = document.querySelector('.front-back-container');
const whatIDoCardStyles = window.getComputedStyle(whatIDoCardContainer);
const whatIDoCardHeight = whatIDoCardStyles.height;
const whatIDoFrontBackHeight = window.getComputedStyle(whatIDoFrontBackContainer).height;
const whatIdoAnimationHeight = 50;
const whatIdoMarginLeftAnimationDuration = 100;
const whatIdoMarginTopAnimationDuration = 400;
const whatIdoFlipAnimationDuration = 10;
const whatIDoHeight = 3500
const whatIDoContentItemCount = 6;
const whatIDoAnimSection = whatIDoHeight / whatIDoContentItemCount;
const whatIDoFreezePixelRadius = 250;
let diceAnimation;
let uiAnimation;
let bannerAnimation;
let lockAnimation;
let cloudAnimation;
let dbAnimation;
let frontBackAnimation;
let lastPosition = 0;
let currentContent;
let lastContent;
let currentContentMarginLeft = 0;
let contentNumber;
let whatIDoIncrementDistance = 0;

//Called from the mainScript.js
function initWhatIDoFunction(pos) {

    console.log("whatidoscroll: " + pos);
    lastPosition = pos;

    //Position data from the elements within the scene
    const diceMarginTopString = window.getComputedStyle(whatIDoDiceContainer).marginTop;
    const diceMarginTop = parseInt(diceMarginTopString, 10);
    const uiMarginTopString = window.getComputedStyle(whatIDoUIContainer).marginTop;
    const uiMarginTop = parseInt(uiMarginTopString, 10);
    const bannerMarginTopString = window.getComputedStyle(whatIDoBanner).marginTop;
    const bannerMarginTop = parseInt(bannerMarginTopString, 10);
    const lockMarginTopString = window.getComputedStyle(whatIDoLock).marginTop;
    const lockMarginTop = parseInt(lockMarginTopString, 10);
    const cloudMarginTopString = window.getComputedStyle(whatIDoCloudSection).marginTop;
    const cloudMarginTop = parseInt(cloudMarginTopString, 10);
    const dbMarginTopString = window.getComputedStyle(whatIDoDatabases).marginTop;
    const dbMarginTop = parseInt(dbMarginTopString, 10);

    //If the viewport is smaller, create an animation where each skill is shown one at a time in the UI.
    //In the stylesheet, the rules change to a flexbox where all of the child content elements are inline when the viewport is less than 700px.
    // if (window.innerWidth < 700) {

    //     if (uiMarginTop > 0) {

    //         //Scroll everything to zero when threshhold is reached (top icon reaches the top of the screen).
    //         diceAnimation = animateScrollToZero(whatIDoDiceContainer, diceMarginTop);
    //         uiAnimation = animateScrollToZero(whatIDoUIContainer, uiMarginTop);
    //         bannerAnimation = animateScrollToZero(whatIDoBanner, bannerMarginTop);
    //         lockAnimation = animateScrollToZero(whatIDoLock, lockMarginTop);
    //         cloudAnimation = animateScrollToZero(whatIDoCloudSection, cloudMarginTop);
    //         dbAnimation = animateScrollToZero(whatIDoDatabases, dbMarginTop);

    //         if (diceAnimation) {
    //             diceAnimation.play();
    //             uiAnimation.play();
    //             bannerAnimation.play();
    //             lockAnimation.play();
    //             cloudAnimation.play();
    //             dbAnimation.play();
    //         }

    //     }
    //     //The scroll animation is complete and each of the skill content is at marginTop = 0.
    //     else {

    //         lastContent = currentContent;

    //         const parentWidth = parseInt(whatIDoFrontBackContainer.getBoundingClientRect().width, 10);
    //         const parentRight = parseInt(whatIDoFrontBackContainer.getBoundingClientRect().right, 10);
    //         const databases = document.querySelector('#what-i-do .databases');
    //         const databasesWidth = parseInt(databases.getBoundingClientRect().width, 10);
    //         const databaseRight = parseInt(databases.getBoundingClientRect().right, 10);
    //         const moveRatio = parentWidth / whatIDoHeight;

    //         const parentChildRightDifference = parentRight - databaseRight;
    //         const leftStopPoint = Math.ceil(parentWidth - window.innerWidth / 2 - databasesWidth / 2 - parentChildRightDifference);

    //         if (pos < 50) {
    //             currentContentMarginLeft = 20;//Centers is a little better. Can't be exact (but doesn't need to be) due to the flex layouts dynamic styling.
    //         } else if (pos * moveRatio >= leftStopPoint) {
    //             currentContentMarginLeft = leftStopPoint;
    //         } else {
    //             currentContentMarginLeft = pos * moveRatio;
    //         }
    //         frontBackAnimation = animateMarginScroll(whatIDoFrontBackContainer, currentContentMarginLeft * -1);
    //         if (frontBackAnimation)
    //             frontBackAnimation.play();
    //     }

    //     // Viewport is >= 700px
    // } else {

        if (scrollDirectionDown) {

            diceAnimation = animateScrollToZero(whatIDoDiceContainer, diceMarginTop);
            uiAnimation = animateScrollToZero(whatIDoUIContainer, uiMarginTop);
            bannerAnimation = animateScrollToZero(whatIDoBanner, bannerMarginTop);
            lockAnimation = animateScrollToZero(whatIDoLock, lockMarginTop);
            cloudAnimation = animateScrollToZero(whatIDoCloudSection, cloudMarginTop);
            dbAnimation = animateScrollToZero(whatIDoDatabases, dbMarginTop);

            if (diceAnimation) {
                diceAnimation.play();
                uiAnimation.play();
                bannerAnimation.play();
                lockAnimation.play();
                cloudAnimation.play();
                dbAnimation.play();
            }


        } else {
            const marginTopScrollLength = -20;
            diceAnimation = animateScroll(whatIDoDiceContainer, diceMarginTop, marginTopScrollLength * 1);
            uiAnimation = animateScroll(whatIDoUIContainer, uiMarginTop, marginTopScrollLength * 2);
            bannerAnimation = animateScroll(whatIDoBanner, bannerMarginTop, marginTopScrollLength * 3);
            lockAnimation = animateScroll(whatIDoLock, lockMarginTop, marginTopScrollLength * 2);
            cloudAnimation = animateScroll(whatIDoCloudSection, cloudMarginTop, marginTopScrollLength * 3);
            dbAnimation = animateScroll(whatIDoDatabases, dbMarginTop, marginTopScrollLength * 1);

            if (diceAnimation) {
                diceAnimation.play();
                uiAnimation.play();
                bannerAnimation.play();
                lockAnimation.play();
                cloudAnimation.play();
                dbAnimation.play();
            }
        }
    // }
}


const animateScrollToZero = (element, top) => {

    const animation = element.animate([
        { marginTop: top + 'px' },
        { marginTop: 0 + 'px' }
    ],
        {
            duration: whatIdoMarginTopAnimationDuration,
            iterations: 1,
            easing: "linear",
            fill: 'forwards',
        }
    );

    return animation;
};

const animateScroll = (element, top, pos) => {
    element.animate([
        { marginTop: top + 'px' },
        { marginTop: (whatIdoAnimationHeight - pos) + 'px' }
    ],
        {
            duration: whatIdoMarginTopAnimationDuration,
            iterations: 1,
            easing: "linear",
            fill: 'forwards',
        }
    );
}

const animateMarginScroll = (element, newLeft) => {
    const animationDuration = whatIdoMarginLeftAnimationDuration * 10;
    element.animate([
        { marginLeft: newLeft + 'px' }
    ],
        {
            duration: animationDuration,
            iterations: 1,
            easing: "ease-in",
            fill: 'forwards',
        }
    );
}




