<template>
	<div>
		<h2>Create Page</h2>
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
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					List
				</button>
				<button type="button" class="btn btn-primary">Save</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goListPage = () => {
	router.push({ name: 'postList' });
};
</script>

<style lang="scss" scoped></style>
