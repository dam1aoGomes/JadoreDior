import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import PerfumeView from "@/views/PerfumeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import PerfumesView from "@/views/PerfumesView.vue";
import DashBoardView from "@/views/DashBoardView.vue";
import CadastroPerfumeView from "@/views/CadastroPerfumeView.vue";
import { useUserStore } from "@/stores/user_store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/perfume/:id",
      name: "perfume",
      component: PerfumeView,
      props: true,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/perfumes",
      name: "perfumes",
      component: PerfumesView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoardView,
      meta: {
        requiresAuth: true,
      },
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore();
        if (!userStore.isAuthenticated()) {
          next("/login");
        } else if (userStore.role() !== "Admin") {
          next("/");
        } else {
          next();
        }
      },
    },
    {
      path: "/cadastro-perfume",
      name: "cadastro-perfume",
      component: CadastroPerfumeView,
    },
  ],
});

export default router;
