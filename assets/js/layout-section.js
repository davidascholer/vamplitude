// Phones in display until sticky threshhold is reached
const LAYOUT_SECTION = document.getElementById('layout-section');
const LAYOUT_FIXED_TOP_LEFT_DUMMY = document.querySelector("#layout-section .left-top-dummy");
const LAYOUT_FIXED_BOTTOM_LEFT_DUMMY = document.querySelector("#layout-section .left-bottom-dummy");
const LAYOUT_FIXED_TOP_MIDDLE_DUMMY = document.querySelector("#layout-section .middle-top-dummy");
const LAYOUT_FIXED_BOTTOM_MIDDLE_DUMMY = document.querySelector("#layout-section .middle-bottom-dummy");
const LAYOUT_FIXED_TOP_RIGHT_DUMMY = document.querySelector("#layout-section .right-top-dummy");
const LAYOUT_FIXED_BOTTOM_RIGHT_DUMMY = document.querySelector("#layout-section .right-bottom-dummy");
const LAYOUT_FOOTER = document.querySelector("#layout-section .footer")
const LAYOUT_FOOTER_ANDROID = document.querySelector("#layout-section .footer .android-container")
const LAYOUT_FOOTER_IPHONE = document.querySelector("#layout-section .footer .iphone-container")
const LAYOUT_WARHOL_BACKGROUND = document.querySelector("#layout-section .warhol-background");
const LAYOUT_WARHOL_TEXT_IMAGES_TOP_PORTRAIT = document.querySelectorAll("#layout-section .anim-row .top-p")
const LAYOUT_WARHOL_TEXT_IMAGES_TOP_LANDSCAPE = document.querySelectorAll("#layout-section .anim-row .top-l")
const LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_PORTRAIT = document.querySelectorAll("#layout-section .anim-row .bottom-p")
const LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_LANDSCAPE = document.querySelectorAll("#layout-section .anim-row .bottom-l")
// Main phones
const LAYOUT_FIXED_TOP_LEFT_ANIM = document.querySelector("#layout-section .row .left-top-anim");
const LAYOUT_FIXED_BOTTOM_LEFT_ANIM = document.querySelector("#layout-section .row .left-bottom-anim");
const LAYOUT_FIXED_TOP_MIDDLE_ANIM = document.querySelector("#layout-section .row .middle-top-anim");
const LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM = document.querySelector("#layout-section .row .middle-bottom-anim");
const LAYOUT_FIXED_TOP_RIGHT_ANIM = document.querySelector("#layout-section .row .right-top-anim");
const LAYOUT_FIXED_BOTTOM_RIGHT_ANIM = document.querySelector("#layout-section .row .right-bottom-anim");
const LAYOUT_FIXED_TOP_LEFT_ANIM_IMG = document.querySelector("#layout-section .row .left-top-anim img");
// Devices
const LAYOUT_PHONES = document.querySelectorAll("#layout-section .row .phone-container");
const LAYOUT_TVS = document.querySelectorAll("#layout-section .tv-container");
const LAYOUT_MACBOOKS = document.querySelectorAll("#layout-section .macbook-container");
const LAYOUT_IPADS = document.querySelectorAll("#layout-section .ipad-container");
const LAYOUT_DEVICES_BELOW_MAIN_PHONES = document.querySelectorAll("#layout-section .below");
// Static vars
const LAYOUT_PHONES_WIDTH = 2 * 4;
const LAYOUT_MACBOOKS_WIDTH = 6 * 4;
const LAYOUT_IPADS_WIDTH = 3 * 4;
const LAYOUT_TVS_WIDTH = 7 * 4;
const LAYOUT_PHONES_ASPECT_RATIO = 3.5/2;
const LAYOUT_MACBOOKS_ASPECT_RATIO = 2/3;
const LAYOUT_IPADS_ASPECT_RATIO = 10/7;
const LAYOUT_TVS_ASPECT_RATIO =2/3 ;
const LAYOUT_PHONES_SCALE_FACTOR = LAYOUT_PHONES_WIDTH / 2;
const LAYOUT_MACBOOKS_SCALE_FACTOR = LAYOUT_MACBOOKS_WIDTH / 2;
const LAYOUT_IPADS_SCALE_FACTOR = LAYOUT_IPADS_WIDTH / 2;
const LAYOUT_TVS_SCALE_FACTOR = LAYOUT_TVS_WIDTH / 2;
const LAYOUT_STICKY_HEIGHT = window.innerHeight / 2;//50vh
const LAYOUT_DEVICES_ANIM_DELAY = 300;//Delay for 300px
// Vars dependant on the window
let layoutBackgroundDisplayHeight = 2.2 * window.innerWidth + window.innerHeight;
let layoutMainPhonesAnimHeight = 6000 - layoutBackgroundDisplayHeight;
let layoutWidth = window.innerWidth;
// Check if the aspect ratio is 3/4 or smaller
let layoutMobileAspectRatio = window.innerWidth / window.innerHeight <= 3 / 4;
// Ensure the animation is starting from the top
let animationStartedFromTop = false;

