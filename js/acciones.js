let dañoDeAccion;
let restarMana;
let vidaEnemigoPorcentaje;
let vidaHeroePorcentaje;
let manaHeroePorcentaje;
let sanacionDeAccion;
let chanceCrit;
let manaDisponible;



function accionAtaque() {
    ocultarAcciones()
    animacionAtaque()

    /// descuenta daño de la vida del enemigo ///
    dañoDeAccion = (player.clase.atributos.ataque + habilidades.habilidad.skill1.daño);

    checkIfCrit()

    vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
    document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;

    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill1.mana
    manaActualHeroe = manaActualHeroe - restarMana;
    document.getElementById("manaMaxHeroe").innerText = manaActualHeroe



    /// mostrar registro ///
    $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + dañoDeAccion + " de daño al enemigo </p>");

    visualBarraVidaEnemigo()
    checkEnemyDead()


}

function accionGranGolpe() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill2.mana
    checkMana()
    if (manaDisponible == true) {
        ocultarAcciones()
        animacionGranGolpe()
        manaActualHeroe = manaActualHeroe - restarMana;
        document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

        /// descuenta daño de la vida del enemigo ///
        dañoDeAccion = (player.clase.atributos.ataque * habilidades.habilidad.skill2.daño);

        checkIfCrit()

        vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
        document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;

        /// mostrar registro ///
        $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");

        visualBarraVidaEnemigo()
        visualBarraManaHeroe()

        checkEnemyDead()
    } else {

    }

}

function accionBolaFuego() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill2.mana
    checkMana()
    if (manaDisponible == true) {
        ocultarAcciones()
        animacionBolaFuego()
        manaActualHeroe = manaActualHeroe - restarMana;
        document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

        /// descuenta daño de la vida del enemigo ///
        dañoDeAccion = (player.clase.atributos.magia * habilidades.habilidad.skill2.daño);

        checkIfCrit()

        vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
        document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;


        /// mostrar registro ///
        $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");

        visualBarraVidaEnemigo()
        visualBarraManaHeroe()
        checkEnemyDead()

    } else {

    }
}

function accionRelampago() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill3.mana
    checkMana()
    if (manaDisponible == true) {
        ocultarAcciones()
        animacionRelampago()
        manaActualHeroe = manaActualHeroe - restarMana;
        document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

        /// descuenta daño de la vida del enemigo ///
        dañoDeAccion = (player.clase.atributos.magia * habilidades.habilidad.skill3.daño);

        checkIfCrit()

        vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
        document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;


        /// mostrar registro ///
        $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");

        visualBarraVidaEnemigo()
        visualBarraManaHeroe()
        checkEnemyDead()

    } else {

    }
}

function accionLanzaSanta() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill3.mana
    checkMana()
    if (manaDisponible == true) {
        ocultarAcciones()
        animacionLanzaSanta()
        manaActualHeroe = manaActualHeroe - restarMana;
        document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

        /// descuenta daño de la vida del enemigo ///
        dañoDeAccion = (player.clase.atributos.magia * habilidades.habilidad.skill3.daño);

        checkIfCrit()

        vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
        document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;

        /// mostrar registro ///
        $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");

        visualBarraVidaEnemigo()
        visualBarraManaHeroe()
        checkEnemyDead()
    } else {

    }
}


function accionBerserker() {

    ocultarAcciones()
    animacionBerserker()
    /// descuenta daño de la vida del enemigo ///
    dañoDeAccion = (player.clase.atributos.ataque * habilidades.habilidad.skill3.daño);

    checkIfCrit()

    vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
    document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;

    /// descuenta vida del heroe para usar berserker///
    vidaActualHeroe = (vidaActualHeroe - player.clase.atributos.ataque);
    document.getElementById("vidaActualHeroe").innerHTML = vidaActualHeroe;

    /// mostrar registro ///
    $('.registroBatalla').append("<p class=textoSacrificio> Sacrificaste " + player.clase.atributos.ataque + " de tu vida </p>");
    visualBarraVidaHeroe()
    checkHeroDead()

    /// mostrar registro ///
    $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");

    visualBarraVidaEnemigo()
    visualBarraManaHeroe()
    checkEnemyDead()

}

function accionDobleDisparo() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill2.mana
    checkMana()
    if (manaDisponible == true) {
        ocultarAcciones()
        animacionDobleDisparo()
        manaActualHeroe = manaActualHeroe - restarMana;
        document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

        /// descuenta daño de la vida del enemigo ///
        dañoDeAccion = (player.clase.atributos.ataque * habilidades.habilidad.skill2.daño);

        checkIfCrit()

        vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
        document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;


        /// mostrar registro ///
        $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");
        visualBarraVidaEnemigo()

        setTimeout(function () {

            animacionDobleDisparo()

            /// descuenta daño de la vida del enemigo ///
            dañoDeAccion = (player.clase.atributos.ataque * habilidades.habilidad.skill2.daño);

            checkIfCrit()

            vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
            document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;

            /// mostrar registro ///
            $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");
            visualBarraVidaEnemigo()
            visualBarraManaHeroe()
            checkEnemyDead()
        }, 1200); //demora de gracia por animacion



    } else {

    }
}

