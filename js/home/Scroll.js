'use strict'

export default class Scroll {
  // throw back user at the top of page when they scroll a button appear /disapear
  scrollButton () {
    window.addEventListener('scroll', () => {
      const button = document.getElementById('main-photographers-link')
      const y = window.scrollY
      if (y >= 130) {
        button.style.display = 'block' // show
      } else {
        button.style.display = 'none' // don't show
      }
    })
  }
}
