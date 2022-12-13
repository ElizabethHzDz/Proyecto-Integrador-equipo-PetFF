// ////// Boton para abrir modal 
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
}




//Insertar una tarjeta de boostrap en el html cuando se haga click en el boton "Insertar tarjeta"

    //Primero conectamos el boton que esta en el html con el script.js
    var button = document.getElementById("botonAgregarNotas");
    //Tambien conectamos el lugar donde se va a insertar la tarjeta
    var container = document.getElementById("contenedorNotas");

    //Ahora creamos un evento que se dispare cuando se haga click en el boton
    button.addEventListener("click", function() {
         //Definimos la estructura de la tarjeta
         var Nota = `<img src="/assets/assets_blog/N2.jpg" class="card-img-top" alt="...">
         `;
         //Agregamos la tarjeta al container
         container.innerHTML += Nota;
        //Agregamos la tarjeta
        AgregarNota();
    });