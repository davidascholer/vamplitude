let lastKnownScrollPosition = 0;
let ticking = false;
let height = window.innerHeight;
let scrollPos = 0;
//animations
let logoAnimationActive = false;
let spaceAnimationActive = false;
let earthAnimationActive = false;

function doSomething(scrollPos) {
    // Do something with the scroll position
}

document.addEventListener('scroll', function (e) {
    scrollPos = window.scrollY;
    // console.log('scrollPos: ' + scrollPos);

    if (scrollPos < 600)
        return initLogoAnim(scrollPos);
    else
        initLogoAnim(600);

    if (scrollPos >= 600 && scrollPos < 11600)
        return initSpaceTheme(scrollPos - 600);

    if (scrollPos >= 11600 && scrollPos < 13000) {
        return initSpaceToEarthTransition(scrollPos - 11600);
    };

    //1000px div here so now we're at 14000px

});

(function () {

    function noScroll() {
        window.scrollTo(0, 0);
    }

    // add listener to disable scroll
    window.addEventListener('scroll', noScroll);

    setTimeout(() => {
        // Remove listener to re-enable scroll
        window.removeEventListener('scroll', noScroll);
        document.querySelector('.logo-loading').classList.add('hide-element');
    }, 5000)

    setTimeout(() => {
        document.getElementById('video-container').style.visibility = 'hidden';
    }, 8000)
})();