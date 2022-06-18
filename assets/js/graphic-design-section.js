// elements
const GRAPHIC_DESIGN_SECTION = document.getElementById("graphic-design-section");
const GRAPHIC_DESIGN_PROGRESS = document.querySelector("#graphic-design-section .progress-wrapper");
const GRAPHIC_DESIGN_PROGRESS_TEXT = document.querySelector("#graphic-design-section .progressbar-text");
const GRAPHIC_DESIGN_FILL = document.querySelectorAll("#graphic-design-section .side-fill");
const GRAPHIC_DESIGN_ANIMATION_HEIGHT = GRAPHIC_DESIGN_SECTION.getBoundingClientRect().height - window.innerHeight;
const GRAPHIC_DESIGN_ROWS = document.querySelectorAll("#graphic-design-section .gd-row");
const GRAPHIC_DESIGN_BACKGROUND = document.querySelector("#graphic-design-section .gd-background");
const GRAPHIC_DESIGN_KNIFE = document.querySelector("#graphic-design-section .swiss-army-knife-outer-container");
const GRAPHIC_DESIGN_RES_CONTAINER = document.querySelector("#graphic-design-section .good-resolution");
const GRAPHIC_DESIGN_BOTTOM_CONTAINER = document.querySelector("#graphic-design-section .bottom-container");
const GRAPHIC_DESIGN_SCROLL_WIDTH = window.innerWidth * .1;
const GRAPHIC_DESIGN_SCROLL_MARGIN = window.innerWidth * .015;
const GRAPHIC_DESIGN_SCROLL_DISTANCE = GRAPHIC_DESIGN_SCROLL_WIDTH + GRAPHIC_DESIGN_SCROLL_MARGIN * 2;
const GRAPHIC_DESIGN_ARROW_WIDTH = GRAPHIC_DESIGN_SCROLL_WIDTH / 2 + GRAPHIC_DESIGN_SCROLL_MARGIN;
const GRAPHIC_DESIGN_FULLSCREEN_CONTAINER = document.querySelector("#graphic-design-section .fullscreen-container");
const GRAPHIC_DESIGN_FULLSCREEN_IMG = document.querySelector("#graphic-design-section .fullscreen-container img");
const GRAPHIC_DESIGN_IMAGE_ROW_CONTAINERS = document.querySelectorAll("#graphic-design-section .gd-row-container");
const GRAPHIC_DESIGN_FULLSCREEN_PARAMS = { top: null, right: null, bottom: null, left: null };
// vars
const GRAPHIC_DESIGN_CIRCLE_COUNT = 200;
const GRAPHIC_DESIGN_SLIDE_ANIM_DURATION = 250;
// paths
const GRAPHIC_DESIGN_IMAGE_PATHS = {
    imageFolderPath: "./assets/img/art_portfolio/",
    extensions: ".svg",
    animals: {
        path: "animals/",
        files: [
            "animal_1",
            "animal_2",
            "animal_3",
            "animal_4",
            "animal_5",
            "elephants",
            "fox",
            "puppy",
            "skunk_filled",
        ]
    },
    emojis: {
        path: "emojis/",
        files: [
            "cry",
            "happy",
            "love",
            "mad",
            "ouch",
            "pissed",
            "sad",
            "sleepy",
            "stress"
        ]
    },
    food: {
        path: "food/",
        files: [
            "decco_8",
            "food_2",
            "food_3",
            "food_4",
            "food_5",
            "food_6",
            "food",
            "pumpkin-pie",
        ]
    },
    icons: {
        path: "icons/",
        files: [
            "4k",
            "5g",
            "account_box",
            "add_circle_outline",
            "android",
            "check_circle_outline",
            "notes",
            "pause_circle_outline",
            "play_circle_outline",
            "remove_circle_outline",
        ]
    },
    logos: {
        path: "logos/",
        files: [
            "app_icon",
            "chepledotcomlogo",
            "dealdekko_youtube_watermark",
            "epsilon",
            "vampvidtext",
        ]
    },
    nature: {
        path: "nature/",
        files: [
            "decco_17",
            "leaf",
            "snowflake_1",
            "snowflake_2",
            "snowflake_3",
            "snowflake_4",
            "snowflake_5",
            "snowflake_6",
        ]
    },
    plants: {
        path: "plants/",
        files: [
            "dead_cactus_1",
            "dead_cactus_2",
            "succ_1",
            "succ_2",
            "succ_3",
            "succ_4",
            "succ_5",
            "succ_6",
            "succ_7",
            "succ_8",
        ]
    },
    space: {
        path: "space/",
        files: [
            "alien",
            "astroid",
            "astronaut",
            "earth",
            "moon",
            "planet",
            "raygun",
            "rocket",
            "telescope",
            "ufo_tattoo",
            "ufo",
        ]
    },
    transportation: {
        path: "transportation/",
        files: [
            "pirateship",
            "redtruck",
            "van",
        ]
    },
    other: {
        path: "other/",
        files: [
            "decco_61",
        ]
    }
}
// dynamic vars
let portfolioPopulated = false;
let graphicDesignBackgroundInjected = false;
let slideAnimationRunning = false;

