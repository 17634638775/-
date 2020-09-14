<template>
  <div @click="btn">
    <van-image lazy-load :src="img" alt class="img" />
    <div>位置：{{weizhi}}</div>
    <div>
      <span>原价:{{yuanjia}}</span>
      <span>现价:{{xianjia}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    weizhi: String,
    yuanjia: String,
    xianjia: Number,
  },
  methods: {
    btn() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.div {
  width: 45%;
  height: 42vh;
  .img {
    width: 100%;
    height: 80%;
    background-size: 100% 100%;
  }
}
</style>