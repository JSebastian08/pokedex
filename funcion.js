const pokeContainer = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#D7BDB6',
	normal: '#F5F5F5',
	ghost: '#7F6B8F',
	ice: '#CCE8FF'
}

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

function createPokemonCard(pokemon) {

	let targetColor = colors
	let types = pokemon.types.map(type => type.type.name)
	let typesFirstELement = types.shift()
	let pokeId = pokemon.id
	
	if(pokeId < 10){
		pokeId = "00" + pokeId
	}else if (pokeId <= 99){
		pokeId = "0" + pokeId
	}

	if ( typesFirstELement.toString() == "fire" ){
		targetColor = colors.fire
	}else if (typesFirstELement.toString() == "grass"){
		targetColor = colors.grass
	}else if (typesFirstELement.toString() == "electric"){
		targetColor = colors.electric
	}else if (typesFirstELement.toString() == "water"){
		targetColor = colors.water
	}else if (typesFirstELement.toString() == "ground"){
		targetColor = colors.ground
	}else if (typesFirstELement.toString() == "rock"){
		targetColor = colors.rock
	}else if (typesFirstELement.toString() == "fairy"){
		targetColor = colors.fairy
	}else if (typesFirstELement.toString() == "poison"){
		targetColor = colors.poison
	}else if (typesFirstELement.toString() == "bug"){
		targetColor = colors.bug
	}else if (typesFirstELement.toString() == "dragon"){
		targetColor = colors.dragon
	}else if (typesFirstELement.toString() == "psychic"){
		targetColor = colors.psychic
	}else if (typesFirstELement.toString() == "flying"){
		targetColor = colors.flying
	}else if (typesFirstELement.toString() == "fighting"){
		targetColor = colors.fighting
	}else if (typesFirstELement.toString() == "normal"){
		targetColor = colors.normal
	}else if (typesFirstELement.toString() == "ghost"){
		targetColor = colors.ghost
	}else if (typesFirstELement.toString() == "ice"){
		targetColor = colors.ice
	}

    const div = document.createElement("div");
	div.classList.add("pokemon")
	div.innerHTML = `
	<div class="pokemon" style="background-color: ${targetColor};">
		<div class="img-container">
			<img src="${pokemon.sprites.other["dream_world"].front_default}" alt=${pokemon.name}>
		</div>
		<div class="info">
			<span class="number">#${pokeId}</span>
			<h3 class="name">${pokemon.name}</h3>
			<small class="type">Type:<span> ${typesFirstELement}</span></small>
		</div>
	</div>`;
	pokeContainer.append(div);
}


fetchPokemons()