function initGraphicDesignFunction(pos) {
    console.log("graphic design: " + pos);

    // Position dependant vars
    const bottomContainerRect = GRAPHIC_DESIGN_BOTTOM_CONTAINER.getBoundingClientRect();
    const bottomContainerPos = window.innerHeight - bottomContainerRect.top;
    const animPercentage = bottomContainerPos / bottomContainerRect.height;

    // Inject the background html.
    if (!graphicDesignBackgroundInjected)
        injectBackgroundCircles();
    // Enable the background particles to float up.
    enableBackground(animPercentage);
    // Animate the knife when it reaches half of the window heigth.
    animKnifeCheck();
    // Enable the scroll percentage bar.
    graphicDesignScrollPercentageBar(animPercentage);
    // Animate the image rows so that they don't cover the scroll percentage bar.
    graphicDesignAnimateImageRows();
    // Animate the resolution image.
    animateResolutionImage();
    // Dynamically populate the portfolio
    if (!portfolioPopulated)
        populateGraphicDesignPortfolio();
    // Hide the overlay if still visible when scrolling.
    closeFullscreenContainer();

}

const openKnife = () => {
    for (let knife = 1; knife <= 8; knife++) {
        GRAPHIC_DESIGN_KNIFE_IMAGES[knife].remove(`swiss-${knife}-anim-backwards`);
        GRAPHIC_DESIGN_KNIFE_IMAGES[knife].add(`swiss-${knife}-anim-forwards`);
    }
}

const animateKnife = direction => {

    const swiss1 = document.querySelector('.swiss-1');
    const swiss2 = document.querySelector('.swiss-2');
    const swiss3 = document.querySelector('.swiss-3');
    const swiss4 = document.querySelector('.swiss-4');
    const swiss5 = document.querySelector('.swiss-5');
    const swiss6 = document.querySelector('.swiss-6');
    const swiss7 = document.querySelector('.swiss-7');
    const swiss8 = document.querySelector('.swiss-8');

    if (direction === "close") {

        swiss1.classList.remove('swiss-1-anim-forwards')
        swiss1.classList.add('swiss-1-anim-backwards')

        swiss2.classList.remove('swiss-2-anim-forwards')
        swiss2.classList.add('swiss-2-anim-backwards')

        swiss3.classList.remove('swiss-3-anim-forwards')
        swiss3.classList.add('swiss-3-anim-backwards')

        swiss4.classList.remove('swiss-4-anim-forwards')
        swiss4.classList.add('swiss-4-anim-backwards')

        swiss5.classList.remove('swiss-5-anim-forwards')
        swiss5.classList.add('swiss-5-anim-backwards')

        swiss6.classList.remove('swiss-6-anim-forwards')
        swiss6.classList.add('swiss-6-anim-backwards')

        swiss7.classList.remove('swiss-7-anim-forwards')
        swiss7.classList.add('swiss-7-anim-backwards')

        swiss8.classList.remove('swiss-8-anim-forwards')
        swiss8.classList.add('swiss-8-anim-backwards')

    } else {

        swiss1.classList.remove('swiss-1-anim-backwards')
        swiss1.classList.add('swiss-1-anim-forwards')

        swiss2.classList.remove('swiss-2-anim-backwards')
        swiss2.classList.add('swiss-2-anim-forwards')

        swiss3.classList.remove('swiss-3-anim-backwards')
        swiss3.classList.add('swiss-3-anim-forwards')

        swiss4.classList.remove('swiss-4-anim-backwards')
        swiss4.classList.add('swiss-4-anim-forwards')

        swiss5.classList.remove('swiss-5-anim-backwards')
        swiss5.classList.add('swiss-5-anim-forwards')

        swiss6.classList.remove('swiss-6-anim-backwards')
        swiss6.classList.add('swiss-6-anim-forwards')

        swiss7.classList.remove('swiss-7-anim-backwards')
        swiss7.classList.add('swiss-7-anim-forwards')

        swiss8.classList.remove('swiss-8-anim-backwards')
        swiss8.classList.add('swiss-8-anim-forwards')

    }
}

