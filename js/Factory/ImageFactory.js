'use strict'
/* ================== */

export default class ImageFactory {
  // elements creation  img : SRC / ROLE / ALT / CLASSNAME
  createHTML (element) {
    const eltImage = document.createElement('img')
    eltImage.setAttribute('src', element.image)
    eltImage.setAttribute('alt', element.alt)
    eltImage.setAttribute('role', 'button')
    eltImage.className = 'ph-media'

    return eltImage
  }
}
