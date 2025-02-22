<template>
	<div>
		<h2>List Page</h2>
		<hr class="my-4" />

		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>

		<hr class="my-4" />

		<AppGrid :items="posts">
			<template v-slot="{ item }"
				><PostItem
					:title="item.title"
					:content="item.content"
					:created-at="item.createdAt"
					@click="goPage(item.id)"
					@modal="openModal(item)"
				></PostItem
			></template>
		</AppGrid>

		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="
				page => {
					params._page = page;
				}
			"
		/>

		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:createdAt="modalCreatedAt"
			/>
		</Teleport>

		<hr class="my-4" />

		<template v-if="posts && posts.length > 0">
			<AppCard>
				<DetailPage :id="posts[0].id"></DetailPage>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import DetailPage from '@/pages/posts/DetailPage.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { getPosts } from '@/api/posts';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const posts = ref({});

const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPost = async () => {
	const { data, headers } = await getPosts(params.value);
	posts.value = data;
	totalCount.value = headers['x-total-count'];
};
watchEffect(fetchPost);

const goPage = id => {
	//router.push(`/posts/${id}`);
	router.push({ name: 'detail', params: { id } });
};

// modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
