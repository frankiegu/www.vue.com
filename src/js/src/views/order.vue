<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.node }}</h2>
      <p>{{ post.sign }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            post: null,
            error: null
        }
    },
    created() {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        this.fetchData()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.error = this.post = null;
            this.loading = true;
            axios.get("/sign?name=35892.mp4&size=8290785&delay=2000&id="+this.$route.params.id).then((response) => {
                console.log("->", response.data);
                this.loading = false;
                this.post = response.data;
            }).catch(function(err) {
                this.loading = false;
               this.error = err.toString();
            });
        }
    }
}
</script>