function accionFlechaSangre() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill1.mana
    checkMana()
    if (manaDisponible == true) {
        ocultarAcciones()
        animacionFlechaSangre()
        manaActualHeroe = manaActualHeroe - restarMana;
        document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

        /// descuenta daño de la vida del enemigo ///
        dañoDeAccion = (player.clase.atributos.ataque * habilidades.habilidad.skill3.daño);

        checkIfCrit()

        vidaActualEnemigo = (vidaActualEnemigo - parseInt(dañoDeAccion));
        document.getElementById("vidaActualEnemigo").innerHTML = vidaActualEnemigo;

        vidaActualHeroe = (vidaActualHeroe + parseInt(dañoDeAccion * 0.5));
        document.getElementById("vidaActualHeroe").innerHTML = vidaActualHeroe;
        $('.registroBatalla').append("<p class=textoSanacion> Te curaste " + parseInt(dañoDeAccion * 0.5) + " de vida </p>");
        visualBarraVidaHeroe()



        /// descuenta mana del heroe ///


        /// mostrar registro ///
        $('.registroBatalla').append("<p class=textoGolpeHeroe> Realizaste " + parseInt(dañoDeAccion) + " de daño al enemigo </p>");


        visualBarraVidaEnemigo()
        checkEnemyDead()

    } else {

    }
}

function accionSanacion() {
    /// descuenta mana del heroe ///
    restarMana = habilidades.habilidad.skill2.mana
    checkMana()
    if (manaDisponible == true) {


        /// sanacion de vida del heroe, si la curacion supera al maximo la vida se setea al maximo///
        sanacionDeAccion = (player.clase.atributos.magia * habilidades.habilidad.skill2.daño);

        if ((vidaActualHeroe) == vidaMaxHeroe) {
            $('.registroBatalla').append("<p> Ya tienes la vida al máximo! </p > ");


        } else if ((vidaActualHeroe + sanacionDeAccion) > vidaMaxHeroe) {
            ocultarAcciones()
            animacionSanacion()
            vidaActualHeroe = player.clase.atributos.vidaMax
            document.getElementById("vidaActualHeroe").innerHTML = vidaActualHeroe;
            $('.registroBatalla').append("<p class=textoSanacion> Te sanaste " + sanacionDeAccion + " puntos de vida </p > ");

            restarMana = habilidades.habilidad.skill2.mana
            manaActualHeroe = manaActualHeroe - restarMana;
            document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

            visualBarraVidaHeroe()
            visualBarraManaHeroe()
            setTimeout(() => { accionEnemigo(); }, 2000);

        } else {
            ocultarAcciones()
            animacionSanacion()
            sanacionDeAccion = (player.clase.atributos.magia * habilidades.habilidad.skill2.daño);
            vidaActualHeroe = (vidaActualHeroe + parseInt(sanacionDeAccion));
            document.getElementById("vidaActualHeroe").innerHTML = vidaActualHeroe;


            restarMana = habilidades.habilidad.skill2.mana
            manaActualHeroe = manaActualHeroe - restarMana;
            document.getElementById("manaMaxHeroe").innerText = manaActualHeroe

            /// mostrar registro ///
            $('.registroBatalla').append("<p class=textoSanacion> Te sanaste " + parseInt(sanacionDeAccion) + " puntos de vida </p > ");

            visualBarraVidaHeroe()
            visualBarraManaHeroe()
            setTimeout(() => { accionEnemigo(); }, 2000);

        }

    } else {

    }
}
/// Ajuste de barras de vida, vida enemiga, mana y experiencia///

function visualBarraVidaHeroe() {
    vidaHeroePorcentaje = (vidaActualHeroe * 100) / vidaMaxHeroe;
    document.getElementsByClassName('w3-green')[0].style.width = vidaHeroePorcentaje + "%";
}

function visualBarraManaHeroe() {
    manaHeroePorcentaje = (manaActualHeroe * 100) / manaMaxHeroe;
    document.getElementsByClassName('w3-blue')[0].style.width = manaHeroePorcentaje + "%";

}

function visualBarraVidaEnemigo() {
    vidaEnemigoPorcentaje = (vidaActualEnemigo * 100) / vidaMaxEnemigo;
    document.getElementsByClassName('w3-red')[0].style.width = vidaEnemigoPorcentaje + "%";
}

function visualBarraExperiencia() {
    experienciaPorcentaje = (experiencia * 100) / experienciaLimite;
    document.getElementsByClassName('w3-yellow')[0].style.width = experienciaPorcentaje + "%";
}



/// Acciones del enemigo ///
function accionEnemigo() {
    animacionAtaqueEnemigo()
    /// descuenta daño de la vida del heroe segun el ataque enemigo ///

    dañoDeAccion = enemy.clase.atributos.ataque
    vidaActualHeroe = (vidaActualHeroe - dañoDeAccion);
    document.getElementById("vidaActualHeroe").innerHTML = vidaActualHeroe;

    /// mostrar registro ///
    $('.registroBatalla').append("<p class=textoGolpeEnemigo>" + enemy.clase.nombre + " enemigo realizó " + dañoDeAccion + " de daño </p>");
    visualBarraVidaHeroe()
    checkHeroDead()
}






// OCULTAR MENU LUEGO DE CADA ACCION PARA EVITAR SPAM DE ATAQUES //

function ocultarAcciones() {

    $(".grillaHabilidades").hide();

    setTimeout(() => { $(".grillaHabilidades").show(); }, 4000);


}

// Chequeo de critico y de mana //

function checkMana() {
    if (manaActualHeroe >= restarMana) {
        manaDisponible = true;
    } else {
        manaDisponible = false;
        $('.registroBatalla').append("<p> ¡Mana insuficiente! </p > ");
    }


}


function checkIfCrit() {
    chanceCrit = Math.floor((Math.random() * (100 - 0)))
    if (player.clase.atributos.suerte > chanceCrit) {
        $('.registroBatalla').append("<p class=textoGolpeCritico> ¡GOLPE CRÍTICO! </p>");
        dañoDeAccion = parseInt(dañoDeAccion * 1.5)

    }
}