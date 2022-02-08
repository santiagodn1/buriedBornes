/// MENU FUNCIONAL ///
function tutorial() {
    Swal.fire({
        imageUrl: "imagenes/tutorial/tutorial1.jpg",
        width: 1200,
        confirmButtonText: 'Siguiente página',

    }).then((result) => {
        Swal.fire({
            imageUrl: "imagenes/tutorial/tutorial2.jpg",
            width: 1200,
        })

    })
}

function version() {
    Swal.fire({
        title: 'Notas de version',
        html: "<p><b> Version 1.0.1  </b></p>" + "<p> 4 Clases jugables </p>" + "<p> 1 Laberinto disponible </p>" + "<p> Sistema de <b>beneficio racial</b> aún en desarrollo </p>",
    })
}
function iniciarAventura() {
    /// Cambiar de HTML///
    window.location.href = "laberintos/laberinto.html";

}