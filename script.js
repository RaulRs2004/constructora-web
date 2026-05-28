console.log("Página cargada");

function mostrarImagen(tipo, elemento) {

    const imagen =
        document.getElementById("imagen-servicio");

    const imagenes = {
        materiales: "images/Venta.png",
        maquinaria: "images/Maquinaria.png",
        obras: "images/Proyectos.png",
        construccion: "images/Servicio.png",
        drywall: "images/Diseños_drywall.png"
    };

    imagen.src = imagenes[tipo];

    document
        .querySelectorAll(".opcion")
        .forEach(opcion => {
            opcion.classList.remove("active");
        });

    elemento.classList.add("active");
}