const enableBackground = percentage => {
    if (percentage < 0 || percentage > 1) {
        GRAPHIC_DESIGN_BACKGROUND.style.display = "none";
    } else {
        GRAPHIC_DESIGN_BACKGROUND.style.display = "block";
    }
}

const injectBackgroundCircles = () => {
    let circles = "";
    for (let circle = 0; circle < GRAPHIC_DESIGN_CIRCLE_COUNT; circle++) {
        circles += '<div class="circle-container"><div class="circle"></div></div>';
    }
    graphicDesignBackgroundInjected = true;
    GRAPHIC_DESIGN_BACKGROUND.innerHTML = circles;
}

const animKnifeCheck = () => {
    const knifeTop = GRAPHIC_DESIGN_KNIFE.getBoundingClientRect().top;
    if (knifeTop < window.innerHeight / 2) {
        animateKnife("close")
    } else {
        animateKnife("open")
    }
}

const graphicDesignAnimateImageRows = () => {
    const progressTop = window.innerHeight - window.innerWidth * .18;
    for (let row = 0; row < GRAPHIC_DESIGN_ROWS.length - 1; row++) {
        const rowBottom = GRAPHIC_DESIGN_ROWS[row].getBoundingClientRect().bottom;
        if (rowBottom > progressTop) {
            GRAPHIC_DESIGN_ROWS[row].classList.remove("gd-grow");
            GRAPHIC_DESIGN_ROWS[row].classList.add("gd-shrink");
        } else {
            GRAPHIC_DESIGN_ROWS[row].classList.remove("gd-shrink");
            GRAPHIC_DESIGN_ROWS[row].classList.add("gd-grow");
        }
    }
}

const graphicDesignScrollPercentageBar = percentage => {
    if (percentage > 1) {
        GRAPHIC_DESIGN_PROGRESS_TEXT.innerHTML = '100%';
    } else if (percentage >= 0) {
        // Fill from 0 to 100
        GRAPHIC_DESIGN_FILL[0].style.width = (percentage * 100) + '%';
        GRAPHIC_DESIGN_FILL[1].style.width = (percentage * 100) + '%';
        GRAPHIC_DESIGN_FILL[2].style.width = (percentage * 100) + '%';
        GRAPHIC_DESIGN_FILL[3].style.width = (percentage * 100) + '%';
        // Animate from left: 10% to left:100%
        GRAPHIC_DESIGN_PROGRESS_TEXT.style.left = (10 + 90 * percentage) + '%';
        GRAPHIC_DESIGN_PROGRESS_TEXT.innerHTML = parseInt(percentage * 100) + '%';
    } else {
        GRAPHIC_DESIGN_PROGRESS_TEXT.innerHTML = '0%';
    }
}

