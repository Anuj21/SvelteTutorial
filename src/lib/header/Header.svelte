<script lang="ts">
	import { page } from '$app/stores';
	import ist from './git-icon.svg';
	import { DateTime } from 'luxon';

	let currentDateTime: string = '';
	setInterval(() => {
		let dateTime: DateTime = DateTime.local();
		currentDateTime = dateTime.toLocaleString(DateTime.DATETIME_SHORT);
	}, 1);
</script>

<header>
	<div class="corner">
		<a href="https://github.com/Anuj21" target="_blank">
			<img src={ist} alt="Github Account" />
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
			<li class:active={$page.url.pathname === '/pokedex'}>
				<a sveltekit:prefetch href="/pokedex">Pokedex</a>
			</li>
			<li class:active={$page.url.pathname === '/feedback'}>
				<a sveltekit:prefetch href="/feedback">Feedback</a>
			</li>
		</ul>
	</nav>

	<div class="corner right">
		{currentDateTime}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: rgba(255, 255, 255, 1);
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner.right {
		display: flex;
		align-items: center;
		width: 6em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
