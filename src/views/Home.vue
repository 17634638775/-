<template>
  <div>
    <van-tabbar v-model="active" v-if="this.$route.meta.is">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/fen">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/gou">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/wo">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>