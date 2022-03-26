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
		padding: 1rem;
		
		width: 100%;
		height: 90vh;
		margin: 0 auto;
		box-sizing: border-box;
		overflow-y: auto;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(255, 255, 255, 1);
 	}

	footer a {
		font-weight: bold;
	}

</style>
