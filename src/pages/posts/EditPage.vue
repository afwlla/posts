<template>
	<div>
		<h2>Edit Page</h2>
		<hr />

		<form @submit.prevent>
			<div class="mb-3">
				<label for="subject" class="form-label">Subject</label>
				<input type="text" class="form-control" id="subject" />
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">Content</label>
				<textarea class="form-control" id="content" rows="3"></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					Cancle
				</button>
				<button type="button" class="btn btn-primary">Edit</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goDetailPage = () => {
	router.push({ name: 'detail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
