const toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});
const logo = document.querySelector('.logo'); // Selecciona la imagen del logo

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);

  // Cambiar el logo según el modo
  if (toggle.checked) {
    logo.src = 'img/Logo 2.png'; // Imagen del logo para modo oscuro
  } else {
    logo.src = 'img/Logo 3.png'; // Imagen del logo para modo claro
  }
});