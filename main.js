import { TimelineMax, Power2} from "gsap";

const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    icons.classList.toggle('active');
});
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const introimg = document.querySelector('.intro_section img');
const headline = document.querySelector(".text1");
const subline = document.querySelector(".text2");
const slider = document.querySelector(".slider");
const home = document.querySelector(".home_button");

const t1 = new TimelineMax();
t1.fromTo(
    introimg,
    0.8,
    {height:"0", x:"0", y:"0"},
    {height:"70%", x:"50%", y:"25%", ease: Power2.easeInOut}
);