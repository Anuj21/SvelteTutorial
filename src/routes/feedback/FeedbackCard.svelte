<script lang="ts">
	import Fa from 'svelte-fa';
	import * as Icons from '@fortawesome/free-solid-svg-icons';
	import { feedbackList, type feedback } from './_api';

	export let feedbackInfo: feedback;

	const handleDelete = (id: number) => {
		feedbackList.update((currentFeedback) => {
			return currentFeedback.filter((item) => item.id !== id);
		});
	};
</script>

<div
	class="p-6 mb-6 bg-white text-center rounded-md shadoow-sm hover:shadow-md flex flex-col items-center relative"
>
	<div class="num-display">
		<span class="mr-1">{feedbackInfo.likes}</span>
		<Fa icon={Icons.faThumbsUp} />
	</div>
	<button class="close" on:click={() => handleDelete(feedbackInfo.id)}>
		<strong>x</strong>
	</button>
	<p class="text-display">
		<strong>-{feedbackInfo.id}-</strong> <br />
		{feedbackInfo.content}
	</p>
</div>

<style>
	.num-display {
		position: absolute;
		top: -15px;
		left: -25px;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 2px solid white;

		background: teal;
		color: white;
		font-size: 12px;
	}

	.close {
		position: absolute;
		top: 0px;
		right: 10px;
	}
</style>
