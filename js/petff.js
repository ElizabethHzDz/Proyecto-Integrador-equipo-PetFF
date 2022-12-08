function showPerfil(identifier) {
    let perfiles = document.querySelectorAll(".perfil-mascota.active");

    perfiles.forEach((perfil) => {
        perfil.classList.remove('active');
    });

    let el = document.getElementById('mascota-' + identifier);

    el.classList.add("active");
}