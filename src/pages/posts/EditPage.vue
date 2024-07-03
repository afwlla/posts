<template>
	<div>
		<h2>Edit Page</h2>
		<hr />

		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					Cancle
				</button>
				<button type="button" class="btn btn-primary" @click="edit">
					Edit
				</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

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
