let tl = gsap.timeline();

tl.from(".hero__left", {duration: 1, opacity: 0, y: 100})
  .from(".hero__descr", {duration: 0.5, opacity: 0})
  .from(".img__1", {duration: 0.5, opacity: 0, scale: 0})
  .from(".img__2", {duration: 0.5, opacity: 0, scale: 0})
  .from(".img__3", {duration: 0.5, opacity: 0, scale: 0})
  .from(".photos__author", {duration: 0.5, opacity: 0});




let tl2 = gsap.timeline({paused: true});

tl2.from(".menu", {duration: 1, opacity: 0, y: 100})
  .from(".menu__top", {duration: 0.5, opacity: 0, y: -50})
  .from(".nav__list ", {duration: 0.5, opacity: 0, y:50})
  .from(".social", {duration: 1, opacity: 0, y:50}, "socialAndMenu__Right")
  .from(".menu__right", {duration: 1, opacity: 0, y:50}, "socialAndMenu__Right");
  
let open = document.querySelector(".burger");
let close = document.querySelector(".close");

open.onclick = function() {
  document.querySelector('.menu').classList.toggle('menu--open');
  tl2.play();
  return  
}
  
close.onclick = function() {
  tl2.reverse();
  setTimeout(function() {
    document.querySelector('.menu').classList.remove('menu--open')
  }, 3000);
  return    
}