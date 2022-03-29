/*
Gets scrollPos from mainScript.js.
Uses range 0 to 2000 for calculations. 
*/

// const logoTitle = document.querySelector('.logo-title');
// const logoMenu = document.querySelector('.logo-loading-container');

const initEndAnim = (scrollPos) => {

    /*Title*/

    if (scrollPos < 2000) {
        // Left pos 50% to 0
        // 2000/50 = 40, so...
        // move right 1% every 40px
        const newLeftPos = scrollPos / 40;
        logoTitle.style.left = newLeftPos + '%';
        logoTitle.style.transform = `translateX(-${newLeftPos}%)`;
        // Top pos 10% to 0
        // 2000/10 = 200, so...
        //move left 1% every 200px
        const newTopTitle = scrollPos / 200;
        logoTitle.style.top = newTopTitle + '%';
        // Font size 3vw to 8vw
        // 2000/5 = 400, so...
        //move down 1vw side every 400px
        const newFontSize = 3 + scrollPos / 400;
        logoTitle.style.fontSize = newFontSize + 'vw';


        /*Menu*/

        // Go to 60vh
        // Starts at 0vh
        // Moves from 0 to 2000px
        // 2000/60 = 33.3, so...
        // move down 1vh every 33.3px
        const newTopMenu = scrollPos / 33.3;
        logoMenu.style.top = newTopMenu + 'vh';
        // Width 150px to 300px
        // 2000/150 = 133.3, so...
        // grow 1% every 13.3px
        const newWidthMenu = 150 + scrollPos / 13.3;
        logoMenu.style.width = newWidthMenu + 'px';
        console.log(newWidthMenu)

    } else {
        //defaults
        logoTitle.style.left = '50%';
        logoTitle.style.transform = `translateX(-50%)`;
        logoTitle.style.top = '10%';
        logoTitle.style.fontSize = '8vw';
        logoMenu.style.top = '60vh';
        logoMenu.style.width = '300px';
    }

}
