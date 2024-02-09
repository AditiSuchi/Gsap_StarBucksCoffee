let tl = gsap.timeline();
let tl2 = gsap.timeline();
// let mocha =document.getElementsByName(".image_popup::after");
tl.from(".logo, .navMenu ,.cart", {
  y: -50,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".content_writen", {
  x: -300,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".image_popup>img", {
  x: 350,
  duration: 1,
  opacity: 0,
  scale: 1,
  stagger: 0.2,
});
gsap.to(".image_popup::after",{
    y:200,
    opacity:1,
    duration:3,
   delay:1,

})
tl2.from(".bestSeller", {
  y: 300,
  opacity: 0,
  duration: 2,

});
tl2.from(".color", {
  y: 100,
  opacity: 0,
  scale: 1,
  duration: 0.5,
});
tl2.to(".bestSeller_img img", {
  y: -150,
  opacity: 1,
  duration: 2,
});
gsap.from(".mocha",{
  y:0,
  x:0,
  opacity:0, 
  duration:2,
  delay:4,
  stagger: 0.2,
})
