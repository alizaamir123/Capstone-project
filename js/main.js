const hamburger = document.querySelector('.hamburger-icon1');
const navPopup = document.querySelector('.second-navbar-popup');
const cross = document.querySelector('.cross');

const togglemenue = () => {
  if (navPopup.classList.contains('hidden')) {
    navPopup.classList.remove('hidden');
    cross.classList.remove('hidden');
  } else {
    navPopup.classList.add('hidden');
    cross.classList.add('hidden');
  }
};
hamburger.addEventListener('click', togglemenue);
cross.addEventListener('click', togglemenue);