const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__list li");
const navbar = document.querySelector("nav");
const white = document.querySelector("nav");
const navLink = document.querySelectorAll('.nav__link');
const toTop = document.querySelector(".to-top");



const selectElement = function (element){
  return document.querySelector(element);
};
window.addEventListener("scroll",() =>{
  if (window.pageYOffset > 100){
    toTop.classList.add("active");    
  } else{
    toTop.classList.remove("active"); 
  }
});
// close open hamburger
hamburger.addEventListener("click", () => {
  
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fades");
  });
  white.classList.toggle("white");
  navbar.classList.toggle("change");

});
// click on links

function linkAction(){
 navLinks.classList.toggle('open')
 links.forEach(link => {
  link.classList.toggle("fades");
  white.classList.remove("white");
  navbar.classList.remove("change");
});
}
navLink.forEach(hamburger => hamburger.addEventListener('click', linkAction))
// typing animation script
var typed = new Typed(".typing", {
  strings: ["Student","Developer","Freelancer","UX/UI designer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*Scroll reveal*/

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    
    delay: 300
});

sr.reveal('.animate-top2', {
  origin: 'top',
  duration: 1000,
  
  delay: 800
});

sr.reveal('.animate-top3', {
  origin: 'top',
  duration: 1000,
  
  delay: 1000
});

sr.reveal('.animate-leftx', {
  origin: 'left',
  duration: 1000,
  
  delay: 600
});
sr.reveal('.animate-lefty', {
  origin: 'left',
  duration: 1000,
  
  delay: 800
});



// smooth scroll
function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration ) requestAnimationFrame(animation);
  }
  function ease(t,b,c,d){
    t /= d /2;
    if(t<1) return c / 2 * t * t + b;
    t--;
    return -c /2 * (t*(t-2)-1)+b;
  }
  requestAnimationFrame(animation);
  
}

var logos = document.querySelector('.to-top');
logos.addEventListener('click', function(){
  smoothScroll('.logo',1000);
});

var contactbutt = document.querySelector('.btn');
contactbutt.addEventListener('click',function(){
  smoothScroll('.contact-sec',1000);
});

var logos = document.querySelector('.to-top');
logos.addEventListener('click', function(){
  smoothScroll('.hamburger',1000);
});






