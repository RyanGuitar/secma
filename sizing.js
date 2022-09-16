import {
  getId,
  getRec,
  resetAppSize,
  idWH
} from "./helper.js";

function setAppSize(w, h) {
  getId("main").style.height = `${window.innerHeight}px`;
  getId("main").style.width = `${window.innerWidth}px`;
  resetAppSize("app");

  let {
    width,
    height
  } = getRec("app");

  if (height > window.innerHeight) {
    height = window.innerHeight;
    width = (height / h) * w;
  }
  if (width > window.innerWidth) {
    width = window.innerWidth;
    height = (width * h) / w;
  }

  idWH("app", `${width}px`, `${height}px`);
}

export {
  setAppSize
}