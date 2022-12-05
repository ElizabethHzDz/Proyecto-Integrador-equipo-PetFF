function showPerfil(identifier){
    console.log("showPerfil");

    let perfiles = document.querySelectorAll(".perfil-mascota.active");

    perfiles.forEach((perfil) => {
        perfil.classList.remove('active');
    });

    let el = document.getElementById(identifier);
    console.log("element: ", el);
    el.classList.add("active");
}