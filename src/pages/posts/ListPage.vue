<template>
	<div>
		<h2>List Page</h2>
		<hr class="my-4" />

		<form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<input v-model="params.title_like" type="text" class="form-control" />
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
				</div>
			</div>
		</form>

		<hr class="my-4" />

		<div class="row g-3">
			<div v-for="p in posts" :key="p.id" class="col-4">
				<PostItem
					:title="p.title"
					:content="p.content"
					:created-at="p.createdAt"
					@click="goPage(p.id)"
				></PostItem>
			</div>
		</div>

		<nav class="mt-5" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{ disabled: !(params._page > 1) }">
					<a class="page-link" href="#" aria-label="Previous">
						<span aria-hidden="true" @click.prevent="--params._page"
							>&laquo;</span
						>
					</a>
				</li>

				<li
					v-for="page in pageCount"
					:key="page"
					class="page-item"
					:class="{ active: params._page === page }"
				>
					<a class="page-link" href="#" @click.prevent="params._page = page">{{
						page
					}}</a>
				</li>

				<li
					class="page-item"
					:class="{ disabled: !(params._page < pageCount) }"
				>
					<a class="page-link" href="#" aria-label="Next">
						<span aria-hidden="true" @click.prevent="++params._page"
							>&raquo;</span
						>
					</a>
				</li>
			</ul>
		</nav>

		<hr class="my-4" />

		<AppCard>
			<DetailPage :id="1"></DetailPage>
		</AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import DetailPage from '@/pages/posts/DetailPage.vue';
import AppCard from '@/components/AppCard.vue';
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
</script>

<style lang="scss" scoped></style>
