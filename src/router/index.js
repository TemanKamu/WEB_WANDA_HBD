import { createRouter, createWebHistory } from "vue-router";
import DateCountdownView from "../view/DateCountdownView.vue";
import AfterCountdownView from "../view/AfterCountdownView.vue";
import MainContentView from "../view/MainContentView.vue";

const routes = [
    {path: "", component: DateCountdownView},
    {
        path: "/intro", 
        component: AfterCountdownView,
        meta: { requiresAccess: true, requiresTime: true }
    },
    {
        path: "/hbd", 
        component: MainContentView,
        meta: { requiresAccess: true, requiresTime: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // Ganti 'rahasia123' dengan kode akses yang Anda inginkan
    const secretKey = 'rahasia123';
    
    if (to.matched.some(record => record.meta.requiresAccess || record.meta.requiresTime)) {
        const targetDate = new Date(2025, 0, 1, 0, 0, 0)
        const currentDate = new Date();
        
        // Cek kedua kondisi: waktu dan key
        if (currentDate.setHours(0, 0, 0, 0) >= targetDate.setHours(0, 0, 0, 0)) {
            next();
        }else if(to.query.key === secretKey){
            next();
        } else {
            // Redirect ke home jika salah satu kondisi tidak terpenuhi
            next('/');
        }
    } else {
        next();
    }
});

export default router;