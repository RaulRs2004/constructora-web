console.log("Página cargada");
function mostrarImagen(numero){

    const imagenes =
        document.querySelectorAll(".imagen-opcion");

    const items =
        document.querySelectorAll(".item");

    imagenes.forEach(img=>{
        img.classList.remove("activa");
    });

    items.forEach(item=>{
        item.classList.remove("active");
    });

    document
        .getElementById("img" + numero)
        .classList.add("activa");

    items[numero - 1]
        .classList.add("active");
}