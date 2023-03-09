/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeroContact() {
  const heroContact = document.createElement('div');
  heroContact.classList.add('hero');

  const h1 = document.createElement('h1');
  h1.textContent = 'Contact';

  heroContact.appendChild(h1);

  return heroContact;
}

function createContactSection() {
  const contactBox = document.createElement('div');
  contactBox.classList.add('contact-box');

  const phone = document.createElement('div');
  phone.classList.add('phone');
  phone.textContent = '☎️ (555) 555-5555';

  const email = document.createElement('div');
  email.classList.add('email');
  email.textContent = '✉️ info@pizzahaven.com';

  const address = document.createElement('div');
  address.classList.add('address');
  address.textContent = '🏠 Janez Novak Street 23, 1000 Ljubljana, Slovenia';

  const googleMaps = document.createElement('div');
  googleMaps.classList.add('google-maps');
  googleMaps.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55844.1388297515!2d14.543607913207879!3d46.026756244957554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssl!2ssi!4v1678259073387!5m2!1ssl!2ssi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  contactBox.appendChild(phone);
  contactBox.appendChild(email);
  contactBox.appendChild(address);
  contactBox.appendChild(googleMaps);

  return contactBox;
}

function createContact() {
  const main = document.querySelector('.main');

  main.innerHTML = '';

  main.appendChild(createHeroContact());
  main.appendChild(createContactSection());

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero-img');

  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const h1 = document.createElement('h1');
  h1.textContent = 'Pizza Haven';
  heroText.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Experience pizza perfection - dine in or get it delivered hot and fresh to your doorstep!';
  heroText.appendChild(p);

  const scrollDiv = document.createElement('div');
  scrollDiv.classList.add('scroll-div');
  scrollDiv.innerHTML = '&#9660;';
  heroText.appendChild(scrollDiv);

  header.appendChild(heroText);

  return header;
}

function createRatingSection() {
  const ratingSection = document.createElement('div');
  ratingSection.classList.add('rating-section');

  const ratingBoxes = [
    {
      stars: 5,
      name: 'Sarah G.',
      text: 'Pizza Haven never disappoints! Their pizza is always fresh, hot, and loaded with toppings. The crust is perfectly crispy and the sauce is delicious. I would highly recommend this restaurant to any pizza lover out there',
    },
    {
      stars: 4,
      name: 'Michael R.',
      text: 'I have been ordering from Pizza Haven for years and I have never had a bad experience. The staff is always friendly and the pizza is consistently amazing. They have a great selection of toppings and their prices are very reasonable. I highly recommend this restaurant!',
    },
    {
      stars: 5,
      name: 'Bob S.',
      text: "Pizza Haven is my go-to spot for pizza. Their crust is the perfect combination of crispy and chewy and their sauce is the best I have ever tasted. They have a great selection of toppings and their delivery service is always prompt. If you haven't tried Pizza Haven yet, you are missing out!",
    },
  ];

  ratingBoxes.forEach((box) => {
    const ratingBox = document.createElement('div');
    ratingBox.classList.add('rating-box');

    const ratingStars = document.createElement('div');
    ratingStars.classList.add('rating-stars');

    for (let i = 0; i < box.stars; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '&#9733;';
      ratingStars.appendChild(star);
    }

    for (let i = box.stars; i < 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '&#9734;';
      ratingStars.appendChild(star);
    }

    const ratingName = document.createElement('div');
    ratingName.classList.add('rating-name');
    ratingName.innerHTML = box.name;

    const ratingText = document.createElement('div');
    ratingText.classList.add('rating-text');
    ratingText.innerHTML = box.text;

    ratingBox.appendChild(ratingStars);
    ratingBox.appendChild(ratingName);
    ratingBox.appendChild(ratingText);
    ratingSection.appendChild(ratingBox);
  });

  return ratingSection;
}

