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


