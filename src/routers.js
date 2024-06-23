import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter,createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Restaurant from './components/Restaurant.vue'



const routes= [
    {
        name: "HomePage",
        component: Home,
        path:"/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path:"/sign-up",
    },
    {
        name: "LoginPage",
        component: Login,
        path:"/login",
    },
    {
        name: "AddPage",
        component: Add,
        path:"/add",
    },
    {
        name: "UpdatePage",
        component: Update,
        path:"/update/:id",
    },
    {
        name: "RestaurantPage",
        component: Restaurant,
        path:"/restaurant/:id",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;