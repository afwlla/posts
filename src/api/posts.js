const posts = [
	{ id: 1, title: 'subject1', content: 'content1', createAt: '2020-01-01' },
	{ id: 2, title: 'subject2', content: 'content2', createAt: '2020-02-02' },
	{ id: 3, title: 'subject3', content: 'content3', createAt: '2020-03-03' },
	{ id: 4, title: 'subject4', content: 'content4', createAt: '2020-04-04' },
	{ id: 5, title: 'subject5', content: 'content5', createAt: '2020-05-05' },
];

export function getPosts() {
	return posts;
}

export function getPostById(id) {
	return posts.find(item => item.id === id);
}
