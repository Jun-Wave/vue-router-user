<template>
  <div>
    <h3>我是Profile视图</h3>
    <h4>{{data_from_app}}</h4>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  components: {},
  props: {},
  data () {
    return {
      data_from_app: ''
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例,data,props）
  created () {
    this.data_from_app =  this.$route.query.app_data2
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
