import VueRouter from 'vue-router';

import Bookables from './bookables/Bookables'
import Example2 from './components/example2';
import Bookable from './bookable/Bookable';


const routes = [
                {
                    path:'/',
                    component: Bookables,
                    name:'home',
                },
                {
                    path:'/bookable/:id',
                    component: Bookable,
                    name:'bookable',
                }
                
                
               ]

//Instantiate vue router

const router = new VueRouter({
    routes,     //shofr for 'routes: routes'
    mode: 'history'
});

export default router;