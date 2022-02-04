let raza;

function verTextoHumano() {
    document.getElementById("textoHumano").style.visibility = "visible";
}

function ocultarTextoHumano() {
    document.getElementById("textoHumano").style.visibility = "hidden";
}

function verTextoOrco() {
    document.getElementById("textoOrco").style.visibility = "visible";
}

function ocultarTextoOrco() {
    document.getElementById("textoOrco").style.visibility = "hidden";
}

function verTextoElfo() {
    document.getElementById("textoElfo").style.visibility = "visible";
}

function ocultarTextoElfo() {
    document.getElementById("textoElfo").style.visibility = "hidden";
}

function verTextoNomuerto() {
    document.getElementById("textoNomuerto").style.visibility = "visible";
}

function ocultarTextoNomuerto() {
    document.getElementById("textoNomuerto").style.visibility = "hidden";
}

function seleccionHumano() {
    raza = "humano"
    document.getElementById("seleccionRaza").style.display = "none";
    document.getElementById("seleccionClase").style.display = "grid";
}
function seleccionOrco() {
    raza = "orco"
    document.getElementById("seleccionRaza").style.display = "none";
    document.getElementById("seleccionClase").style.display = "grid";
}
function seleccionElfo() {
    raza = "elfo"
    document.getElementById("seleccionRaza").style.display = "none";
    document.getElementById("seleccionClase").style.display = "grid";
}
function seleccionNomuerto() {
    raza = "nomuerto"
    document.getElementById("seleccionRaza").style.display = "none";
    document.getElementById("seleccionClase").style.display = "grid";
}

/// Fin seleccion de Raza ///

/// Seleccion Clase ///

function verTextoClase(chosenClass) {
    $.get("../json/clases.json", (respuesta, estado) => {
        const arrayClases = respuesta.clases;
        player.clase = arrayClases.find((clase) => clase.nombre === chosenClass);
        $('#descripcionClase').append(' <h2 class="descripcionTemporalClase"><b>' + player.clase.nombre + '</b></h2> ');
        $('#descripcionClase').append(' <hr class="descripcionTemporalClase">');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + "Vida " + + player.clase.atributos.vidaMax + '</p> ');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + "Mana " + + player.clase.atributos.manaMax + '</p> ');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + "Ataque " + + player.clase.atributos.ataque + '</p> ');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + "Magia " + + player.clase.atributos.magia + '</p> ');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + "Suerte " + + player.clase.atributos.suerte + '</p> ');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + "Agilidad " + + player.clase.atributos.agilidad + '</p> ');
    });

    $.get("../json/habilidades.json", (respuesta, estado) => {
        const arrayHabilidades = respuesta.habilidades;
        habilidades.habilidad = arrayHabilidades.find((habilidad) => habilidad.nombre === chosenClass);
        $('#descripcionClase').append(' <h3 class="descripcionTemporalClase"><b>' + "Habilidades Base" + '</b></h3> ');
        $('#descripcionClase').append(' <hr class="descripcionTemporalClase">');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + '1 - ' + habilidades.habilidad.skill1.nombre + '</p> ');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + '2 - ' + habilidades.habilidad.skill2.nombre + '</p> ');
        $('#descripcionClase').append(' <h3 class="descripcionTemporalClase"><b>' + "Habilidades Desbloqueables" + '</b></h3> ');
        $('#descripcionClase').append(' <hr class="descripcionTemporalClase">');
        $('#descripcionClase').append(' <p class="descripcionTemporalClase">' + '3 - ' + habilidades.habilidad.skill3.nombre + '</p> ');


    });


}

function ocultarTextoClase() {
    $('.descripcionTemporalClase').remove()
}