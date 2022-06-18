// Elements
const nativeAppsMainContainer = document.getElementById("native-apps-section");
const nativeAppsHeader = document.querySelector("#native-apps-section .section-header");
const nativeAppsPhonesIconAndroidClockContainer = document.querySelector("#native-apps-section .phone-icons-container .android-clock");
const nativeAppsTalkbubbleContainer = document.querySelector("#native-apps-section .talkbubble-container");
const nativeAppsTalkbubbleArrow = document.querySelector("#native-apps-section .talkbubble-arrow");
const nativeAppsTalkbubbleText = document.querySelector("#native-apps-section .talkbubble-text");
const nativeAppsHeartText = document.querySelector("#native-apps-section .heart-text");
const nativeAppsHeartContainer = document.querySelector("#native-apps-section .heart-container");
const nativeAppsPhoneIconsContainer = document.querySelector("#native-apps-section .phone-icons-container");
const nativeAppsPhonesContainer = document.querySelector("#native-apps-section .phones-container");
const nativeAppsTopPhone = document.querySelector("#native-apps-section .top-phone");
const nativeAppsMainPhone = document.querySelector("#native-apps-section .main-phone");
const nativeAppsMainPhoneImgLayer1 = document.querySelector("#native-apps-section .main-phone img:nth-child(3)");
const nativeAppsMainPhoneImgLayer2 = document.querySelector("#native-apps-section .main-phone img:nth-child(2)");
const nativeAppsPhones = document.querySelectorAll("#native-apps-section .phone");
const nativeAppsOuterColumns = document.querySelectorAll("#native-apps-section .outer-column")
const nativeAppsInnerColumns = document.querySelectorAll("#native-apps-section .inner-column")
const nativeAppsColorThemeBackgroundColor1 = document.querySelectorAll(".theme-background-color-1");
const nativeAppsColorThemeBackgroundColor2 = document.querySelectorAll(".theme-background-color-2");
const nativeAppsColorThemeColor1 = document.querySelectorAll(".theme-color-1");
const nativeAppsColorThemeColor2 = document.querySelectorAll(".theme-color-2");
const nativeAppsColorThemeBorderRight = document.querySelectorAll(".theme-color-border-right");
// Scroll heights
const NATIVE_APPS_ZOOM_ANIM_HEIGHT = 5000;
const NATIVE_APPS_SCROLL_ANIM_HEIGHT = 3000;
let nativeAppsHeaderHeight = nativeAppsHeader.clientHeight;

// Immutable vars
const NATIVE_APPS_MINT = "rgb(180, 219, 192)";
const NATIVE_APPS_MINT_TRANSPARENT = "rgba(180, 219, 192,.5)";
const NATIVE_APPS_RUST = "rgb(181, 99, 87)";
const NATIVE_APPS_RUST_TRANSPARENT = "rgba(181, 99, 87,.9)";
const NATIVE_APPS_SEAFOAM = "rgb(167, 179, 165)";
const NATIVE_APPS_SLATE = "rgb(234, 227, 234)";
const NATIVE_APPS_BLACK_TRANSPARENT = "rgba(0, 0, 0, 0.4)";
// Mutable vars
let nativeAppsPhoneContainerScale = 0;
let nativeAppsMainPhoneTop = 0;

window.addEventListener("resize", function () {
    nativeAppsHeaderHeight = document.querySelector("#native-apps-section .section-header").clientHeight;
});

