const pokecontainer = document.querySelector("#pokem");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i= 1; i <= 151; i++){
	fetch(URL + i)
		.then((response) => response.json())
		.then(data => mostrarPokemon(data))
}
function mostrarPokemon(poke){
	
	const div = document.createElement("div");
	div.classList.add("pokemon");
	div.innerHTML = `
	
	<div class="img-container">
	  <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
	</div>
	<div class="info">
	  <span class="number">#${poke.id}</span>
	  <h3 class="name">${poke.name}</h3>
	  <small class="type">Type: <span></span></small>
	</div>`;

  pokecontainer.append(div);
	
	
}