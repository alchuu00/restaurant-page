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

  const wavesSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,69.3C672,75,768,117,864,128C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>';
  footerContainer.innerHTML = wavesSvg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFRQUFxUTs7QUFFclE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BEN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pIMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZNO0FBQ0E7QUFDTTs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVU7QUFDaEM7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUMxRXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVyb0NvbnRhY3QoKSB7XG4gIGNvbnN0IGhlcm9Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9Db250YWN0LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGhlcm9Db250YWN0LmFwcGVuZENoaWxkKGgxKTtcblxuICByZXR1cm4gaGVyb0NvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xuICBjb25zdCBjb250YWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RCb3guY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ib3gnKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdwaG9uZScpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9ICfimI7vuI8gKDU1NSkgNTU1LTU1NTUnO1xuXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gJ+Kcie+4jyBpbmZvQHBpenphaGF2ZW4uY29tJztcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ/Cfj6AgSmFuZXogTm92YWsgU3RyZWV0IDIzLCAxMDAwIExqdWJsamFuYSwgU2xvdmVuaWEnO1xuXG4gIGNvbnN0IGdvb2dsZU1hcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ29vZ2xlTWFwcy5jbGFzc0xpc3QuYWRkKCdnb29nbGUtbWFwcycpO1xuICBnb29nbGVNYXBzLmlubmVySFRNTCA9XG4gICAgJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtMTIhMW0zITFkNTU4NDQuMTM4ODI5NzUxNSEyZDE0LjU0MzYwNzkxMzIwNzg3OSEzZDQ2LjAyNjc1NjI0NDk1NzU1NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhNWUwITNtMiExc3NsITJzc2khNHYxNjc4MjU5MDczMzg3ITVtMiExc3NsITJzc2lcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+JztcblxuICBjb250YWN0Qm94LmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdEJveC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoZ29vZ2xlTWFwcyk7XG5cbiAgcmV0dXJuIGNvbnRhY3RCb3g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIZXJvQ29udGFjdCgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZXJvLWltZycpO1xuXG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm8tdGV4dCcpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnUGl6emEgSGF2ZW4nO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdFeHBlcmllbmNlIHBpenphIHBlcmZlY3Rpb24gLSBkaW5lIGluIG9yIGdldCBpdCBkZWxpdmVyZWQgaG90IGFuZCBmcmVzaCB0byB5b3VyIGRvb3JzdGVwISc7XG4gIGhlcm9UZXh0LmFwcGVuZENoaWxkKHApO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmF0aW5nU2VjdGlvbigpIHtcbiAgY29uc3QgcmF0aW5nU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByYXRpbmdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhdGluZy1zZWN0aW9uJyk7XG5cbiAgY29uc3QgcmF0aW5nQm94ZXMgPSBbXG4gICAge1xuICAgICAgc3RhcnM6IDUsXG4gICAgICBuYW1lOiAnU2FyYWggRy4nLFxuICAgICAgdGV4dDogJ1BpenphIEhhdmVuIG5ldmVyIGRpc2FwcG9pbnRzISBUaGVpciBwaXp6YSBpcyBhbHdheXMgZnJlc2gsIGhvdCwgYW5kIGxvYWRlZCB3aXRoIHRvcHBpbmdzLiBUaGUgY3J1c3QgaXMgcGVyZmVjdGx5IGNyaXNweSBhbmQgdGhlIHNhdWNlIGlzIGRlbGljaW91cy4gSSB3b3VsZCBoaWdobHkgcmVjb21tZW5kIHRoaXMgcmVzdGF1cmFudCB0byBhbnkgcGl6emEgbG92ZXIgb3V0IHRoZXJlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJzOiA0LFxuICAgICAgbmFtZTogJ01pY2hhZWwgUi4nLFxuICAgICAgdGV4dDogJ0kgaGF2ZSBiZWVuIG9yZGVyaW5nIGZyb20gUGl6emEgSGF2ZW4gZm9yIHllYXJzIGFuZCBJIGhhdmUgbmV2ZXIgaGFkIGEgYmFkIGV4cGVyaWVuY2UuIFRoZSBzdGFmZiBpcyBhbHdheXMgZnJpZW5kbHkgYW5kIHRoZSBwaXp6YSBpcyBjb25zaXN0ZW50bHkgYW1hemluZy4gVGhleSBoYXZlIGEgZ3JlYXQgc2VsZWN0aW9uIG9mIHRvcHBpbmdzIGFuZCB0aGVpciBwcmljZXMgYXJlIHZlcnkgcmVhc29uYWJsZS4gSSBoaWdobHkgcmVjb21tZW5kIHRoaXMgcmVzdGF1cmFudCEnLFxuICAgIH0sXG4gICAge1xuICAgICAgc3RhcnM6IDUsXG4gICAgICBuYW1lOiAnQm9iIFMuJyxcbiAgICAgIHRleHQ6IFwiUGl6emEgSGF2ZW4gaXMgbXkgZ28tdG8gc3BvdCBmb3IgcGl6emEuIFRoZWlyIGNydXN0IGlzIHRoZSBwZXJmZWN0IGNvbWJpbmF0aW9uIG9mIGNyaXNweSBhbmQgY2hld3kgYW5kIHRoZWlyIHNhdWNlIGlzIHRoZSBiZXN0IEkgaGF2ZSBldmVyIHRhc3RlZC4gVGhleSBoYXZlIGEgZ3JlYXQgc2VsZWN0aW9uIG9mIHRvcHBpbmdzIGFuZCB0aGVpciBkZWxpdmVyeSBzZXJ2aWNlIGlzIGFsd2F5cyBwcm9tcHQuIElmIHlvdSBoYXZlbid0IHRyaWVkIFBpenphIEhhdmVuIHlldCwgeW91IGFyZSBtaXNzaW5nIG91dCFcIixcbiAgICB9LFxuICBdO1xuXG4gIHJhdGluZ0JveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgIGNvbnN0IHJhdGluZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJhdGluZ0JveC5jbGFzc0xpc3QuYWRkKCdyYXRpbmctYm94Jyk7XG5cbiAgICBjb25zdCByYXRpbmdTdGFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJhdGluZ1N0YXJzLmNsYXNzTGlzdC5hZGQoJ3JhdGluZy1zdGFycycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3guc3RhcnM7IGkrKykge1xuICAgICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuICAgICAgc3Rhci5pbm5lckhUTUwgPSAnJiM5NzMzOyc7XG4gICAgICByYXRpbmdTdGFycy5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gYm94LnN0YXJzOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XG4gICAgICBzdGFyLmlubmVySFRNTCA9ICcmIzk3MzQ7JztcbiAgICAgIHJhdGluZ1N0YXJzLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhdGluZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYXRpbmdOYW1lLmNsYXNzTGlzdC5hZGQoJ3JhdGluZy1uYW1lJyk7XG4gICAgcmF0aW5nTmFtZS5pbm5lckhUTUwgPSBib3gubmFtZTtcblxuICAgIGNvbnN0IHJhdGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYXRpbmdUZXh0LmNsYXNzTGlzdC5hZGQoJ3JhdGluZy10ZXh0Jyk7XG4gICAgcmF0aW5nVGV4dC5pbm5lckhUTUwgPSBib3gudGV4dDtcblxuICAgIHJhdGluZ0JveC5hcHBlbmRDaGlsZChyYXRpbmdTdGFycyk7XG4gICAgcmF0aW5nQm94LmFwcGVuZENoaWxkKHJhdGluZ05hbWUpO1xuICAgIHJhdGluZ0JveC5hcHBlbmRDaGlsZChyYXRpbmdUZXh0KTtcbiAgICByYXRpbmdTZWN0aW9uLmFwcGVuZENoaWxkKHJhdGluZ0JveCk7XG4gIH0pO1xuXG4gIHJldHVybiByYXRpbmdTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWxpZXZlcnlTZWN0aW9uKCkge1xuICBjb25zdCBkZWxpZXZlcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVsaWV2ZXJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlbGlldmVyeS1jb250YWluZXInKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ29yZGVyIGRlbGlldmVyeSc7XG4gIGRlbGlldmVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgZGVsaWV2ZXJ5TG9nbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsaWV2ZXJ5TG9nbzEuY2xhc3NMaXN0LmFkZCgnZGVsaWV2ZXJ5LWxvZ28nKTtcbiAgZGVsaWV2ZXJ5TG9nbzEuc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1nL3dvbHQucG5nJyk7XG4gIGRlbGlldmVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxpZXZlcnlMb2dvMSk7XG5cbiAgY29uc3QgZGVsaWV2ZXJ5TG9nbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsaWV2ZXJ5TG9nbzIuY2xhc3NMaXN0LmFkZCgnZGVsaWV2ZXJ5LWxvZ28nKTtcbiAgZGVsaWV2ZXJ5TG9nbzIuc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1nL3ViZXItZWF0cy5wbmcnKTtcbiAgZGVsaWV2ZXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGlldmVyeUxvZ28yKTtcblxuICByZXR1cm4gZGVsaWV2ZXJ5Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVJhdGluZ1NlY3Rpb24oKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlRGVsaWV2ZXJ5U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlcm9NZW51KCkge1xuICBjb25zdCBoZXJvTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvTWVudS5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICBoZXJvTWVudS5hcHBlbmRDaGlsZChoMSk7XG5cbiAgcmV0dXJuIGhlcm9NZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbWVudUJveGVzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdNYXJnaGVyaXRhJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnVG9tYXRvIHNhdWNlLCBmcmVzaCBtb3p6YXJlbGxhIGNoZWVzZSwgYmFzaWwgbGVhdmVzJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL21hcmdoZXJpdGEucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQZXBwZXJvbmknLFxuICAgICAgaW5ncmVkaWVudHM6ICdUb21hdG8gc2F1Y2UsIG1venphcmVsbGEgY2hlZXNlLCBwZXBwZXJvbmkgc2xpY2VzJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL3BlcHBlcm9uaS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhd2FpaWFuJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgaGFtLCBwaW5lYXBwbGUnLFxuICAgICAgaW1hZ2VVcmw6ICdpbWcvaGF3YWlpYW4ucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWZWdldGFyaWFuJyxcbiAgICAgIGluZ3JlZGllbnRzOlxuICAgICAgICAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgYmVsbCBwZXBwZXJzLCBtdXNocm9vbXMsIG9uaW9ucycsXG4gICAgICBpbWFnZVVybDogJ2ltZy92ZWdldGFyaWFuLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQkJRIENoaWNrZW4nLFxuICAgICAgaW5ncmVkaWVudHM6ICdCQlEgc2F1Y2UsIG1venphcmVsbGEgY2hlZXNlLCBncmlsbGVkIGNoaWNrZW4sIHJlZCBvbmlvbnMnLFxuICAgICAgaW1hZ2VVcmw6ICdpbWcvYmJxQ2hpY2tlbi5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01lYXQgTG92ZXJzJyxcbiAgICAgIGluZ3JlZGllbnRzOlxuICAgICAgICAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgcGVwcGVyb25pLCBzYXVzYWdlLCBiYWNvbiwgaGFtJyxcbiAgICAgIGltYWdlVXJsOiAnaW1nL21lYXQucG5nJyxcbiAgICB9LFxuICBdO1xuXG4gIG1lbnVCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUJveC5jbGFzc0xpc3QuYWRkKCdtZW51LWJveCcpO1xuXG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LW5hbWUnKTtcbiAgICBtZW51TmFtZS50ZXh0Q29udGVudCA9IGJveC5uYW1lO1xuXG4gICAgY29uc3QgbWVudUluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUluZ3JlZGllbnRzLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGV4dCcpO1xuICAgIG1lbnVJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGJveC5pbmdyZWRpZW50cztcblxuICAgIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51SW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gICAgbWVudUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGJveC5pbWFnZVVybCk7XG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKG1lbnVJbWcpO1xuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQobWVudU5hbWUpO1xuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQobWVudUluZ3JlZGllbnRzKTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJveCk7XG4gIH0pO1xuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9NZW51KCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKCkpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gIGNvbnN0IGhvbWVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XG4gIGhvbWVJdGVtLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVIb21lKCk7XG4gICAgY29uc29sZS5sb2coJ2hvbWUgcHJlc3NlZCcpO1xuICB9KTtcblxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBtZW51SXRlbS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlTWVudSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBjb250YWN0SXRlbS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUl0ZW0pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEl0ZW0pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgd2F2ZXNTdmcgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMzIwXCI+PHBhdGggZmlsbD1cIiMyNzMwMzZcIiBmaWxsLW9wYWNpdHk9XCIxXCIgZD1cIk0wLDI1Nkw0OCwyMzQuN0M5NiwyMTMsMTkyLDE3MSwyODgsMTMzLjNDMzg0LDk2LDQ4MCw2NCw1NzYsNjkuM0M2NzIsNzUsNzY4LDExNyw4NjQsMTI4Qzk2MCwxMzksMTA1NiwxMTcsMTE1MiwxMDYuN0MxMjQ4LDk2LDEzNDQsOTYsMTM5Miw5NkwxNDQwLDk2TDE0NDAsMzIwTDEzOTIsMzIwQzEzNDQsMzIwLDEyNDgsMzIwLDExNTIsMzIwQzEwNTYsMzIwLDk2MCwzMjAsODY0LDMyMEM3NjgsMzIwLDY3MiwzMjAsNTc2LDMyMEM0ODAsMzIwLDM4NCwzMjAsMjg4LDMyMEMxOTIsMzIwLDk2LDMyMCw0OCwzMjBMMCwzMjBaXCI+PC9wYXRoPjwvc3ZnPic7XG4gIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgPSB3YXZlc1N2ZztcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQWxjaHV1MDAnKTtcblxuICBjb25zdCBnaXRodWJMb2dvID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiIC8+PC9zdmc+JztcbiAgY29uc3QgZ2l0aHViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdpdGh1YkRpdi5pbm5lckhUTUwgPSBnaXRodWJMb2dvO1xuICBhLmFwcGVuZENoaWxkKGdpdGh1YkRpdik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0RldmVsb3BlZCBieSBBbGNodXUwMCc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcblxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2UtbG9hZCc7XG5cbnBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=