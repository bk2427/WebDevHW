const button = document.querySelector('.readbutton')


gsap.fromTo('.line1', { opacity: 0}, { duration: 2 ,opacity: 1})
gsap.fromTo('.line2', { opacity: 0}, { duration: 2, delay:2 ,opacity: 1})
gsap.fromTo('.line3', { opacity: 0}, { duration: 2, delay:4 ,opacity: 1})
gsap.fromTo('.line4', { opacity: 0}, { duration: 2, delay:6 ,opacity: 1})
gsap.fromTo('.line5', { opacity: 0}, { duration: 2, delay:8 ,opacity: 1})
gsap.fromTo('.line6', { opacity: 0}, { duration: 2, delay:10 ,opacity: 1})
gsap.fromTo('.line7', { opacity: 0}, { duration: 2, delay:12 ,opacity: 1})
gsap.fromTo('.line8', { opacity: 0}, { duration: 2, delay:14 ,opacity: 1})
gsap.fromTo('.readbutton', { opacity: 0}, { duration: 2, delay:16 ,opacity: 1})

TweenMax.to('.cup', {rotate:5, scale: 0.95, duration: 0.5, yoyo:true, repeat:-1});
TweenMax.to('.necklace', {rotate:-5, scale: 0.95, duration: 0.5, yoyo:true, repeat:-1});