const animateResolutionImage = () => {
    const resRect = GRAPHIC_DESIGN_RES_CONTAINER.getBoundingClientRect();
    const resAnimRatio = (resRect.bottom - resRect.height) / (window.innerHeight - resRect.height);
    const resAnimDiff = 60 * resAnimRatio;
    const percentageFrom = resAnimDiff;
    const percentageTo = 30 + resAnimDiff;
    // Animate the clip path from polygon(0% 0, 100% 0%, 100% 100%, 30% 100%) to polygon(60% 0, 100% 0%, 100% 100%, 90% 100%)
    if (resAnimRatio < 0) {
        GRAPHIC_DESIGN_RES_CONTAINER.style.clipPath = `polygon(0% 0, 100% 0%, 100% 100%, 30% 100%)`;
    } else if (resAnimRatio > 0 && resAnimRatio < 1) {
        GRAPHIC_DESIGN_RES_CONTAINER.style.clipPath = `polygon(${percentageFrom}% 0, 100% 0%, 100% 100%, ${percentageTo}% 100%)`;
    } else {
        GRAPHIC_DESIGN_RES_CONTAINER.style.clipPath = `polygon(60% 0, 100% 0%, 100% 100%, 90% 100%)`;
    }
}

const handleGraphicDesignImageClicked = event => {

    const path = event.target.src;
    GRAPHIC_DESIGN_FULLSCREEN_IMG.src = path;
    GRAPHIC_DESIGN_FULLSCREEN_PARAMS.bottom = window.innerHeight - event.clientY;
    GRAPHIC_DESIGN_FULLSCREEN_PARAMS.left = event.clientX;
    GRAPHIC_DESIGN_FULLSCREEN_PARAMS.right = window.innerWidth - event.clientX;
    GRAPHIC_DESIGN_FULLSCREEN_PARAMS.top = event.clientY;
    GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.style.bottom = GRAPHIC_DESIGN_FULLSCREEN_PARAMS.bottom;
    GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.style.left = GRAPHIC_DESIGN_FULLSCREEN_PARAMS.left;
    GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.style.right = GRAPHIC_DESIGN_FULLSCREEN_PARAMS.right;
    GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.style.top = GRAPHIC_DESIGN_FULLSCREEN_PARAMS.top;
    GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.style.visibility = "visible";

    openOverlayAnimation(GRAPHIC_DESIGN_FULLSCREEN_PARAMS);

    function openOverlayAnimation(startPos) {

        GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.animate([
            { top: startPos.top + 'px', right: startPos.right + 'px', bottom: startPos.bottom + 'px', left: startPos.left + 'px' },
            { top: '0px', right: '0px', bottom: '0px', left: '0px' }
        ],
            {
                duration: 250,
                iterations: 1,
                easing: "linear",
                fill: 'forwards',
            }
        );
    }
}

const closeFullscreenContainer = () => {

    const animDuration = 250;
    closeOverlayAnimation();
    setTimeout(() => {
        GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.style.visibility = "hidden";
    }, animDuration);

    function closeOverlayAnimation() {

        GRAPHIC_DESIGN_FULLSCREEN_CONTAINER.animate([
            { top: '0px', right: '0px', bottom: '0px', left: '0px' },
            {
                top: GRAPHIC_DESIGN_FULLSCREEN_PARAMS.top + 'px',
                right: GRAPHIC_DESIGN_FULLSCREEN_PARAMS.right + 'px',
                bottom: GRAPHIC_DESIGN_FULLSCREEN_PARAMS.bottom + 'px',
                left: GRAPHIC_DESIGN_FULLSCREEN_PARAMS.left + 'px'
            }
        ],
            {
                duration: animDuration,
                iterations: 1,
                easing: "linear",
                fill: 'forwards',
            }
        );
    }

}

