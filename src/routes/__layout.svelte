<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://github.com/Anuj21" target="_blank">My Github Account</a> to see more projects.</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 1rem;
		
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
 	}

	footer a {
		font-weight: bold;
	}

</style>
