import VueRouter from 'vue-router'
import AllUser from './pages/AllUser.vue'
import AddUser from './pages/AddUser.vue'
import EditUser from './pages/EditUser.vue'

export default new VueRouter({
    routes: [
        {
            path: "",
            component: AllUser
        },
        {
            path: "/#/add",
            component: AddUser
        },
        {
            path: "/edit/:id",
            component: EditUser
        },
    ],
    //mode: 'history',
    //base: "/test/"
})