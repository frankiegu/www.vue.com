import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueRouter from 'vue-router';
import Order from './views/order.vue';
Vue.use(Vuex);
Vue.use(VueRouter);
const Foo = {
    template: '<div class="nav">foo</div>'
}
const Bar = {
    template: '<div class="nav">bar</div>'
}
const User = {
    template: `<div class="user nav">
                <h2>User {{ $route.params.id }}</h2>
                <router-link to="/user/415/profile">User Profile</router-link>
                <router-link to="/user/425/posts">User posts</router-link>
                <router-view></router-view>
            </div>`
}
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }
    // 2. 定义路由
    // 每个路由应该映射一个组件。 其中"component" 可以是
    // 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    // 我们晚点再讨论嵌套路由。
const routes = [{
            path: '/foo',
            component: Foo
        },
        {
            path: '/order/:id',
            name: 'order',
            component: Order,
            beforeEnter: (to, from, next) => {
                console.log('组件内部路由');
                next();
            }
        },
        {
            path: '/bar',
            component: Bar
        }, {
            path: '/user/:id',
            component: User,
            children: [{
                    path: '',
                    component: UserHome
                },
                {
                    path: 'profile', // user/:id/profile
                    component: UserProfile
                },
                {
                    path: 'posts', // user/:id/posts
                    component: UserPosts
                }
            ]
        }
    ]
    // 3. 创建 router 实例，然后传 `routes` 配置
    // 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
router.beforeEach((to, from, next) => {
        console.log('全局路由')
        next()
    })
    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    // 从而让整个应用都有路由功能
const app = new Vue({
    data() {
        return {
            transitionName: 'fade'
        }
    },
    router,
    template: `
        <div id="app">
        <p>Hello App!</p>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-link to="/user/11">Go to User</router-link>
            <router-link :to="{ name: 'order', params: { id: 010201708281710 }}">Go to Order</router-link>
        </p>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>    
    `,
    watch: {
        '$route' (to, from) {
            let toDepth = to.path.split('/').length
            let fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-fade' : 'fade'
        }
    }
}).$mount('#app')