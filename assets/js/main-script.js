// immutable vars
const LOGO_ID = 'logo-container';
const WHAT_I_DO_ID = 'what-i-do';
const DATA_MANAGEMENT_ID = 'data-management-section';
const SECURITY_ID = 'security-section';
const NATIVE_APPS_ID = 'native-apps-section';
const ALGORITHMS_ID = 'algorithms-section';
const LAYOUT_ID = 'layout-section';
const SUNSET_ID = 'sunset-section';
const GRAPHIC_DESIGN_ID = 'graphic-design-section';
const RESUME_ID = 'resume';
const ABOUT_ID = 'about';
const CONTACT_ID = 'contact';
const FOOTER_ID = "footer";
const LOGO_ANIM_TIME = 4000;
// colors
const VIOLET = "rgb(110, 54, 102)";
const LIGHT_BLUE = "rgb(143, 174, 189)";
// elements
const BOOKMARKS = document.getElementById("main-container").children;
const HEADER = document.querySelector(".header-content");
const NATIVE_APPS_SECTION = document.getElementById(NATIVE_APPS_ID);
const SECURITY_SECTION = document.getElementById(SECURITY_ID);
const PDF_BUTTON = document.querySelector(".pdf-button");

//mutable positioning vars
// Keep constant unless window changes.
/*
If the height is dynamic, get the height from the document.
If the height is static, enter it in. 
Important for animation scenes that require the relative scroll position.
*/
let windowHeight = window.innerHeight;
let heightLogoScene;
let heightWhatIDoScene;
let heightSecurityScene;
let heightDataManagementScene;
let heightNativeAppsScene;
let heightAlgorithmstScene;;
let heightLayoutScene;;
let heightSunsetScene;
let heightGraphicDesignScene;
let heightResumeScene;;
let heightContactScene;
let heightFooterScene;;

let startLogoScene;
let endLogoScene;
let startWhatIDoScene;
let endWhatIDoScene;
let startDataManagementScene;
let endDataManagementScene;
let startSecurityScene;
let endSecurityScene;
let startNativeAppsScene;
let endNativeAppsScene;
let startAlgorithmsScene;
let endAlgorithmstScene;
let startLayoutScene;
let endLayoutScene;
let startSunsetScene;
let endSunsetScene;
let startGraphicDesignScene;
let endGraphicDesignScene;
let startResumeScene;
let endResumeScene;
let startAboutScene;
let endAboutScene;
let startContactScene;
let endContactScene;
let startFooterScene;
let endFooterScene;
setScreenDimensions();

// mutable misc vars
let lastKnownScrollPosition = 0;
let scrollPos = 0;
let scrollDirectionDown = true;
let currentBookmark = BOOKMARKS[1];

// animations
let logoAnimationActive = true;
let headerAnimationActive = false;

// Pause everything until the initial animation is complete.
holdScroll();

// Resize screen dimensions if the window size has changed.
window.addEventListener('resize', function (e) {
    setScreenDimensions();
});

// Inititalize all of the scroll functions.
document.addEventListener('scroll', function (e) {

    // TESTING
    // console.log("current Bookmark: " + currentBookmark.id);
    // console.log('GlobalSP: ' + window.scrollY);

    // Sets to false after the initial logo animation (LOGO_ANIM_TIME).
    if (!logoAnimationActive) {

        setCurrentBookmark();
        setScrollDir();
        // Set the scroll position AFTER setting the scroll direction (setScrollDir) as it acts as the previous scrollY.
        scrollPos = window.scrollY;
        setHeaderAnimClass();
        initCurrentBookmarkAnimClass();

    }
});

function setCurrentBookmark() {
    for (let bookmark of BOOKMARKS) {
        const bookmarkTop = bookmark.getBoundingClientRect().top;
        //check if the element id is less than the header height
        if (bookmarkTop <= windowHeight && bookmarkTop < windowHeight && typeof bookmark.id)
            currentBookmark = bookmark;
    }
}

