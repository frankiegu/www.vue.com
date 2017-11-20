<template>
  <div class="container">
    <ul>
      <li>
        <v-link v-for="(value, k) in items" :key="k" :href="captiem(k)" :route="k" >{{value}}</v-link>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<style scoped>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 15px 30px;
        background: #f9f7f5;
    }
</style>

<script>
    import VLink from './VLink.vue';
    import routes from '../module/routes';
    export default {
        data(){
            return {
                items:routes
            }
        },
        components: {
            VLink
        },
        methods: {
            captiem: function (key) {
                 return "/route.html#page="+key;
            }
        }
    }
</script>

