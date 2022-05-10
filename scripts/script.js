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
