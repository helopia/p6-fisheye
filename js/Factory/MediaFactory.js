'use strict'
/* ============== */
import ImageFactory from './ImageFactory.js'
import VideoFactory from './VideoFactory.js'

export default class MediaFactory {
  // verify if an img or a video is select with hasOwnProperty
  renderMedia (element) {
    let factory = null
    // eslint-disable-next-line no-prototype-builtins
    if (element.hasOwnProperty('image')) {
      factory = new ImageFactory()
      // eslint-disable-next-line no-prototype-builtins
    } else if (element.hasOwnProperty('video')) {
      factory = new VideoFactory()
    }
    return factory.createHTML(element)
  }
}
