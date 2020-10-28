<template>
  <div>
    <h3>我是注册页面</h3>
    <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    return {
      registerData:"注册信息",
      whereFrom: ""
    };
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created() {
    //存储 从哪个页面跳转的路由地址
    this.whereFrom = this.$route.query.redirect;
  },
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
    //跳转  从哪个页面跳转到注册页面的路由地址
    register() {
      console.log("注册成功");
      //1. 存储token/用户信息
      //2. 跳转回之前的页面
      this.$router.replace({path:this.whereFrom})
    }
  }
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