window.addEventListener('resize', () => {

    // Check if the scroll is in the current section.
    if(currentBookmark.id === LAYOUT_SECTION.id){
        // Check if layout width is larger/smaller than 5
        if (layoutWidth > window.innerWidth + 5 || layoutWidth < window.innerWidth - 5) {
            setLayoutToBeg();
            LAYOUT_SECTION.scrollIntoView();
        }
    }
    layoutBackgroundDisplayHeight = 2.2 * window.innerWidth + window.innerHeight;
    layoutMainPhonesAnimHeight = 6000 - layoutBackgroundDisplayHeight;
    layoutMobileAspectRatio = window.innerWidth / window.innerHeight <= 3 / 4;
});

function initLayoutFunction(pos) {
    console.log("layout: " + pos);

    layoutWidth = window.innerWidth;

    if (layoutMobileAspectRatio) {
        LAYOUT_WARHOL_BACKGROUND.classList.add("mobile-device");
        LAYOUT_WARHOL_BACKGROUND.classList.remove("not-mobile-device");
    } else {
        LAYOUT_WARHOL_BACKGROUND.classList.add("not-mobile-device");
        LAYOUT_WARHOL_BACKGROUND.classList.remove("mobile-device");
    }

    // Check to see if the footer is in view
    const footerBottom = LAYOUT_FOOTER.getBoundingClientRect().bottom;
    if (footerBottom < window.innerHeight) {
        animateFooter(footerBottom);
    }

    if (!animationStartedFromTop && pos <= window.innerHeight)
        animationStartedFromTop = true;

    if (animationStartedFromTop) {

        // Create a value from 0 to 1 from the start of section to the end of the display height;
        const displayAnimRatio = (pos - LAYOUT_DEVICES_ANIM_DELAY) / (layoutBackgroundDisplayHeight / 100) / 100;
        console.log("displayAnimRatio: "+displayAnimRatio);
        const mainDevicesBelowThreshhold = pos + window.innerHeight / 2 > layoutBackgroundDisplayHeight;
        if (displayAnimRatio > 0 && displayAnimRatio < 1) {
            detachMainLayoutPhones();
            resizeLayoutDevices(displayAnimRatio, mainDevicesBelowThreshhold);
            hideLayoutDevicesUnderMainDevices();
        }

        // Show all hidden devices if main phones are out of the display
        if (pos > layoutBackgroundDisplayHeight) {
            showLayoutDevicesUnderMainDevices()
        }

        // Start the main phone animations as soon as the last one is plucked from the device grid.
        if (mainDevicesBelowThreshhold) {
            const mainPhoneAnimPos = pos + window.innerHeight / 2 - layoutBackgroundDisplayHeight;
            // Grow the element for a ratio of 1.7
            const mainPhonesAnimRatio = mainPhoneAnimPos / layoutMainPhonesAnimHeight * 1.7;
            console.log("mainPhonesAnimRatio: "+mainPhonesAnimRatio);
            if (mainPhonesAnimRatio < .1) {
                animateScaleLayoutMainPhones(0);
            } else if (mainPhonesAnimRatio >= .1 && mainPhonesAnimRatio < 1.1) {
                animateScaleLayoutMainPhones(mainPhonesAnimRatio - .1);
                animateRotateLayoutMainPhones(0);
                // When the orientation changes more than 45deg, switch the orientation of the text image.
                if (mainPhonesAnimRatio <= .7) {
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_PORTRAIT, false);
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_LANDSCAPE, true);
                } else {
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_LANDSCAPE, false);
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_PORTRAIT, true);
                }
            } else if (mainPhonesAnimRatio >= 1.1 && mainPhonesAnimRatio < 1.6) {
                animateScaleLayoutMainPhones(1);
                animateRotateLayoutMainPhones((mainPhonesAnimRatio - 1.1) * 2);
                // When the orientation changes more than 45deg, switch the orientation of the text image.
                if (mainPhonesAnimRatio <= 1.35) {
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_PORTRAIT, false);
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_LANDSCAPE, true);
                } else {
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_LANDSCAPE, false);
                    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_PORTRAIT, true);
                }
            } else {
                animateRotateLayoutMainPhones(1);
            }
        }

    } else {
        const footerTop = LAYOUT_FOOTER.getBoundingClientRect().top;
        if (footerTop > window.innerHeight){
            animationStartedFromTop = true;
            setLayoutToBeg();
        }else{
            setLayoutToEnd();
        }
    }
}

