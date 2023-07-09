// Esta funcion permite abrir y cerrar el menu de navegacion en dispositivos moviles
function toggleMenu() { 
  const navMenu = document.querySelector('.nav-menu'); // Selecciona el elemento con la clase nav-menu
  navMenu.classList.toggle('menu_opened'); // Agrega o remueve la clase menu_opened
}

const openMenuBtn = document.querySelector('.open-menu'); // Selecciona el elemento con la clase open-menu
openMenuBtn.addEventListener('click', toggleMenu); // Agrega el evento click al elemento openMenuBtn y ejecuta la funcion toggleMenu

const closeMenuBtn = document.querySelector('.close-menu'); // Selecciona el elemento con la clase close-menu
closeMenuBtn.addEventListener('click', toggleMenu); // Agrega el evento click al elemento closeMenuBtn y ejecuta la funcion toggleMenu

