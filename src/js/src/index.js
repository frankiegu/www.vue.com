//es6加载模块
import Vue from 'vue';
import _ from 'lodash';
import $ from 'jquery';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
Vue.component('todo-item', {
    props: ['todo'], //读取父级组件传入的数据
    template: '<li>{{ todo.text }}</li>'
});
const store = new Vuex.Store({
    state: {
        count: 0,
        items: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '牛肉' }
        ]
    },
    mutations: {
        increment(state) {
            state.count++;
            state.items.push({ id: 3, text: '鱼类' });
        }
    }
});
//定义过滤器
Vue.filter('uppercase', function(value) {
    return value.toUpperCase();
});
new Vue({ //创建一个异步vue实例, 挂载在body上面
    el: '#app',
    components: {
        'index': () => {
            return import ('./views/index.vue');
        }
    }
});
axios.get("/sign?name=35892.mp4&size=8290785").then((response) => {
    console.log("->", response.data)
}).catch(function(error) {
    console.log(error);
});
console.log($("#app"));
let datasource = {
    name: "测试",
    tabs: [
        { text: "巴士" },
        { text: "快车" },
        { text: "专车" },
        { text: "顺风车" },
        { text: "出租车" },
        { text: "代驾" }
    ]
};
const vuea = new Vue({
    el: "#example",
    data() {
        return datasource;
    },
    created: function() {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.name);
    }
});
//监听数据改变
vuea.$watch('name', function(newVal, oldVal) {
    console.log(newVal, oldVal);
});
Vue.nextTick(function() {
    console.log("更新数据", vuea.$el);
    //vm.$el.textContent === 'new message' // true
});
setTimeout(() => {
    datasource.name = '<a href="javascript:void(0);">HTML更换</a>';
    datasource.tabs.push({ text: "大卡车" }, { text: "xssdsd" });
    store.commit('increment');
}, 2000);
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: { //数据改变进行调用
        count() {
            return store.state.count;
        }
    }
};
const vuexv = new Vue({
    el: '#vuex',
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    store,
    components: {
        Counter
    },
    template: `<div class="app"><counter></counter><ol><todo-item  v-for="item in this.$store.state.items" :todo="item" :key="item.id"></todo-item></ol></div>`
});
const watchExampleVM = new Vue({
    el: '#watch-example',
    data() {
        return {
            question: '',
            answer: '请提你的问题，我才可以解答!'
        }
    },
    watch: {
        // 如果 question 发生改变，这个函数就会运行
        question: function(newQuestion) {
            this.answer = '提问中...';
            this.getAnswer();
        }
    },
    methods: {
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
        // ajax请求直到用户输入完毕才会发出
        // 学习更多关于 _.debounce function (and its cousin
        // _.throttle), 参考: https://lodash.com/docs#debounce 工具库
        getAnswer: _.debounce(function() { //工具库
                if (this.question.indexOf('?') === -1) {
                    this.answer = '问题通常都会问号';
                    return;
                };
                this.answer = '解答中...'
                axios.get('https://yesno.wtf/api').then((response) => {
                    this.answer = _.capitalize(response.data.answer);
                }).catch((error) => {
                    this.answer = '问题API异常. ' + error;
                });
            }, 500 // 这是我们为用户停止输入等待的毫秒数
        )
    }
});
Vue.component('todo-itemx', () => {
    return import ('./views/itemx.vue');
});
new Vue({
    el: '#todo-list-example',
    data() {
        return {
            newTodoText: '',
            todos: [{
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo: function(type, event) {
            if (event) {
                console.log(type, event.target.tagName);
            };
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        },
        removefun: function(index) {
            this.todos.splice(index, 1);
        }
    },
    directives: { //注册一个全局自定义指令 v-focus
        focus: {
            inserted: function(el) {
                // 聚焦元素
                el.focus();
            }
        }
    }
});
var data = { counter: 0 };
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
    // 但是我们返回给每个组件的实例的却引用了同一个data对象
    data: function() {
        return data;
    }
})
new Vue({
    el: '#example-2'
});
//过渡动画
new Vue({
    el: '#demo',
    data: {
        show: true
    }
})