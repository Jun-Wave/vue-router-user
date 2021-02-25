<template>
  <div>
    <!-- 使用tag会将router-link渲染成其他标签 -->
    <router-link to="/home" tag="a" replace>首页</router-link>
    <br />
    <router-link :to="{path:`/product/${app_data2}`}" tag="a" replace>商品</router-link>
    <button @click="toProductPage">商品</button>
    <br />
    <router-link :to="{path:'/profile',query:{app_data2}}" tag="span" replace>个人</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      app_data: "homePage页面的信息1",
      app_data2: "homePage页面信息2"
    };
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    toProductPage() {
      this.$router.push({
        path: `/product/${this.app_data}`
    })
  }
  }
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
