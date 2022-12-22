window.onload = function () {
    createCarouselItems();
    addOnClick();
};

function showPerfil() {
    let perfiles = document.querySelectorAll(".perfil-veterinario.active");

    perfiles.forEach((perfil) => {
        perfil.classList.remove('active');
    });

    let el = document.getElementById('veterinario');

    el.classList.add("active");

    createCarouselItems();

    addOnClick();
}



const createCarouselItems = () => {
    const item = document.querySelectorAll(".modal .modal-body .carousel-inner");

    while (item[0].hasChildNodes()) {
        item[0].removeChild(item[0].firstChild)
    }

    const images = [...document.querySelectorAll('.perfil-veterinario.active .galeria .imagen')];

    images.forEach(image => {
        const node = document.createElement("div");
        node.classList.add("carousel-item");

        for (let i = 0; i < image.children.length; i++) {
            node.appendChild(image.children[i].cloneNode(true));
        }


        item[0].appendChild(node);
    });
}

const eliminarCarouselItems = () => {
    const item = document.querySelectorAll(".container.edit .modal .modal-body .carousel-inner");

    while (item[0].hasChildNodes()) {
        item[0].removeChild(item[0].firstChild)
    }
}

const addOnClick = () => {
    const items = [...document.querySelectorAll(".modal .modal-body .carousel-inner .carousel-item")];

    const images = [...document.querySelectorAll(".perfil-veterinario.active .galeria .imagen")];

    document.querySelectorAll(".perfil-veterinario.active .galeria .imagen").forEach(image => {
        image.onclick = function (e) {
            const index = Array.from(images).indexOf(e.target.parentElement);
            var myModal = new bootstrap.Modal(document.getElementById('largeModal'));
            items.forEach(item => {
                item.classList.remove('active');
            });
            items[index].classList.add('active');
            myModal.show();
        };
    })
}

const eliminarOnClick = () => {
    const images = [...document.querySelectorAll(".perfil-veterinario.active .galeria .imagen")];

    document.querySelectorAll(".perfil-veterinario.active .galeria .imagen").forEach(image => {
   
        image.onclick = null;
    });
}

const togglePerfil = (element) => {
    if (document.querySelectorAll("div.container.edit").length > 0) {
        verPerfil(element);
    } else {
        editarPerfil(element);
    }
}

const editarPerfil = (element) => {
    const container = document.querySelectorAll("div.container");
    container[0].classList.add('edit');

    hideCanvas();

    element.text = 'Ver perfil';

    eliminarCarouselItems();
    eliminarOnClick();
}

const verPerfil = (element) => {
    const container = document.querySelectorAll("div.container");
    container[0].classList.remove('edit');

    hideCanvas();

    element.text = 'Editar perfil';

    createCarouselItems();
    addOnClick();
}

const hideCanvas = () => {
    let openedCanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
    openedCanvas.hide();
}