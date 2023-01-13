import addressRoutes from './address';
import summaryRoutes from './summary';
import AppBar from '@/components/AppBar';

export default {
    path: '/config',
    component: AppBar,
    name: 'config',
    redirect: { name: 'config-summary' },
    meta: {
        title: '설정',
    },
    children: [addressRoutes, summaryRoutes],
};
