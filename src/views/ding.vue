<template>
  <div class="big">
    <van-nav-bar title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="box">
      <div class="box-1" @click="dizhi">
        <van-icon name="location" color="white" size="25px" />
      </div>
      <div class="box-2">
        <div>{{$store.state.ck.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$store.state.ck.phone}}</div>
        <div>{{$store.state.ck.address}}</div>
      </div>
    </div>

    <div v-for="(item,index) in list" :key="index" class="box4">
      <div class="box1">
        <div>
          <img :src="item[1].shopLogo" alt />
        </div>
        <div>{{item[1].shopName}}</div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>

      <van-card
        :num="$store.state.shuliang[index]"
        :desc="item[0].goodsPrice+'￥'"
        :title="item[0].goodsName "
        :thumb="item[0].goodsLogo"
      >
        <template #price>
          <van-tag plain type="danger">七天退换</van-tag>
        </template>
      </van-card>
      <div class="box2">
        <div class="box2-1">
          <img src="../assets/险.png" alt />
          <div>
            <div>运费险</div>
            <div>确认收货前退货可理赔</div>
          </div>
        </div>
        <div>
          <div>￥15:00</div>
          <div>X1</div>
        </div>
      </div>
      <hr style="color:gray" />
      <div class="box3">
        <div>商品总价</div>
        <div>{{$store.state.shuliang[index]*item[0].goodsPrice}}</div>
      </div>
      <div class="box3">
        <div>运费</div>
        <div>￥00.00</div>
      </div>
      <div class="box3">
        <div>运费险</div>
        <div>￥15</div>
      </div>
    </div>

    <div class="box5">
      <div>应付全额：{{ji}}￥</div>
      <div>共计：X{{this.list.length}}件</div>
      <button @click="button">去支付</button>
    </div>
  </div>
</template>

<script>
import { dingdan } from "../api/api";
export default {
  data() {
    return {
      id: "",
      list: [],
    };
  },
  computed: {
    ji() {
      var a = 0;
      this.list.map((res, index) => {
        a += res[0].goodsPrice * this.$store.state.shuliang[index] + 15;
      });
      this.$store.dispatch('zongjia',a)
      console.log(a,"总价")
      return a;
    },
  },
  created() {
    console.log(this.$store.state.ck);
    this.id = this.$store.state.id;
    console.log(this.id);
    if (this.id) {
      dingdan({
        goodsid: this.id,
      }).then((res) => {
        this.list = res.data;
        console.log(res);
        console.log("res");
      });
    }
  },
  methods: {
    button(){
      this.$router.push({
        path:'/zhifu'
      })
    },
    dizhi() {
      this.$router.push({
        path: "/dizhi",
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "/gou",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.box5 {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 7vh;
  box-shadow: 0 0 10px 5px gray;
  display: flex;
  justify-content: space-between;
  line-height: 7vh;
  background: white;
  z-index: 9999;
  button {
    width: 200px;
    height: 100%;
    background: rgb(216, 24, 24);
    color: white;
  }
}
.box4 {
  background: rgb(255, 248, 248);
  border-radius: 20px;
  margin-top: 50px;
}

.box3 {
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 30px;
}
.box2 {
  display: flex;
  justify-content: space-between;
}
.box2-1 {
  display: flex;
  justify-content: left;
}
.box2-1 img {
  width: 70px;
  height: 70px;
  background-size: 100% 100%;
}
.box1 {
  display: flex;
  justify-content: left;
  line-height: 50px;
  div {
    margin-left: 30px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
}

.box {
  display: flex;
  justify-content: left;
}
.box-1 {
  width: 10%;
  height: 80px;
  border-radius: 50px;
  line-height: 110px;
  margin-top: 40px;
  margin-left: 20px;
  background: rgb(255, 102, 0);
  text-align: center;
}
.box-2 {
  width: 80%;
  height: 150px;
  margin-left: 50px;
  font-size: 30px;
  div{
    margin-top: 20px;
  }
  /* border-radius:50px; */
}
</style>