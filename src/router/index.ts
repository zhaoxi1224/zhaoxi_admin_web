import { createRouter, createWebHistory } from 'vue-router'
import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "web",
      path: "/",
      // component:()=>import("@/views/web/IndexView.vue")
      redirect: "/admin",
    },
    {
      name: "login",
      path: "/login",
      component:()=>import("@/views/login/IndexView.vue")
    },
    {
      name: "admin",
      path: "/admin",
      component:()=>import("@/views/admin/IndexView.vue"),
      meta:{
        title:"首页"
      },
      children:[
        {
          name:"home",
          path:"",
          component:()=> import("@/views/admin/home/IndexView.vue"),
          meta:{
            title:"首页"
          }
        },
        {
          name:"userCenter",
          path:"user_center",
          meta:{
            title:"个人中心"
          },
          children:[
            {
              name:"userInfo",
              path:"user_info",
              meta:{
                title:"用户信息"
              },
              component:()=> import("@/views/admin/user_center/IndexView.vue"),
            },
          ]
        },
        {
          name:"userManage",
          path:"user_manage",
          meta:{
            title:"用户管理"
          },
          children:[
            {
              name:"userList",
              path:"user_list",
              meta:{
                title:"用户列表"
              },
              component:()=> import("@/views/admin/user_manage/IndexView.vue"),
            },
          ]
        },
        {
          name:"settingsManage",
          path:"settings_manage",
          meta:{
            title:"系统信息"
          },
          children:[
            {
              name:"settings",
              path:"settings",
              meta:{
                title:"系统配置"
              },
              component:()=> import("@/views/admin/settings_manage/IndexView.vue"),
            }
          ]
        },
      ]
    }
  ],
})

router.beforeEach((to, from, next) => {
  NProgress.start();//开启进度条
  next()
})
//当路由进入后,关闭进度条
router.afterEach((to, from, next) => {
  //即将进入新页面组件潜.关闭进度条
  NProgress.done();
})
export default router
