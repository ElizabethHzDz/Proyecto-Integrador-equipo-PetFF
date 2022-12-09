window.onload = function () {
    createCarouselItems();
    addOnClick();
};

function showPerfil(identifier) {
    let perfiles = document.querySelectorAll(".perfil-mascota.active");

    perfiles.forEach((perfil) => {
        perfil.classList.remove('active');
    });

    let el = document.getElementById('mascota-' + identifier);

    el.classList.add("active");

    createCarouselItems();

    addOnClick();
}

const images = [...document.querySelectorAll('.image')];


const updateImage = (i) => {
    let path = `img/img${i + 1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i + 1}`;
    index = i;
}

const createCarouselItems = () => {
    const item = document.querySelectorAll(".modal .modal-body .carousel-inner");

    while (item[0].hasChildNodes()) {
        item[0].removeChild(item[0].firstChild)
    }

    const images = [...document.querySelectorAll('.perfil-mascota.active .galeria .imagen')];

    images.forEach(image => {
        const node = document.createElement("div");
        node.classList.add("carousel-item");

        for (let i = 0; i < image.children.length; i++) {
            node.appendChild(image.children[i].cloneNode(true));
        }
      

        item[0].appendChild(node);
    });
}

const addOnClick = () => {
    const items = [...document.querySelectorAll(".modal .modal-body .carousel-inner .carousel-item")];

    const images = [...document.querySelectorAll(".perfil-mascota.active .galeria .imagen")];

    document.querySelectorAll(".perfil-mascota.active .galeria .imagen").forEach(image => {
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