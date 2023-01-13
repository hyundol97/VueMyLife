export default {
    path: '/diary',
    redirect: { name: 'diary-list' },
    name: 'diary',
    component: () => import('@/views/diary/List'),
    meta: {
        title: '다이어리',
    },
    children: [],
};
