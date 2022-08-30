'use strict'
/* ====================== */
/* eslint eqeqeq: "off" */
export default class Modal {
  // Event launch/close  modal onclick on 'contact me' button
  modal (data) {
    const modalBtn = document.getElementById('ph-contact')
    const closeBtn = document.getElementsByClassName('close-form-icon')

    if (modalBtn) {
      modalBtn.addEventListener('click', this.launchModal)
      this.formPhName(data)
    }
    if (modalBtn) {
      modalBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.launchModal()
          this.formPhName(data)
        }
      })
    }
    if (closeBtn) {
      closeBtn[0].addEventListener('click', this.closeModal)
    }
    // accessibility via echap key
    const modalbg = document.getElementById('form-dialog')
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        modalbg.style.display = 'none'
      }
    })
  }

  //launch modal
  launchModal () {
    const modalbg = document.getElementById('form-dialog')
    modalbg.style.display = 'block'
    const focusInput = document.querySelector('input')
    focusInput.focus()
    console.log(focusInput)
  }

  closeModal () {
    const modalbg = document.getElementById('form-dialog')
    modalbg.style.display = 'none'
  }

  // show photographer name by taking if, show it in modal title
  formPhName (data) {
    const id = window.location.search.split('id=')[1]
    const photographers = !id ? data : data.filter(photographer => photographer.id == id)
    const phName = document.getElementById('ph-form-name')
    const phNameTemplate = `${photographers[0].name}`
    phName.innerHTML = phNameTemplate
  }
}
