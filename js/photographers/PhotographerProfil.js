'use strict'
import Modal from './Modal_Contact.js'
import Form from './Form.js'
export default class PhotographerProfil {
  // check where user is, if location is = photographer's id so create 'Profile' section
  displayPhotographerProfil (data) {
    const photographersData = data.photographers
    const id = window.location.search.split('id=')[1] // sThe split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id) // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    const sectionPhotographerProfil = document.getElementById('ph-profil-header')
    const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                    
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `

    sectionPhotographerProfil.innerHTML = templatePhotographerProfil
    new Modal().modal(photographersData)
    new Form().fields()
  }
}
