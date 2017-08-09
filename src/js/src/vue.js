import Vue from 'vue';
import $ from 'jquery';
import Vuex from 'vuex';
import axios from 'axios';
import uservue from './views/user.vue';
import vuelist from './views/vuelist.vue';
const loadding = document.querySelector("#loadding");
const base = {
    mydb: {
        user: null
    }
}
Vue.use(Vuex);
if (window.userinfo) {
    base.mydb = {
        user: new Vuex.Store({
            state: {
                info: null
            },
            mutations: {
                init(state, info) { //初始化加工完成的用户信息
                    let data = info || window.userinfo[0].userinfo_ext;
                    let json = {
                        vip: data.vip,
                        label: "开通会员",
                        classname: "grade01",
                        username: data.username,
                        maturity: "开通会员享受更多特权",
                        vip_over_time: data.vip_over_time,
                        vip_level: Number(data.vip_level) || 1,
                        ioc: "http://img.baofeng.net/" + data.facepath + "/100_80_80.jpg",
                        href: "http://shop.baofeng.com/order/vip.html?from=hd_user_tab_join"
                    };
                    if (data.vip) {
                        json.label = "续费会员";
                        json.maturity = "会员 2038-01-19 到期";
                        json.classname = "vipgrade0" + json.vip_level;
                        json.href = "http://shop.baofeng.com/order/vip.html?from=hd_user_tab_repay";
                    };
                    state.info = json;
                }
            }
        }),
        list: new Vuex.Store({
            state: {
                list: []
            },
            mutations: {
                init(state, data) { //初始化加工完成的用户信息
                    state.list = data || [];
                }
            },
            actions: {
                checkout(context, type) {
                    loadding.style.display = "block";
                    axios.get("/getLists?pagesize=10&status=" + type).then((res) => {
                        loadding.style.display = "none";
                        context.commit('init', res.data.data.lists);
                    }).catch(function(error) {
                        console.log(error);
                        loadding.style.display = "none";
                    });
                }
            },
            getters: {
                products: (state) => {
                    return state.list;
                }
            }
        })
    };
    base.mydb.user.commit('init');
    new Vue({ //创建一个vue实例, 挂载在body上面
        el: '#ucenter',
        store: base.mydb.user,
        render: h => h(uservue)
    });
    new Vue({
        el: '#vuelist',
        store: base.mydb.list,
        render: h => h(vuelist)
    });
    base.mydb.list.dispatch('checkout', 0);
};