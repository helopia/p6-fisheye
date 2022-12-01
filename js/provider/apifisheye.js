'use strict'
/* ============= */

// recupere le data du fichier json (PHOTOGRAPHERS & MEDIAS)
export default class Apifisheye {
  async getDataFishEye () {
    const url = 'api/FishEye/photographers.json';
    const response = await fetch(url);
    const data = await response.json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    return {
      photographers: dataPhotographers,
      media: dataMedias
    }
  }
}
