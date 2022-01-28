import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import Example2 from './components/example2';


const routes = [
                {
                    path:'/',
                    component: ExampleComponent,
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