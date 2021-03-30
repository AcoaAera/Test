import VueRouter from 'vue-router'
import AllUser from './pages/AllUser.vue'
import AddUser from './pages/AddUser.vue'
import EditUser from './pages/EditUser.vue'

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: AllUser,
            name: 'all'
        },
        {
            path: "/add",
            component: AddUser,
            name: "add"
        },
        {
            path: "/edit/:id",
            component: EditUser,
            name: "edit"
        },
    ],
    mode: 'history',
    base: "/test/",
})