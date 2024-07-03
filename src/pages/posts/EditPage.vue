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
		<AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
	try {
		await updatePost(id, { ...form.value });
		//router.push({ name: 'detail', params: id });
		vAlert('수정완료!!!', 'success');
	} catch (error) {
		console.error(error);
		vAlert('error!!!!');
	}
};

const goDetailPage = () => {
	router.push({ name: 'detail', params: { id } });
};

// alert
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('');

const vAlert = (message, type = 'error') => {
	showAlert.value = true;
	alertMessage.value = message;
	alertType.value = type;
	setTimeout(() => {
		showAlert.value = false;
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
