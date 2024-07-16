import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"; //引用 vue-router 的 createRouter() 與 createWebHistory()。
let history = createWebHashHistory(); //使用 createWebHistory() 建立 history。
let routes = [
    {
        path: "/",
        redirect: "/layout",
    },
    {
        path: "/login",
        component: () => import("@/views/login.vue"),
        meta: {
            title: "login",
        },
    },
    {
        path: "/layout",
        component: () => import("@/views/layout.vue"),
        meta: {
            title: "layout",
        },
    },
    {
        path: "/max7219",
        component: () => import("@/views/max7219.vue"),
        meta: {
            title: "max7219",
        },
    },
    // {
    //     path: "/layout",
    //     name: "layout",
    //     meta: { name: "大廳" },
    //     redirect: "/layout/news",
    //     component: () => import("@/views/layout.vue"),
    //     // children: [
    //     //     {
    //     //         path: "news",
    //     //         name: "news",
    //     //         meta: {
    //     //             auth: false,
    //     //             name: "最新消息",
    //     //         },
    //     //         component: () => import("@/views/layout/news.vue"),
    //     //     }
    //     // ],
    // }

];
const router = createRouter({ history, routes });
router.beforeEach((to, from, next) => { // 路由守衛
    // 路由跳轉前觸發
    if (to.meta.auth) {
        // 檢查cookuie
        // console.log(from.name);
        // console.log(to);
    }
    next();
}
);
router.afterEach((to, from) => {
    // 在每次路由導航之後觸發
    // 可以進行後置處理操作，如日誌記錄等
});

export default router; //使用 createRouter() 根據 history 與 routes 建立 route。