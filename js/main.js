/// DECLARACION DE VARIABLES ///
var batallaSonido = new Audio('../sonido/batalla.mp3');
batallaSonido.loop = true;

var menuSonido = new Audio('../sonido/menu.mp3');
menuSonido.loop = true;

let movimientoHeroePx = 30
let heroe;
let enemyCounter = 0;
let enemyEncounter;
let contadorNiveles = 1;
let experiencia = 0;
let experienciaLimite = 100;

// FIN DECLARACION DE VARIABLES ///


setTimeout(function () {
    menuSonido.play()
}, 1);



/// MOVIMIENTO DEL HEROE ///
function movimientoLaberinto() {
    if (contadorNiveles == 3) {

        enemyEncounter = 3
        enemigoSeteado()
    } else if (contadorNiveles == 6) {
        enemyEncounter = 4
        enemigoSeteado()
    } else if (contadorNiveles == 7) {
        Swal.fire({
            title: '¡Fin del Juego!',
            confirmButtonText: 'Volver al menu principal',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "../index.html";
            }
        })
    } else {
        enemyEncounter = Math.floor((Math.random() + enemyCounter) * (3 + enemyCounter))
        enemigoSeteado()
    }


}

function enemigoSeteado() {
    setEnemy(enemyEncounter)
    movimientoHeroePx = movimientoHeroePx + 170
    document.getElementById("imagenHeroe").style.left = movimientoHeroePx + "px"
    document.getElementById("botonMover").disabled = true;
    document.getElementById("botonMover").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("containerEnfrentamiento").style.display = "grid";
    }, 3000); //demora de 3 segundos
    ///desaparecer laberinto///
    setTimeout(function () {
        document.getElementById("containerLaberinto").style.opacity = 0;
    }, 3000); //demora de 3 segundos


    /// aparecer enfrentamiento ///
    document.getElementById("animacionAtaqueEnHeroe").style.display = "block";
    document.getElementById("animacionAtaqueEnEnemigo").style.display = "block";

    setTimeout(function () {
        document.getElementById("containerEnfrentamiento").style.opacity = 1;
        menuSonido.pause(); // pauso la musica de menu/interfaz
        batallaSonido.currentTime = 0; // que la musica de batalla inicie desde 0
        batallaSonido.play(0); // inicio musica de batalla
    }, 3500); //demora de  segundos

    // Limpio el registro de batalla
    limpiezaRegistro()

    contadorNiveles = contadorNiveles + 1 // Suma de contador para enemigos mas dificiles
    console.log(contadorNiveles)
}

function seleccionHeroe(id) {
    setClass(id)
    /// Ocultar segundo menu ///

    document.getElementById("fichaHeroe").style.display = "none";
    document.getElementById("seleccionClase").style.display = "none";

    /// Mostrar entrada al laberinto ///
    document.getElementById("laberintoEntrada").style.display = "block";
}


function iniciarLaberinto() {
    document.getElementById("laberintoEntrada").style.display = "none";
    document.getElementById("containerLaberinto").style.display = "grid";
    document.getElementById("imagenHeroe").style.display = "block"
}



/// Acciones tomadas en caso de que muera el heroe o el enemigo ///
function checkHeroDead() {
    if (vidaActualHeroe <= 0) {
        Swal.fire({
            title: '💀 ¡El Heroe ha caido! 💀',
            confirmButtonText: 'Volver al menu principal',
            allowOutsideClick: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "../index.html";
            }
        })
    }
}
setTimeout(function () {
    document.getElementById("containerEnfrentamiento").style.display = "none";
    document.getElementById("containerEnfrentamiento").style.opacity = 0;

}, 3000); //demora de 3 segundos
function checkEnemyDead() {
    if (vidaActualEnemigo <= 0) {

        Swal.fire({
            title: '⚔️ ¡Enemigo Derrotado! ⚔️',
            text: "+" + enemy.clase.atributos.experiencia + " exp",
            confirmButtonText: 'volver a Laberinto',
            allowOutsideClick: false,

        }).then((result) => {
            if (result.isConfirmed) {
                /// Sumar experiencia obtenida ///
                accionSumarExperiencia()

                ///aparecer laberinto///
                document.getElementById("animacionAtaqueEnHeroe").style.display = "none";
                document.getElementById("animacionAtaqueEnEnemigo").style.display = "none";

                document.getElementById("containerLaberinto").style.opacity = 1;
                batallaSonido.pause();
                menuSonido.currentTime = 0;
                menuSonido.play();


                /// aparecer enfrentamiento ///

                document.getElementById("containerEnfrentamiento").style.display = "none";
                document.getElementById("containerEnfrentamiento").style.opacity = 0;


                document.getElementById("botonMover").disabled = false;
                document.getElementById("botonMover").style.opacity = 1;

                /// Reinicio de vida del enemigo al cambiar de escenario ///
                document.getElementById("vidaActualEnemigo").remove();

                document.getElementsByClassName('w3-red')[0].style.width = "100%";

                accionChequearSubidaNivel()
            }
        })


    } else {
        setTimeout(() => { accionEnemigo(); }, 2000);
    }
}


function accionSumarExperiencia() {
    experiencia = experiencia + enemy.clase.atributos.experiencia;
    document.getElementById('experienciaActual').innerHTML = experiencia;


    visualBarraExperiencia()
}

function accionChequearSubidaNivel() {
    if (experiencia >= experienciaLimite) {
        subirDeNivel()
    }
}

