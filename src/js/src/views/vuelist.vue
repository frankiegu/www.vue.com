<template>
    <div>
        <coselect></coselect>
        <cotable></cotable>
    </div>
</template>
<script>
    import cotable from './cotable.vue';
    import coselect from './coselect.vue';
    export default {
        components: { cotable, coselect }
    };
</script>