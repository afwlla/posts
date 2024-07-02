<template>
	<div>
		<h2>{{ data.title }}</h2>
		<p>{{ data.content }}</p>
		<p class="text-muted">{{ data.createdAt }}</p>
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
				<button class="btn btn-outline-danger">Delete</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: Number,
});
const router = useRouter();
//const route = useRoute();
//const id = route.params.id;
const data = ref({});

const fetchPost = () => {
	data.value = { ...getPostById(props.id) };
};
fetchPost();

const goListPage = () => {
	router.push({ name: 'postList' });
};
const goEditPage = () => {
	router.push({ name: 'edit', params: { id: props.id } });
};
</script>

<style lang="scss" scoped></style>
