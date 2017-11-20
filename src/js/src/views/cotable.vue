<template>
    <table cellpadding="0" cellspacing="0" class="coupon-table">
        <thead>
            <th width="208">优惠券</th>
            <th width="148">优惠金额</th>
            <th width="224">用券说明</th>
            <th width="266">有效期</th>
            <th width="124">操作</th>
        </thead>
        <tbody>
             <tr v-for="item in items">
                <td>{{item.title}}</td><td>{{item.amount}}</td><td>{{item.description}}</td><td>{{item.start_time | captiem}}至{{item.end_time | captiem}}</td><td><a href="javascript:void(0);" v-if="item.status == 1"  @click="checkout(item.id)">立即使用</a><template v-else>{{item.status_text}}</template></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
	export default {
        data(){
            return {
                classmap:{
                    1: "use-now",
                    3: "overdue",
                    5: ""        
                }
            }
        },
        computed: {
            ...mapGetters([
                'products'
            ]),
            items(){
                return this.products;
            }
        },
        methods: {
            checkout(id){
                console.log(id);
            }
        },
        filters: {
            captiem(data){
                return data.substring(0, 10);
            }
        }
	}
</script>