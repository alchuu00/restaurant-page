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

export default createMenu;