function setScrollDir() {

    // Set the scroll direction
    if (window.scrollY < scrollPos)
        scrollDirectionDown = false;
    else
        scrollDirectionDown = true;
}

function setHeaderAnimClass() {

    //Set the styles dependant on the direction
    if (!headerAnimationActive) {
        //Set the scroll position and direction
        headerAnimationActive = true;

        //Set the styles dependant on the direction
        if (scrollDirectionDown) {
            HEADER.classList.remove('header-animation-up');
            HEADER.classList.add('header-animation-down');
        } else {
            HEADER.classList.remove('header-animation-down');
            HEADER.classList.add('header-animation-up');
        }
        setTimeout(() => {
            headerAnimationActive = false;
        }, 250);
    }
}

function initCurrentBookmarkAnimClass() {

    if (scrollPos > startLogoScene && scrollPos < endLogoScene) {
        initLogoAnim(scrollPos);
    }
    if (scrollPos >= startWhatIDoScene && scrollPos < endWhatIDoScene) {
        initWhatIDoFunction(scrollPos - startWhatIDoScene, scrollDirectionDown);
        if (scrollPos > endWhatIDoScene - windowHeight / 4)
            setScreenDimensions();
    }
    if (scrollPos >= startDataManagementScene && scrollPos < endDataManagementScene) {
        initDataManagementFunction(scrollPos - startDataManagementScene);
    }
    if (scrollPos >= startSecurityScene && scrollPos < endSecurityScene) {
        initSecurityFunction(scrollPos - startSecurityScene);
    } else {
        //Set the background to violet for a smoother animation
        SECURITY_SECTION.style.backgroundColor = VIOLET;
    }
    if (scrollPos >= startNativeAppsScene && scrollPos < endNativeAppsScene) {
        initNativeAppsFunction(scrollPos - startNativeAppsScene);
        NATIVE_APPS_SECTION.style.overflow = "visible";
    } else {
        NATIVE_APPS_SECTION.style.overflow = "hidden";
    }
    if (scrollPos >= startAlgorithmsScene && scrollPos < endAlgorithmsScene) {
        initAlgorithmsFunction(scrollPos - startAlgorithmsScene);
    }
    if (scrollPos >= startSunsetScene && scrollPos < endSunsetScene) {
        initSunsetFunction(scrollPos - startSunsetScene);
        initCloudFunction(scrollPos - startSunsetScene);
    }
    if (scrollPos >= startLayoutScene && scrollPos < endLayoutScene) {
        initLayoutFunction(scrollPos - startLayoutScene);
    }
    if (scrollPos >= startGraphicDesignScene && scrollPos < endGraphicDesignScene) {
        initGraphicDesignFunction(scrollPos - startGraphicDesignScene);
    } else {
        GRAPHIC_DESIGN_BACKGROUND.style.display = "none";
    }
    if (scrollPos >= startResumeScene && scrollPos < endResumeScene) {
        const halfWindowHeight = windowHeight * .5;
        if (scrollPos >= startResumeScene + halfWindowHeight && scrollPos < endResumeScene - halfWindowHeight) {
            PDF_BUTTON.style.visibility = "visible";
        } else {
            PDF_BUTTON.style.visibility = "hidden";
        }
    } else {
        PDF_BUTTON.style.visibility = "hidden";
    }
    if (scrollPos >= startContactScene && scrollPos < endContactScene) {
        initContactFunction(scrollPos - startContactScene);
    }
    if (scrollPos >= startFooterScene && scrollPos < endFooterScene) {
        initFooterFunction(scrollPos - startFooterScene);
    }

}

