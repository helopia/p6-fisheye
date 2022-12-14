'use strict'
/* ================ */

export default class Form {
  fields () {
    // initialise const dom for the form
    const form = document.getElementById('contact-form')
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/


    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const isValid = this.checkNames(firstName, regex) &&
                this.checkNames(lastName, regex) &&
                this.checkEmail(email) &&
                this.checkMessage(message)

      if (isValid) {
        firstName.style.border = 'none'
        lastName.style.border = 'none'
        email.style.border = 'none'
        message.style.border = 'none'
        this.consoleMessageValid(firstName, lastName, email, message)
        document.getElementById('contact-form').reset() // reset form if valid
        // else execute errorVerification Function
      } else {
        this.errorVerification(firstName, lastName, email, message, regex)
      }
    })
  }

  consoleMessageValid (firstName, lastName, email, message) {
    console.group('Contact Message')
    console.log('Prénom : ' + firstName.value)
    console.log('Nom : ' + lastName.value)
    console.log('Email : ' + email.value)
    console.log('Message : ' + message.value)
    console.groupEnd()
  }

  errorVerification (firstName, lastName, email, message, regex) {
    this.checkNames(firstName, regex)
    this.checkNames(lastName, regex)
    this.checkEmail(email)
    this.checkMessage(message)
  }
  // check condition for firstname and lastname
  checkNames (elt, regex) {
    if (elt.value.trim().length < 2 || elt.value.trim() === '' || !elt.value.match(regex)) {
      elt.parentElement.setAttribute('data-error-visible', 'true')
      elt.style.border = '2px solid #e54858'
      return false
    } else {
      elt.parentElement.setAttribute('data-error-visible', 'false')
      elt.style.border = 'solid #279e7a 0.19rem'
      return true
    }
  }
  checkEmail (elt) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (elt.value.trim().match(re)) {
      elt.parentElement.setAttribute('data-error-visible', 'false')
      elt.style.border = 'solid #279e7a 0.19rem'
      return true
    }
    elt.parentElement.setAttribute('data-error-visible', 'true')
    elt.style.border = '2px solid #e54858'
    return false
  }

  // check if message is valid or not
  //generate green or red border on message validity
  checkMessage (elt) {
    if (elt.value.trim() === '' || elt.value.trim() == null) { // La méthode trim() permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement (espace, tabulation, espace insécable, etc.)
      elt.parentElement.setAttribute('data-error-visible', 'true')
      elt.style.border = '2px solid #e54858'
      return false
    }
    elt.parentElement.setAttribute('data-error-visible', 'false')
    elt.style.border = 'solid #279e7a 0.19rem'
    return true
  }
}
