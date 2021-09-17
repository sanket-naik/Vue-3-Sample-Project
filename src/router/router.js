import { createWebHistory, createRouter } from 'vue-router'
import Todo from '../components/Todo/Todo.vue'
import UserProfile from '../views/UserProfile/UserProfile.vue'
import Home from '../views/Home/Home.vue'
import NotFound from "../views/NotFound/NotFound.vue"

const routes=[
    
    {
        path:'/test', 
        name:'Test',
        component: UserProfile
    },
    {
        path:'/todo',
        name:"Todo",
        component: Todo
    },
    {
        path:'/',
        name:"Home",
        component: Home
    },
    // redirect to 
    {
        path:'/abcd',
        redirect:'/todo'
    },
    {
        path:"/:catchAll(.*)",
        name:"notFound",
        component:NotFound
    }
]

// routes.replace({ path: '*', redirect: '/' })


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router