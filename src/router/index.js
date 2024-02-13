import {createRouter,createWebHashHistory} from 'vue-router'
import loginmenu from '../view/loginmenu.vue'
import dashboard from '../view/dashboard.vue'
import createAccount from '../view/createAccount.vue'


// child
import home from '../view/home.vue'
import service from '../view/service.vue'
import menu from '../view/menu.vue'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'loginmenu',
            component:loginmenu
        },
        {
            path:'/dashboardmenu',
            name:'dashboardmenu',
            children:[
                {
                    path:'/home',
                    name:'home',
                    component:home
                },
                {
                    path:'/menu',
                    name:'menu',
                    component:menu
                },
                {
                    path:'/service',
                    name:'service',
                    component:service
                },
            ],
            component:dashboard
        },
        {
            path:'/createAccount',
            name:'createAccount',
            component:createAccount
        }
    ]
})

export default router