const hideLayoutDevicesUnderMainDevices = () => {
    // Fade all devices away if they are closer than 20vw away from the main phones' sticky threshhold.
    for (let device = 0; device < LAYOUT_DEVICES_BELOW_MAIN_PHONES.length; device++) {
        const deviceRect = LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].getBoundingClientRect();
        if (deviceRect.top - window.innerHeight * .0555 < LAYOUT_STICKY_HEIGHT && deviceRect.bottom > LAYOUT_STICKY_HEIGHT) {
            LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].classList.remove('layout-device-fade-in');
            LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].classList.add('layout-device-fade-out');
        } else {
            LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].classList.remove('layout-device-fade-out');
            LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].classList.add('layout-device-fade-in');
        }
    }
}
const showLayoutDevicesUnderMainDevices = () => {
    // Fade in all devices that were faded out.
    for (let device = 0; device < LAYOUT_DEVICES_BELOW_MAIN_PHONES.length; device++) {
        LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].classList.remove('layout-device-fade-out');
        LAYOUT_DEVICES_BELOW_MAIN_PHONES[device].classList.add('layout-device-fade-in');
    }
}

const detachMainLayoutPhones = () => {
    const leftTopDummy = LAYOUT_FIXED_TOP_LEFT_DUMMY.getBoundingClientRect().top;
    const middleTopDummy = LAYOUT_FIXED_TOP_MIDDLE_DUMMY.getBoundingClientRect().top;
    const rightTopDummy = LAYOUT_FIXED_TOP_RIGHT_DUMMY.getBoundingClientRect().top;
    const leftTopAnim = LAYOUT_FIXED_TOP_LEFT_ANIM.getBoundingClientRect().top;
    const middleTopAnim = LAYOUT_FIXED_TOP_MIDDLE_ANIM.getBoundingClientRect().top;
    const rightTopAnim = LAYOUT_FIXED_TOP_RIGHT_ANIM.getBoundingClientRect().top;

    if (leftTopDummy < leftTopAnim) {
        LAYOUT_FIXED_TOP_LEFT_DUMMY.style.visibility = 'hidden';
        LAYOUT_FIXED_BOTTOM_LEFT_DUMMY.style.visibility = 'hidden';
        LAYOUT_FIXED_TOP_LEFT_ANIM.style.visibility = 'visible';
        LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.visibility = 'visible';
    } else {
        LAYOUT_FIXED_TOP_LEFT_DUMMY.style.visibility = 'visible';
        LAYOUT_FIXED_BOTTOM_LEFT_DUMMY.style.visibility = 'visible';
        LAYOUT_FIXED_TOP_LEFT_ANIM.style.visibility = 'hidden';
        LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.visibility = 'hidden';
    }
    if (middleTopDummy < middleTopAnim) {
        LAYOUT_FIXED_TOP_MIDDLE_DUMMY.style.visibility = 'hidden';
        LAYOUT_FIXED_BOTTOM_MIDDLE_DUMMY.style.visibility = 'hidden';
        LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.visibility = 'visible';
        LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.visibility = 'visible';
    } else {
        LAYOUT_FIXED_TOP_MIDDLE_DUMMY.style.visibility = 'visible';
        LAYOUT_FIXED_BOTTOM_MIDDLE_DUMMY.style.visibility = 'visible';
        LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.visibility = 'hidden';
        LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.visibility = 'hidden';
    }
    if (rightTopDummy < rightTopAnim) {
        LAYOUT_FIXED_TOP_RIGHT_DUMMY.style.visibility = 'hidden';
        LAYOUT_FIXED_BOTTOM_RIGHT_DUMMY.style.visibility = 'hidden';
        LAYOUT_FIXED_TOP_RIGHT_ANIM.style.visibility = 'visible';
        LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.visibility = 'visible';
    } else {
        LAYOUT_FIXED_TOP_RIGHT_DUMMY.style.visibility = 'visible';
        LAYOUT_FIXED_BOTTOM_RIGHT_DUMMY.style.visibility = 'visible';
        LAYOUT_FIXED_TOP_RIGHT_ANIM.style.visibility = 'hidden';
        LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.visibility = 'hidden';
    }
}

