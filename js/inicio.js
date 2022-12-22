
const imgInput = document.querySelector("#imageInput");
var uploadedImg = "";

//Primero conectamos el boton que esta en el html con el script.js
var buttonAdd = document.getElementById("pubButton");
//Tambien conectamos el lugar donde se va a insertar la tarjeta
var containerAdd = document.getElementById("contCards");


imgInput.addEventListener("change", function(){
    var checkImg = document.getElementsByClassName("loadedImg");
    if(checkImg.length > 0 ){
        document.querySelectorAll(".loadedImg").forEach(checkImg => checkImg.remove());
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedImg = reader.result;
            let image = document.createElement('img');
            let image2 = document.createElement('img');
            image.src = uploadedImg;
            image2.src = uploadedImg;
            image.className = "loadedImg";
            image.id = "imgForUse";
            image2.className = "loadedImg";
            document.getElementById("displayImage").appendChild(image);
            document.getElementById("displayImage2").appendChild(image2);
        })
        reader.readAsDataURL(this.files[0]);
    }else {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImg = reader.result;
        let image = document.createElement('img');
        let image2 = document.createElement('img');
        image.src = uploadedImg;
        image2.src = uploadedImg;
        image.className = "loadedImg";
        image.id = "imgForUse";
        image2.className = "loadedImg";
        document.getElementById("displayImage").appendChild(image);
        document.getElementById("displayImage2").appendChild(image2);
    })
      reader.readAsDataURL(this.files[0]);
      reader.onload = function(){
      console.log(reader.result);}
}
})


const imgPublish = document.querySelector("#pubButton");

// imgPublish.addEventListener("click", function(){
//     let imgPub = document.createElement('img');
//     imgPub.src = document.getElementById("imgForUse").src;
//     document.getElementById("imgPublish").appendChild(imgPub);
//     var checkImg = document.getElementsByClassName("loadedImg");
//     if(checkImg.length > 0 ){
//         document.querySelectorAll(".loadedImg").forEach(checkImg => checkImg.remove());
//     }
// })

buttonAdd.addEventListener("click", function() {
    //Definimos la estructura de la tarjeta
    var tarjeta = `            <div class="card my-3">
    <div class="card-body p-0">
        <div class="row">
          <!-- Donde irá la imagen del usuario y nombres de mascota y dueño -->
          <div class="d-flex col-9 justify-content-left align-items-center" id="perfil">
            <img class="img-thumbnail" id="perfilMascota" src="./assetsInicio/marliese-streefland-2l0CWTpcChI-unsplash 1.png"
              alt="Foto de perfil mascota">
            <img id="perfilHumano" src="./assetsInicio/harps-joseph-tAvpDE7fXgY-unsplash 1.png" alt="Foto de perfil humano">
            <div class="container d-flex flex-column names">
              <a href="https://getbootstrap.com/" class="mascota" target="_blank">Max el Beagle</a>
              <p class="humano">José Sánchez</p>
            </div>
          </div>
          <!-- hora de publicación -->
          <div class="col-3 p-0 horaPublicacion">
            <p><br>justo ahora</p>
          </div>
        </div>
        <!-- Espacio para agregar texto de publicación -->
        <div class="row">
          <div class="container leftT">
            <p class="">
              Fuimos a dar un paseo en bicicleta
            </p>
          </div>
        </div>
        <!-- Espacio para agregar imagen de publicación -->
        <div class="row p-0 m-0" id="">
        <img src="./assetsInicio/anthony-fomin-xNOslF_987U-unsplash.jpg" alt="Imagen de Publicacion">
        </div>
        <!-- Fila para botones de like y comentarios -->
        <div class="row">
          <div class="col-1 like">
            <img class="buttons" src="./assetsInicio/iconos/Like.png" alt="Like">
          </div>
          <p class="col-2 mt-3 text-left">54</p>
          <div class="col-1 comment">
            <img class="buttons" src="./assetsInicio/iconos/Comment.png" alt="Comment">
          </div>
          <p class="col-2 mt-3 text-left">9</p>
          <div class="col-6"></div>
        </div>
    </div>
  </div>`;
    //Agregamos la tarjeta al container
    containerAdd.innerHTML = tarjeta + containerAdd.innerHTML;
   //Agregamos la tarjeta
  //  agregarTarjeta();
});




