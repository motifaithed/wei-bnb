/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//declare dependency
require('./bootstrap');
import router from './routes';
import Index from './Index';
import ReviewRating from './shared/components/ReviewRating'
import FatalError from './shared/components/FatalError'
import VueRouter from 'vue-router';
import Vue from 'vue';
import moment from "moment";




window.Vue = require('vue').default;

 Vue.use(VueRouter);
 Vue.filter("fromNow", value => moment(value).fromNow());
 Vue.component("ReviewRating", ReviewRating);
 Vue.component("FatalError", FatalError);

//pointing to the single page welcome.blade.php where <div id="app"> is located
const app = new Vue({
    el: '#app',
    router,
    components: {

        index: Index
    }
});