const resizeLayoutDevices = (displayAnimRatio, mainPhonesBelowThreshhold) => {
    // Animate all phones from width:8vw; and padding:0vw; to 4vw and 2vw respectively.
    for (let phone = 0; phone < LAYOUT_PHONES.length; phone++) {

        // Reached the last anim phone. Omit the main phones from shrinking.
        const newWidth = LAYOUT_PHONES_WIDTH - LAYOUT_PHONES_SCALE_FACTOR * displayAnimRatio;
        if (mainPhonesBelowThreshhold) {
            if (!LAYOUT_PHONES[phone].parentElement.classList.contains("anim-row")) {
                LAYOUT_PHONES[phone].style.height = newWidth * LAYOUT_PHONES_ASPECT_RATIO + 'vw';
                LAYOUT_PHONES[phone].style.padding = (LAYOUT_PHONES_SCALE_FACTOR / 2 * displayAnimRatio) + 'vw';
                LAYOUT_PHONES[phone].style.width = newWidth+ 'vw';
            }
        } else {
            //shrink all
            LAYOUT_PHONES[phone].style.height = newWidth * LAYOUT_PHONES_ASPECT_RATIO + 'vw';
            LAYOUT_PHONES[phone].style.padding = (LAYOUT_PHONES_SCALE_FACTOR / 2 * displayAnimRatio) + 'vw';
            LAYOUT_PHONES[phone].style.width = newWidth + 'vw';
        }

    }
    // Animate all macbooks from width:24vw; and padding:0vw; to 12vw and 6vw respectively.
    for (let macbook = 0; macbook < LAYOUT_MACBOOKS.length; macbook++) {
        const newWidth = LAYOUT_MACBOOKS_WIDTH - LAYOUT_MACBOOKS_SCALE_FACTOR * displayAnimRatio;
        //shrink all
        LAYOUT_MACBOOKS[macbook].style.height = newWidth * LAYOUT_MACBOOKS_ASPECT_RATIO + 'vw';
        LAYOUT_MACBOOKS[macbook].style.width = newWidth + 'vw';
        LAYOUT_MACBOOKS[macbook].style.padding = (LAYOUT_MACBOOKS_SCALE_FACTOR / 2 * displayAnimRatio) + 'vw';
    }
    // Animate all ipads from width:12vw; and padding:0vw; to 6vw and 3vw respectively.
    for (let ipad = 0; ipad < LAYOUT_IPADS.length; ipad++) {
        const newWidth = LAYOUT_IPADS_WIDTH - LAYOUT_IPADS_SCALE_FACTOR * displayAnimRatio;
        //shrink all
        LAYOUT_IPADS[ipad].style.height = newWidth * LAYOUT_IPADS_ASPECT_RATIO + 'vw';
        LAYOUT_IPADS[ipad].style.width = newWidth+ 'vw';
        LAYOUT_IPADS[ipad].style.padding = (LAYOUT_IPADS_SCALE_FACTOR / 2 * displayAnimRatio) + 'vw';
    }
    // Animate all tvs from width:28vw; and padding:0vw; to 14vw and 7vw respectively.
    for (let tv = 0; tv < LAYOUT_TVS.length; tv++) {
        const newWidth = LAYOUT_TVS_WIDTH - LAYOUT_TVS_SCALE_FACTOR * displayAnimRatio;
        //shrink all
        LAYOUT_TVS[tv].style.height = newWidth * LAYOUT_TVS_ASPECT_RATIO + 'vw';
        LAYOUT_TVS[tv].style.width = newWidth + 'vw';
        LAYOUT_TVS[tv].style.padding = (LAYOUT_TVS_SCALE_FACTOR / 2 * displayAnimRatio) + 'vw';
    }
}

