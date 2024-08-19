window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${scrollY}px`
})
// gsap.to('.wrapper', {
//   scrollS: '.wrapper',
//   x: 100
// })
