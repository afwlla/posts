<template>
	<div>
		<h2>Create Page</h2>
		<hr />

		<form @submit.prevent="save">
			<div class="mb-3">
				<label for="subject" class="form-label">Subject</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="subject"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">Content</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					List
				</button>
				<button type="button" class="btn btn-primary" @click="save">
					Save
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';

const router = useRouter();

const form = ref({
	title: null,
	content: null,
});

const save = async () => {
	const data = { ...form.value, createdAt: Date.now() };
	await createPost(data);
	router.push({ name: 'postList' });
};

const goListPage = () => {
	router.push({ name: 'postList' });
};
</script>

<style lang="scss" scoped></style>
