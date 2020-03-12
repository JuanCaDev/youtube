const contenedor = document.getElementById("contenedor");
const botonMenu = document.getElementById("botonMenu");

botonMenu.addEventListener("click", () => {
  contenedor.classList.toggle('active');
});

const comprobarAncho = () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 768) {
    contenedor.classList.remove('active');
  }
  else {
    contenedor.classList.add('active');
  }
}

comprobarAncho();

window.addEventListener("resize", () => {
  comprobarAncho();
});