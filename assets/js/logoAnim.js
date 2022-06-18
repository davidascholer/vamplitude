/*
Gets scrollPos from mainScript.js.
Uses range 0 - 500 for calculations. 
Animated scrollPos range 0 - 1000.
*/

const logoTitle = document.querySelector('.logo-title');
const smokeVideo = document.querySelector('#smoke-video');
const letterV = document.querySelector('.letter-v');
const body = document.querySelector('body');
const filteredImages = document.querySelectorAll('.filtered-image');
const headerAnim = document.querySelector('.animate-to-bottom');

//Load the video.
(function () {


  smokeVideo.load();
  body.style.position = 'fixed';

  setTimeout(() => {

    body.style.position = 'initial';
    for (let image of filteredImages) {
      image.classList.add('fade-in');
    }
  }, 5000);

  setTimeout(() => {
    const vidContainer = document.getElementById('video-container');
    vidContainer.style.visibility = "hidden";

  }, 10000);
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

  //320px = 1; 4k screen = .1;
  const widthFactor = 320 / window.innerWidth;
  //shrink font size from 10vw
  const newFontSize = 10 - scrollPos * widthFactor / 15;
  logoTitle.style.fontSize = newFontSize + 'vw';
  //From 8px to 0 fromm 300px
  let tenToZero = (300 - scrollPos) / 50;
  letterV.style.top = tenToZero + 'px';

}

function animateToBottom() {
  var id = null;
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 50);

  function frame() {
    if (pos > document.body.scrollHeight) {
      clearInterval(id);
    } else {
      pos+=5;
      window.scrollTo({
        top: pos,
        behavior: 'smooth',
      });
    }
  }
}