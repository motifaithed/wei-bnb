/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//declare dependency
require('./bootstrap');
import router from './routes';
import Index from './Index';
import VueRouter from 'vue-router';



window.Vue = require('vue').default;

 Vue.use(VueRouter);

//pointing to the single page welcome.blade.php where <div id="app"> is located
const app = new Vue({
    el: '#app',
    router,
    components: {

        index: Index
    }
});
