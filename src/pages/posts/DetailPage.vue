<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my-4" />

		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">Previous</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">Next</button>
			</div>

			<div class="col-auto me-auto"></div>

			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">List</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					Edit
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">Delete</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: Number,
});
const router = useRouter();

const post = ref({});

const fetchPost = async () => {
	const { data } = await getPostById(props.id);
	post.value = { ...data };
};
fetchPost();

const remove = async () => {
	if (confirm('are you sure?')) {
		await deletePost(props.id);
	}
	router.push({ name: 'postList' });
};

const goListPage = () => {
	router.push({ name: 'postList' });
};
const goEditPage = () => {
	router.push({ name: 'edit', params: { id: props.id } });
};
</script>

<style lang="scss" scoped></style>
