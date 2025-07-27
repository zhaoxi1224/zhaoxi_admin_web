import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "web",
      path: "/",
      component:()=>import("@/views/web/IndexView.vue")
    },
    {
      name: "login",
      path: "/login",
      component:()=>import("@/views/login/IndexView.vue")
    },
    {
      name: "admin",
      path: "/admin",
      component:()=>import("@/views/admin/IndexView.vue")
    }
  ],
})

export default router
