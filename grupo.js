var button = document.getElementById("btnpubli");

var container = document.getElementById("destacados");

button.addEventListener("click", function() {
    var tarjeta = ` <div class="card my-3">
    <div class="card-body p-0">
        <div class="row">
          <!-- Donde irá la imagen del usuario y nombres de mascota y dueño -->
          <div class="d-flex col-9 justify-content-left align-items-center" id="perfil">
            <img id="perfilMascota" src="/assets/img/marliese-streefland-2l0CWTpcChI-unsplash 1.png"
              alt="Foto de perfil mascota">
            <img id="perfilHumano" src="/assets/img/harps-joseph-tAvpDE7fXgY-unsplash 1.png" alt="Foto de perfil humano">
            <div class="container d-flex flex-column names">
              <a href="https://getbootstrap.com/" class="mascota" target="_blank">Max el Beagle</a>
              <p class="humano">José Sánchez</p>
            </div>
          </div>
          <!-- hora de publicación -->
          <div class="col-3 p-0 horaPublicacion">
            <p><br>hace 2 horas</p>
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
          <img src="/assets/img/anthony-fomin-xNOslF_987U-unsplash.jpg" alt="Imagen de Publicacion">
        </div>
        <!-- Fila para botones de like y comentarios -->
        <div class="row">
          <div class="col-1 like">
            <img class="buttons" src="/assets/icons/Like.png" alt="Like">
          </div>
          <p class="col-2 mt-3 text-left">54</p>
          <div class="col-1 comment">
            <img class="buttons" src="/assets/icons/Comment.png" alt="Comment">
          </div>
          <p class="col-2 mt-3 text-left">9</p>
          <div class="col-6"></div>
        </div>
    </div>
  </div>`
  destacados.innerHTML += tarjeta;
agregarTarjeta();
});