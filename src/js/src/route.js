import Vue from 'vue';
import $ from 'jquery';
import Vuex from 'vuex';
import axios from 'axios';
import VueRouter from 'vue-router';
import routes from './module/routes';
Vue.use(Vuex);
Vue.use(VueRouter);
const store = new Vuex.Store({
    state: {
        currentRoute: 'home'
    },
    mutations: {
        increment(state, route) {
            state.currentRoute = route || 'home'
        }
    },
    actions: {
        checkout(context, route) {
            context.commit('increment', route)
        }
    },
    getters: {
        currentRoute: (state) => {
            return state.currentRoute
        }
    }
});

function checkout() {
    var match = /page=(\w+)/.exec(location.hash) || []
    store.dispatch('checkout', match[1] || 'home')
}
Vue.component('home', function(resolve) {
    require(['./pages/Home.vue'], resolve)
})
Vue.component('about', function(resolve) {
    require(['./pages/About.vue'], resolve)
})
Vue.component('404', function(resolve) {
    require(['./pages/404.vue'], resolve)
})
if (!!(window.history && history.pushState)) {
    $(window).on('popstate', checkout)
    checkout()
    new Vue({
        el: '#app',
        store,
        computed: {
            ViewComponent() {
                let view = routes[this.$store.state.currentRoute]
                return view ? require('./pages/' + view + '.vue') : require('./pages/404.vue')
            }
        },
        render(h) {
            return h(this.ViewComponent)
        }
    });
}