const LANDING_PAGE_WINDOW_HEIGHT = window.innerHeight;
const LANDING_PAGE_ANIMATION_DISTANCE = LANDING_PAGE_WINDOW_HEIGHT * .15;
const LANDING_PAGE_ANIMATION_DURATION = 700;
const LANDING_PAGE_TIMER_CONTAINER = document.querySelector(".countdown-timer .timer-container-spinner .timer-container");
const LANDING_PAGE_SECONDS = LANDING_PAGE_TIMER_CONTAINER.querySelector(".seconds .number");
const LANDING_PAGE_MINUTES = LANDING_PAGE_TIMER_CONTAINER.querySelector(".minutes .number");
const LANDING_PAGE_HOURS = LANDING_PAGE_TIMER_CONTAINER.querySelector(".hours .number");
const LANDING_PAGE_DAYS = LANDING_PAGE_TIMER_CONTAINER.querySelector(".days .number");


// Takes in a date string and counts down the time from now until then.
function getCountdownTime(end) {
    const now = new Date();
    const endDate = new Date(end);

    const difference = endDate.getTime() - now.getTime();

    if (difference < 0)
        return { d: 0, h: 0, m: 0, s: 0 }

    const dayDiff = Math.ceil(difference / (1000 * 3600 * 24));
    const hourDiff = Math.ceil(difference / (1000 * 3600) + 4) % 24;
    const minDiff = Math.ceil(difference / (1000 * 60) - 1) % 60;
    const secDiff = Math.ceil(difference / (1000) - 2) % 60;

    return {
        d: dayDiff,
        h: hourDiff,
        m: minDiff,
        s: secDiff
    }

}

function setUpCountdownTimer() {

    const diffObject = getCountdownTime('10/23/2022');
    const limitObject = { d: Infinity, h: 23, m: 59, s: 59 };

    LANDING_PAGE_SECONDS.innerHTML = diffObject.s;
    LANDING_PAGE_MINUTES.innerHTML = diffObject.m;
    LANDING_PAGE_HOURS.innerHTML = diffObject.h;
    LANDING_PAGE_DAYS.innerHTML = diffObject.d;

    const intvl = setInterval(() => {
        if (diffObject.d === limitObject.d && diffObject.h === limitObject.h && diffObject.m === limitObject.h & diffObject.s === limitObject.s) {
            clearInterval(intvl);
        } else {
 
            animateElement(LANDING_PAGE_SECONDS, --diffObject.s+1);
            if (diffObject.s < 0)
                diffObject.s = limitObject.s;
            if (diffObject.s === (limitObject.s - 1)) {
                animateElement(LANDING_PAGE_MINUTES, --diffObject.m+1);
                if (diffObject.m < 0)
                    diffObject.m = limitObject.m;
                if (diffObject.m === (limitObject.m - 1)) {
                    animateElement(LANDING_PAGE_HOURS, --diffObject.h+1);
                    if (diffObject.h < 0)
                        diffObject.h = limitObject.h;
                    if (diffObject.h === (limitObject.h - 1)) {
                        animateElement(LANDING_PAGE_DAYS, --diffObject.d+1);
                        if (diffObject.d < 0)
                            diffObject.d = limitObject.d;
                    }
                }
            }
        }

    }, 1000);

}
function animateElement(elem, time) {
    // elem.innerHTML = time;
    elem.classList.add('scroll-down');
    setTimeout(() => {
        elem.classList.remove('scroll-down');
        elem.innerHTML = time;
        elem.classList.add('scroll-up');
    }, LANDING_PAGE_ANIMATION_DURATION / 2)
    setTimeout(() => {
        elem.classList.remove('scroll-up');
    }, LANDING_PAGE_ANIMATION_DURATION);

}

setUpCountdownTimer(2, 2, 2, 1);