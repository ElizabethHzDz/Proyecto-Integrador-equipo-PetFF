// Ver categoria
function verCat(identifier) {
  let categorias = document.querySelectorAll(".notas-categoria.active");

  categorias.forEach((notas) => {
      notas.classList.remove('active');
  });

  let el = document.getElementById('categoria-' + identifier);

  el.classList.add("active");

  addOnClick();
}


//Insertar una tarjeta de boostrap en el html cuando se haga click en el boton "Insertar tarjeta"

//Primero conectamos el boton que esta en el html con el script.js
var note_btn = document.getElementById("botonAgregarNotas");
//Tambien conectamos el lugar donde se va a insertar la tarjeta
var noteContainer = document.getElementById("contenedorNotas");

const crearNota = () => {

  //Crear para cada elemento con su respectivo destino
  //document.getElementById("contenedorNotas").innerHTML += `<img src="/assets/assets_blog/N2.jpg" class="card-img-top" alt="...">` ; este era el ejemplo de prueba
  //document.getElementById("contenedorNotas").innerHTML += `${titulo}`;
  // poner los destinos
  document.getElementById("contenedorNotas").innerHTML += `

  <div class="imagen col-12 col-md-6 col-lg-4">
  <div class="card" style="width: 18rem;">
    <img src="/assets/assets_blog/N2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Castrar a un conejo - Precio, cuándo hacerlo y beneficios</h5>
      <h6>Por: <a href="/perfilVet.html" target="_blank"> @Julian Martinez</a></h6>
      <p class="card-text">La castración o esterilización es una práctica cada vez más extendida en los
        animales de compañía, los beneficios que aporta </p>

      <!-- Leer nota modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#leernota"
        data-bs-whatever="@mdo" id="BotonLeer">Leer más...</button> <!--Boton que abre modal-->

      <!--Contenido de Modal para leer nota-->

      <div class="modal fade" id="leernota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl"> <!--Modal en pantlla grande-->
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Castrar a un conejo - Precio, cuándo
                hacerlo y beneficios</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="titul">
                <h1>Castrar a un conejo - Precio, cuándo hacerlo y beneficios</h1>
              </div>
              <div class="portada">
                <img src="/assets/assets_blog/N2.jpg" width="80%">
              </div>
              <div class="datos">
                <p>Por: @Vet</p>
                <p> PUblicado: 12/12/2022</p>
              </div>
              <div class="leercuerpo">
                <p>¿Cuándo castrar a un conejo?
                  La castración de los conejos debe realizarse cuando alcanzan su madurez sexual, es
                  decir, cuando su grado de desarrollo sexual permite que la reproducción sea posible.
                  Esto sucede cuando alcanzan aproximadamente el 80 % de su peso adulto.

                  No se recomienda la castración de animales que no hayan alcanzado la madurez sexual,
                  puesto que la cirugía podría ser más complicada debido al tamaño y la posición de los
                  órganos reproductivos. Además, la castración temprana no supone ninguna ventaja
                  adicional para la salud de estos animales.

                  ¿Cuándo castrar o esterilizar a un conejo macho?
                  En el caso de los machos, la madurez sexual se alcanza a los 3-5 meses, siendo
                  ligeramente más precoces las razas de pequeño tamaño que las de gran tamaño. A partir
                  de este momento, se podrá practicar la orquiectomía.

                  Como apunte, es importante destacar que los machos continúan siendo fértiles durante 4
                  semanas después de la castración, debido a que siguen teniendo espermatozoides viables
                  en su aparato reproductor. Este hecho debe tenerse en cuenta para evitar gestaciones
                  indeseadas.

                  ¿Cuándo castrar o esterilizar a una coneja?
                  Las hembras son algo más tardías que los machos. Alcanzan la madurez sexual en torno a
                  los 4-6 meses, siendo también más precoces las razas pequeñas que las grandes. A
                  partir de este momento, las hembras se podrán esterilizar por medio de una
                  ovariohisterectomía o una ovariectomía.

                  ¿Cuánto cuesta castrar a un conejo?
                  Si deseas conocer el precio de esterilizar un conejo, lo mejor es que lo consultes con
                  tu clínica de exóticos de confianza. Los precios pueden variar en función de la
                  técnica empleada y de los requerimientos individuales de tu conejo/a.

                  Algunas clínicas realizan campañas anuales de esterilización, en las que es posible
                  esterilizar o castrar a los conejos a un precio más reducido del habitual.</p>
              </div>
              <div class="referencias">
                <p>REFerencias:
                  https://www.expertoanimal.com/castrar-a-un-conejo-precio-cuando-hacerlo-y-beneficios-26152.html
                </p>
              </div>
              <div class="comentariosmegusta">
                <div class="row">
                  <div class="col-1 like">
                    <img class="buttons" src="/assets/iconos/Like.png" alt="Like">
                  </div>
                  <p class="col-2 text-left mt-3">27</p>
                  <div class="col-1 comment">
                    <img class="buttons" src="/assets/iconos/Comment.png" alt="Comment">
                  </div>
                  <p class="col-2 text-left mt-3">3</p>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="cerrarnota">Cerra</button>
          </div> <!--Se cierran botones Cerrar-->
        </div>
      </div>

    </div>
  </div>
</div>
            `;


}