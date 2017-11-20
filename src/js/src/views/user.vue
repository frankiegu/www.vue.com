<template>
    <div class="slider-userinfo">
        <p class="user-header">
            <img class="js_userico" :src="ioc">
            <em id="viplevel" :class="classname"></em>
        </p>
        <p class="user-name js_username">{{username}}</p>
        <p class="user-renew">
            <a :href="href">{{label}}</a>
        </p>
        <p>{{maturity}}</p>
    </div>
</template>
<script>
	export default {
		data() {
			return this.$store.state.info;
        }
	}
</script>