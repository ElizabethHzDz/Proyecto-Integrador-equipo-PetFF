var botonCedula = document.querySelector("#vet");
var cedula = document.querySelector('#espacioCedula');

var botonUser = document.querySelector("#user");
var inputUser = document.querySelector('#espacioUser');

var botonPet = document.querySelector("#pet");
var inputPet = document.querySelector('#espacioPet');



botonUser.addEventListener("click", function (){
    var inputsUser = `<div class="form-group">
    <form id="form">
                            <div class="form-group">
                                <label for="name">Nombre(s)</label>
                                <input type="text" class="form-control" id="name" placeholder="Introduce tu(s) nombre(s)" required>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Apellidos</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Introduce tus apellidos" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com" required>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="password" placeholder="Crea una contraseña">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Añade una foto de perfil</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                            <div class="col-auto">
                                <label class="sr-only" for="username">Nombre de usuario/a</label>
                                <div class="input-group mb-2">
                                  <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Elige el nombre para tu cuenta" required>
                                </div>
                            </div>

                            <div class="form-check d-flex justify-content-center p-1 m-0">
                                <input type="checkbox" class="form-check-input p-1 m-0" required>
                                <label class="form-check-label p-1" for="exampleCheck1"><a href="" target="_blank">  Términos y condiciones de PetFF</a></label>
                              </div>
                              <br>
                            <button href="registroMascota.html" type="button" class="btn" id="boton">Continuar</button>
                        </form>
    
    </div>
    `;
inputUser.innerHTML += inputsUser;
agregarUser();
})


botonCedula.addEventListener("click", function () {
    var inputCelula = `
    <form id="form">
                            <div class="form-group">
                                <label for="name">Nombre(s)</label>
                                <input type="text" class="form-control" id="name" placeholder="Introduce tu(s) nombre(s)" required>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Apellidos</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Introduce tus apellidos" required>
                            </div>
                            <div class="form-group">
                            <label for="cedula">Cédula profesional</label>
                            <input type="text" class="form-control" id="cedulaProf" placeholder="Introduce tu cédula" required>
                            </div>
                            </div>
                            <div class="form-group">
                            <label for="direccionConsultorio">Dirección consultorio</label>
                            <input type="text" class="form-control" id="direccionC" placeholder="Indica a tus pacientes dónde pueden encontrarte" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com" required>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="password" placeholder="Crea una contraseña">
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlFile1">Añade una foto de perfil</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                            <div class="col-auto">
                                <label class="sr-only" for="username">Nombre de usuario/a</label>
                                <div class="input-group mb-2">
                                  <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Elige el nombre para tu cuenta" required>
                                </div>
                            </div>
                            <div class="form-check d-flex justify-content-center p-1 m-0">
                                <input type="checkbox" class="form-check-input p-1 m-0" required>
                                <label class="form-check-label p-1" for="exampleCheck1"><a href="" target="_blank">  Términos y condiciones de PetFF</a></label>
                              </div>
                              <br>
                            <button type="submit" class="btn" id="boton">Enviar</button>
                        </form>
    `;
    cedula.innerHTML += inputCelula;

    agregarCedula();
})


