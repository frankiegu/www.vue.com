<template>
    <li>{{ title }}<button @click="click_remove">X</button></li>
</template>
<script>
    export default {
        props: ['title'],
        methods: {
            click_remove() {
                //子组件派发删除事件 remove
                this.$emit('remove');
            }
        }
    };
</script>