function createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero-img');

  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const h1 = document.createElement('h1');
  h1.textContent = 'Restaurant page';
  heroText.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Best food in town!';
  heroText.appendChild(p);

  header.appendChild(heroText);

  return header;
}

function createRatingSection() {
  const ratingSection = document.createElement('div');
  ratingSection.classList.add('rating-section');

  const ratingBoxes = [
    {
      stars: 3,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lectus vitae nunc luctus dignissim.',
    },
    {
      stars: 4,
      name: 'Jane Doe',
      text: 'Pellentesque blandit, augue vel accumsan ultrices, augue odio bibendum mi, nec lobortis erat lorem eget urna.',
    },
    {
      stars: 5,
      name: 'Bob Smith',
      text: 'Suspendisse sed maximus massa. In convallis quam ac nulla bibendum, in varius ante fringilla.',
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

  main.appendChild(createHeader());
  main.appendChild(createRatingSection());
  main.appendChild(createDelieverySection());

  return main;
}

export default createHome;
