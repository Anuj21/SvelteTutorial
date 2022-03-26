<script context="module">
    export async function load({params}) {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        const res = await fetch(url);
        const pokeman = await res.json();

        return {props: {pokeman}};
    }
</script>

<script>
    import Fa from 'svelte-fa'
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

    export let pokeman;
    const type = pokeman.types[0].type.name;
</script>

<div class="p-6 w-6/12 bg-white text-center rounded-md shadoow-sm hover:shadow-md flex flex-col items-center m-auto mt-6"> 
    <a class="flex self-start" href="/pokedex">
        <Fa  icon={faArrowLeft}  />
    </a>
    <h1 class="text-4xl text-center uppercase mb-6" >{pokeman.name}</h1>
    <p class="mb-3">Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:<strong>{pokeman.weight}</strong></p>
    <img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{pokeman.id}.svg" alt={pokeman.name} />
</div>