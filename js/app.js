function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('menu_opened');
}

const openMenuBtn = document.querySelector('.open-menu');
openMenuBtn.addEventListener('click', toggleMenu);

const closeMenuBtn = document.querySelector('.close-menu');
closeMenuBtn.addEventListener('click', toggleMenu);
