<script context="module" lang="ts">
	import { fade, scale } from 'svelte/transition';
	import FeedbackForm from './FeedbackForm.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	import FeedbackCard from './FeedbackCard.svelte';
	import { feedbackList } from './_api';

	$: count = $feedbackList.length;
	$: average = ($feedbackList.reduce((acc, { likes }) => acc + likes, 0) / count).toFixed(2);
</script>

<svelte:head>
	<title>feedback</title>
</svelte:head>

<div class="page-container">
	<h1 class="text-4xl text-center mb-4 text-white">Feedback</h1>
	<div class="container">
		<div class="flex flex-row justify-between mb-4 text-md text-white font-bold">
			<h4>Reviews: {count}</h4>
			<h4>Ratings Average: {average}</h4>
		</div>

		<FeedbackForm />

		{#each $feedbackList as feedback (feedback.id)}
			<div in:scale out:fade={{ duration: 500 }}>
				<FeedbackCard feedbackInfo={feedback} />
			</div>
		{/each}
	</div>
</div>