//Called from the mainScript.js
function initNativeAppsFunction(pos) {
    console.log("native-apps-scroll: " + pos);

    //Animate the header until it is 3/4 up the viewport height.
    if(pos <= window.innerHeight / 4 * 3){
        const ratio = pos / (window.innerHeight / 4 * 3);
        nativeAppsHeader.style.opacity = ratio;
    }

    //notify when .phone-icons-container is in the viewport    
    if (pos > nativeAppsHeaderHeight) {

        // Scroll height remaining from 1 to 0
        const animPercentage = (pos - nativeAppsHeaderHeight) / (NATIVE_APPS_ZOOM_ANIM_HEIGHT);
        const mainPhoneRect = nativeAppsMainPhone.getBoundingClientRect();
        const phoneMarginVwToPx = parseInt(nativeAppsMainPhone.style.margin, 10) / 100 * window.innerWidth;

        const phoneMarginScaleFactor = 100 * animPercentage;
        const phoneWidthScaleFactor = 40 * animPercentage;
        const phonePaddingBottomStartScaleFactor = 60 * 4 / 3 * animPercentage;
        const phonePaddingBottomEndScaleFactor = 60 * 4 / 1 * (1 - animPercentage);
        const topHeightScaleFactor = 50 * animPercentage;
        const phoneIconTopScaleFactor = 20 * animPercentage;
        const androidClockContainerScaleFactor = 20 * animPercentage;
        const androidClockContainerMarginLeftScaleFactor = 3 * animPercentage;
        const heartContainerScaleFactor = 13 * animPercentage;
        const heartContainerRotateScaleFactor = 35 * animPercentage;
        const heartContainerMarginLeftScaleFactor = 30 * animPercentage;
        const heartContainerMarginTopScaleFactor = 4 * animPercentage;
        const talkbubbleContainerScaleFactor = 10 * animPercentage;
        const talkbubbleContainerMarginRightScaleFactor = 30 * animPercentage;
        const talkbubbleArrowScaleFactor = 1.5 * animPercentage;
        const talkbubbleRotateScaleFactor = 15 * animPercentage;
        const textScaleFactor = 2 * animPercentage;

        // console.log("anim%: " + animPercentage);

        if (animPercentage <= 1) {

            // animate .phone-icons top calc(68vh - 16.5vw) to calc(50vh - 16.5vw);
            nativeAppsPhoneIconsContainer.style.top = `calc(${70 - phoneIconTopScaleFactor}vh - 16.5vw)`;

            // animate .phones-container top from 0 to 50vh;
            nativeAppsPhonesContainer.style.top = topHeightScaleFactor + 'vh';
            // rise padding bottom to 50vw then drop to 0;
            if (animPercentage <= .75) {
                nativeAppsPhonesContainer.style.paddingBottom = (phonePaddingBottomStartScaleFactor) + 'vw';
            } else {
                nativeAppsPhonesContainer.style.paddingBottom = (phonePaddingBottomEndScaleFactor) + 'vw';
            }

            // animate width from 33.3vw to 13.3vw and margin-left from -5vw to -2vw
            nativeAppsPhonesIconAndroidClockContainer.style.width = (33.3 - androidClockContainerScaleFactor) + 'vw';
            nativeAppsPhonesIconAndroidClockContainer.style.height = (33.3 - androidClockContainerScaleFactor)/3 + 'vw';
            nativeAppsPhonesIconAndroidClockContainer.style.marginLeft = (-5 + androidClockContainerMarginLeftScaleFactor) + 'vw';

            // animate: 
            //      .heart-container from 18vw to 5vw for 130vw and rotate from 35deg to 0deg and margin-top from 5vw to 1vw
            //      margin-bottom from 1vw to 8vw 
            //      text from 3vw to 1vw
            nativeAppsHeartContainer.style.width = (18 - heartContainerScaleFactor) + 'vw';
            nativeAppsHeartContainer.style.height = (18 - heartContainerScaleFactor) + 'vw';
            nativeAppsHeartContainer.style.transform = `rotate(${35 - heartContainerRotateScaleFactor}deg)`;
            nativeAppsHeartContainer.style.marginLeft = (35 - heartContainerMarginLeftScaleFactor) + 'vw';
            nativeAppsHeartContainer.style.marginTop = (5 - heartContainerMarginTopScaleFactor) + 'vw';
            nativeAppsTalkbubbleContainer.style.transform = `rotate(-${15 - talkbubbleRotateScaleFactor}deg)`;
            nativeAppsHeartText.style.fontSize = (3 - textScaleFactor) + 'vw';

            // animate:  
            //      .talkbubble-container from 15vw to 5vw for 130vw and rotate -15deg to 0deg and margin-right 38vw to 8vw
            //      arrow left from -2vw to -.5vw 
            //      text from 3vw to 1vw
            nativeAppsTalkbubbleContainer.style.width = (15 - talkbubbleContainerScaleFactor) + 'vw';
            nativeAppsTalkbubbleContainer.style.height = (15 - talkbubbleContainerScaleFactor) + 'vw';
            nativeAppsTalkbubbleContainer.style.marginRight = (38 - talkbubbleContainerMarginRightScaleFactor) + 'vw';
            nativeAppsTalkbubbleContainer.style.transform = `rotate(-${15 - talkbubbleRotateScaleFactor}deg)`;
            nativeAppsTalkbubbleArrow.style.left = (2 - talkbubbleArrowScaleFactor) * -1 + 'vw';
            nativeAppsTalkbubbleText.style.fontSize = (3 - textScaleFactor) + 'vw';

            //animate: all .phone margin from 100vw to 0 and width from 60vw to 20vw for 20,000px - offsetTop
            for (let phone = 0; phone < nativeAppsPhones.length; phone++) {
                nativeAppsPhones[phone].style.margin = `${100 - phoneMarginScaleFactor}vw`;
                nativeAppsPhones[phone].style.width = `${60 - phoneWidthScaleFactor}vw`;
                nativeAppsPhones[phone].style.height = `${90 - phoneWidthScaleFactor}vw`;
            }

            const phoneFinalHeight = window.innerWidth * .35;
            //Set the top phone to invisible if the margin between phones is greater than the final height of each phone.
            if (phoneMarginVwToPx > phoneFinalHeight) {
                nativeAppsTopPhone.classList.add('invisible');
            } else {
            }
            //Set the top phone to visible if the distance from the top of the viewport to the top of the main phone is less than the margin between phones.
            if (mainPhoneRect.top < phoneMarginVwToPx) {
                nativeAppsTopPhone.classList.remove('invisible');
            }

        } else {
            nativeAppsPhonesContainer.style.top = '50vh';
            nativeAppsPhoneIconsContainer.style.top = 'calc(50vh - 16.5vw)';
            nativeAppsPhonesIconAndroidClockContainer.style.height = '4.433vw';
            nativeAppsPhonesIconAndroidClockContainer.style.width = '13.3vw';
            nativeAppsPhonesIconAndroidClockContainer.style.marginLeft = '-2vw';
            nativeAppsHeartContainer.style.width = '5vw';
            nativeAppsHeartContainer.style.height = '5vw';
            nativeAppsHeartContainer.style.transform = 'rotate(0deg)';
            nativeAppsHeartContainer.style.marginLeft = '5vw';
            nativeAppsHeartContainer.style.marginTop = '1vw';
            nativeAppsTalkbubbleContainer.style.width = '5vw';
            nativeAppsTalkbubbleContainer.style.height = '5vw';
            nativeAppsTalkbubbleContainer.style.marginRight = '8vw';
            nativeAppsTalkbubbleContainer.style.transform = 'rotate(0deg)';
            nativeAppsTalkbubbleArrow.style.left = '-.5vw';
            nativeAppsTalkbubbleText.style.fontSize = '1vw';
            nativeAppsHeartText.style.fontSize = '1vw';
            for (let phone = 0; phone < nativeAppsPhones.length; phone++) {
                nativeAppsPhones[phone].style.margin = '0vw';
                nativeAppsPhones[phone].style.width = '20vw';
            }

        }

        if (animPercentage > 1) {

            const phoneContainerRect = nativeAppsPhonesContainer.getBoundingClientRect();
            if (nativeAppsPhoneContainerScale === 0)
                nativeAppsPhoneContainerScale = phoneContainerRect.bottom - window.innerWidth * .2;


            const outerColumnsScaleFactor = (1 - (phoneContainerRect.bottom - window.innerWidth * .2) / nativeAppsPhoneContainerScale) * 40;
            const innerColumnsScaleFactor = (1 - (phoneContainerRect.bottom - window.innerWidth * .2) / nativeAppsPhoneContainerScale) * 20;

            // animate outer-columns padding-bottom from 40vw to 0;
            nativeAppsOuterColumns[0].style.paddingBottom = (40 - outerColumnsScaleFactor) + 'vw';
            nativeAppsOuterColumns[1].style.paddingBottom = (40 - outerColumnsScaleFactor) + 'vw';
            // animate inner-columns padding-bottom from 20vw to 0;
            nativeAppsInnerColumns[0].style.paddingBottom = (20 - innerColumnsScaleFactor) + 'vw';
            nativeAppsInnerColumns[1].style.paddingBottom = (20 - innerColumnsScaleFactor) + 'vw';
        } else {
            nativeAppsPhoneContainerScale = 0;
            // reset to 40vw;
            nativeAppsOuterColumns[0].style.paddingBottom = '40vw';
            nativeAppsOuterColumns[1].style.paddingBottom = '40vw';
            // reset to 20vw;
            nativeAppsInnerColumns[0].style.paddingBottom = '20vw';
            nativeAppsInnerColumns[1].style.paddingBottom = '20vw';
        }

        const quarterWindowHeight = window.innerHeight / 4;
        const totalPhoneWidth = window.innerWidth * .2;

        // Color phase 1
        // Main phone top is below 3/4 of the vw and the phone's margins are greater than the width of the phone (20vw).
        if (mainPhoneRect.top > quarterWindowHeight * 3 && phoneMarginVwToPx > totalPhoneWidth) {

            nativeAppsMainContainer.style.backgroundColor = NATIVE_APPS_SLATE;
            nativeAppsMainPhoneImgLayer1.style.opacity = 1;
            nativeAppsMainPhoneImgLayer2.style.opacity = 1;
            nativeAppsPhonesIconAndroidClockContainer.style.backgroundColor = NATIVE_APPS_RUST_TRANSPARENT;
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor1.length; i++) {
                nativeAppsColorThemeBackgroundColor1[i].style.backgroundColor = NATIVE_APPS_MINT;
            };
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor2.length; i++) {
                nativeAppsColorThemeBackgroundColor2[i].style.backgroundColor = NATIVE_APPS_RUST;
            };
            for (let i = 0; i < nativeAppsColorThemeColor1.length; i++) {
                nativeAppsColorThemeColor1[i].style.color = NATIVE_APPS_RUST;
            };
            for (let i = 0; i < nativeAppsColorThemeColor2.length; i++) {
                nativeAppsColorThemeColor2[i].style.color = NATIVE_APPS_SLATE;
            };
            for (let i = 0; i < nativeAppsColorThemeBorderRight.length; i++) {
                nativeAppsColorThemeBorderRight[i].style.borderRightColor = NATIVE_APPS_RUST;
            };

        }
        // Animate between color phases 1 and 2.
        // Main phone is above 3/4 of the vw and below 1/4 of the vw while the phone's margins are greater than the width of the phone (20vw).
        else if (mainPhoneRect.top < quarterWindowHeight * 3 && mainPhoneRect.top > quarterWindowHeight && phoneMarginVwToPx > totalPhoneWidth) {
            const fadeAnimScrollRemaining = mainPhoneRect.top - quarterWindowHeight;
            const fadeAnimScale = fadeAnimScrollRemaining / (quarterWindowHeight * 2);

            // Slate to Rust rgb(234 ,227, 234) to rgb(181, 99, 87).
            const slateToRust = {
                r: 234 - 181,
                g: 227 - 99,
                b: 234 - 87
            }
            // Rust w/transparency to Mint w/transparency rgba(181, 99, 87,.9) to rgba(180, 219, 192,.5).
            const rustWOpacToMintWOpac = {
                r: 181 - 180,
                g: 99 - 219,
                b: 87 - 192,
                a: .9 - .5
            }
            // Mint to Seafoam rgb(180, 219, 192) to rgb(167, 179, 165).
            const mintToSeafoam = {
                r: 180 - 167,
                g: 219 - 179,
                b: 192 - 165
            }
            // Rust to Slate rgb(181, 99, 87) to rgb(234, 227, 234).
            const rustToSlate = {
                r: 181 - 234,
                g: 99 - 227,
                b: 87 - 234
            }

            nativeAppsMainContainer.style.backgroundColor = `rgb(${181 + slateToRust.r * fadeAnimScale},${99 + slateToRust.g * fadeAnimScale},${87 + slateToRust.b * fadeAnimScale})`;
            // Delay this animation to start halfway through.
            if (fadeAnimScale < .5)
                nativeAppsMainPhoneImgLayer1.style.opacity = fadeAnimScale * 2;
            nativeAppsPhonesIconAndroidClockContainer.style.backgroundColor = `rgb(${180 + rustWOpacToMintWOpac.r * fadeAnimScale},${219 + rustWOpacToMintWOpac.g * fadeAnimScale},${192 + rustWOpacToMintWOpac.b * fadeAnimScale},${.5 + rustWOpacToMintWOpac.a * fadeAnimScale})`;
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor1.length; i++) {
                nativeAppsColorThemeBackgroundColor1[i].style.backgroundColor = `rgb(${167 + mintToSeafoam.r * fadeAnimScale},${179 + mintToSeafoam.g * fadeAnimScale},${165 + mintToSeafoam.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor2.length; i++) {
                nativeAppsColorThemeBackgroundColor2[i].style.backgroundColor = `rgb(${234 + rustToSlate.r * fadeAnimScale},${227 + rustToSlate.g * fadeAnimScale},${234 + rustToSlate.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeColor1.length; i++) {
                nativeAppsColorThemeColor1[i].style.color = `rgb(${234 + rustToSlate.r * fadeAnimScale},${227 + rustToSlate.g * fadeAnimScale},${234 + rustToSlate.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeColor2.length; i++) {
                nativeAppsColorThemeColor2[i].style.color = `rgb(${181 + slateToRust.r * fadeAnimScale},${99 + slateToRust.g * fadeAnimScale},${87 + slateToRust.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeBorderRight.length; i++) {
                nativeAppsColorThemeBorderRight[i].style.borderRightColor = `rgb(${234 + rustToSlate.r * fadeAnimScale},${227 + rustToSlate.g * fadeAnimScale},${234 + rustToSlate.b * fadeAnimScale})`;
            };

        }
        // Color phase 2.
        // Main phone top is above 1/4 of the vw while the phone's margins are greater than the width of the phone (20vw).
        else if (phoneMarginVwToPx > totalPhoneWidth) {

            nativeAppsMainContainer.style.backgroundColor = NATIVE_APPS_RUST;
            nativeAppsMainPhoneImgLayer1.style.opacity = 0;
            nativeAppsMainPhoneImgLayer2.style.opacity = 1;
            nativeAppsPhonesIconAndroidClockContainer.style.backgroundColor = NATIVE_APPS_MINT_TRANSPARENT;
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor1.length; i++) {
                nativeAppsColorThemeBackgroundColor1[i].style.backgroundColor = NATIVE_APPS_SEAFOAM;
            };
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor2.length; i++) {
                nativeAppsColorThemeBackgroundColor2[i].style.backgroundColor = NATIVE_APPS_SLATE;
            };
            for (let i = 0; i < nativeAppsColorThemeColor1.length; i++) {
                nativeAppsColorThemeColor1[i].style.color = NATIVE_APPS_SLATE;
            };
            for (let i = 0; i < nativeAppsColorThemeColor2.length; i++) {
                nativeAppsColorThemeColor2[i].style.color = NATIVE_APPS_RUST;
            };
            for (let i = 0; i < nativeAppsColorThemeBorderRight.length; i++) {
                nativeAppsColorThemeBorderRight[i].style.borderRightColor = NATIVE_APPS_SLATE;
            };

        }
        // Animate between color phases 2 and 3.
        // Main phone top is above 1/4 of the vw while the phone's margins are less than the width of the phone (20vw).
        else if (phoneMarginVwToPx <= totalPhoneWidth && phoneMarginVwToPx > 0) {
            const fadeAnimScale = phoneMarginVwToPx / (.2 * window.innerWidth);

            // Rust w/transparency to Mint w/transparency rgba(181, 99, 87,.9) to rgba(180, 219, 192,.5).
            const rustToMint = {
                r: 181 - 180,
                g: 99 - 219,
                b: 87 - 192
            }
            // Mint w/transparency to Black w/transparency rgba(180, 219, 192,.5) to rgba(0,0,0,.4).
            const mintWOpacToBlackWOpac = {
                r: 180 - 0,
                g: 219 - 0,
                b: 192 - 0,
                a: .5 - .4
            }
            // Seafoam To Rust rgb(167, 179, 165) to rgb(234 ,227, 234).
            const seafoamToRust = {
                r: 167 - 181,
                g: 179 - 99,
                b: 165 - 87
            }
            // Slate to Seafoam rgb(234 ,227, 234) to rgb(167, 179, 165).
            const slateToSeafoam = {
                r: 234 - 167,
                g: 227 - 179,
                b: 234 - 165
            }
            // Rust to Slate rgb(181, 99, 87) to rgb(234, 227, 234).
            const rustToSlate = {
                r: 181 - 234,
                g: 99 - 227,
                b: 87 - 234
            }

            nativeAppsMainContainer.style.backgroundColor = `rgb(${180 + rustToMint.r * fadeAnimScale},${219 + rustToMint.g * fadeAnimScale},${192 + rustToMint.b * fadeAnimScale})`;
            nativeAppsMainPhoneImgLayer2.style.opacity = fadeAnimScale;
            nativeAppsPhonesIconAndroidClockContainer.style.backgroundColor = `rgb(${0 + mintWOpacToBlackWOpac.r * fadeAnimScale},${0 + mintWOpacToBlackWOpac.g * fadeAnimScale},${0 + mintWOpacToBlackWOpac.b * fadeAnimScale},${.4 + mintWOpacToBlackWOpac.a * fadeAnimScale})`;
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor1.length; i++) {
                nativeAppsColorThemeBackgroundColor1[i].style.backgroundColor = `rgb(${181 + seafoamToRust.r * fadeAnimScale},${99 + seafoamToRust.g * fadeAnimScale},${87 + seafoamToRust.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor2.length; i++) {
                nativeAppsColorThemeBackgroundColor2[i].style.backgroundColor = `rgb(${167 + slateToSeafoam.r * fadeAnimScale},${179 + slateToSeafoam.g * fadeAnimScale},${165 + slateToSeafoam.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeColor1.length; i++) {
                nativeAppsColorThemeColor1[i].style.color = `rgb(${167 + slateToSeafoam.r * fadeAnimScale},${179 + slateToSeafoam.g * fadeAnimScale},${165 + slateToSeafoam.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeColor2.length; i++) {
                nativeAppsColorThemeColor2[i].style.color = `rgb(${234 + rustToSlate.r * fadeAnimScale},${227 + rustToSlate.g * fadeAnimScale},${234 + rustToSlate.b * fadeAnimScale})`;
            };
            for (let i = 0; i < nativeAppsColorThemeBorderRight.length; i++) {
                nativeAppsColorThemeBorderRight[i].style.borderRightColor = `rgb(${167 + slateToSeafoam.r * fadeAnimScale},${179 + slateToSeafoam.g * fadeAnimScale},${165 + slateToSeafoam.b * fadeAnimScale})`;
            };

            /*

                // 3-phase animations:
//Animate these classes along with the main container's background-color, android-clock background-color, and the img:nth-child(3) and img:nth-child(2) opacities.
.theme-background-color-1{
background-color: $mint;//animate from $mint to $, then to $rust.
}
.theme-background-color-2{
background-color: $rust;//animate from $rust to $slate, then to $seafoam.
}
.theme-color-1{
color: $rust;//animate from $rust to $slate, then to $seafoam.
}
.theme-color-2{
color: $slate;//animate from $slate to $rust, then to $slate.
}
.theme-color-border-right{
border-right-color: $rust;//animate from $rust to $slate, then to $seafoam.
}
const NATIVE_APPS_MINT = "rgb(180, 219, 192)";
const NATIVE_APPS_MINT_TRANSPARENT = "rgba(180, 219, 192,.5)";
const NATIVE_APPS_RUST = "rgb(181, 99, 87)";
const NATIVE_APPS_RUST_TRANSPARENT = "rgba(181, 99, 87,.9)";
const NATIVE_APPS_SEAFOAM = "rgb(167, 179, 165)";
const NATIVE_APPS_SLATE = "rgb(234, 227, 234)";
const NATIVE_APPS_BLACK_TRANSPARENT = "rgba(0, 0, 0, 0.4)";
            */

        }
        //end of animation sequence
        else {

            nativeAppsMainContainer.style.backgroundColor = NATIVE_APPS_MINT;
            nativeAppsMainPhoneImgLayer1.style.opacity = 0;
            nativeAppsMainPhoneImgLayer2.style.opacity = 0;
            nativeAppsPhonesIconAndroidClockContainer.style.backgroundColor = NATIVE_APPS_BLACK_TRANSPARENT;
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor1.length; i++) {
                nativeAppsColorThemeBackgroundColor1[i].style.backgroundColor = NATIVE_APPS_RUST;
            };
            for (let i = 0; i < nativeAppsColorThemeBackgroundColor2.length; i++) {
                nativeAppsColorThemeBackgroundColor2[i].style.backgroundColor = NATIVE_APPS_SEAFOAM;
            };
            for (let i = 0; i < nativeAppsColorThemeColor1.length; i++) {
                nativeAppsColorThemeColor1[i].style.color = NATIVE_APPS_SEAFOAM;
            };
            for (let i = 0; i < nativeAppsColorThemeColor2.length; i++) {
                nativeAppsColorThemeColor2[i].style.color = NATIVE_APPS_SLATE;
            };
            for (let i = 0; i < nativeAppsColorThemeBorderRight.length; i++) {
                nativeAppsColorThemeBorderRight[i].style.borderRightColor = NATIVE_APPS_SEAFOAM;
            };


        }
    }

}
