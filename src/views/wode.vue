<template>
  <div>
    <div class="box">
      <div class="tou">
        <van-image round width="50px" height="50px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="tou-span2">
          <span>谁偷我裤头了</span>
          <br />
          <span>17634638775</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tou-span2{
    margin-top: 20px;
}
.tou{
    display: flex;
    justify-content: left;
    margin-left: 100px;
    padding-top:5vh;
}
.box {
  width: 100%;
  height: 30vh;
  background: rgb(73, 73, 231);
}
</style>