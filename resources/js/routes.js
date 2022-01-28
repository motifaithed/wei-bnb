import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';


const routes = [
                {
                    path:'/',
                    component: ExampleComponent,
                    name:'home',
                }
               ]

//Instantiate vue router

const router = new VueRouter({
    routes,     //shofr for 'routes: routes'
});

export default router;