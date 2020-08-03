import Router from 'vue-router'
import vue from 'vue'
import msg from '../component/msg.vue'

vue.use(Router)



const route = [
    {
        path:"/msg",
        name:"msg",
        component:msg

    }

]

const router  = new Router({routes:route})

export {router}