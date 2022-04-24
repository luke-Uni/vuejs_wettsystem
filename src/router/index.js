import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Admin from "../views/Admin";
import Login from "../views/Login";
import Register from "../views/Register";

const routes = [
  { path: "/", component: Admin },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
