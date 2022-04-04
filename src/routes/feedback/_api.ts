import { writable, type Writable } from 'svelte/store';

export type feedback = {
	id: number;
	title: string;
	content: string;
	likes: number;
	hits: number;
	image: string;
};

export const feedbackList: Writable<feedback[]> = writable([]);

export async function fetchFeedback(): Promise<void> {
	const url = 'http://fakeapi.jsonparseronline.com/posts?_limit=10';
	const res = await fetch(url);
	const data = await res.json();
	const feedbackInfo = data.map((item) => {
		return {
			id: item.id,
			title: item.title,
			content: item.content,
			likes: item.likes,
			hits: item.hits,
			name: item.name,
			image: item.imageUrl
		};
	});
	feedbackList.set(feedbackInfo);
}

fetchFeedback();

export async function deleteFeedbackEntry(id: number): Promise<void> {
	const url = `http://fakeapi.jsonparseronline.com/posts/${id}`;
	const res = await fetch(url, { method: 'DELETE' });
	const data = await res.json();
	if (data.success) {
		feedbackList.update((list) => {
			const newList = list.filter((item) => item.id !== id);
			return newList;
		});
	}
}
