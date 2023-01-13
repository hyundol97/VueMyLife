export default {
    path: '/config/summary',
    name: 'config-summary',
    component: () => import('@/views/config/Form'),
    meta: {
        title: '요약',
        doc_title: '설정 - 요약',
    },
};
