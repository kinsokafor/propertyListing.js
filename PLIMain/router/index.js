import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import admin from '../../common/admin';
import owners from '../../common/owners';
import invoiceRoutes from '@module/Invoice/IVXAdmin/router/routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
            meta: { title: "404 Not Found" }
        },
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
            meta: { title: "Dashboard" }
        },
        ...invoiceRoutes.map(i => {
            if(i.path === "/options") {
                i.path = "/invoice/options"
                i.name = "InvoiceOptions"
            }
            return i
        }),
        ...admin,
        ...owners
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;