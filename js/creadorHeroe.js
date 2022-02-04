/// SELECCION DE CLASE ///
let vidaActualHeroe;
let vidaMaxHeroe;
let manaActualHeroe;
let manaMaxHeroe;
let nivel = 1;
let skill1;
let skill2;
let skill3;
let skill4;
let skill5;


class playerObject {
	constructor(nombre) {
		this.nombre = nombre;
	}
}

class habilidadObject {
	constructor(nombre) {
		this.nombre = nombre;
	}
}

let player = new playerObject("jugador1");
let habilidades = new habilidadObject("habilidades");
// Creacion de personaje //

function setClass(chosenClass) {
	$.get("../json/clases.json", (respuesta, estado) => {
		const arrayClases = respuesta.clases;
		player.clase = arrayClases.find((clase) => clase.nombre === chosenClass);
		$('#imagenHeroe').attr("src", player.clase.avatar)
		$('#imagenCombate').attr("src", player.clase.avatar)
		vidaActualHeroe = player.clase.atributos.vidaMax
		vidaMaxHeroe = player.clase.atributos.vidaMax
		manaActualHeroe = player.clase.atributos.manaMax
		manaMaxHeroe = player.clase.atributos.manaMax
		statsHeroePantalla()

	});

	$.get("../json/habilidades.json", (respuesta, estado) => {
		const arrayHabilidades = respuesta.habilidades;
		habilidades.habilidad = arrayHabilidades.find((habilidad) => habilidad.nombre === chosenClass);
		habilidadesPantalla()
	});

}



/// STATS PANTALLA ///

function statsHeroePantalla() {

	$('.esquinaUno').append("<p><h2 id=nivelActual>" + "NIVEL " + nivel + "</h2></p>");
	$('.statsHeroe').append("<p><h2>" + player.clase.nombre + " " + raza + "</h2></p>");
	$('.statsHeroe').append("<p><h3 id=ataqueActual>Ataque " + player.clase.atributos.ataque + "</h3></p>");
	$('.statsHeroe').append("<p><h3 id=magiaActual>Magia " + player.clase.atributos.magia + "</h3></p>");
	$('.statsHeroe').append("<p><h3 id=suerteActual>Suerte " + player.clase.atributos.suerte + "</h3></p>");
	$('.w3-green').append('<p id=vidaActualHeroe>' + player.clase.atributos.vidaMax + '</p>');
	$('.w3-blue').append('<p id=manaMaxHeroe>' + player.clase.atributos.manaMax + '</p>');
	$('.w3-yellow').append('<p id=experienciaActual>' + experiencia + '</p>');
}

/// HABILIDADES EN PANTALLA + DESCRIPCIONES CON HOVER ///

function habilidadesPantalla() {

	$('.grillaHabilidades').append('<img id="habilidad1" style="width:80px; height:80px" type="button" onclick=accion' + habilidades.habilidad.skill1.nombre + '();></img>')
	$('.grillaHabilidades').append('<img id="habilidad2" style="width:80px; height:80px" type="button" onclick=accion' + habilidades.habilidad.skill2.nombre + '();></img>')


	$('#habilidad1').attr("src", habilidades.habilidad.skill1.icono);
	$("#habilidad1").hover(function () {
		$('.esquinaTres').append(' <p class="descripcionTemporal">' + habilidades.habilidad.skill1.descripcion + '</p> ');
		$('.esquinaCuatro').append(' <p class="descripcionTemporal">' + "Costo de Mana" + '</p> ');
		$('.esquinaCuatro').append(' <p class="descripcionTemporal">' + habilidades.habilidad.skill1.mana + '</p> ');
	}, function () {
		$('.descripcionTemporal').remove()
	});

	$('#habilidad2').attr("src", habilidades.habilidad.skill2.icono);
	$("#habilidad2").hover(function () {
		$('.esquinaTres').append(' <p class="descripcionTemporal">' + habilidades.habilidad.skill2.descripcion + '</p> ');
		$('.esquinaCuatro').append(' <p class="descripcionTemporal">' + "Costo de Mana" + '</p> ');
		$('.esquinaCuatro').append(' <p class="descripcionTemporal">' + habilidades.habilidad.skill2.mana + '</p> ');
	}, function () {
		$('.descripcionTemporal').remove()
	});


}



