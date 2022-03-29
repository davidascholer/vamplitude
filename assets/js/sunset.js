var sunPosition = { x: window.innerWidth / 2, y: .1 };
var myWidth = 0, myHeight = 0;
var mouseIsDownDivision = false;

const sunsetHeight = 6000;

const sunsetWrapper = document.getElementById('sunset-wrapper');
const sunsetContainer = document.getElementById('sunset-container');

document.addEventListener('mousedown', function (e) {
    sunPosition.x = e.clientX || e.pageX;
    updateSunPosition();
}, false);

const initSunset = (pos, offset) => {
    
    const containerOffset = sunsetWrapper.offsetTop;
    const sunAnimationHeight = sunsetHeight * .8;
    const topOfWindow = containerOffset - offset;
    
    if (pos > topOfWindow) {
        
        const viewInBoundsOffset = pos - topOfWindow;
        const screenPercentage = viewInBoundsOffset / sunAnimationHeight;
        sunPosition.y = screenPercentage * window.innerHeight;
    }
    
    updateSunPosition();
};

function updateDimensions() {
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {

        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {

        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

}

function updateSunPosition() {
    updateDimensions();

    document.getElementById("sun").style.background = '-webkit-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';
    document.getElementById("sun").style.background = '-moz-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';
    document.getElementById("sun").style.background = '-ms-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';

    document.getElementById("sunDay").style.background = '-webkit-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';
    document.getElementById("sunDay").style.background = '-moz-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';
    document.getElementById("sunDay").style.background = '-ms-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';

    document.getElementById("sunSet").style.background = '-webkit-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';
    document.getElementById("sunSet").style.background = '-moz-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';
    document.getElementById("sunSet").style.background = '-ms-radial-gradient(' + sunPosition.x + 'px ' + sunPosition.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';

    document.getElementById("waterReflectionContainer").style.perspectiveOrigin = (sunPosition.x / myWidth * 100).toString() + "% -15%";
    document.getElementById("waterReflectionMiddle").style.left = (sunPosition.x - myWidth - (myWidth * .03)).toString() + "px";

    var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;

    document.getElementById("sun").style.width = (bodyWidth);
    document.getElementById("sun").style.left = "0px";
    document.getElementById("sunDay").style.width = (bodyWidth);
    document.getElementById("sunDay").style.left = "0px";

    var water = document.getElementById("water");
    var waterHeight = water.clientHeight;

    document.getElementById("darknessOverlay").style.opacity = Math.min((sunPosition.y - (myHeight / 2)) / (myHeight / 2), 1);
    document.getElementById("darknessOverlaySky").style.opacity = Math.min((sunPosition.y - (myHeight * 7 / 10)) / (myHeight - (myHeight * 7 / 10)), 1);
    document.getElementById("moon").style.opacity = Math.min((sunPosition.y - (myHeight * 9 / 10)) / (myHeight - (myHeight * 9 / 10)), 0.65);
    document.getElementById("horizonNight").style.opacity = (sunPosition.y - (myHeight * 4 / 5)) / (myHeight - (myHeight * 4 / 5));

    document.getElementById("waterDistance").style.opacity = (sunPosition.y / myHeight + 0.6);
    document.getElementById("sunDay").style.opacity = (1 - sunPosition.y / myHeight);
    document.getElementById("sky").style.opacity = Math.min((1 - sunPosition.y / myHeight), 0.99);

    document.getElementById("sunSet").style.opacity = (sunPosition.y / myHeight - 0.2);



    if (sunPosition.y > 0) {
        var clouds = document.getElementsByClassName("cloud");
        for (var i = 0; i < clouds.length; i++) {
            clouds[i].style.left = Math.min(myWidth * (Math.pow(sunPosition.y, 2) / Math.pow(myHeight / 2, 2)) * -1, 0);
        }
        //}

        if (sunPosition.y > myHeight / 2) {
            document.getElementById("sun").style.opacity = Math.min((myHeight - sunPosition.y) / (myHeight / 2) + 0.2, 0.5);
            document.getElementById("horizon").style.opacity = (myHeight - sunPosition.y) / (myHeight / 2) + 0.2;

            document.getElementById("waterReflectionMiddle").style.opacity = (myHeight - sunPosition.y) / (myHeight / 2) - 0.1;
        } else {
            document.getElementById("horizon").style.opacity = Math.min(sunPosition.y / (myHeight / 2), 0.99);

            document.getElementById("sun").style.opacity = Math.min(sunPosition.y / (myHeight / 2), 0.5);
            document.getElementById("waterReflectionMiddle").style.opacity = sunPosition.y / (myHeight / 2) - 0.1;
        }

    } else if (mouseIsDownDivision) {
        var sunElement = document.getElementById("sun");
        var water = document.getElementById("water");
        var division = document.getElementById("division");
        sunElement.style.height = (sunPosition.y).toString() + "px";
        document.getElementById("sunDay").style.height = (sunPosition.y).toString() + "px";
        division.style.top = (sunPosition.y).toString() + "px";
        var waterHeight = myHeight - sunPosition.y;
        water.style.height = waterHeight.toString() + "px";

        document.getElementById("sun").style.height = (sunPosition.y).toString() + "px";
        document.getElementById("sunDay").style.height = (sunPosition.y).toString() + "px";
        document.getElementById("horizon").style.height = (sunPosition.y).toString() + "px";
        document.getElementById("waterDistance").style.height = (myHeight - sunPosition.y).toString() + "px";
        document.getElementById("oceanRippleContainer").style.height = (myHeight - sunPosition.y).toString() + "px";
        document.getElementById("darknessOverlay").style.height = (myHeight - sunPosition.y).toString() + "px";
    }

}