<template>
	<div>
		<h2>Detail Page</h2>
		<p>content</p>
		<p class="text-muted">createdat</p>
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
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goListPage = () => {
	router.push({ name: 'postList' });
};
const goEditPage = () => {
	router.push({ name: 'edit', params: { id } });
};
</script>

<style lang="scss" scoped></style>