function subirDeNivel() {
    experiencia = 0;
    experienciaLimite = experienciaLimite * 1.5;

    nivel = nivel + 1;

    player.clase.atributos.ataque = parseInt(player.clase.atributos.ataque * 1.2);
    player.clase.atributos.magia = parseInt(player.clase.atributos.magia * 1.2);
    player.clase.atributos.suerte = parseInt(player.clase.atributos.suerte * 1.2);
    player.clase.atributos.vidaMax = parseInt(player.clase.atributos.vidaMax * 1.2);
    player.clase.atributos.manaMax = parseInt(player.clase.atributos.manaMax * 1.2);
    vidaActualHeroe = player.clase.atributos.vidaMax;
    manaActualHeroe = player.clase.atributos.manaMax;

    /// Reiniciar stats en pantalla luego de mejoras al subir de nivel ///
    document.getElementById('experienciaActual').innerHTML = experiencia;
    document.getElementById('nivelActual').remove();
    document.getElementById('ataqueActual').remove();
    document.getElementById('magiaActual').remove();
    document.getElementById('suerteActual').remove();
    document.getElementById("vidaActualHeroe").remove();
    document.getElementById("manaMaxHeroe").remove();

    $('.esquinaUno').append("<p><h2 id=nivelActual>" + "NIVEL " + nivel + "</h2></p>");
    $('.statsHeroe').append("<p><h3 id=ataqueActual>Ataque " + player.clase.atributos.ataque + "</h3></p>");
    $('.statsHeroe').append("<p><h3 id=magiaActual>Magia " + player.clase.atributos.magia + "</h3></p>");
    $('.statsHeroe').append("<p><h3 id=suerteActual>Suerte " + player.clase.atributos.suerte + "</h3></p>");

    vidaMaxHeroe = player.clase.atributos.vidaMax;

    manaMaxHeroe = player.clase.atributos.manaMax;

    $('.w3-green').append('<p id=vidaActualHeroe>' + player.clase.atributos.vidaMax + '</p>');
    $('.w3-blue').append('<p id=manaMaxHeroe>' + player.clase.atributos.manaMax + '</p>');

    /// Actualizar barritas de vida, mana y exp///
    document.getElementsByClassName('w3-green')[0].style.width = "100%";
    document.getElementsByClassName('w3-blue')[0].style.width = "100%";

    setTimeout(function () {
        document.getElementsByClassName('w3-yellow')[0].style.width = "0%";
    }, 3000); //demora de 3 segundos para un buen visual de barra de exp


    if (nivel == 2) {
        /// Mostrar atributos mejorados de subida de nivel y nueva habilidad obtenida///
        agregarNuevaHabilidad()
        Swal.fire({
            title: '⚔️ ¡Subiste de Nivel! ⚔️',
            html: "<p>+" + enemy.clase.atributos.experiencia + " exp</p>" + "<p><b>Subiste al nivel " + nivel + '</b><p>' + '<p>Mejoraste tus atributos, recuperaste vida y mana<p>' + '<p>Ataque + ' + parseInt((player.clase.atributos.ataque * 1.2) - player.clase.atributos.ataque) + '</p>' + '<p>Magia + ' + parseInt((player.clase.atributos.magia * 1.2) - player.clase.atributos.magia) + '</p>' + '<p>Suerte + ' + parseInt((player.clase.atributos.suerte * 1.2) - player.clase.atributos.suerte) + '</p>' + '<p>Vida + ' + parseInt((player.clase.atributos.vidaMax * 1.2) - player.clase.atributos.vidaMax) + '</p>' + "<p><b>📖 ¡Aprendiste una nueva habilidad! 📖" + habilidades.habilidad.skill3.nombre + '</b><p>',
            confirmButtonText: 'volver a Laberinto',
            allowOutsideClick: false,
        })
    } else {
        /// Mostrar atributos mejorados de subida de nivel en mensaje ///
        Swal.fire({
            title: '⚔️ ¡Subiste de Nivel! ⚔️',
            html: "<p>+" + enemy.clase.atributos.experiencia + " exp</p>" + "<p><b>Subiste al nivel " + nivel + '</b><p>' + '<p>Mejoraste tus atributos, recuperaste vida y mana<p>' + '<p>Ataque + ' + parseInt((player.clase.atributos.ataque * 1.2) - player.clase.atributos.ataque) + '</p>' + '<p>Magia + ' + parseInt((player.clase.atributos.magia * 1.2) - player.clase.atributos.magia) + '</p>' + '<p>Suerte + ' + parseInt((player.clase.atributos.suerte * 1.2) - player.clase.atributos.suerte) + '</p>' + '<p>Vida + ' + parseInt((player.clase.atributos.vidaMax * 1.2) - player.clase.atributos.vidaMax) + '</p>',
            confirmButtonText: 'volver a Laberinto',
            allowOutsideClick: false,
        })
    }
}

function agregarNuevaHabilidad() {
    $('.grillaHabilidades').append('<img id="habilidad3" style="width:80px; height:80px" type="button" onclick=accion' + habilidades.habilidad.skill3.nombre + '();></img>')

    $('#habilidad3').attr("src", habilidades.habilidad.skill3.icono);
    $("#habilidad3").hover(function () {
        $('.esquinaTres').append(' <p class="descripcionTemporal">' + habilidades.habilidad.skill3.descripcion + '</p> ');
        $('.esquinaCuatro').append(' <p class="descripcionTemporal">' + "Costo de Mana" + '</p> ');
        $('.esquinaCuatro').append(' <p class="descripcionTemporal">' + habilidades.habilidad.skill3.mana + '</p> ');
    }, function () {
        $('.descripcionTemporal').remove()
    });

}


function limpiezaRegistro() {
    $('.textoGolpeHeroe').remove()
    $('.textoGolpeCritico').remove()
    $('.textoGolpeEnemigo').remove()
    $('.textoSacrificio').remove()
    $('.textoSanacion').remove()
    $('#nombreEnemigo').remove()
}

// Proxima version //

function seleccionProximamente() {
    Swal.fire('Disponible en futuras versiones')
}

