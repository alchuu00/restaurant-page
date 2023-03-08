import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

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
    createHome(); // FIX THIS
    console.log('home pressed');
  });

  const menuItem = document.createElement('div');
  menuItem.classList.add('nav-item');
  menuItem.textContent = 'Menu';
  menuItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuItem);
    createMenu();
  });

  const contactItem = document.createElement('div');
  contactItem.classList.add('nav-item');
  contactItem.textContent = 'Contact';
  contactItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactItem);
    createContact();
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
  content.appendChild(createHome());
  content.appendChild(createFooter());
}

export default pageLoad;