function createDelieverySection() {
  const delieveryContainer = document.createElement('div');
  delieveryContainer.classList.add('delievery-container');

  const h1 = document.createElement('h1');
  h1.textContent = 'order delievery';
  delieveryContainer.appendChild(h1);

  const delieveryLogo1 = document.createElement('img');
  delieveryLogo1.classList.add('delievery-logo');
  delieveryLogo1.setAttribute('src', 'img/wolt.png');
  delieveryContainer.appendChild(delieveryLogo1);

  const delieveryLogo2 = document.createElement('img');
  delieveryLogo2.classList.add('delievery-logo');
  delieveryLogo2.setAttribute('src', 'img/uber-eats.png');
  delieveryContainer.appendChild(delieveryLogo2);

  return delieveryContainer;
}

function createHome() {
  const main = document.querySelector('.main');

  main.innerHTML = '';

  main.appendChild(createHeader());
  main.appendChild(createRatingSection());
  main.appendChild(createDelieverySection());

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeroMenu() {
  const heroMenu = document.createElement('div');
  heroMenu.classList.add('hero');

  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  heroMenu.appendChild(h1);

  return heroMenu;
}

function createMenuSection() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuBoxes = [
    {
      name: 'Margherita',
      ingredients: 'Tomato sauce, fresh mozzarella cheese, basil leaves',
      imageUrl: 'img/margherita.png',
    },
    {
      name: 'Pepperoni',
      ingredients: 'Tomato sauce, mozzarella cheese, pepperoni slices',
      imageUrl: 'img/pepperoni.png',
    },
    {
      name: 'Hawaiian',
      ingredients: 'Tomato sauce, mozzarella cheese, ham, pineapple',
      imageUrl: 'img/hawaiian.png',
    },
    {
      name: 'Vegetarian',
      ingredients:
        'Tomato sauce, mozzarella cheese, bell peppers, mushrooms, onions',
      imageUrl: 'img/vegetarian.png',
    },
    {
      name: 'BBQ Chicken',
      ingredients: 'BBQ sauce, mozzarella cheese, grilled chicken, red onions',
      imageUrl: 'img/bbqChicken.png',
    },
    {
      name: 'Meat Lovers',
      ingredients:
        'Tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, ham',
      imageUrl: 'img/meat.png',
    },
  ];

  menuBoxes.forEach((box) => {
    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');

    const menuName = document.createElement('div');
    menuName.classList.add('menu-name');
    menuName.textContent = box.name;

    const menuIngredients = document.createElement('div');
    menuIngredients.classList.add('menu-text');
    menuIngredients.textContent = box.ingredients;

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu-img');
    menuImg.setAttribute('src', box.imageUrl);

    menuBox.appendChild(menuImg);
    menuBox.appendChild(menuName);
    menuBox.appendChild(menuIngredients);

    menuContainer.appendChild(menuBox);
  });
  return menuContainer;
}

