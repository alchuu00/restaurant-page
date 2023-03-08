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

export default createContact;
