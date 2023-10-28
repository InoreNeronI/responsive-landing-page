
const ScrollReveal = require('scrollreveal');
const Swiper = require('swiper');

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== HOME SWIPER ===============*/
/*let homeSwiper = */new Swiper('.home-swiper', {
  autoplay: {
    delay: 4000
  },
  loop: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 30
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== NEW SWIPER ===============*/
/*let newSwiper = */new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: 'true',
  spaceBetween: 16
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the anchor tag with the scroll-top class
  if (this.scrollY >= 460) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400/*,
  reset: true*/
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100});
sr.reveal(`.about__data, .discount__img`, {origin: 'left'});
sr.reveal(`.about__img, .discount__data`, {origin: 'right'});

/*=============== THEME SWITCHER ===============*/
const root = document.documentElement;
document.querySelector('.forest-switcher').addEventListener('click', () => root.className = 'forest');
document.querySelector('.fire-switcher').addEventListener('click', () => root.className = 'fire');
document.querySelector('.earth-switcher').addEventListener('click', () => root.className = 'earth');
document.querySelector('.air-switcher').addEventListener('click', () => root.className = 'air');
document.querySelector('.water-switcher').addEventListener('click', () => root.className = 'water');
document.querySelector('.high-switcher').addEventListener('click', () => root.className = 'high');

/*=============== SOCIAL FOOTER ===============*/ // @see https://codepen.io/zeeshanmukhtar1/pen/ExGGMgw
const dropdownTitleIcon = document.querySelector('.dropdown-title-icon');
const dropdownTitle = document.querySelector('.dropdown-title');
const dropdownList = document.querySelector('.dropdown-list');
const mainButton = document.querySelector('.main-button');
const floatingIcon = document.querySelector('.floating-icon');

const icons = {
  amazon: 'bx bxl-amazon',
  facebook: 'bx bxl-facebook',
  github: 'bx bxl-github',
  instagram: 'bx bxl-instagram',
  linkedin: 'bx bxl-linkedin',
  mastodon: 'bx bxl-mastodon',
  reddit: 'bx bxl-reddit',
  spotify: 'bx bxl-spotify',
  tiktok: 'bx bxl-tiktok',
  twitter: 'bx bxl-twitter',
  youtube: 'bx bxl-youtube'
};

const profiles = {
  amazon: 'amazon.es/gp/profile/amzn1.account.AHIQ2NJLBKF7CGRQPT7SHJ5WKWAQ',
  facebook: 'facebook.com/profile.php?id=61551260452341',
  github: 'github.com/InoreNeronI',
  instagram: 'instagram.com/r.ot.en',
  linkedin: 'linkedin.com/in/mmozos',
  mastodon: 'mastodon.eus/InoreNeronI',
  reddit: 'reddit.com/user/mmozos',
  spotify: 'open.spotify.com/user/paiton',
  tiktok: 'tiktok.com/@r.ot.en',
  twitter: 'twitter.com/martinmozos',
  youtube: 'youtube.com/channel/UC9kA-C03KcBkibQ_FSoa09g'
};

const listItems = ['Amazon', 'Facebook', 'GitHub', 'Instagram', 'Linkedin', 'Mastodon', 'Reddit', 'Spotify', 'TikTok', 'Twitter', 'Youtube'];

const iconTemplate = (icon) => {
  return `<i class="${icon}"></i>`;
};

const listItemTemplate = (text, translateValue) => {
  return `<li class="dropdown-list-item">
    <button class="dropdown-button list-button" data-translate-value="${translateValue}%">
    <span class="text-truncate">${text}&nbsp;${iconTemplate(icons[text.toLowerCase()])}</span>
    </button>
  </li>`;
};

const renderListItems = () => {
  dropdownList.innerHTML += listItems
    .map((item, index) => {
      return listItemTemplate(item, 100 * index);
    })
    .join('');
};

window.addEventListener('load', () => {
  renderListItems();
});

const setDropdownProps = (deg, ht, opacity) => {
  root.style.setProperty('--rotate-arrow', deg !== 0 ? deg + 'deg' : 0);
  root.style.setProperty('--dropdown-height', ht !== 0 ? ht + 'rem' : 0);
  root.style.setProperty('--list-opacity', opacity);
};

mainButton.addEventListener('click', () => {
  const listWrapperSizes = 3.5; // margins, paddings & borders
  const dropdownOpenHeight = 4.6 * listItems.length + listWrapperSizes;
  const currDropdownHeight = root.style.getPropertyValue('--dropdown-height') || '0';
  currDropdownHeight === '0' ?
    setDropdownProps(180, dropdownOpenHeight, 1) :
    setDropdownProps(0, 0, 0);
});

dropdownList.addEventListener('mouseover', (e) => {
  const translateValue = e.target.dataset.translateValue;
  root.style.setProperty('--translate-value', translateValue);
});

dropdownList.addEventListener('click', (e) => {
  const clickedItemText = e.target.innerText.toLowerCase().trim();
  const clickedItemIcon = icons[clickedItemText];

  dropdownTitleIcon.innerHTML = iconTemplate(clickedItemIcon);
  dropdownTitle.innerHTML = clickedItemText;

  setDropdownProps(0, 0, 0);

  // @see https://stackoverflow.com/a/48075675
  const win = window.open('https://' + profiles[clickedItemText], '_blank');
  win.focus();
});

dropdownList.addEventListener('mousemove', (e) => {
  const iconSize = root.style.getPropertyValue('--floating-icon-size') || 0;
  const x = e.clientX - dropdownList.getBoundingClientRect().x;
  const y = e.clientY - dropdownList.getBoundingClientRect().y;
  const targetText = e.target.innerText.toLowerCase().trim();
  const hoverItemText = icons[targetText];

  floatingIcon.innerHTML = iconTemplate(hoverItemText);
  root.style.setProperty('--floating-icon-left', x - iconSize / 2 + 'px');
  root.style.setProperty('--floating-icon-top', y - iconSize / 2 + 'px');
});
