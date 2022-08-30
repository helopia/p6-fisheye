'use strict'
/* =============== */
// data json import
import ApiFishEye from './provider/ApiFishEye.js'
// homepage folder home
import HomePageBuilder from './home/HomePageBuilder.js'
// photographer pages folder photographers
import PhotographerProfil from './photographers/PhotographerProfil.js'
import DropDownMenu from './photographers/Drop_Down_Menu.js'
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch () {
  new ApiFishEye().getDataFishEye().then((data) => {
    if (window.location.pathname.includes('/photographer.html')) {
      // photographer profil header
      new PhotographerProfil().displayPhotographerProfil(data)

      // dropdown menu
      new DropDownMenu().dropDown(data)

      // photographer gallery et la box price/likes
      new MediaBuilder().photographersMedias(data)
      return
    }
    // homepage builder with scroll & import filter
    new HomePageBuilder().displayPhotographers(data)
  }).catch(() => {
    console.error('Impossible de charger le fichier ApiFishEye') // catch if there is an error & show message if it is
  })
})()
