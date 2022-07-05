const FULLSCREEN_CONTAINER = document.querySelector(".fullscreen-container");
const FULLSCREEN_IMG = document.querySelector(".fullscreen-container img");
const FULLSCREEN_PARAMS = { top: null, right: null, bottom: null, left: null };

const handleGraphicDesignImageClicked = event => {

    const path = event.target.src;

    FULLSCREEN_IMG.src = path;
    FULLSCREEN_PARAMS.bottom = window.innerHeight - event.clientY;
    FULLSCREEN_PARAMS.left = event.clientX;
    FULLSCREEN_PARAMS.right = window.innerWidth - event.clientX;
    FULLSCREEN_PARAMS.top = event.clientY;
    FULLSCREEN_CONTAINER.style.bottom = FULLSCREEN_PARAMS.bottom;
    FULLSCREEN_CONTAINER.style.left = FULLSCREEN_PARAMS.left;
    FULLSCREEN_CONTAINER.style.right = FULLSCREEN_PARAMS.right;
    FULLSCREEN_CONTAINER.style.top = FULLSCREEN_PARAMS.top;
    FULLSCREEN_CONTAINER.style.visibility = "visible";

    openOverlayAnimation(FULLSCREEN_PARAMS);

    function openOverlayAnimation(startPos) {
        const animDuration = 250;

        setTimeout(() => {
            FULLSCREEN_IMG.style.display = 'block';
        }, animDuration*1.25);

        FULLSCREEN_IMG.style.display = 'none';
        FULLSCREEN_CONTAINER.animate([
            { top: startPos.top + 'px', right: startPos.right + 'px', bottom: startPos.bottom + 'px', left: startPos.left + 'px' },
            { top: '0px', right: '0px', bottom: '0px', left: '0px' }
        ],
            {
                duration: animDuration,
                iterations: 1,
                easing: "linear",
                fill: 'forwards',
            }
        );
        FULLSCREEN_IMG.animate([
            { opacity: 0 },
            { opacity: 1 }
        ],
            {
                duration: animDuration,
                delay: animDuration*1.25,
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
        FULLSCREEN_CONTAINER.style.visibility = "hidden";
        FULLSCREEN_IMG.style.display = 'none';
    }, animDuration*1.25);

    function closeOverlayAnimation() {

        FULLSCREEN_IMG.animate([
            { opacity: 1 },
            { opacity: 0 }
        ],
            {
                duration: animDuration,
                iterations: 1,
                easing: "linear",
                fill: 'forwards',
            }
        );

        FULLSCREEN_CONTAINER.animate([
            { top: '0px', right: '0px', bottom: '0px', left: '0px' },
            {
                top: FULLSCREEN_PARAMS.top + 'px',
                right: FULLSCREEN_PARAMS.right + 'px',
                bottom: FULLSCREEN_PARAMS.bottom + 'px',
                left: FULLSCREEN_PARAMS.left + 'px'
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
