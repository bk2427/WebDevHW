
var tl = gsap.timeline({onComplete: finalfunc});

tl.fromTo('.line1', { opacity: 0}, { duration: 2 ,opacity: 1})
tl.fromTo('.line2', { opacity: 0}, { duration: 2 ,opacity: 1})
tl.fromTo('.line3', { opacity: 0}, { duration: 2,opacity: 1})
tl.fromTo('.line4', { opacity: 0}, { duration: 2,opacity: 1})
tl.fromTo('.line5', { opacity: 0}, { duration: 2,opacity: 1})
tl.fromTo('.line6', { opacity: 0}, { duration: 2,opacity: 1})
tl.fromTo('.line7', { opacity: 0}, { duration: 2, opacity: 1})
tl.fromTo('.line8', { opacity: 0}, { duration: 2, opacity: 1})


function finalfunc(){
    gsap.fromTo('.line1', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line2', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line3', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line4', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line5', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line6', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line7', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.line8', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
    gsap.fromTo('.img', { opacity:1}, { delay: 1, duration: 2 ,opacity: 0})
}


