'use strict'
/* ======================= */

export default class LightBox {
  constructor () {
    this.currentIndex = 0
  }

  // initialise lightbox + initialise function & call for navigate in lightbox
  init (currentMedia, currentMediaName) {
    const getMedias = Array.from(document.getElementsByClassName('ph-media'))
    getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener('click', () => {
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')
      const src = currentMedia[index]
      const nameSrc = currentMediaName[index]
      this.currentIndex = index
      const lightBox = document.getElementById('works-lightbox')
      lightBox.style.display = 'block'
      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    }))
    this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName)
    this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName)
    this.close()
    this.keyboard(currentMedia, currentMediaName)
    return this
  }

  // previous media on click on left side
  previous (elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex -= 1
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      if (this.currentIndex < 0) {
        this.currentIndex = media.length - 1
        this.currentIndex = name.length - 1
      }

      const src = media[this.currentIndex]
      const nameSrc = name[this.currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    })
  }

  // next media on click on right side
  next (elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex += 1
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      if (this.currentIndex > name.length - 1) {
        this.currentIndex = 0
      }

      const src = media[this.currentIndex]
      const nameSrc = name[this.currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    })
  }

  // close modal on click
  close () {
    document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
      const lightbox = document.getElementById('works-lightbox')
      lightbox.style.display = 'none'
    })
  }

  // initialise keyboard accessibilité
  keyboard (currentMedia, currentMediaName) {
    document.addEventListener('keydown', (key) => {
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')
      // close modal on keyboard key echap
      if (key.code === 'Escape' || key.code === 'Esc' || key.code === 'Echape') {
        const lightBox = document.getElementById('works-lightbox')
        lightBox.style.display = 'none'
      } // eslint-disable-line

      // arrow right keyboard click swap image
      else if (key.code === 'ArrowRight') {
        this.currentIndex += 1

        if (this.currentIndex > currentMediaName.length - 1) {
          this.currentIndex = 0
        }

        const src = currentMedia[this.currentIndex]
        const nameSrc = currentMediaName[this.currentIndex]

        lightBoxMedia.innerHTML = `${src}`
        lightBoxName.innerHTML = `${nameSrc}`
      } // eslint-disable-line

      // arrow right keyboard click swap image
      else if (key.code === 'ArrowLeft') {
        this.currentIndex -= 1
        if (this.currentIndex < 0) {
          this.currentIndex = currentMedia.length - 1
          this.currentIndex = currentMediaName.length - 1
        }
        const src = currentMedia[this.currentIndex]
        const nameSrc = currentMediaName[this.currentIndex]
        lightBoxMedia.innerHTML = `${src}`
        lightBoxName.innerHTML = `${nameSrc}`
      }
    })
  }
}
