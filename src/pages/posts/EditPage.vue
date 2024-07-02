<template>
	<div>
		<h2>Edit Page</h2>
		<hr />

		<form @submit.prevent="edit">
			<div class="mb-3">
				<label for="subject" class="form-label">{{ form.title }}</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="subject"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">{{ form.content }}</label>
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
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					Cancle
				</button>
				<button type="button" class="btn btn-primary" @click="edit">
					Edit
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	const { data } = await getPostById(id);
	form.value = { ...data };
};
fetchPost();

const edit = async () => {
	await updatePost(id, { ...form.value });
	router.push({ name: 'detail', params: id });
};

const goDetailPage = () => {
	router.push({ name: 'detail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
