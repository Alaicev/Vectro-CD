const carusel = document.querySelectorAll('.course__carusel-container')
const progress = document.querySelector('.course__carusel-progress')
const animation = document.querySelector('.course__carusel-progress-active')
const buttonCourse = document.querySelectorAll('.course__carusel-button')
const caruselBlock = document.querySelector('.course__carusel-block')
const allBlockInfo = document.querySelectorAll('.course__offer-item')
const allSections = document.querySelectorAll('.nav')
const allLinks = document.querySelectorAll('.navigation__item')


allLinks.forEach((el, i) => {
  el.addEventListener("click", () => {
    allSections[i].scrollIntoView() 
  })
})

window.addEventListener('scroll', function() {
  if(window.pageYOffset >= 100) {
    document.querySelector(".header").classList.add('header__to-scroll')
  }
  else {
    document.querySelector(".header").classList.remove('header__to-scroll')
  }
})

const imageToCarusel = [
'./assets/img/Photo-1.jpg',
'./assets/img/photo-2.png',
'./assets/img/photo-3.jpg',
'./assets/img/photo-4.jpg',
'./assets/img/photo-5.jpg',
'./assets/img/photo-6.jpg',
'./assets/img/photo-7.jpg',
]

let index = 0

function buttonDis (i) {
  if (i === true) {
    buttonCourse[0].disabled = true
    buttonCourse[1].disabled = true
  } else {
    buttonCourse[0].disabled = false 
    buttonCourse[1].disabled = false
  }
}

carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`

buttonCourse.forEach((el, i) => {
  el.addEventListener('click', () => {
    buttonDis(true)
    if(i === 0) {
      index = index -1;
      index = index < 0 ? imageToCarusel.length -1 : index 
      carusel[0].style.backgroundImage = `url(${imageToCarusel[index]})`
      caruselBlock.style.transition = 'all 1s'
      caruselBlock.style.left = '0%'
      setTimeout(() => {
      caruselBlock.style.transition = 'none'
      caruselBlock.style.left = '-100%'
        carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`
        buttonDis(false)
      },1000)
    } else if(i === 1) {
      index = index + 1;
      index = index >= imageToCarusel.length ? 0 : index 
      carusel[2].style.backgroundImage = `url(${imageToCarusel[index]})`
      caruselBlock.style.transition = 'all 1s'
      caruselBlock.style.left = '-200%'
      setTimeout(() => {
      caruselBlock.style.transition = 'none'
      caruselBlock.style.left = '-100%'
        carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`
        buttonDis(false)
      },1000)
    }
  })
})

const textForInfo = [
  "Тут у нас первый текст", 
  "Тут у нас уже сторой текст", 
  "Тут уже третий текст"
  ]

allBlockInfo.forEach((el, i) => {
  el.addEventListener("click", () => {
    document.querySelector('.block-info__text').innerHTML = textForInfo[i]
    document.querySelector('.block-info').style.zIndex = 33
    document.querySelector('.block-info').style.opacity = 1
    document.querySelector('.block-info__container').style.transform = 'scale(1)'
    document.querySelector('html').style.overflow = 'hidden'
  })
})

document.querySelector('.block-info__button-close').addEventListener("click", () => {
  document.querySelector('.block-info').style.zIndex = -2
  document.querySelector('.block-info').style.opacity = 0
  document.querySelector('.block-info__container').style.transform = 'scale(0)'
  document.querySelector('html').style.overflow = 'auto'
})

