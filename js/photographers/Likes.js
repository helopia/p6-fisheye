'use strict'

export default class LikeSubscriber {
  // add or remove a like on click
  constructor () {
    const media = document.getElementById('ph-works')
    // keyboard accessibility
    // media.addEventListener('keydown', (e) => {
    //   if (e.key == 'Enter') {
    //     const classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ')
    //     const hasClassBtn = classListTarget.indexOf('heart-btn') != -1
    //
    //     if (hasClassBtn) {
    //       let totalLikes = parseInt(document.getElementById('total-likes').innerHTML)
    //       const counterLike = e.target.parentNode.firstElementChild.firstElementChild
    //       let likeValue = parseInt(counterLike.innerHTML)
    //       const isLiked = classListTarget.indexOf('isLiked') != -1
    //
    //       document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes
    //       counterLike.innerHTML = isLiked ? --likeValue : ++likeValue
    //
    //       if (isLiked) {
    //         e.target.classList.remove('isLiked') // rremove isLiked if already liked
    //         e.target.classList.replace('fas', 'far')
    //       } else {
    //         e.target.classList.add('isLiked') // or add isLike if not already liked
    //         e.target.classList.replace('far', 'fas')
    //       }
    //     }
    //   }
    // })
    media.addEventListener('click', (b) => {
      const classListTarget = typeof b.target.classList === 'undefined' ? [] : b.target.classList.value.split(' ')
      const hasClassBtn = classListTarget.indexOf('heart-btn') != -1

      if (hasClassBtn) {
        let totalLikes = parseInt(document.getElementById('total-likes').innerHTML)
        const counterLike = b.target.parentNode.firstElementChild.firstElementChild
        let likeValue = parseInt(counterLike.innerHTML)
        const isLiked = classListTarget.indexOf('isLiked') != -1

        document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes //
        counterLike.innerHTML = isLiked ? --likeValue : ++likeValue

        if (isLiked) {
          b.target.classList.remove('isLiked')
          b.target.classList.replace('fas', 'far')
        } else {
          b.target.classList.add('isLiked')
          b.target.classList.replace('far', 'fas')
        }
      }
    })
  }
}
