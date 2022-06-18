const SUNSET_HEIGHT = 6000;
const SUN_POSITION = { x: window.innerWidth * .3, y: .1 };
let sunsetWidth = 0, sunsetHeight = 0;
let sunsetMouseIsDownDivision = false;

function initSunsetFunction(pos) {
    console.log("sunset: " + pos);

    initSunset(pos-window.innerHeight/2);
}

// document.addEventListener('mousedown', function (e) {
//     SUN_POSITION.x = e.clientX || e.pageX;
//     updateSunPosition();
// }, false);

const initSunset = (pos) => {

    const sunScaleIncrease = window.innerWidth / 200;
    const sunsetEquation = Math.sqrt(pos) * sunScaleIncrease + window.innerWidth * .2;
    SUN_POSITION.x = sunsetEquation;
    const sunAnimationHeight = SUNSET_HEIGHT * .8;
    const screenPercentage = pos / sunAnimationHeight;
    SUN_POSITION.y = screenPercentage * window.innerHeight;

    updateSunPosition();
};

function updateDimensions() {
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        sunsetWidth = window.innerWidth;
        sunsetHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {

        sunsetWidth = document.documentElement.clientWidth;
        sunsetHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {

        sunsetWidth = document.body.clientWidth;
        sunsetHeight = document.body.clientHeight;
    }

}

function updateSunPosition() {
    updateDimensions();

    document.querySelector("#sunset-section .sun").style.background = '-webkit-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';
    document.querySelector("#sunset-section .sun").style.background = '-moz-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';
    document.querySelector("#sunset-section .sun").style.background = '-ms-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';

    document.querySelector("#sunset-section .sunDay").style.background = '-webkit-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';
    document.querySelector("#sunset-section .sunDay").style.background = '-moz-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';
    document.querySelector("#sunset-section .sunDay").style.background = '-ms-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';

    document.querySelector("#sunset-section .sunSet").style.background = '-webkit-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';
    document.querySelector("#sunset-section .sunSet").style.background = '-moz-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';
    document.querySelector("#sunset-section .sunSet").style.background = '-ms-radial-gradient(' + SUN_POSITION.x + 'px ' + SUN_POSITION.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';

    document.querySelector("#sunset-section .waterReflectionContainer").style.perspectiveOrigin = (SUN_POSITION.x / sunsetWidth * 100).toString() + "% -15%";
    document.querySelector("#sunset-section .waterReflectionMiddle").style.left = (SUN_POSITION.x - sunsetWidth - (sunsetWidth * .03)).toString() + "px";

    var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;

    document.querySelector("#sunset-section .sun").style.width = (bodyWidth);
    document.querySelector("#sunset-section .sun").style.left = "0px";
    document.querySelector("#sunset-section .sunDay").style.width = (bodyWidth);
    document.querySelector("#sunset-section .sunDay").style.left = "0px";

    var water = document.querySelector("#sunset-section .water");
    var waterHeight = water.clientHeight;

    document.querySelector("#sunset-section .darknessOverlay").style.opacity = Math.min((SUN_POSITION.y - (sunsetHeight / 2)) / (sunsetHeight / 2), 1);
    document.querySelector("#sunset-section .darknessOverlaySky").style.opacity = Math.min((SUN_POSITION.y - (sunsetHeight * 7 / 10)) / (sunsetHeight - (sunsetHeight * 7 / 10)), 1);
    document.querySelector("#sunset-section .moon").style.opacity = Math.min((SUN_POSITION.y - (sunsetHeight * 9 / 10)) / (sunsetHeight - (sunsetHeight * 9 / 10)), 0.65);
    document.querySelector("#sunset-section .horizonNight").style.opacity = (SUN_POSITION.y - (sunsetHeight * 4 / 5)) / (sunsetHeight - (sunsetHeight * 4 / 5));

    document.querySelector("#sunset-section .waterDistance").style.opacity = (SUN_POSITION.y / sunsetHeight + 0.6);
    document.querySelector("#sunset-section .sunDay").style.opacity = (1 - SUN_POSITION.y / sunsetHeight);
    document.querySelector("#sunset-section .sky").style.opacity = Math.min((1 - SUN_POSITION.y / sunsetHeight), 0.99);

    document.querySelector("#sunset-section .sunSet").style.opacity = (SUN_POSITION.y / sunsetHeight - 0.2);



    if (SUN_POSITION.y > 0) {
        var clouds = document.getElementsByClassName("cloud");
        for (var i = 0; i < clouds.length; i++) {
            clouds[i].style.left = Math.min(sunsetWidth * (Math.pow(SUN_POSITION.y, 2) / Math.pow(sunsetHeight / 2, 2)) * -1, 0);
        }
        //}

        if (SUN_POSITION.y > sunsetHeight / 2) {
            document.querySelector("#sunset-section .sun").style.opacity = Math.min((sunsetHeight - SUN_POSITION.y) / (sunsetHeight / 2) + 0.2, 0.5);
            document.querySelector("#sunset-section .horizon").style.opacity = (sunsetHeight - SUN_POSITION.y) / (sunsetHeight / 2) + 0.2;

            document.querySelector("#sunset-section .waterReflectionMiddle").style.opacity = (sunsetHeight - SUN_POSITION.y) / (sunsetHeight / 2) - 0.1;
        } else {
            document.querySelector("#sunset-section .horizon").style.opacity = Math.min(SUN_POSITION.y / (sunsetHeight / 2), 0.99);

            document.querySelector("#sunset-section .sun").style.opacity = Math.min(SUN_POSITION.y / (sunsetHeight / 2), 0.5);
            document.querySelector("#sunset-section .waterReflectionMiddle").style.opacity = SUN_POSITION.y / (sunsetHeight / 2) - 0.1;
        }

    } else if (sunsetMouseIsDownDivision) {
        var sunElement = document.querySelector("#sunset-section .sun");
        var water = document.querySelector("#sunset-section .water");
        var division = document.querySelector("#sunset-section .division");
        sunElement.style.height = (SUN_POSITION.y).toString() + "px";
        document.querySelector("#sunset-section .sunDay").style.height = (SUN_POSITION.y).toString() + "px";
        division.style.top = (SUN_POSITION.y).toString() + "px";
        var waterHeight = sunsetHeight - SUN_POSITION.y;
        water.style.height = waterHeight.toString() + "px";

        document.querySelector("#sunset-section .sun").style.height = (SUN_POSITION.y).toString() + "px";
        document.querySelector("#sunset-section .sunDay").style.height = (SUN_POSITION.y).toString() + "px";
        document.querySelector("#sunset-section .horizon").style.height = (SUN_POSITION.y).toString() + "px";
        document.querySelector("#sunset-section .waterDistance").style.height = (sunsetHeight - SUN_POSITION.y).toString() + "px";
        document.querySelector("#sunset-section .oceanRippleContainer").style.height = (sunsetHeight - SUN_POSITION.y).toString() + "px";
        document.querySelector("#sunset-section .darknessOverlay").style.height = (sunsetHeight - SUN_POSITION.y).toString() + "px";
    }

}

