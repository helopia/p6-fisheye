'use strict'
/* =================== */
import Scroll from './Scroll.js'

// display all photographers by default
export default class HomePageBuilder {
  // initiate photographers section , call the display function
  displayPhotographers (data) {
    const photographers = data.photographers
    photographers.map(photographe => {
      const sectionPhotographers = document.getElementById('photographers')
      const articlePhotographers = document.createElement('article')
      articlePhotographers.className = ' articlePh'
      const templatePhotographer = `
            <a href="photographer.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            ` // uses of map

      sectionPhotographers.appendChild(articlePhotographers)
      articlePhotographers.innerHTML = templatePhotographer
    })
    new Filter()
    new Scroll().scrollButton()
  }
}
