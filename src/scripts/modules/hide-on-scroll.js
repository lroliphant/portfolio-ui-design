/*
Hide header on scroll down & show on scroll up
*/

// See some examples - https://github.com/pepelsbey/pepelsbey.dev/blob/main/src/scripts/modules/menu.js

const headerTxt = document.querySelector('.header__text');

document?.addEventListener('scroll', (e) => {
  const currPos = document.documentElement.scrollTop;

  console.log(currPos);

  currPos > 72 || currPos > 72 ? headerTxt.classList.add('header__text--hidden') : headerTxt.classList.remove('header__text--hidden');

  e.preventDefault();
});



// const header = document.getElementByClassName('header');
// const header2 = document.querySelector('.header');
// let lastPos = document.documentElement.scrollTop;

// window.addEventListener('scroll', () => {
//   const currPos = document.documentElement.scrollTop;

//   console.log(header);
//   console.log(header2);
//   console.log('ola');

//   if (currPos > lastPos) {
//     if (currPos > header.offsetHeight) {
//       header.classList.add('-translate-y-full');
//     }
//   } else {
//     header.classList.remove('-translate-y-full');
//   }

//   lastPos = currPos;
// }, false);
