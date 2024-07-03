<template>
	<div>
		<h2>Create Page</h2>
		<hr />

		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
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
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

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
