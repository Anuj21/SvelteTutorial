<script lang="ts">
	import PokemanCard from './pokemanCard.svelte';
	import { pokemon } from './_api';

	let searchTerm: string;
	$: searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) => {
				return pokeman.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
			});
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<div class="page-container">
	<h1 class="text-4xl text-center mb-4 text-white">Pokedex</h1>
	<input
		class="w-full rounded-md text-md p-4 border-2 border-gray-200"
		type="text"
		placeholder="Search Pokemon"
		bind:value={searchTerm}
	/>
	<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-2">
		{#each filteredPokemon as pokeman}
			<PokemanCard {pokeman} />
		{/each}
	</div>
</div>
