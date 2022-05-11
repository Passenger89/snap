/* ----- SET HERO IMAGE BASED ON VIEWPORT ----- */
const heroImg = document.querySelector('#hero-img')
const resizeListener = () => {
  heroImg.src =
    window.innerWidth > 600
      ? './images/image-hero-desktop.png'
      : './images/image-hero-mobile.png'
}
window.onload = resizeListener()
window.addEventListener('resize', resizeListener)
/* ------ */

/* ----- TOGGLE MOBILE NAVIGATION ----- */
const header = document.querySelector('.header')
const burgerBtn = document.querySelector('#btnHamburger')
const overlay = document.querySelector('.header__mobile-overlay')
const mobileMenu = document.querySelector('.header__nav--mobile')

burgerBtn.addEventListener(
  'click',
  () => {
    header.classList.toggle('open')
    if (header.classList.contains('open')) {
      //* Open hamburger menu
      overlay.classList.remove('fade-out')
      overlay.classList.add('fade-in')
      mobileMenu.classList.remove('slide-right')
      mobileMenu.classList.add('slide-left')
    } else {
      //* Close hamburger menu
      overlay.classList.remove('fade-in')
      overlay.classList.add('fade-out')
      mobileMenu.classList.remove('slide-left')
      mobileMenu.classList.add('slide-right')
    }
  },
  false
)

/* ------ */
