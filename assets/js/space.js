/*
initSpaceTheme will animate for 11000px.
initSpaceToEarthTransition for 1400px.
*/
const SPACE_THEME_SCROLL_LENGTH = 11000;
const SPACE_TO_EARTH_SCROLL_LENGTH = 1400;
const earth = document.querySelector('.earth');
const earthContainer = document.querySelector('.earth-container');
const stars = document.querySelectorAll('.star');
let earthReset = true;

for (let star of stars)
    star.style.animationDelay = Math.random() * 5 + 's';

const initSpaceTheme = pos => {

    if (!earthReset) {
        earthContainer.style.position = 'sticky';
        earthContainer.style.top = '80vh';
        // earthContainer.style.marginTop = 0;
        earthReset = true;
    }

    //Change star styles
    if (pos < SPACE_THEME_SCROLL_LENGTH - 2000) {
        for (let star of stars) {
            star.style.opacity = 1;
        }
    } else if (pos < SPACE_THEME_SCROLL_LENGTH - 1000) {
        const newOpacity = 1 - ((pos - 9000) / 10 * .01);
        for (let star of stars) {
            star.style.opacity = newOpacity;
        }
    } else {
        for (let star of stars) {
            star.style.opacity = 0;
        }
    }
    //go from blur 5 to blur zero and width 0% to 50%
    //these animations will be done from 0px-2000px
    //blur
    //10000/5 = 2000 so every 2000 pixels we'll drop a blur pixel
    const newBlur = 5 - pos / 2000;
    earth.style.filter = `blur(${newBlur}px)`;

    changeEarthSize(pos);

    if (earthContainer.getBoundingClientRect().top <= 0) {
        earthReset = false;
        earthContainer.style.position = 'fixed';
        earthContainer.style.top = 0;
    }
}

const initSpaceToEarthTransition = pos => {

    // Increase the earth's size at a faster rate
    changeEarthSize(pos*10,SPACE_THEME_SCROLL_LENGTH);

    if (earthReset) {
        earthReset = false;
        earthContainer.style.position = 'fixed';
        earthContainer.style.top = 0;
        // earthContainer.style.marginTop = '-300px';
    }

    // 9/10 of the scroll will animate the earth down
    const animateRatio = SPACE_TO_EARTH_SCROLL_LENGTH * .9;
    const onePercent = animateRatio / 100;
    const delayFactor = pos / onePercent;
    earthContainer.style.top = `${delayFactor}vh`;
    //Make sure earth is out of view
    if (pos > animateRatio)
        earthContainer.style.top = '125%';

}

const changeEarthSize = (pos, appendedPos = 0) => {
    //width
    //10000/50 = 200 so every 200 pixels we'll increase the percentage
    const newWidth = (pos+appendedPos) / 200;
    earth.style.width = `${newWidth}%`;

}