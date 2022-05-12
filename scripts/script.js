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
      noflow() //! Disables scrolling
    } else {
      //* Close hamburger menu
      overlay.classList.remove('fade-in')
      overlay.classList.add('fade-out')
      mobileMenu.classList.remove('slide-left')
      mobileMenu.classList.add('slide-right')
      haveflow() //!Enables scrolling
    }
  },
  false
)

/* ------ */

/* ----- TOGGLE MOBILE NAV DROPDOWN ----- */
const features = document.querySelector('.nav__item--features')
const company = document.querySelector('.nav__item--company')
const featuresContent = document.querySelector('.features__list')
const companyContent = document.querySelector('.company__list')

features.addEventListener('click', () => {
  featuresContent.classList.toggle('active')
})
company.addEventListener('click', () => {
  companyContent.classList.toggle('active')
})
/* ----- */

//! Utilities
// (A) DISABLE SCROLL
function noflow() {
  document.body.style.overflow = 'hidden'
  document.body.style.userSelect = 'none'
}
// (B) ENABLE SCROLL
function haveflow() {
  document.body.style.overflow = 'auto'
  document.body.style.userSelect = 'auto'
}

/* ----- HANDLE DESKTOP NAVIGATION ACTIVE STATES ----- */
const featuresDesktop = document.querySelector('.nav__item--features-desktop')
const featuresDropdown = document.querySelector('.features__dropdown--desktop')
featuresDesktop.addEventListener('click', () => {
  featuresDesktop.classList.toggle('active')
  featuresDropdown.classList.toggle('active')
})

const companyDesktop = document.querySelector('.nav__item--company-desktop')
const companyDropdown = document.querySelector('.company__dropdown--desktop')
companyDesktop.addEventListener('click', () => {
  companyDesktop.classList.toggle('active')
  companyDropdown.classList.toggle('active')
})

/* ----- */
