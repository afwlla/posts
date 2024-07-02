<template>
	<div>
		<h2>List Page</h2>
		<hr />

		<div class="row g-3">
			<div v-for="p in posts" :key="p.id" class="col-4">
				<PostItem
					:title="p.title"
					:content="p.content"
					:created-at="p.createAt"
					@click="goPage(p.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const posts = ref(getPosts());
const goPage = id => {
	//router.push(`/posts/${id}`);
	router.push({ name: 'detail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
