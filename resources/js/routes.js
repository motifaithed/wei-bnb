import VueRouter from 'vue-router';

import Bookables from './bookables/Bookables'
import Example2 from './components/example2';


const routes = [
                {
                    path:'/',
                    component: Bookables,
                    name:'home',
                },
                {
                    path:'/second',
                    component: Example2,
                    name:'second',
                }
               ]

//Instantiate vue router

const router = new VueRouter({
    routes,     //shofr for 'routes: routes'
    mode: 'history'
});

export default router;