let sonidoAtaqueHeroe;

function animacionAtaque() {
    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill1.animacion)

    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")
        sonidoHeroe()
    }, 800); //demora de gracia por animacion

    blinkEnemigo()

}

function animacionGranGolpe() {
    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill2.animacion)

    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")
        sonidoHeroe2()
    }, 800); //demora de gracia por animacion

    blinkEnemigo()

}

function animacionSanacion() {
    $('#animacionAtaqueEnHeroe').attr("src", habilidades.habilidad.skill2.animacion)
    setTimeout(function () {
        $('#animacionAtaqueEnHeroe').attr("src", "../imagenes/animaciones/none.png")
        sonidoHeroe2()
    }, 1200); //demora de gracia por animacion

}

function animacionBolaFuego() {
    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill2.animacion)
    sonidoHeroe2()
    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")

    }, 1200); //demora de gracia por animacion

    blinkEnemigo()
}

function animacionRelampago() {
    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill3.animacion)
    sonidoHeroe3()
    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")

    }, 1200); //demora de gracia por animacion

    blinkEnemigo()
}

function animacionBerserker() {
    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill3.animacion)
    sonidoHeroe3()
    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")

    }, 1200); //demora de gracia por animacion

    blinkEnemigo()
}



function animacionDobleDisparo() {


    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill2.animacion)
    sonidoHeroe2()
    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")

    }, 1200); //demora de gracia por animacion


    blinkEnemigo()

}

function animacionFlechaSangre() {

    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill3.animacion)
    sonidoHeroe3()
    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")

    }, 1200); //demora de gracia por animacion

    blinkEnemigo()

}

function animacionLanzaSanta() {
    $('#animacionAtaqueEnEnemigo').attr("src", habilidades.habilidad.skill3.animacion)
    sonidoHeroe3()
    setTimeout(function () {
        $('#animacionAtaqueEnEnemigo').attr("src", "../imagenes/animaciones/none.png")

    }, 800); //demora de gracia por animacion

    blinkEnemigo()
}


/// Animaciones del enemigo ///

function animacionAtaqueEnemigo() {

    $('#animacionAtaqueEnHeroe').attr("src", enemy.clase.atributos.animacion)

    setTimeout(function () {
        $('#animacionAtaqueEnHeroe').attr("src", "../imagenes/animaciones/none.png")
        sonidoAtaqueEnemigo.play()
    }, 800); //demora de gracia por animacion

    blinkHeroe()
}


/// parpadeo al recibir daño ///
function blinkHeroe() {
    $('#imagenCombate').fadeOut(400).fadeIn(400, blinkHeroe).stop();
}

function blinkEnemigo() {
    $('#imagenEnemigo').fadeOut(400).fadeIn(400, blinkEnemigo).stop();
}



/// Efectos de sonido de habilidades del heroe ///
function sonidoHeroe() {
    sonidoAtaqueHeroe = new Audio(habilidades.habilidad.skill1.sonido);
    sonidoAtaqueHeroe.play()
}

function sonidoHeroe2() {
    sonidoAtaqueHeroe = new Audio(habilidades.habilidad.skill2.sonido);
    sonidoAtaqueHeroe.play()
}

function sonidoHeroe3() {
    sonidoAtaqueHeroe = new Audio(habilidades.habilidad.skill3.sonido);
    sonidoAtaqueHeroe.play()
}

function sonidoHeroe4() {
    sonidoAtaqueHeroe = new Audio(habilidades.habilidad.skill4.sonido);
    sonidoAtaqueHeroe.play()
}

function sonidoHeroe5() {
    sonidoAtaqueHeroe = new Audio(habilidades.habilidad.skill5.sonido);
    sonidoAtaqueHeroe.play()
}