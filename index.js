// Obtener informacion de la forma
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const trabajo = document.getElementById("trabajo");
const telefono = document.getElementById("telefono");
const sobreMi = document.getElementById("about");

// llamar la forma
const form = document.getElementById("forma");

// const para el contenedor
const contenedor = document.getElementById("contenedor");

//crear event listener para la forma
form.addEventListener("submit", (e) => {
  //Evitar la accion por defecto
  e.preventDefault();

  //crear objeto que tenga los valores de la forma
  const formulario = {
    name: nombre.value,
    email: correo.value,
    job: trabajo.value,
    tel: telefono.value,
    about: sobreMi.value,
  };

  const { name, email, job, tel, about } = formulario;

  const cuadroHtmlConInfo = crearCuadroDeForma(name, email, job, tel, about);

  contenedor.insertAdjacentHTML("beforeend", cuadroHtmlConInfo);

  //dar la orden de submit
  //event.submit();
});

//crear una funcion que nos retorne contenido HTML dinamicamente
function crearCuadroDeForma(name, email, job, tel, about) {
  const cuadroHtml = `
    <div class="contenedor">

    <div id="contenedor">
    <div class="caja-1">
      <img src="img.png" class="img"/>
      <h1 class="contenedor__nombre">${name}</h1>
      <P>Front End</P>
    </div>


      <p class="contenedor__p">${email}</p>
      <p class="contenedor__p">${job}</p>
      <p class="contenedor__p">${tel}</p>
      <p class="contenedor__p">${about}</p>
    </div>
     `;
  return cuadroHtml;
}
