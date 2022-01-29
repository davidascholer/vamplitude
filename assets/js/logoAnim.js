/*
Gets scrollPos from mainScript.js.
Uses range 0 - 500 for calculations. 
Animated scrollPos range 0 - 600.
*/

const logoTitle = document.querySelector('.logo-title');
const logoImage = document.querySelector('.logo-image-container');
const logoMenu = document.querySelector('.logo-loading-container');

const initLogoAnim = (scrollPos) => {

  /*Title*/

  // Left pos 50% to 0
  // 600/50 = 12, so...
  // move left 1% every 12px
  const newLeftPos = 50 - scrollPos / 12;
  logoTitle.style.left = newLeftPos + '%';
  logoTitle.style.transform = `translateX(-${newLeftPos}%)`;
  // Top pos 10% to 0
  // 600/10 = 60, so...
  //move left 1% every 60px
  const newTopTitle = 10 - scrollPos / 60;
  logoTitle.style.top = newTopTitle + '%';
  // Font size 8vw to 3vw
  // 600/5 = 125, so...
  //move down 1vw side every 125px
  const newFontSize = 8 - scrollPos / 125;
  logoTitle.style.fontSize = newFontSize + 'vw';

  /*Image*/

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


  /*Menu*/

  // Go to 0vh
  // Starts at 70vh
  // Moves from 300px to 600px
  // 300/70 = ~4.3, so...
  // move up 1vh every 4.3px
  if (scrollPos > 300) {
    const newTopMenu = 70 - (scrollPos - 300) / 4.3;
    logoMenu.style.top = newTopMenu + 'vh';
  } else
    logoMenu.style.top = '70vh';
  // Width 50vw to 20vw
  // 300/30 = 10, so...
  // shrink 1% every 10px
  if (scrollPos > 300) {
    const newWidthMenu = 50 - (scrollPos - 300) / 10;
    logoMenu.style.width = newWidthMenu + 'vw';
  } else
    logoMenu.style.width = '50vw';


}
