// Obtener informacion de la forma
const nombre =document.getElementById("nombre");
const correo =document.getElementById("correo");
const trabajo = document.getElementById("trabajo");
const telefono =document.getElementById("telefono");
const sobreMi =document.getElementById("sobre mi");

// llamar la forma
const form = document.getElementById("forma");

// const para el contenedor
const contenedor = document.getElementById("contenedor");

//crear event listener para la forma
    form.addEventListener('submit',(e) => {
      //Evitar la accion por defecto
      e.preventDefault();

      //crear objeto que tenga los valores de la forma
      const formulario = {
        name:nombre.Value,
        gmail: correo.value,
        job: trabajo.value,
        cell: telefono.value,
        about: sobreMi.value,
      }

      const { name, gmail, job, cell, about } = formulario;

      const cuadroHtmlConInfo = crearCuadroDeForms
      (name, gmail, job, cell, about);

      contenedor.insertAdjacentHTML('beforeend',cuadroHtmlConInfo);
      
      //dar la orden de submit
      //event.submit();

    });

    //crear una funcion que nos retorne contenido HTML dinamicamente
    function crearCuadroDeForma(name, gmail, job, cell, about){
        const cuadroHtml =`

        <div class="contenedor">
          <h1 class="contenedor__nombre">${name}</h1>
          <p class="contenedor__p">${gmail}</p>
          <p class="contenedor__p">${job}</p>
          <p class="contenedor__p">${cell}</p>
          <p class="contenedor__p">${about}</p>
      </div>
     `
     return cuadroHtml
    }
        
    