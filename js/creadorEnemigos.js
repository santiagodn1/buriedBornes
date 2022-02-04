let vidaActualEnemigo;
let vidaMaxEnemigo;
let sonidoAtaqueEnemigo;

class enemyObject {
    constructor(id) {
        this.id = id;
    }
}

let enemy = new enemyObject("enemigo");
// Creacion de enemigos//
function setEnemy(chosenEnemy) {
    $.get("../json/enemigos.json", (respuesta, estado) => {
        const arrayEnemigos = respuesta.enemigos;
        enemy.clase = arrayEnemigos.find((enemigos) => enemigos.id === chosenEnemy);
        $('#imagenEnemigo').attr("src", enemy.clase.avatar)
        vidaActualEnemigo = enemy.clase.atributos.vidaMax;
        vidaMaxEnemigo = enemy.clase.atributos.vidaMax;
        sonidoAtaqueEnemigo = new Audio(enemy.clase.atributos.sonido);

        statsEnemyPantalla()


    });

}


function statsEnemyPantalla() {
    $('.esquinaDos').append("<p><h2 id=nombreEnemigo>" + enemy.clase.nombre + "</h2></p>");
    $('.w3-red').append('<p id=vidaActualEnemigo>' + enemy.clase.atributos.vidaMax + '</p>');
}




