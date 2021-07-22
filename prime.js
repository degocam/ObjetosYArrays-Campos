//El fin de este constructor es crear un mensaje con los horarios de las películas
//Cada objecto corresponde a una película la cual tiene un nombre, un horario y un id
class Pelicula{
    constructor (nombre, horario, id){
        this.nombre = nombre;
        this.horario = horario;
        this.id = id;
    }

//Este método es el que recoge los elementos del objeto/película y los muestra como un mensaje en un ALERT
    mostrarPeli(){
        alert("El horario de "+this.nombre+" es "+this.horario);
    }
}

//Este es el array que contendrá al objeto con sus elementos
const peliculas = [];

//Acá instanciamos a partir del constructor 4 películas con sus horarios
peliculas.push(new Pelicula('Black Widow', '16:30, 18:45, 20:55', 1));
peliculas.push(new Pelicula('El Conjuro: El Diablo Me Obligó a Hacerlo', '15:h10, 17:40, 19:20', 2));
peliculas.push(new Pelicula('The Suicide Squad', '15:45, 18:30, 21:10', 3));
peliculas.push(new Pelicula('Venom: Carnage Liberado', '19:15, 21:35, 22:00', 4));

//En este bucle creamos un mensaje para cada objeto instanciado
for (const peliculaElegida of peliculas)
peliculaElegida.mostrarPeli();
