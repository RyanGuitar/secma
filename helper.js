import {
  setAppSize
} from './sizing.js'

function getId(id) {
  return document.getElementById(id)
}

function getRec(id) {
  return getId(id).getBoundingClientRect()
}

function addToId(id, txt) {
  getId(id).innerHTML = txt
}

function resetAppSize(id) {
  getId(id).style.width = `${window.innerWidth + 1}px`;
  getId(id).style.height = `${window.innerHeight + 1}px`;
}

function idWH(id, width, height) {
  getId(id).style.width = width;
  getId(id).style.height = height;
}

function addClass(id, fx) {
  getId(id).classList.add(fx);
}

function removeClass(id, fx) {
  getId(id).classList.remove(fx);
}

function addClick(id, fn) {
  getId(id).addEventListener('click', fn, false);
}

function checkOrientation() {
  if (screen.orientation.type.includes('portrait') || window.innerWidth < window.innerHeight) {
    setAppSize(1.1, 2)
  } else if (screen.orientation.type.includes('landscape') || window.innerWidth > window.innerHeight) {
    setAppSize(2, 1)
  }
}

export {
  getId,
  getRec,
  addToId,
  resetAppSize,
  idWH,
  addClass,
  removeClass,
  addClick,
  checkOrientation
}