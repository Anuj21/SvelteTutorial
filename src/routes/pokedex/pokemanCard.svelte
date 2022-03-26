<script lang="ts">
	import type { pokemon } from './_api';
    import { fade } from 'svelte/transition';
    
    export let pokeman: pokemon;
</script>
<a  class="p-6 bg-white text-center rounded-md shadoow-sm hover:shadow-md flex flex-col items-center"
    href={`/pokemon/${pokeman.id}`}
    transition:fade
>
    <img src={pokeman.image} alt={pokeman.name}>
    <h2 class="capitalize text-2xl">{pokeman.id}.{pokeman.name}</h2>
</a>