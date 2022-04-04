<script lang="ts">
	import RatingSelect from './RatingSelect.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { createEventDispatcher } from 'svelte/internal';
	import { feedbackList, type feedback } from './_api';

	let btnDisabled: boolean = true;
	let text: string = '';
	let minTextLength: number = 10;
	let message: string | null;
	let rating: number = 10;
	const dispatch = createEventDispatcher();

	const handleInput = () => {
		if (text.trim().length <= minTextLength) {
			message = `Text must be at least ${minTextLength} characters`;
			btnDisabled = true;
		} else {
			message = null;
			btnDisabled = false;
		}
	};
	const handleSelect = (e) => {
		rating = e.detail;
	};

	const handleSubmit = (e) => {
		if (text.trim().length >= minTextLength) {
			const newFeedback: feedback = {
				id: uuidv4(),
				title: '',
				image: '',
				hits: 0,
				content: text,
				likes: +rating
			};
			$feedbackList = [newFeedback, ...$feedbackList];
			dispatch('add-feedback', newFeedback);
			text = '';
		}
	};
</script>

<div
	class="p-6 mb-6 bg-white text-center rounded-md shadoow-sm hover:shadow-md flex flex-col items-center"
>
	<h2 class="font-bold">How would you rate your service with us?</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />

		<div class="input-group">
			<input
				class="flex flex-1 mr-4 border-0"
				type="text"
				on:input={handleInput}
				bind:value={text}
				placeholder="Tell us something that keeps you coming back"
			/>
			<button class="button primary" type="submit" disabled={btnDisabled}>Send</button>
		</div>
		{#if message}
			<div class="message">{message}</div>
		{/if}
	</form>
</div>

<style>
	form {
		width: 80%;
	}

	.input-group {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 8px;

		border: 1px solid #202142;
		border-radius: 8px;
		margin: 8px 0;
	}

	button {
		color: #fff;
		border: 0;
		border-radius: 8px;
		width: 100px;
		height: 40px;
		cursor: pointer;
	}

	.primary {
		background-color: #202142;
	}

	button:disabled {
		background-color: gray;
		cursor: not-allowed;
	}

	.message {
		color: red;
		font-size: small;
		margin-top: 8px;
		text-align: left;
	}
</style>
