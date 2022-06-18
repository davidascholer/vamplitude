const securitySectionImageOverlays = document.querySelectorAll("#security-section .image-overlay");
const securitySectionAnimationContent = document.querySelector("#security-section .animation-content");
const securitySectionSpans = document.querySelectorAll("#security-section .animation-content span");
const securitySectionImageOverlay1 = securitySectionImageOverlays[0];
const securitySectionImageOverlay2 = securitySectionImageOverlays[1];
const securitySectionImages = document.querySelectorAll("#security-section .image-container img");
const securitySectionImage1 = securitySectionImages[0];
const securitySectionImage2 = securitySectionImages[1];

function initSecurityFunction(pos) {
    console.log("securityPos: " + pos);
    const overlay1 = securitySectionImageOverlay1.getBoundingClientRect();
    const overlay2 = securitySectionImageOverlay2.getBoundingClientRect();
    const image1 = securitySectionImage1.getBoundingClientRect();
    const image2 = securitySectionImage2.getBoundingClientRect();
    const animationContent = securitySectionAnimationContent.getBoundingClientRect();

    //Animate the background color to light blue from violet between the 20% to 50% of the view height scroll (colors from css implemented in main-script.js).
    if (pos < window.innerHeight / 5) {
        SECURITY_SECTION.style.backgroundColor = VIOLET;
        securitySectionImageOverlay1.style.backgroundColor = VIOLET;
    }else if (pos > window.innerHeight/5 && pos < window.innerHeight / 2) {
        const ratio = (pos - window.innerHeight/5) / (window.innerHeight / 2 - window.innerHeight/5);
        console.log("ratio: "+ratio);

        // 0 to 1, violet to light blue rgb(110, 54, 102) to rgb(143, 174, 189).
        const violetToLightBlue = {
            r: 110 - 143,
            g: 54 - 174,
            b: 102 - 189
        }
        SECURITY_SECTION.style.backgroundColor = `rgb(${110 - violetToLightBlue.r * ratio},${54 - violetToLightBlue.g * ratio},${102 - violetToLightBlue.b * ratio})`;
        securitySectionImageOverlay1.style.backgroundColor = `rgb(${110 - violetToLightBlue.r * ratio},${54 - violetToLightBlue.g * ratio},${102 - violetToLightBlue.b * ratio})`;
    } else {
        SECURITY_SECTION.style.backgroundColor = LIGHT_BLUE;
        securitySectionImageOverlay1.style.backgroundColor = LIGHT_BLUE;
    }

    //Animate if image is in the top half of the window (scrolling down) or the second quarter from the top of the window (scrolling down);
    if (overlay1.top < window.innerHeight / 2 && overlay1.top > 0 || image1.bottom > window.innerHeight / 2 && image1.bottom < window.innerHeight)
        securitySectionImageOverlay1.classList.add("roll-up");
    //Remove animation class if image is no longer in the viewport.
    if (image1.bottom < 0 || image1.top > window.innerHeight)
        securitySectionImageOverlay1.classList.remove("roll-up");

    //Animate if image is in the top half of the window (scrolling down) or the second quarter from the top of the window (scrolling down);
    if (overlay2.top < window.innerHeight / 2 && overlay2.top > 0 || image2.bottom > window.innerHeight / 2 && image2.bottom < window.innerHeight)
        securitySectionImageOverlay2.classList.add("roll-up");
    //Remove animation class if image is no longer in the viewport.
    if (image2.bottom < 0 || image2.top > window.innerHeight)
        securitySectionImageOverlay2.classList.remove("roll-up");

    //Add animations classes if container is in the top half of the window (scrolling down) or the second quarter from the top of the window (scrolling down);
    if (animationContent.top < window.innerHeight / 4 * 3 && animationContent.top > 0) {
        securitySectionSpans[0].classList.add("scroll-in-left");
        securitySectionSpans[1].classList.add("scroll-in-bottom");
        securitySectionSpans[2].classList.add("fade-in");
        securitySectionSpans[3].classList.add("expand");
        securitySectionSpans[4].classList.add("scroll-in-right");
    }
    //Remove animation class if image is no longer in the viewport.
    if (animationContent.top > window.innerHeight || animationContent.bottom < 0) {
        securitySectionSpans[0].classList.remove("scroll-in-left");
        securitySectionSpans[1].classList.remove("scroll-in-bottom");
        securitySectionSpans[2].classList.remove("fade-in");
        securitySectionSpans[3].classList.remove("expand");
        securitySectionSpans[4].classList.remove("scroll-in-right");
    }
}