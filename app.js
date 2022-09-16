import {
  addClick,
  getId,
  checkOrientation,
  addToId
} from './helper.js'
import {
  toggleFullscreen
} from './fullscreen.js'
import {
  pointer
} from './pointer.js'

function debounce(fn, time) {
  let timer;
  return (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, time, e);
    window.requestAnimationFrame(debounce)
  };
}

function resize(e) {
  e.preventDefault()
  e.stopPropagation()
  checkOrientation()
}

window.addEventListener("resize", debounce(resize, 100), false);

window.onload = () => {
  document.body.oncontextmenu = () => false;
  checkOrientation()
  addClick('logo_box', toggleFullscreen)
  globalThis.bottomHTML = getId('bottom').innerHTML
  addToId('bottom', '')
  pointer()
}