<template>
    <li>{{ title }}<button @click="remove">X</button></li>
</template>
<script>
    export default {
        props: {
            title: String
        },
        methods: {
            remove() {
                //子组件派发删除事件 remove
                this.$emit('remove');
            }
        }
    };
</script>