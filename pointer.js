import {
  getId,
  addToId,
} from './helper.js'

function pointer() {
  const app = getId("app")
  const bottom = getId("bottom")
  let startY = null;
  let open = false
  let bottomHTML = null

  function down(e) {
    if (e.target.id == "app") {
      startY = e.clientY;
      app.addEventListener('pointermove', move, false)
    }
    console.log(e.target.id)
  }

  function close(e) {
    e.preventDefault()
    e.stopPropagation()
    addToId('bottom', '')
    bottom.style.height = 0
  }

  function setClose(e) {
    e.preventDefault()
    e.stopPropagation()
    getId('x').addEventListener('pointerup', close, false)
  }

  function move(e) {
    e.preventDefault()
    e.stopPropagation()
    if (startY - 100 > e.clientY) {
      open = true
    }
    if (open) {
      bottomHTML = globalThis.bottomHTML
      bottom.style.height = '100%'
      bottom.style.transition = 'all 500ms ease-out'
      setTimeout(() => {
        addToId('bottom', bottomHTML)
        getId('x').addEventListener('pointerdown', setClose, false)
      }, 500)
      up(e)
    }
  }

  function up(e) {
    e.preventDefault()
    e.stopPropagation()
    open = false
    app.removeEventListener('pointermove', move, false)
  }

  app.addEventListener('pointerdown', down, false)
  app.addEventListener('pointerup', up, false)
}

export {
  pointer
}