// Esta funcion permite abrir y cerrar el menu de navegacion en dispositivos moviles
function togglemenu () { 
  const navmenu = document.querySelector('.menu'); // Selecciona el elemento con la clase menu 
  navmenu.classList.toggle('menu_opened'); // Agrega o remueve la clase menu _opened
}

const openmenuBtn = document.querySelector('.open-menu'); // Selecciona el elemento con la clase open-menu 
openmenuBtn.addEventListener('click', togglemenu); // Agrega el evento click al elemento openmenu Btn y ejecuta la funcion togglemenu 

const closemenuBtn = document.querySelector('.close-menu'); // Selecciona el elemento con la clase close-menu 
closemenuBtn.addEventListener('click', togglemenu); // Agrega el evento click al elemento closemenu Btn y ejecuta la funcion togglemenu 

