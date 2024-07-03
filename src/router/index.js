import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import CreatePage from '@/pages/posts/CreatePage.vue';
import DetailPage from '@/pages/posts/DetailPage.vue';
import EditPage from '@/pages/posts/EditPage.vue';
import ListPage from '@/pages/posts/ListPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
	{ path: '/', name: 'home', component: HomePage },
	{ path: '/about', name: 'about', component: AboutPage },
	{ path: '/posts/create', name: 'create', component: CreatePage },
	{
		path: '/posts/:id',
		name: 'detail',
		component: DetailPage,
		props: true,
		//props: route => ({ id: parseInt(route.params.id) }),
	},
	{ path: '/posts/:id/edit', name: 'edit', component: EditPage },
	{ path: '/posts', name: 'postList', component: ListPage },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