function createMenu() {
  const main = document.querySelector('.main');

  main.innerHTML = '';

  main.appendChild(createHeroMenu());
  main.appendChild(createMenuSection());

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function createNav() {
  const nav = document.createElement('nav');

  const homeItem = document.createElement('div');
  homeItem.classList.add('nav-item');
  homeItem.textContent = 'Home';
  homeItem.addEventListener('click', () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    console.log('home pressed');
  });

  const menuItem = document.createElement('div');
  menuItem.classList.add('nav-item');
  menuItem.textContent = 'Menu';
  menuItem.addEventListener('click', () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const contactItem = document.createElement('div');
  contactItem.classList.add('nav-item');
  contactItem.textContent = 'Contact';
  contactItem.addEventListener('click', () => {
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  nav.appendChild(homeItem);
  nav.appendChild(menuItem);
  nav.appendChild(contactItem);

  return nav;
}

function createFooter() {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');

  const footer = document.createElement('footer');

  const a = document.createElement('a');
  a.setAttribute('href', 'https://github.com/Alchuu00');

  const githubLogo =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>';
  const githubDiv = document.createElement('div');
  githubDiv.innerHTML = githubLogo;
  a.appendChild(githubDiv);
  footer.appendChild(a);

  const p = document.createElement('p');
  p.textContent = 'Developed by Alchuu00';
  footer.appendChild(p);

  footerContainer.appendChild(footer);
  return footerContainer;
}

function pageLoad() {
  const content = document.getElementById('content');
  const main = document.querySelector('.main');

  content.appendChild(createNav());
  content.appendChild(main);
  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild(createFooter());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");


(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhlcm9Db250YWN0KCkge1xuICBjb25zdCBoZXJvQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZXJvQ29udGFjdC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgcmV0dXJuIGhlcm9Db250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcbiAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYm94Jyk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSAn4piO77iPICg1NTUpIDU1NS01NTU1JztcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICBlbWFpbC50ZXh0Q29udGVudCA9ICfinInvuI8gaW5mb0BwaXp6YWhhdmVuLmNvbSc7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICfwn4+gIEphbmV6IE5vdmFrIFN0cmVldCAyMywgMTAwMCBManVibGphbmEsIFNsb3ZlbmlhJztcblxuICBjb25zdCBnb29nbGVNYXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdvb2dsZU1hcHMuY2xhc3NMaXN0LmFkZCgnZ29vZ2xlLW1hcHMnKTtcbiAgZ29vZ2xlTWFwcy5pbm5lckhUTUwgPVxuICAgICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTEyITFtMyExZDU1ODQ0LjEzODgyOTc1MTUhMmQxNC41NDM2MDc5MTMyMDc4NzkhM2Q0Ni4wMjY3NTYyNDQ5NTc1NTQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITVlMCEzbTIhMXNzbCEyc3NpITR2MTY3ODI1OTA3MzM4NyE1bTIhMXNzbCEyc3NpXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPic7XG5cbiAgY29udGFjdEJveC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGdvb2dsZU1hcHMpO1xuXG4gIHJldHVybiBjb250YWN0Qm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb0NvbnRhY3QoKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcblxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1BpenphIEhhdmVuJztcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnRXhwZXJpZW5jZSBwaXp6YSBwZXJmZWN0aW9uIC0gZGluZSBpbiBvciBnZXQgaXQgZGVsaXZlcmVkIGhvdCBhbmQgZnJlc2ggdG8geW91ciBkb29yc3RlcCEnO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsRGl2LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1kaXYnKTtcbiAgc2Nyb2xsRGl2LmlubmVySFRNTCA9ICcmIzk2NjA7JztcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhdGluZ1NlY3Rpb24oKSB7XG4gIGNvbnN0IHJhdGluZ1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmF0aW5nU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyYXRpbmctc2VjdGlvbicpO1xuXG4gIGNvbnN0IHJhdGluZ0JveGVzID0gW1xuICAgIHtcbiAgICAgIHN0YXJzOiA1LFxuICAgICAgbmFtZTogJ1NhcmFoIEcuJyxcbiAgICAgIHRleHQ6ICdQaXp6YSBIYXZlbiBuZXZlciBkaXNhcHBvaW50cyEgVGhlaXIgcGl6emEgaXMgYWx3YXlzIGZyZXNoLCBob3QsIGFuZCBsb2FkZWQgd2l0aCB0b3BwaW5ncy4gVGhlIGNydXN0IGlzIHBlcmZlY3RseSBjcmlzcHkgYW5kIHRoZSBzYXVjZSBpcyBkZWxpY2lvdXMuIEkgd291bGQgaGlnaGx5IHJlY29tbWVuZCB0aGlzIHJlc3RhdXJhbnQgdG8gYW55IHBpenphIGxvdmVyIG91dCB0aGVyZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFyczogNCxcbiAgICAgIG5hbWU6ICdNaWNoYWVsIFIuJyxcbiAgICAgIHRleHQ6ICdJIGhhdmUgYmVlbiBvcmRlcmluZyBmcm9tIFBpenphIEhhdmVuIGZvciB5ZWFycyBhbmQgSSBoYXZlIG5ldmVyIGhhZCBhIGJhZCBleHBlcmllbmNlLiBUaGUgc3RhZmYgaXMgYWx3YXlzIGZyaWVuZGx5IGFuZCB0aGUgcGl6emEgaXMgY29uc2lzdGVudGx5IGFtYXppbmcuIFRoZXkgaGF2ZSBhIGdyZWF0IHNlbGVjdGlvbiBvZiB0b3BwaW5ncyBhbmQgdGhlaXIgcHJpY2VzIGFyZSB2ZXJ5IHJlYXNvbmFibGUuIEkgaGlnaGx5IHJlY29tbWVuZCB0aGlzIHJlc3RhdXJhbnQhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJzOiA1LFxuICAgICAgbmFtZTogJ0JvYiBTLicsXG4gICAgICB0ZXh0OiBcIlBpenphIEhhdmVuIGlzIG15IGdvLXRvIHNwb3QgZm9yIHBpenphLiBUaGVpciBjcnVzdCBpcyB0aGUgcGVyZmVjdCBjb21iaW5hdGlvbiBvZiBjcmlzcHkgYW5kIGNoZXd5IGFuZCB0aGVpciBzYXVjZSBpcyB0aGUgYmVzdCBJIGhhdmUgZXZlciB0YXN0ZWQuIFRoZXkgaGF2ZSBhIGdyZWF0IHNlbGVjdGlvbiBvZiB0b3BwaW5ncyBhbmQgdGhlaXIgZGVsaXZlcnkgc2VydmljZSBpcyBhbHdheXMgcHJvbXB0LiBJZiB5b3UgaGF2ZW4ndCB0cmllZCBQaXp6YSBIYXZlbiB5ZXQsIHlvdSBhcmUgbWlzc2luZyBvdXQhXCIsXG4gICAgfSxcbiAgXTtcblxuICByYXRpbmdCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICBjb25zdCByYXRpbmdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYXRpbmdCb3guY2xhc3NMaXN0LmFkZCgncmF0aW5nLWJveCcpO1xuXG4gICAgY29uc3QgcmF0aW5nU3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYXRpbmdTdGFycy5jbGFzc0xpc3QuYWRkKCdyYXRpbmctc3RhcnMnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94LnN0YXJzOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcbiAgICAgIHN0YXIuaW5uZXJIVE1MID0gJyYjOTczMzsnO1xuICAgICAgcmF0aW5nU3RhcnMuYXBwZW5kQ2hpbGQoc3Rhcik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGJveC5zdGFyczsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuICAgICAgc3Rhci5pbm5lckhUTUwgPSAnJiM5NzM0Oyc7XG4gICAgICByYXRpbmdTdGFycy5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICB9XG5cbiAgICBjb25zdCByYXRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmF0aW5nTmFtZS5jbGFzc0xpc3QuYWRkKCdyYXRpbmctbmFtZScpO1xuICAgIHJhdGluZ05hbWUuaW5uZXJIVE1MID0gYm94Lm5hbWU7XG5cbiAgICBjb25zdCByYXRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmF0aW5nVGV4dC5jbGFzc0xpc3QuYWRkKCdyYXRpbmctdGV4dCcpO1xuICAgIHJhdGluZ1RleHQuaW5uZXJIVE1MID0gYm94LnRleHQ7XG5cbiAgICByYXRpbmdCb3guYXBwZW5kQ2hpbGQocmF0aW5nU3RhcnMpO1xuICAgIHJhdGluZ0JveC5hcHBlbmRDaGlsZChyYXRpbmdOYW1lKTtcbiAgICByYXRpbmdCb3guYXBwZW5kQ2hpbGQocmF0aW5nVGV4dCk7XG4gICAgcmF0aW5nU2VjdGlvbi5hcHBlbmRDaGlsZChyYXRpbmdCb3gpO1xuICB9KTtcblxuICByZXR1cm4gcmF0aW5nU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsaWV2ZXJ5U2VjdGlvbigpIHtcbiAgY29uc3QgZGVsaWV2ZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlbGlldmVyeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWxpZXZlcnktY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdvcmRlciBkZWxpZXZlcnknO1xuICBkZWxpZXZlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IGRlbGlldmVyeUxvZ28xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGlldmVyeUxvZ28xLmNsYXNzTGlzdC5hZGQoJ2RlbGlldmVyeS1sb2dvJyk7XG4gIGRlbGlldmVyeUxvZ28xLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy93b2x0LnBuZycpO1xuICBkZWxpZXZlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsaWV2ZXJ5TG9nbzEpO1xuXG4gIGNvbnN0IGRlbGlldmVyeUxvZ28yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGlldmVyeUxvZ28yLmNsYXNzTGlzdC5hZGQoJ2RlbGlldmVyeS1sb2dvJyk7XG4gIGRlbGlldmVyeUxvZ28yLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy91YmVyLWVhdHMucG5nJyk7XG4gIGRlbGlldmVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxpZXZlcnlMb2dvMik7XG5cbiAgcmV0dXJuIGRlbGlldmVyeUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVSYXRpbmdTZWN0aW9uKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZURlbGlldmVyeVNlY3Rpb24oKSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJmdW5jdGlvbiBjcmVhdGVIZXJvTWVudSgpIHtcbiAgY29uc3QgaGVyb01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb01lbnUuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgaGVyb01lbnUuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIHJldHVybiBoZXJvTWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IG1lbnVCb3hlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTWFyZ2hlcml0YScsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgZnJlc2ggbW96emFyZWxsYSBjaGVlc2UsIGJhc2lsIGxlYXZlcycsXG4gICAgICBpbWFnZVVybDogJ2ltZy9tYXJnaGVyaXRhLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGVwcGVyb25pJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgcGVwcGVyb25pIHNsaWNlcycsXG4gICAgICBpbWFnZVVybDogJ2ltZy9wZXBwZXJvbmkucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdIYXdhaWlhbicsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGhhbSwgcGluZWFwcGxlJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL2hhd2FpaWFuLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVmVnZXRhcmlhbicsXG4gICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGJlbGwgcGVwcGVycywgbXVzaHJvb21zLCBvbmlvbnMnLFxuICAgICAgaW1hZ2VVcmw6ICdpbWcvdmVnZXRhcmlhbi5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JCUSBDaGlja2VuJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQkJRIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgZ3JpbGxlZCBjaGlja2VuLCByZWQgb25pb25zJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL2JicUNoaWNrZW4ucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWF0IExvdmVycycsXG4gICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIHBlcHBlcm9uaSwgc2F1c2FnZSwgYmFjb24sIGhhbScsXG4gICAgICBpbWFnZVVybDogJ2ltZy9tZWF0LnBuZycsXG4gICAgfSxcbiAgXTtcblxuICBtZW51Qm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnbWVudS1ib3gnKTtcblxuICAgIGNvbnN0IG1lbnVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lJyk7XG4gICAgbWVudU5hbWUudGV4dENvbnRlbnQgPSBib3gubmFtZTtcblxuICAgIGNvbnN0IG1lbnVJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQnKTtcbiAgICBtZW51SW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBib3guaW5ncmVkaWVudHM7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltZycpO1xuICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBib3guaW1hZ2VVcmwpO1xuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKG1lbnVJbmdyZWRpZW50cyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCb3gpO1xuICB9KTtcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvTWVudSgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICBjb25zdCBob21lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lSXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBob21lSXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlSG9tZSgpO1xuICAgIGNvbnNvbGUubG9nKCdob21lIHByZXNzZWQnKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZU1lbnUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIGNvbnRhY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZUNvbnRhY3QoKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVJdGVtKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbGNodXUwMCcpO1xuXG4gIGNvbnN0IGdpdGh1YkxvZ28gPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIgLz48L3N2Zz4nO1xuICBjb25zdCBnaXRodWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2l0aHViRGl2LmlubmVySFRNTCA9IGdpdGh1YkxvZ287XG4gIGEuYXBwZW5kQ2hpbGQoZ2l0aHViRGl2KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIGJ5IEFsY2h1dTAwJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZS1sb2FkJztcblxucGFnZUxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==