import {
  addClass,
  removeClass,
  getId
} from './helper.js'

function toggleFullscreen() {
  const elem = getId('app')
  if (!document.fullscreenElement) {
    elem.requestFullscreen({
      navigationUI: "show"
    }).then(() => {
      removeClass("logo_box", "logo_shadow")
    }).catch((err) => {
      return
    });
  } else {
    document.exitFullscreen();
    addClass('logo_box', 'logo_shadow')
  }
}

function changed() {
  if (document.fullscreenElement) {
    console.log("changed")
  }
}

document.addEventListener('fullscreenchange', changed)

export {
  toggleFullscreen
}