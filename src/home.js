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

export default createHome;
