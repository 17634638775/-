<template>
  <div>
    <div class="headr">
      <div>购物车{{this.list.length}}</div>
      <div class="guan" @click="guan" v-if="!is">管理</div>
      <div class="guan" @click="guan" v-if="is">完成</div>
    </div>
    <van-checkbox-group v-model="result" ref="checkboxGroup" @change="change">
      <div v-for="(item,index) in list" :key="index">
        <van-checkbox :name="item"></van-checkbox>
        <van-card
          :num="item.product_amount"
          :price="item.price"
          :title="item.title"
          :thumb="item.image"
        >
          <template #num v-if="is">
            <van-stepper
              v-model="item.product_amount"
              theme="round"
              button-size="22"
              disable-input
              @change="geng(item)"
            />
          </template>
        </van-card>
      </div>
    </van-checkbox-group>

    <van-submit-bar button-text="删除" @submit="onSubmit1" v-if="is">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>

    <van-submit-bar :price="this.num*100" button-text="提交订单" @submit="onSubmit" v-if="!is">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { chakan, gg, sc } from "@/api/api";
export default {
  data() {
    return {
      list: [],
      checked: false,
      result: [],
      is: false,
      num: 0,
      id: "",
      id1: "",
      shuliang: [],
    };
  },
  created() {
    chakan({
      page: 1,
      pageSize: 20,
    }).then((res) => {
      console.log(res.data);
      this.list = res.data;
      this.list.pop();
      // console.log(this.list);
      console.log(this.list.length, "数量");
      this.$store.dispatch("shuliang", this.list.length);
    });
  },
  methods: {
    //修改商品数量
    geng(item) {
      gg({
        catId: item.cart_id,
        product_amount: item.product_amount,
      }).then((res) => {
        console.log(res, "res");
      });
    },
    //复选框
    change() {
      // alert(1)
      this.shulaing = [];
      this.num = 0;
      this.id = "";
      var id1 = [];
      // console.log(this.result, "调用");
      this.result.map((res) => {
        this.shuliang.push(res.product_amount);
        this.num += res.product_amount * res.price;
        this.id += res.cart_id + ",";
        id1.push(res.product_id);
        this.id1 = id1.join(" ");
        console.log(this.id1, "ID1");
      });
      console.log(this.shuliang, "数量");

      this.$store.dispatch("dingdan", [this.id1, this.shuliang]);
      // this.$store.dispatch("dingdan", );

      if (this.result.length < this.list.length) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
    //删除商品
    onSubmit1() {
      console.log(this.id);
      sc({
        carid: this.id,
      }).then((res) => {
        console.log(res);
      });
      this.result.map((res) => {
        this.list.map((res1, index2) => {
          if (res.cart_id == res1.cart_id) {
            this.list.splice(index2, 1);
            console.log(this.result, "kankankank");
            this.change();
          }
        });
      });
      this.result = [];
      this.change();
    },
    //管理
    guan() {
      this.is = !this.is;
    },
    //全选全不选
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll();
      }
    },
    //修改地址
    onClickEditAddress() {},
    //提交订单
    onSubmit() {
      this.$router.push({
        path: "/ding",
      });
    },
  },
};
</script>

<style scoped>
.van-checkbox-group {
  margin-top: 80px;
  margin-bottom: 20vh;
}
.van-submit-bar__bar {
  /* display: flex; */
  justify-content: space-between;
}
.van-submit-bar {
  margin-bottom: 7vh;
}
.headr {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 5vh;
  color: red;
  text-align: center;
  font-size: 40px;
  font-family: cursive;
  background: rgb(77, 77, 136);
  line-height: 5vh;
  z-index: 9999;
  /* display: flex; */
  /* justify-content: space-around; */
}
.guan {
  position: absolute;
  right: 20px;
  /* top: px; */
  top: 0px;
}
</style>