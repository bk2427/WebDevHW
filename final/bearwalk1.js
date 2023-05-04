const button = document.querySelector('.readbutton')

gsap.fromTo('.bear', { opacity: 1, scale: .6, x:-30, y:-50}, { duration: 10 ,opacity: 1, scale: .2, x:-710, y:-180})
gsap.fromTo('.line1', { opacity: 0}, { duration: 2 ,opacity: 1})
gsap.fromTo('.line2', { opacity: 0}, { duration: 2, delay:2 ,opacity: 1})
gsap.fromTo('.line3', { opacity: 0}, { duration: 2, delay:4 ,opacity: 1})
gsap.fromTo('.line4', { opacity: 0}, { duration: 2, delay:6 ,opacity: 1})
gsap.fromTo('.line5', { opacity: 0}, { duration: 2, delay:8 ,opacity: 1})
gsap.fromTo('.readbutton', { opacity: 0}, { duration: 2, delay:10,opacity: 1})






