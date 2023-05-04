var tl = gsap.timeline({onComplete: myFunction});
tl.fromTo('.beargirl', {  x:-30, y:-300}, { duration: 7 , x:-1500})





function myFunction(){
    window.open("last.html", "_self");
}



