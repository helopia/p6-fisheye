'use strict'

import GalleryFactory from '../Factory/GalleryFactory.js'
import LikeSubscriber from './Likes.js'

export default class MediaBuilder {
  photographersMedias (data) {
    const media = data.media
    const gallery = new GalleryFactory().builder(media)
    this.boxLikesAndPrice(gallery.totalLike, data.photographers)
    new LikeSubscriber()
    const video = document.querySelector('video')
      function removeControls(video){
        video.removeAttribute('controls')
      }
      window.onload = removeControls(video)
  }

  boxLikesAndPrice (totalLike, photographers) {
    const id = window.location.search.split('id=')[1]

    photographers.forEach(element => {
      if (id == element.id) {
        const box = document.getElementById('box')
        const boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `
        box.innerHTML = boxTemplate
      }
    })
  }
}