const animateScaleLayoutMainPhones = ratio => {
    let phoneMaxHeight;
    let phoneMaxWidth;
    let leftTopStyles;
    let leftBottomStyles;
    let middletopStyles;
    let middleBottomStyles;
    let rightTopStyles;
    let rightBottomStyles;

    if (layoutMobileAspectRatio) {
        phoneMaxWidth = 22 * window.innerWidth / 100;
        phoneMaxHeight = phoneMaxWidth * LAYOUT_PHONES_ASPECT_RATIO;

        leftTopStyles = {
            min: { left: 5.5 * 4 * window.innerWidth / 100, top: window.innerHeight * .5 },
            max: { left: 1 / 4 * window.innerWidth - phoneMaxWidth / 2, top: (1 / 6 * window.innerHeight) - (phoneMaxHeight / 2) }
        }
        leftBottomStyles = {
            min: { left: 7.5 * 4 * window.innerWidth / 100, top: window.innerHeight * .5 },
            max: { left: 3 / 4 * window.innerWidth - phoneMaxWidth / 2, top: (1 / 6 * window.innerHeight) - (phoneMaxHeight / 2) }
        }
        middletopStyles = {
            min: { left: 10.5 * 4 * window.innerWidth / 100, top: window.innerHeight * .5 },
            max: { left: 1 / 4 * window.innerWidth - phoneMaxWidth / 2, top: (3 / 6 * window.innerHeight) - (phoneMaxHeight / 2) }
        }
        middleBottomStyles = {
            min: { left: 12.5 * 4 * window.innerWidth / 100, top: window.innerHeight * .5 },
            max: { left: 3 / 4 * window.innerWidth - phoneMaxWidth / 2, top: (3 / 6 * window.innerHeight) - (phoneMaxHeight / 2) }
        }
        rightTopStyles = {
            min: { left: 15.5 * 4 * window.innerWidth / 100, top: window.innerHeight * .5 },
            max: { left: 1 / 4 * window.innerWidth - phoneMaxWidth / 2, top: (5 / 6 * window.innerHeight) - (phoneMaxHeight / 2) }
        }
        rightBottomStyles = {
            min: { left: 17.5 * 4 * window.innerWidth / 100, top: window.innerHeight * .5 },
            max: { left: 3 / 4 * window.innerWidth - phoneMaxWidth / 2, top: (5 / 6 * window.innerHeight) - (phoneMaxHeight / 2) }
        }

    } else {
        phoneMaxWidth = 15 * window.innerWidth / 100;
        phoneMaxHeight = phoneMaxWidth * LAYOUT_PHONES_ASPECT_RATIO;

        leftTopStyles = {
            min: { left: 5.5 * 4 * window.innerWidth / 100, top: window.innerHeight / 2 },
            max: { left: (1 / 6 * window.innerWidth) - (phoneMaxWidth / 2), top: (1 / 4 * window.innerHeight) - (phoneMaxHeight * .5) }
        }
        leftBottomStyles = {
            min: { left: 7.5 * 4 * window.innerWidth / 100, top: window.innerHeight / 2 },
            max: { left: (1 / 6 * window.innerWidth) - (phoneMaxWidth / 2), top: (3 / 4 * window.innerHeight) - (phoneMaxHeight * .5) }
        }
        middletopStyles = {
            min: { left: 10.5 * 4 * window.innerWidth / 100, top: window.innerHeight / 2 },
            max: { left: (3 / 6 * window.innerWidth) - (phoneMaxWidth / 2), top: (1 / 4 * window.innerHeight) - (phoneMaxHeight * .5) }
        }
        middleBottomStyles = {
            min: { left: 12.5 * 4 * window.innerWidth / 100, top: window.innerHeight / 2 },
            max: { left: (3 / 6 * window.innerWidth) - (phoneMaxWidth / 2), top: (3 / 4 * window.innerHeight) - (phoneMaxHeight * .5) }
        }
        rightTopStyles = {
            min: { left: 15.5 * 4 * window.innerWidth / 100, top: window.innerHeight / 2 },
            max: { left: (5 / 6 * window.innerWidth) - (phoneMaxWidth / 2), top: (1 / 4 * window.innerHeight) - (phoneMaxHeight * .5) }
        }
        rightBottomStyles = {
            min: { left: 17.5 * 4 * window.innerWidth / 100, top: window.innerHeight / 2 },
            max: { left: (5 / 6 * window.innerWidth) - (phoneMaxWidth / 2), top: (3 / 4 * window.innerHeight) - (phoneMaxHeight * .5) }
        }

    }

    const displayPhoneWidth = parseFloat(LAYOUT_FIXED_TOP_LEFT_DUMMY.style.width, 10) * window.innerWidth / 100;
    const newPhoneWidth = displayPhoneWidth * (1 - ratio) + phoneMaxWidth * ratio;
    const newPhoneHeight = newPhoneWidth * LAYOUT_PHONES_ASPECT_RATIO;

    const rotateFormula = 90 * ratio;

    const leftTopPhoneDiffLeft = leftTopStyles.max.left - leftTopStyles.min.left;
    const newLeftTopPhoneLeft = leftTopStyles.min.left + leftTopPhoneDiffLeft * ratio;
    const leftTopPhoneDiffTop = leftTopStyles.max.top - leftTopStyles.min.top;
    const newLeftTopPhoneTop = leftTopPhoneDiffTop * ratio;

    const leftBottomPhoneDiffLeft = leftBottomStyles.max.left - leftBottomStyles.min.left;
    const newLeftBottomPhoneLeft = leftBottomStyles.min.left + leftBottomPhoneDiffLeft * ratio;
    const leftBottomPhoneDiffTop = leftBottomStyles.max.top - leftBottomStyles.min.top;
    const newLeftBottomPhoneTop = leftBottomPhoneDiffTop * ratio;

    const middleTopPhoneDiffLeft = middletopStyles.max.left - middletopStyles.min.left;
    const newMiddleTopPhoneLeft = middletopStyles.min.left + middleTopPhoneDiffLeft * ratio;
    const middleTopPhoneDiffTop = middletopStyles.max.top - middletopStyles.min.top;
    const newMiddletTopPhoneTop = middleTopPhoneDiffTop * ratio;

    const middleBottomPhoneDiffLeft = middleBottomStyles.max.left - middleBottomStyles.min.left;
    const newMiddleBottomPhoneLeft = middleBottomStyles.min.left + middleBottomPhoneDiffLeft * ratio;
    const middleBottomPhoneDiffTop = middleBottomStyles.max.top - middleBottomStyles.min.top;
    const newMiddleBottomPhoneTop = middleBottomPhoneDiffTop * ratio;

    const rightTopPhoneDiffLeft = rightTopStyles.max.left - rightTopStyles.min.left;
    const newRightTopPhoneLeft = rightTopStyles.min.left + rightTopPhoneDiffLeft * ratio;
    const rightTopPhoneDiffTop = rightTopStyles.max.top - rightTopStyles.min.top;
    const newRightTopPhoneTop = rightTopPhoneDiffTop * ratio;

    const rightBottomPhoneDiffLeft = rightBottomStyles.max.left - rightBottomStyles.min.left;
    const newRightBottomPhoneLeft = rightBottomStyles.min.left + rightBottomPhoneDiffLeft * ratio;
    const rightBottomPhoneDiffTop = rightBottomStyles.max.top - rightBottomStyles.min.top;
    const newRightBottomPhoneTop = rightBottomPhoneDiffTop * ratio;

    // Left Top Styles
    LAYOUT_FIXED_TOP_LEFT_ANIM.style.width = newPhoneWidth + 'px';
    LAYOUT_FIXED_TOP_LEFT_ANIM.style.height = newPhoneHeight + 'px';
    LAYOUT_FIXED_TOP_LEFT_ANIM.style.left = newLeftTopPhoneLeft + 'px';
    LAYOUT_FIXED_TOP_LEFT_ANIM.style.top = newLeftTopPhoneTop + 'px';
    LAYOUT_FIXED_TOP_LEFT_ANIM.style.transform = `rotate(${rotateFormula}deg)`;
    // Left Bottom Styles
    LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.width = newPhoneWidth + 'px';
    LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.height = newPhoneHeight + 'px';
    LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.left = newLeftBottomPhoneLeft + 'px';
    LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.top = newLeftBottomPhoneTop + 'px';
    // Middle Top Styles
    LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.width = newPhoneWidth + 'px';
    LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.height = newPhoneHeight + 'px';
    LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.left = newMiddleTopPhoneLeft + 'px';
    LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.top = newMiddletTopPhoneTop + 'px';
    LAYOUT_FIXED_TOP_MIDDLE_ANIM.style.transform = `rotate(${rotateFormula}deg)`;
    // Middle Bottom Styles
    LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.width = newPhoneWidth + 'px';
    LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.height = newPhoneHeight + 'px';
    LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.left = newMiddleBottomPhoneLeft + 'px';
    LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.top = newMiddleBottomPhoneTop + 'px';
    // Right Top Styles
    LAYOUT_FIXED_TOP_RIGHT_ANIM.style.width = newPhoneWidth + 'px';
    LAYOUT_FIXED_TOP_RIGHT_ANIM.style.height = newPhoneHeight + 'px';
    LAYOUT_FIXED_TOP_RIGHT_ANIM.style.left = newRightTopPhoneLeft + 'px';
    LAYOUT_FIXED_TOP_RIGHT_ANIM.style.top = newRightTopPhoneTop + 'px';
    LAYOUT_FIXED_TOP_RIGHT_ANIM.style.transform = `rotate(${rotateFormula}deg)`;
    // Right Bottom Styles
    LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.width = newPhoneWidth + 'px';
    LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.height = newPhoneHeight + 'px';
    LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.left = newRightBottomPhoneLeft + 'px';
    LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.top = newRightBottomPhoneTop + 'px';

}

