/*
	This module is used by the /pokedex endpoint to
	make calls pokemon api, which stores pokemon information
	for each pokemon. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

*/

import { writable, type Writable } from 'svelte/store';

export type pokemon = {
	id: number;
	name: string;
	image: string;
};

export const pokemon: Writable<pokemon[]> = writable([]);

export async function fetchPokemon(): Promise<void> {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();
	const pokemonInfo = data.results.map((data, index) => {
		return {
			id: index + 1,
			name: data.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemon.set(pokemonInfo);
}

fetchPokemon();
