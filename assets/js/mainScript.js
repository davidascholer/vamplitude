//immutable vars
const HEIGHT_LOGO = 1000;
const HEIGHT_SPACE_SCENE = 13000;
const HEIGHT_SKY_SCENE = 20000;
const HEIGHT_SUNSET_SCENE = 6000;
const HEIGHT_END_SCENE = 3000;
const START_LOGO_SCENE = 0;//start
const START_SPACE_SCENE = START_LOGO_SCENE + HEIGHT_LOGO;//1000
const START_SKY_SCENE = START_SPACE_SCENE + HEIGHT_SPACE_SCENE;//14000
const START_SUNSET_SCENE = START_SKY_SCENE + HEIGHT_SKY_SCENE;//34000
const START_END_SCENE = START_SUNSET_SCENE + HEIGHT_SUNSET_SCENE;//40000

//mutable vars
let lastKnownScrollPosition = 0;
let ticking = false;
let height = window.innerHeight;
let scrollPos = 0;
//elements
const sunsetView = document.getElementById('sunset-container');
//animations
let logoAnimationActive = false;
let spaceAnimationActive = false;
let earthAnimationActive = false;

document.addEventListener('scroll', function (e) {
    scrollPos = window.scrollY;
    // console.log('scrollPos: ' + scrollPos);

    // Logo is at top of scroll position is anywhere past the logo scene.
    if (scrollPos > START_LOGO_SCENE + HEIGHT_LOGO) {
        initLogoAnim(START_LOGO_SCENE + HEIGHT_LOGO);
    }

    if (scrollPos <= START_LOGO_SCENE + HEIGHT_LOGO) {
        initLogoAnim(scrollPos + START_LOGO_SCENE);
        return;
    } else if (scrollPos <= (START_SPACE_SCENE + HEIGHT_SPACE_SCENE)) {
        initSpaceTheme(scrollPos - START_SPACE_SCENE, HEIGHT_SPACE_SCENE);
        console.log('space')
        return;
    } else if (scrollPos <= (START_SKY_SCENE + HEIGHT_SKY_SCENE)) {
        // initSky(scrollPos - START_SKY_SCENE);
        console.log('sky')
        return;
    } else if (scrollPos <= (START_SUNSET_SCENE + HEIGHT_SUNSET_SCENE)) {
        // console.log('pos: ' + scrollPos);
        initSunset(scrollPos - START_SUNSET_SCENE, START_SUNSET_SCENE);
        console.log('sunset')
        return;
    } else if (scrollPos <= (START_END_SCENE + HEIGHT_END_SCENE)) {
        initEndAnim(scrollPos - START_END_SCENE );
        return;
    } else {
        console.log('out of bounds')
    }

    // if (scrollPos >= (HEIGHT_LOGO + HEIGHT_SPACE_SCENE) && scrollPos < (HEIGHT_LOGO + HEIGHT_SPACE_SCENE + HEIGHT_SKY_SCENE))
    //     return initSpaceTheme(scrollPos - HEIGHT_LOGO);
    // if (scrollPos >= (HEIGHT_SKY_SCENE + HEIGHT_SPACE_SCENE) && scrollPos < (HEIGHT_SKY_SCENE + HEIGHT_SPACE_SCENE + HEIGHT_LOGO))
    //     return initSpaceTheme(scrollPos - HEIGHT_SPACE_SCENE);


    //1000px div here so now we're at 12600px

});

const stickWhileLoading = () => {
    function noScroll() {
        window.scrollTo(0, 0);
    }

    // add listener to disable scroll
    // window.addEventListener('scroll', noScroll);

    setTimeout(() => {
        // Remove listener to re-enable scroll
        window.removeEventListener('scroll', noScroll);
        document.querySelector('.logo-loading').classList.add('hide-element');
    }, 5000)

    setTimeout(() => {
        document.getElementById('video-container').style.visibility = 'hidden';
    }, 8000)
}

(function () {

    //Assign here to keep styles independant
    sunsetView.style.top = HEIGHT_LOGO + HEIGHT_SPACE_SCENE + HEIGHT_SKY_SCENE;

    stickWhileLoading();


})();