const animateRotateLayoutMainPhones = ratio => {
    const rotateFormula = ratio * 90;
    LAYOUT_FIXED_BOTTOM_LEFT_ANIM.style.transform = `rotate(${rotateFormula}deg)`;
    LAYOUT_FIXED_BOTTOM_MIDDLE_ANIM.style.transform = `rotate(${rotateFormula}deg)`;
    LAYOUT_FIXED_BOTTOM_RIGHT_ANIM.style.transform = `rotate(${rotateFormula}deg)`;
}


const changeTextOrientation = (element, hide) => {
    if (hide) {
        for (let text = 0; text < element.length; text++) {
            element[text].style.opacity = "0";
        }
    } else {
        for (let text = 0; text < element.length; text++) {
            element[text].style.opacity = "1";
        }
    }
}

const animateFooter = footerBottom => {
    const percentage = 1 - footerBottom / window.innerHeight;
    // Animate from top: 105; to top: 70; for half of the duration
    if (percentage <= .5) {
        const newMarginAndroid = 105 - percentage * 1 * 100;
        const newMarginIphone = 130 - percentage * 1 * 100;
        LAYOUT_FOOTER_ANDROID.style.top = newMarginAndroid + '%';
        LAYOUT_FOOTER_IPHONE.style.top = newMarginIphone + '%';
    } else {
        LAYOUT_FOOTER_ANDROID.style.top = '55%';
        LAYOUT_FOOTER_IPHONE.style.top = '80%';
    }
}

const setLayoutToBeg = () => {
    
    detachMainLayoutPhones();
    resizeLayoutDevices(0, false);
    animateRotateLayoutMainPhones(0);
    animateScaleLayoutMainPhones(0);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_PORTRAIT, true);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_LANDSCAPE, false);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_PORTRAIT, true);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_LANDSCAPE, false);
}

const setLayoutToEnd = () => {
    detachMainLayoutPhones();
    resizeLayoutDevices(1, true);
    animateRotateLayoutMainPhones(1);
    animateScaleLayoutMainPhones(1);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_PORTRAIT, true);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_TOP_LANDSCAPE, false);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_PORTRAIT, true);
    changeTextOrientation(LAYOUT_WARHOL_TEXT_IMAGES_BOTTOM_LANDSCAPE, false);
}