'use strict'
import GalleryFactory from '../Factory/GalleryFactory.js'

export default class DropDownMenu {
  // event on click => show/close dropdown menu
  dropDown (data) {
    const arrowOpen = document.getElementsByClassName('sort-btn')
    const arrowClose = document.getElementsByClassName('arrow-up-close')
    const hiddenSort = document.getElementsByClassName('hidden-sort')

    if (arrowOpen) { // show content menu
      arrowOpen[0].addEventListener('click', () => {
        hiddenSort[0].style.display = 'block'
      })
      this.sortMedias(data)
    }
    if (arrowClose) { // close content menu
      arrowClose[0].addEventListener('click', () => {
        hiddenSort[0].style.display = 'none'
      })
    }
    // keyboard accessibility, echap close menu
    if (arrowClose) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Echape' || e.key === 'Esc') {
          hiddenSort[0].style.display = 'none'
        }
      })
    }
  }
  //initialise sorting : DATE/POPULARITE / TITRE
  sortMedias (data) {
    let mediaArraySort = [] // initialise empty table
    const media = data.media
    const btnSort = document.querySelector('.sort-btn')
    const hiddenSort = document.getElementsByClassName('hidden-sort')
    const sortBtn = Array.from(document.getElementsByClassName('sort')) // array.from() convert NodeList into a table
    // keyboard accessibility via ENTER key
    sortBtn.forEach((btn, index) => btn.addEventListener('keydown', (e) => {
      if (e.key == 'Enter' || e.key == 'Entr' || e.key == 'Entrer') {
        hiddenSort[0].style.display = 'none'
        if (index == 0) {
          btnSort.innerHTML = 'Popularité'

          mediaArraySort = media.sort((a, b) => { // sort by popularity
            return b.likes - a.likes // sort by like number decreased
          })
        } else if (index == 1) {
          btnSort.innerHTML = 'Date'

          mediaArraySort = media.sort((a, b) => { // sort by date
            return new Date(a.date).valueOf() - new Date(b.date).valueOf() // sort by date,  recent before others
          })
        } else if (index == 2) {
          btnSort.innerHTML = 'Titre'

          mediaArraySort = media.sort((a, b) => { // eslint-disable-line
            // sort photos names & sort it by alphabetical
            if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
              return -1
            } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
              return 1
            }
          })
        }
        this.displaySortMedia(mediaArraySort)
      }
    }))
    sortBtn.forEach((btn, index) => btn.addEventListener('click', () => { // event on click on each button
      hiddenSort[0].style.display = 'none'
      if (index == 0) {
        btnSort.innerHTML = 'Popularité'

        mediaArraySort = media.sort((a, b) => {
          return b.likes - a.likes
        })
      } else if (index == 1) {
        btnSort.innerHTML = 'Date'

        mediaArraySort = media.sort((a, b) => {
          return new Date(a.date).valueOf() - new Date(b.date).valueOf()
        })
      } else if (index == 2) {
        btnSort.innerHTML = 'Titre'
        mediaArraySort = media.sort((a, b) => {  // eslint-disable-line
          if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
            return -1
          } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
            return 1
          }
        })
      }
      this.displaySortMedia(mediaArraySort)
    }))
  }
  displaySortMedia (mediaArraySort) {
    // display photographers works
    document.getElementById('ph-works').innerHTML = ''
    new GalleryFactory().builder(mediaArraySort)
  }
}
