const earth3D = document.querySelector('.webgl');
const earthContainer = document.querySelector('.earth-container');
const stars = document.querySelectorAll('.star');
let earthInitialStyles = true;
let prevPos = 0;

for (let star of stars)
    star.style.animationDelay = Math.random() * 5 + 's';

const initSpaceTheme = (pos, height) => {

    //Init star effect
    if (pos < height - 3000) {
        showStars();
    } else if (pos < height - 2000) {
        fadeStars(pos - (height - 3000));
    } else {
        animateEarthDown(pos, (pos - (height - 2000)));
        hideStars();
        return;//don't changeEarthSize
    }

    changeEarthSize(pos, height);
    if (pos < prevPos)
        resetEarthStyles(pos);

}

//change earth size
//10000/50 = 200 so every 200 pixels we'll increase the percentage
const changeEarthSize = (pos, height) => {
    //width from 0% to 50%
    //10000/100 = 100 so every 100 pixels we'll increase the percentage
    const maxWidthPercentage = height / 100 * 2
    const newWidth = pos / maxWidthPercentage;
    earthContainer.style.width = `${newWidth}vw`;
    earthContainer.style.height = `${newWidth}vw`;
    earthContainer.style.top = '60vh';
    console.log('earthContainer top:'+earthContainer.style.top)

}

// Scrolling down. Begin drop down animation.
const animateEarthDown = (pos, relativePos) => {

    const realPos = pos - height;
    earthInitialStyles = false;
    prevPos = pos;
    earthContainer.style.position = 'fixed';
    // earthContainer.style.top = '60vh';
    console.log('animearthdown'+earthContainer.style.top)

    // Going from 60vh to 110vh for 1000px
    // 1000px/50(difference vh) = 20(px)(vh)
    // 1vh = 20px
    const newEarthTop = 60 + relativePos / 20;
    earthContainer.style.top = newEarthTop + 'vh';
}

// Scrolling up. Set earth to init styles.
const resetEarthStyles = () => {

    prevPos = 0;
    earthInitialStyles = true;
    earthContainer.style.position = 'sticky';
    earthContainer.style.top = '60vh';
}

// Fade stars w respect to scroll position
const fadeStars = (relativePos) => {

    const newOpacity = 1 - (relativePos / 10 * .01);
    for (let star of stars) {
        star.style.opacity = newOpacity;
    }
}

// Ensure stars are fully opaque
const hideStars = () => {

    for (let star of stars) {
        star.style.opacity = 0;
    }
}

// Ensure shows are fully visible
const showStars = () => {

    for (let star of stars) {
        star.style.opacity = 1;
    }
}