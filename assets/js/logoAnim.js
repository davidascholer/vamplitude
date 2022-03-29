/*
Gets scrollPos from mainScript.js.
Uses range 0 - 500 for calculations. 
Animated scrollPos range 0 - 1000.
*/

const logoTitle = document.querySelector('.logo-title');
const logoImage = document.querySelector('.logo-image-container');
const logoMenu = document.querySelector('.logo-loading-container');
const smokeVideo = document.querySelector('#smoke-video');
//Load the video.
(function () {
  smokeVideo.load();
})();

//Play the video and init the title animation
smokeVideo.addEventListener('loadeddata', function () {
  // Video is loaded and can be played
  const nodes = logoTitle.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'span') {
      nodes[i].classList.add('anim-title');
    }
  }
  smokeVideo.play();

}, false);

const initLogoAnim = (scrollPos) => {

  /*Title*/

  // Left pos 50% to 0
  // 1000/50 = 20, so...
  // move left 1% every 20px
  const newLeftPos = 50 - scrollPos / 20;
  logoTitle.style.left = newLeftPos + '%';
  logoTitle.style.transform = `translateX(-${newLeftPos}%)`;
  // Top pos 10% to 0
  // 1000/10 = 100, so...
  //move left 1% every 100px
  const newTopTitle = 10 - scrollPos / 100;
  logoTitle.style.top = newTopTitle + '%';
  // Font size 8vw to 3vw
  // 1000/5 = 200, so...
  //move down 1vw side every 200px
  const newFontSize = 8 - scrollPos / 200;
  logoTitle.style.fontSize = newFontSize + 'vw';

  /*Image*/
  /*
    // Width 50% to 25%
    // 600/25 = 24, so...
    // shrink 1% every 24px
    const newWidthImage = 50 - scrollPos / 24;
    logoImage.style.width = newWidthImage + '%';
    // Go off screen after a delay (to -20vh)
    // Starts at 40vh
    // Moves from 300px to 600px
    if (scrollPos > 300) {
      const newTopImage = 40 - (scrollPos - 300) * 2 / 10;
      logoImage.style.top = newTopImage + 'vh';
    } else
      logoImage.style.top = '40vh';
  */

  /*Menu*/

  // Go to 0vh
  // Starts at 60vh
  // Moves from 300px to 1000px
  // 700/60 = 11.6, so...
  // move up 1vh every 11.6px
  if (scrollPos > 300) {
    const newTopMenu = 60 - (scrollPos - 300) / 11.6;
    logoMenu.style.top = newTopMenu + 'vh';
  } else
    logoMenu.style.top = '60vh';
  // Width 300px to 150px
  // 300/150 = 2, so...
  // shrink 1% every 2px
  if (scrollPos > 700) {
    const newWidthMenu = 300 - (scrollPos - 700) / 2;
    logoMenu.style.width = newWidthMenu + 'px';
  } else
    logoMenu.style.width = '300px';
}
