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




function setActiveButton() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    if (item !== item.classList.contains('active')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function createNav() {
  const nav = document.createElement('nav');

  const homeItem = document.createElement('div');
  homeItem.classList.add('nav-item');
  homeItem.textContent = 'Home';
  homeItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeItem);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(); // FIX THIS
    console.log('home pressed');
  });

  const menuItem = document.createElement('div');
  menuItem.classList.add('nav-item');
  menuItem.textContent = 'Menu';
  menuItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuItem);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const contactItem = document.createElement('div');
  contactItem.classList.add('nav-item');
  contactItem.textContent = 'Contact';
  contactItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactItem);
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

  const wavesSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,69.3C672,75,768,117,864,128C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>';
  footerContainer.innerHTML = wavesSvg;

  const footer = document.createElement('footer');

  const a = document.createElement('a');
  a.setAttribute('href', 'https://github.com/Alchuu00');

  const githubLogo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhlcm9Db250YWN0KCkge1xuICBjb25zdCBoZXJvQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZXJvQ29udGFjdC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgcmV0dXJuIGhlcm9Db250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcbiAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYm94Jyk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSAn4piO77iPICg1NTUpIDU1NS01NTU1JztcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICBlbWFpbC50ZXh0Q29udGVudCA9ICfinInvuI8gaW5mb0BwaXp6YWhhdmVuLmNvbSc7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICfwn4+gIEphbmV6IE5vdmFrIFN0cmVldCAyMywgMTAwMCBManVibGphbmEsIFNsb3ZlbmlhJztcblxuICBjb25zdCBnb29nbGVNYXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdvb2dsZU1hcHMuY2xhc3NMaXN0LmFkZCgnZ29vZ2xlLW1hcHMnKTtcbiAgZ29vZ2xlTWFwcy5pbm5lckhUTUwgPVxuICAgICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTEyITFtMyExZDU1ODQ0LjEzODgyOTc1MTUhMmQxNC41NDM2MDc5MTMyMDc4NzkhM2Q0Ni4wMjY3NTYyNDQ5NTc1NTQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITVlMCEzbTIhMXNzbCEyc3NpITR2MTY3ODI1OTA3MzM4NyE1bTIhMXNzbCEyc3NpXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPic7XG5cbiAgY29udGFjdEJveC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGdvb2dsZU1hcHMpO1xuXG4gIHJldHVybiBjb250YWN0Qm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb0NvbnRhY3QoKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcblxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1BpenphIEhhdmVuJztcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnRXhwZXJpZW5jZSBwaXp6YSBwZXJmZWN0aW9uIC0gZGluZSBpbiBvciBnZXQgaXQgZGVsaXZlcmVkIGhvdCBhbmQgZnJlc2ggdG8geW91ciBkb29yc3RlcCEnO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChwKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhdGluZ1NlY3Rpb24oKSB7XG4gIGNvbnN0IHJhdGluZ1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmF0aW5nU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyYXRpbmctc2VjdGlvbicpO1xuXG4gIGNvbnN0IHJhdGluZ0JveGVzID0gW1xuICAgIHtcbiAgICAgIHN0YXJzOiA1LFxuICAgICAgbmFtZTogJ1NhcmFoIEcuJyxcbiAgICAgIHRleHQ6ICdQaXp6YSBIYXZlbiBuZXZlciBkaXNhcHBvaW50cyEgVGhlaXIgcGl6emEgaXMgYWx3YXlzIGZyZXNoLCBob3QsIGFuZCBsb2FkZWQgd2l0aCB0b3BwaW5ncy4gVGhlIGNydXN0IGlzIHBlcmZlY3RseSBjcmlzcHkgYW5kIHRoZSBzYXVjZSBpcyBkZWxpY2lvdXMuIEkgd291bGQgaGlnaGx5IHJlY29tbWVuZCB0aGlzIHJlc3RhdXJhbnQgdG8gYW55IHBpenphIGxvdmVyIG91dCB0aGVyZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFyczogNCxcbiAgICAgIG5hbWU6ICdNaWNoYWVsIFIuJyxcbiAgICAgIHRleHQ6ICdJIGhhdmUgYmVlbiBvcmRlcmluZyBmcm9tIFBpenphIEhhdmVuIGZvciB5ZWFycyBhbmQgSSBoYXZlIG5ldmVyIGhhZCBhIGJhZCBleHBlcmllbmNlLiBUaGUgc3RhZmYgaXMgYWx3YXlzIGZyaWVuZGx5IGFuZCB0aGUgcGl6emEgaXMgY29uc2lzdGVudGx5IGFtYXppbmcuIFRoZXkgaGF2ZSBhIGdyZWF0IHNlbGVjdGlvbiBvZiB0b3BwaW5ncyBhbmQgdGhlaXIgcHJpY2VzIGFyZSB2ZXJ5IHJlYXNvbmFibGUuIEkgaGlnaGx5IHJlY29tbWVuZCB0aGlzIHJlc3RhdXJhbnQhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJzOiA1LFxuICAgICAgbmFtZTogJ0JvYiBTLicsXG4gICAgICB0ZXh0OiBcIlBpenphIEhhdmVuIGlzIG15IGdvLXRvIHNwb3QgZm9yIHBpenphLiBUaGVpciBjcnVzdCBpcyB0aGUgcGVyZmVjdCBjb21iaW5hdGlvbiBvZiBjcmlzcHkgYW5kIGNoZXd5IGFuZCB0aGVpciBzYXVjZSBpcyB0aGUgYmVzdCBJIGhhdmUgZXZlciB0YXN0ZWQuIFRoZXkgaGF2ZSBhIGdyZWF0IHNlbGVjdGlvbiBvZiB0b3BwaW5ncyBhbmQgdGhlaXIgZGVsaXZlcnkgc2VydmljZSBpcyBhbHdheXMgcHJvbXB0LiBJZiB5b3UgaGF2ZW4ndCB0cmllZCBQaXp6YSBIYXZlbiB5ZXQsIHlvdSBhcmUgbWlzc2luZyBvdXQhXCIsXG4gICAgfSxcbiAgXTtcblxuICByYXRpbmdCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICBjb25zdCByYXRpbmdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYXRpbmdCb3guY2xhc3NMaXN0LmFkZCgncmF0aW5nLWJveCcpO1xuXG4gICAgY29uc3QgcmF0aW5nU3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYXRpbmdTdGFycy5jbGFzc0xpc3QuYWRkKCdyYXRpbmctc3RhcnMnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94LnN0YXJzOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcbiAgICAgIHN0YXIuaW5uZXJIVE1MID0gJyYjOTczMzsnO1xuICAgICAgcmF0aW5nU3RhcnMuYXBwZW5kQ2hpbGQoc3Rhcik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGJveC5zdGFyczsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuICAgICAgc3Rhci5pbm5lckhUTUwgPSAnJiM5NzM0Oyc7XG4gICAgICByYXRpbmdTdGFycy5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICB9XG5cbiAgICBjb25zdCByYXRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmF0aW5nTmFtZS5jbGFzc0xpc3QuYWRkKCdyYXRpbmctbmFtZScpO1xuICAgIHJhdGluZ05hbWUuaW5uZXJIVE1MID0gYm94Lm5hbWU7XG5cbiAgICBjb25zdCByYXRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmF0aW5nVGV4dC5jbGFzc0xpc3QuYWRkKCdyYXRpbmctdGV4dCcpO1xuICAgIHJhdGluZ1RleHQuaW5uZXJIVE1MID0gYm94LnRleHQ7XG5cbiAgICByYXRpbmdCb3guYXBwZW5kQ2hpbGQocmF0aW5nU3RhcnMpO1xuICAgIHJhdGluZ0JveC5hcHBlbmRDaGlsZChyYXRpbmdOYW1lKTtcbiAgICByYXRpbmdCb3guYXBwZW5kQ2hpbGQocmF0aW5nVGV4dCk7XG4gICAgcmF0aW5nU2VjdGlvbi5hcHBlbmRDaGlsZChyYXRpbmdCb3gpO1xuICB9KTtcblxuICByZXR1cm4gcmF0aW5nU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsaWV2ZXJ5U2VjdGlvbigpIHtcbiAgY29uc3QgZGVsaWV2ZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlbGlldmVyeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWxpZXZlcnktY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdvcmRlciBkZWxpZXZlcnknO1xuICBkZWxpZXZlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IGRlbGlldmVyeUxvZ28xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGlldmVyeUxvZ28xLmNsYXNzTGlzdC5hZGQoJ2RlbGlldmVyeS1sb2dvJyk7XG4gIGRlbGlldmVyeUxvZ28xLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy93b2x0LnBuZycpO1xuICBkZWxpZXZlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsaWV2ZXJ5TG9nbzEpO1xuXG4gIGNvbnN0IGRlbGlldmVyeUxvZ28yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGlldmVyeUxvZ28yLmNsYXNzTGlzdC5hZGQoJ2RlbGlldmVyeS1sb2dvJyk7XG4gIGRlbGlldmVyeUxvZ28yLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy91YmVyLWVhdHMucG5nJyk7XG4gIGRlbGlldmVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxpZXZlcnlMb2dvMik7XG5cbiAgcmV0dXJuIGRlbGlldmVyeUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVSYXRpbmdTZWN0aW9uKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZURlbGlldmVyeVNlY3Rpb24oKSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJmdW5jdGlvbiBjcmVhdGVIZXJvTWVudSgpIHtcbiAgY29uc3QgaGVyb01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb01lbnUuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgaGVyb01lbnUuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIHJldHVybiBoZXJvTWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IG1lbnVCb3hlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTWFyZ2hlcml0YScsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgZnJlc2ggbW96emFyZWxsYSBjaGVlc2UsIGJhc2lsIGxlYXZlcycsXG4gICAgICBpbWFnZVVybDogJ2ltZy9tYXJnaGVyaXRhLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGVwcGVyb25pJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgcGVwcGVyb25pIHNsaWNlcycsXG4gICAgICBpbWFnZVVybDogJ2ltZy9wZXBwZXJvbmkucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdIYXdhaWlhbicsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGhhbSwgcGluZWFwcGxlJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL2hhd2FpaWFuLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVmVnZXRhcmlhbicsXG4gICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGJlbGwgcGVwcGVycywgbXVzaHJvb21zLCBvbmlvbnMnLFxuICAgICAgaW1hZ2VVcmw6ICdpbWcvdmVnZXRhcmlhbi5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JCUSBDaGlja2VuJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQkJRIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgZ3JpbGxlZCBjaGlja2VuLCByZWQgb25pb25zJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL2JicUNoaWNrZW4ucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWF0IExvdmVycycsXG4gICAgICBpbmdyZWRpZW50czpcbiAgICAgICAgJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIHBlcHBlcm9uaSwgc2F1c2FnZSwgYmFjb24sIGhhbScsXG4gICAgICBpbWFnZVVybDogJ2ltZy9tZWF0LnBuZycsXG4gICAgfSxcbiAgXTtcblxuICBtZW51Qm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnbWVudS1ib3gnKTtcblxuICAgIGNvbnN0IG1lbnVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lJyk7XG4gICAgbWVudU5hbWUudGV4dENvbnRlbnQgPSBib3gubmFtZTtcblxuICAgIGNvbnN0IG1lbnVJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQnKTtcbiAgICBtZW51SW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBib3guaW5ncmVkaWVudHM7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltZycpO1xuICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBib3guaW1hZ2VVcmwpO1xuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKG1lbnVJbmdyZWRpZW50cyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCb3gpO1xuICB9KTtcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvTWVudSgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKCkge1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSAhPT0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgY29uc3QgaG9tZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgaG9tZUl0ZW0udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihob21lSXRlbSk7XG4gICAgY3JlYXRlSG9tZSgpOyAvLyBGSVggVEhJU1xuICAgIGNvbnNvbGUubG9nKCdob21lIHByZXNzZWQnKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51SXRlbSk7XG4gICAgY3JlYXRlTWVudSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBjb250YWN0SXRlbS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RJdGVtKTtcbiAgICBjcmVhdGVDb250YWN0KCk7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lSXRlbSk7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInKTtcblxuICBjb25zdCB3YXZlc1N2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMzIwXCI+PHBhdGggZmlsbD1cIiMyNzMwMzZcIiBmaWxsLW9wYWNpdHk9XCIxXCIgZD1cIk0wLDI1Nkw0OCwyMzQuN0M5NiwyMTMsMTkyLDE3MSwyODgsMTMzLjNDMzg0LDk2LDQ4MCw2NCw1NzYsNjkuM0M2NzIsNzUsNzY4LDExNyw4NjQsMTI4Qzk2MCwxMzksMTA1NiwxMTcsMTE1MiwxMDYuN0MxMjQ4LDk2LDEzNDQsOTYsMTM5Miw5NkwxNDQwLDk2TDE0NDAsMzIwTDEzOTIsMzIwQzEzNDQsMzIwLDEyNDgsMzIwLDExNTIsMzIwQzEwNTYsMzIwLDk2MCwzMjAsODY0LDMyMEM3NjgsMzIwLDY3MiwzMjAsNTc2LDMyMEM0ODAsMzIwLDM4NCwzMjAsMjg4LDMyMEMxOTIsMzIwLDk2LDMyMCw0OCwzMjBMMCwzMjBaXCI+PC9wYXRoPjwvc3ZnPic7XG4gIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgPSB3YXZlc1N2ZztcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQWxjaHV1MDAnKTtcblxuICBjb25zdCBnaXRodWJMb2dvID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIiAvPjwvc3ZnPic7XG4gIGNvbnN0IGdpdGh1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnaXRodWJEaXYuaW5uZXJIVE1MID0gZ2l0aHViTG9nbztcbiAgYS5hcHBlbmRDaGlsZChnaXRodWJEaXYpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdEZXZlbG9wZWQgYnkgQWxjaHV1MDAnO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIHJldHVybiBmb290ZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlLWxvYWQnO1xuXG5wYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9