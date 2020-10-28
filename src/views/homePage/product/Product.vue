<template>
  <div>
    <h3>我是product视图</h3>
    {{app_data}}
  </div>
</template>

<script>

export default {
  name: 'Product',
  components: {},
  props: {},
  data () {
    return {
      app_data:''
      
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created () {
    this.app_data = this.$route.params.app_data
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {

  }
}
</script>

<style scoped>
/* @import url(); 引入公共css类 */

</style>
