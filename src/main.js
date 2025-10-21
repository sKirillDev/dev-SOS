import './style.scss'

const btnBurger = document.querySelector('.hamburger')
btnBurger.addEventListener('click', () => btnBurger.classList.toggle('is-active'))


const dropdown = document.querySelector('.dropdown');
const line = document.querySelector('.navbar__line');
const collapse = document.getElementById('navbarSupportedContent');
const navExtra = document.querySelector('.nav-extra');
const social = collapse ? collapse.querySelector('.navbar__social') : null;
const BREAKPOINT = 992;

function moveElements() {
  if (!dropdown || !line || !collapse || !navExtra) return;

  const isMobile = window.innerWidth < BREAKPOINT;

  if (isMobile) {
    navExtra.append(dropdown, line);
  } 
  
  else {
    collapse.insertBefore(dropdown, social);
    collapse.insertBefore(line, social);
  }
}


document.addEventListener('DOMContentLoaded', moveElements);
window.addEventListener('resize', moveElements);


const firstScreen = document.querySelector('.banner')
const navToggle = document.querySelector('.navbar-toggler')
navToggle.addEventListener('click', () => firstScreen.classList.toggle('active'))


const swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  cardsEffect: {
    perSlideRotate: 0,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    reachEnd: function () {
      setTimeout(() => {
        this.slideTo(0, 500);
      }, 300);
    },
  },
});


document.querySelectorAll(".accordion-collapse").forEach(collapse => {
  collapse.addEventListener('shown.bs.collapse', () => {
    const li = collapse.closest(".accordion-item");
    const nextLi = li.nextElementSibling;

    if (nextLi) {
      const distance = nextLi.offsetTop - li.offsetTop;
      li.setAttribute('style', '--distance:' + distance + 'px');
      console.log(distance);
    }
  });
});