const populateGraphicDesignPortfolio = () => {

    portfolioPopulated = true;
    const prefix = GRAPHIC_DESIGN_IMAGE_PATHS.imageFolderPath;
    const extension = GRAPHIC_DESIGN_IMAGE_PATHS.extensions;

    GRAPHIC_DESIGN_IMAGE_ROW_CONTAINERS.forEach(row => {

        let files, fileName;

        const container = row.querySelector(".image-container");

        // Populate the images inside of the container.

        if (row.classList.contains("animals")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.animals.files;
            fileName = 'animals';
        } else if (row.classList.contains("emojis")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.emojis.files;
            fileName = 'emojis';
        } else if (row.classList.contains("food")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.food.files;
            fileName = 'food';
        } else if (row.classList.contains("icons")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.icons.files;
            fileName = 'icons';
        } else if (row.classList.contains("logos")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.logos.files;
            fileName = 'logos';
        } else if (row.classList.contains("nature")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.nature.files;
            fileName = 'nature';
        } else if (row.classList.contains("plants")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.plants.files;
            fileName = 'plants';
        } else if (row.classList.contains("space")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.space.files;
            fileName = 'space';
        } else if (row.classList.contains("transportation")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.transportation.files;
            fileName = 'transportation';
        } else if (row.classList.contains("other")) {
            files = GRAPHIC_DESIGN_IMAGE_PATHS.other.files;
            fileName = 'other';
        };

        let appendString = "";
        for (let file of files) {
            const path = prefix + GRAPHIC_DESIGN_IMAGE_PATHS[fileName].path + file + extension;
            appendString += `<img onclick="handleGraphicDesignImageClicked(event)" src="${path}" alt="${fileName} vector image"/>`;
        };
        container.innerHTML = appendString;


        // Set up each container's left and right arrow keys.

        const leftArrow = row.querySelector(".left-arrow-container");
        const rightArrow = row.querySelector(".right-arrow-container");
        const childCount = container.childElementCount;

        leftArrow.addEventListener("click", event => {
            if (!slideAnimationRunning) {

                const marginLeft = parseFloat(getComputedStyle(container).marginLeft);
                const newMarginLeft = marginLeft + GRAPHIC_DESIGN_SCROLL_DISTANCE;
                const marginRightBounds = childCount * GRAPHIC_DESIGN_SCROLL_DISTANCE - 6 * GRAPHIC_DESIGN_SCROLL_DISTANCE - GRAPHIC_DESIGN_ARROW_WIDTH;

                // container.style.marginLeft = newMarginLeft + 'px';
                slideAnimation(container, marginLeft, newMarginLeft);

                checkLeftArrow(marginRightBounds, newMarginLeft, leftArrow, rightArrow);
            }
        });

        rightArrow.addEventListener("click", event => {

            if (!slideAnimationRunning) {
                const marginLeft = parseFloat(getComputedStyle(container).marginLeft);
                const newMarginLeft = marginLeft - GRAPHIC_DESIGN_SCROLL_DISTANCE;
                const marginRightBounds = container.childElementCount * GRAPHIC_DESIGN_SCROLL_DISTANCE - 6 * GRAPHIC_DESIGN_SCROLL_DISTANCE - GRAPHIC_DESIGN_ARROW_WIDTH;

                // container.style.marginLeft = newMarginLeft + 'px';
                slideAnimation(container, marginLeft, newMarginLeft);

                checkRightArrow(marginRightBounds, newMarginLeft, rightArrow, leftArrow);
            }
        });

        // Hide the right arrow key if it doesn't need to scroll.
        if (childCount <= 6)
            hideArrow(rightArrow);

    });

    function checkLeftArrow(rightBounds, marginLeft, mainArrow, siblingArrow) {

        if (marginLeft >= GRAPHIC_DESIGN_ARROW_WIDTH) {
            hideArrow(mainArrow);
        } else {
            showArrow(mainArrow);
        }

        if (Math.floor(rightBounds * -1) < Math.floor(marginLeft)) {
            showArrow(siblingArrow);
        }
    }

    function checkRightArrow(rightBounds, marginLeft, mainArrow, siblingArrow) {
        if (Math.floor(rightBounds * -1) >= Math.floor(marginLeft)) {
            hideArrow(mainArrow);
        } else {
            showArrow(mainArrow);
        }
        if (marginLeft < GRAPHIC_DESIGN_ARROW_WIDTH) {
            showArrow(siblingArrow);
        }
    }

    function showArrow(arrow) {
        arrow.style.opacity = 1;
        arrow.style.pointerEvents = "inherit";
    }

    function hideArrow(arrow) {
        arrow.style.opacity = .2;
        arrow.style.pointerEvents = "none";
    }

    function slideAnimation(element, oldMargin, newMargin) {

        slideAnimationRunning = true;

        element.animate([
            { marginLeft: oldMargin + 'px' },
            { marginLeft: newMargin + 'px' }
        ],
            {
                duration: GRAPHIC_DESIGN_SLIDE_ANIM_DURATION,
                iterations: 1,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        );

        setTimeout(() => {
            slideAnimationRunning = false;
        }, GRAPHIC_DESIGN_SLIDE_ANIM_DURATION);
    }

}