function setScreenDimensions() {
    windowHeight = window.innerHeight;

    heightLogoScene = document.getElementById(LOGO_ID).offsetHeight;
    heightWhatIDoScene = document.getElementById(WHAT_I_DO_ID).offsetHeight;
    heightSecurityScene = document.getElementById(SECURITY_ID).offsetHeight;
    heightDataManagementScene = document.getElementById(DATA_MANAGEMENT_ID).offsetHeight;
    heightNativeAppsScene = document.getElementById(NATIVE_APPS_ID).offsetHeight;
    heightAlgorithmstScene = document.getElementById(ALGORITHMS_ID).offsetHeight;
    heightSunsetScene = 6000;
    heightLayoutScene = document.getElementById(LAYOUT_ID).offsetHeight;
    heightGraphicDesignScene = document.getElementById(GRAPHIC_DESIGN_ID).offsetHeight;
    heightResumeScene = document.getElementById(RESUME_ID).offsetHeight;
    heightAboutScene = document.getElementById(ABOUT_ID).offsetHeight;
    heightContactScene = document.getElementById(CONTACT_ID).offsetHeight;
    heightFooterScene = document.getElementById(FOOTER_ID).offsetHeight;

    // Logo scene
    startLogoScene = 0;
    endLogoScene = startLogoScene + heightLogoScene;
    // WhatIDo scene
    startWhatIDoScene = startLogoScene + heightLogoScene;
    endWhatIDoScene = startWhatIDoScene + heightWhatIDoScene;
    // DataManagement scene
    startDataManagementScene = startWhatIDoScene + heightWhatIDoScene - windowHeight;
    endDataManagementScene = startDataManagementScene + heightDataManagementScene + windowHeight;
    // Security scene
    startSecurityScene = startDataManagementScene + heightDataManagementScene;
    endSecurityScene = startSecurityScene + heightSecurityScene + windowHeight;
    // NativeApps scene
    startNativeAppsScene = startSecurityScene + heightSecurityScene;
    endNativeAppsScene = startNativeAppsScene + heightNativeAppsScene + windowHeight;
    // Algorithms scene
    startAlgorithmsScene = startNativeAppsScene + heightNativeAppsScene;
    endAlgorithmsScene = startAlgorithmsScene + heightAlgorithmstScene + windowHeight;
    // Sunset scene
    startSunsetScene = startAlgorithmsScene + heightAlgorithmstScene;
    endSunsetScene = startSunsetScene + heightSunsetScene + windowHeight;
    // Layout scene
    startLayoutScene = startSunsetScene + heightSunsetScene;
    endLayoutScene = startLayoutScene + heightLayoutScene + windowHeight;
    // GraphicDesign scene
    startGraphicDesignScene = startLayoutScene + heightLayoutScene;
    endGraphicDesignScene = startGraphicDesignScene + heightGraphicDesignScene + windowHeight;
    // Resume scene
    startResumeScene = startGraphicDesignScene + heightGraphicDesignScene;
    endResumeScene = startResumeScene + heightResumeScene + windowHeight;
    // About scene
    startAboutScene = startResumeScene + heightResumeScene;
    endResumeScene = startAboutScene + heightAboutScene + windowHeight;
    // Contact scene
    startContactScene = startAboutScene + heightAboutScene;
    endContactScene = startContactScene + heightContactScene + windowHeight;

    // startFooterScene = document.querySelector('body').offsetHeight + windowHeight - heightFooterScene;
    startFooterScene = startContactScene + heightContactScene;
    endFooterScene = startFooterScene + heightFooterScene + windowHeight;

}

function holdScroll() {
    if (window.scrollY < 100) {
        setTimeout(() => {
            logoAnimationActive = false;
        }, LOGO_ANIM_TIME);
    } else {
        logoAnimationActive = false;
    }
}

/*
// These functions are to test the loading of all images. 
// Code was refactored to use lazy images as it was cleaner and more efficient.


function allImagesLoaded() {
    const imgs = document.querySelectorAll('img');

    for (let img of imgs) {
        if (!img.complete)
            return false;

    }

    return true;
}

function initImagesLoadedCheck() {

    setInterval(() => {

        if (!allImagesLoaded()) {
            console.log('still loading')
        } else {
            //clear setinterval
            console.log("interval cleared: ");
        }

    }, 1000);

}

*/