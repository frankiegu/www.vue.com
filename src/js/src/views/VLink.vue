<template>
    <a :href="href" :class="{ active: isActive }" @:click="go">
        <slot></slot>
    </a>
</template>
<style scoped>
    .active {
        color: cornflowerblue;
    }
</style>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        props: {
            href: {
                type:String,
                required: true 
            },
            route:{
                type:String,
                required: true 
            }
        },
        computed: {
            ...mapGetters([
                'currentRoute'
            ]),
            ...mapActions([
                'checkout'
            ]),
            isActive () {
                return this.route === this.currentRoute;
            }
        },
        methods: {
            go (event) {
                event.preventDefault();
                this.checkout(this.route);
            }
        }
    }
</script>
