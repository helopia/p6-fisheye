'use strict'
/* ================ */

export default class VideoFactory {
  // element creation for videos : SRC / CONTROLS / BUTTON ROLE / CLASSNAME
  createHTML (element) {
    const eltVideo = document.createElement('video')
    eltVideo.setAttribute('src', element.video)
    eltVideo.setAttribute('controls', 'controls')
    eltVideo.setAttribute('role', 'button')
    eltVideo.className = 'ph-media'

    return eltVideo
  }
}
