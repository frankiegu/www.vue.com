<template>
    <select class="coupon-sel" v-model="select"  @change="checkout()">
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>
<script>
    import { mapGetters } from 'vuex';
	export default {
        data() {
			return {  
                select: '0',  
                options: [  
                    { text: '请选择', value: '0' },  
                    { text: '未使用', value: '1' },  
                    { text: '已使用', value: '5' },
                    { text: '已过期', value: '3' }  
                ]  
            };
        },
        computed: {
            ...mapGetters([
                'products'
            ])
        }, 
        methods: {
            checkout () {
                this.$store.dispatch('checkout', this.select)
            }
        }
	}
</script>