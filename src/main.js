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

  if (window.innerWidth < BREAKPOINT) {
    if (!navExtra.contains(dropdown)) navExtra.appendChild(dropdown);
    if (!navExtra.contains(line)) navExtra.appendChild(line);
  } else {
    const refNode = social || null;
    if (!collapse.contains(dropdown)) collapse.insertBefore(dropdown, refNode);
    if (!collapse.contains(line)) collapse.insertBefore(line, refNode);
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