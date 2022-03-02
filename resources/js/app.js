/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//declare dependency
require('./bootstrap');
import router from './routes';
import Index from './Index';
import ReviewRating from './shared/components/ReviewRating';
import FatalError from './shared/components/FatalError';
import ValidationErrors from './shared/components/ValidationErrors';
import Success from './shared/components/Success';
import StoreDefinition from './store';

import VueRouter from 'vue-router';
import Vuex from 'vuex';

import moment from "moment";






window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.filter("fromNow", value => moment(value).fromNow());
Vue.component("ReviewRating", ReviewRating);
Vue.component("FatalError", FatalError);
Vue.component("VErrors", ValidationErrors);
Vue.component("Success", Success);



const store = new Vuex.Store(StoreDefinition);

//pointing to the single page welcome.blade.php where <div id="app"> is located
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {

        index: Index
    },
    beforeCreate(){
        this.$store.dispatch('loadStoredState');
    }
});
