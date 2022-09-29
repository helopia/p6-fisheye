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
    modalFocus()
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
//focus
function modalFocus() {
  const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const modal = document.querySelector('#contact-form'); // select the modal by it's id
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


  document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
}

