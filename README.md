1: descargar el codigo fuente 

2: hacer unas pequeñas modificaciones como tomar la estructura de las tarjetas de los pokemones para usarla en JS 

3: construir la logica del programa a partir de la que viene por defecto
3.1: Cambie la constante de createPokemonCard por una funcion y le escribo como argumento el nombre de la variable que quiero usar para traer la informacion de la api por que de esa forma se me hizo mas sencillo usarla 
3.2: Escribo el codigo para generar la estructura de la tarjeta y dibujarla en el HTML empezando por una constante que use el metodo createElement
3.3: con un classList le añado la clase al div
3.4: con innerHTML escribo el contenido del div 
3.5: llamando la constante que tiene el contenedor de las tarjetas inyecto el contenido dentro de este con un append con el argumento de la constante del div
3.6: empiezo a modificar el contenido de las tarjetas trayendo el contenido de la api escribiendo ${pokemon.info_que_quiero_traer_de_la_api}
3.7: declaro la variable pokeId para guardar ahi la informacion de el numero del pokemon y asi poder añadirle ceros al principio dependiendo del numero que sea
3.8: declaro una variable llamada types para poder usar el metodo .map para poder sacar el id de los pokemon, debajo de esta declaro typesFirstELement para sacar el primer objeto de ese arreglo y facilitar la asignacion de los colores a las tarjetas mas adelante

4: Declaro una variable llamada targetColors para traer los colores de las tarjetas
4.1: Escribo una serie de condicionales que asignaran el color de la tarjeta dependiendo del tipo del pokemon