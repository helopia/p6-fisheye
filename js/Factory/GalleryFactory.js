
import MediaFactory from './MediaFactory.js'
import Lightbox from '../photographers/LightBox.js'

export default class GalleryFactory {
  constructor () {
    this.totalLike = 0
  }
  // create galery contain images, videos, lightbox
  builder (dataMedia) {
    const id = window.location.search.split('id=')[1] // id position in json table
    const mediaFactory = new MediaFactory()
    const currentMedia = [] // initiate an empty table
    const currentMediaName = [] // initiate an empty table

    dataMedia.forEach(element => {
      if (id == element.photographerId) { // create a condition where id = id photographers in data.json
        const sectionPhWorks = document.getElementById('ph-works')
        const articlePhWork = document.createElement('article')
        const mediaHTML = mediaFactory.renderMedia(element)
        const workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.photoName}</h2>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button"  data-value="${element.likes}"></i>
                    </div>
                </div>
                `
        articlePhWork.innerHTML = workTemplate
        sectionPhWorks.appendChild(articlePhWork) // create an article with "appenchild method" which add child element at the last position of the parent one.
        articlePhWork.classList.add('ph-work-elt')
        this.totalLike += parseInt(element.likes) // "parseInt" convert "string" in a full number which correspond to the like number
        currentMedia.push(mediaHTML.outerHTML) // push data
        currentMediaName.push(element.photoName); // push data
        (new Lightbox())
          .init(currentMedia, currentMediaName)
      }
    })
    return this // refer to the method which is called (GalleryFactory.builder)
  }
}
