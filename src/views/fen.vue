<template>
  <div>
    <div class="box">商品分类</div>
    <hr />
    <van-search placeholder="请输入搜索关键词" @click="sousuo" />
    <div class="boxx">
      <div class="zuo">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item,index) in list"
            :key="index"
            :title="item.cat_name"
            @click="btn1(item.cat_id)"
          />
        </van-sidebar>
      </div>
      <div class="you">
        <van-tabs v-model="active" sticky @click="btn">
          <van-tab v-for="(item1,index) in data" :key="index" :title="item1">
            <div class="list-bottom">
              <!-- <div v-for="(item,index) in list1" :key="index" class="div">
                <img :src="item.goodsLogo" alt />
                <div></div>
                <div class="red" style="color:red">
                  原价:
                  <s>{{item.goodsOldPrice}}</s>
                  &nbsp;&nbsp;&nbsp;&nbsp; 现价:{{item.goodsPrice}}
                </div>
                <div style="color:gray">销量{{item.goodsFav}}</div>
              </div>-->
              <liebiao
                class="div"
                v-for="(item,index) in list1"
                :key="index"
                :img="item.goodsLogo"
                :weizhi="item.goodsAre"
                :yuanjia="item.goodsOldPrice"
                :xianjia="item.goodsPrice"
                @click="xiang(item)"
              ></liebiao>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { fen, lie } from "../api/api.js";
import liebiao from "../components/liebiao";

export default {
  components: {
    liebiao,
  },
  data() {
    return {
      activeKey: 0,
      active: 0,
      data: ["综合", "销量", "新品"],
      list: [],
      list1: [],
      list2: [],
      is: true,
    };
  },
  mounted() {
    fen().then((res) => {
      console.log(res.data);
      this.list = res.data;
    });
    lie({
      cat_id: "85",
    }).then((res) => {
      console.log(res.data);
      this.list1 = res.data;
      this.list2 = res.data;
    });
  },
  methods: {
    sousuo() {
      this.$router.push({
        path: "/sousuo",
      });
    },
    xiang(item) {
      console.log(item.goodsId);
      let id = item.goodsId;
      this.$router.push({
        path: "/xiang",
        query: {
          ID: id,
        },
      });
    },
    btn1(id) {
      lie({
        cat_id: id,
      }).then((res) => {
        this.list1 = res.data;
      });
    },
    btn(index) {
      //   console.log(index);
      if (index == 1) {
        this.is = !this.is;
        if (this.is) {
          this.list1.sort((a, b) => {
            return a.goodsFav - b.goodsFav;
          });
        } else {
          this.list1.sort((a, b) => {
            return b.goodsFav - a.goodsFav;
          });
        }
      } else if (index == 0) {
        this.is = !this.is;
        if (this.is) {
          this.list1.sort((a, b) => {
            return a.goodsPrice - b.goodsPrice;
          });
        } else {
          this.list1.sort((a, b) => {
            return b.goodsPrice - a.goodsPrice;
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .div {
    width: 45%;
    height: 30vh;
    img {
      width: 100%;
      height: 80%;
      background-size: 100% 100%;
    }
  }
}
.van-sidebar-item {
  padding: 30px 12px;
}
.you {
  width: 80%;
  overflow: scroll;
}

.boxx {
  display: flex;
  height: 78vh;
  //   background: red;
}
.zuo {
  width: 20%;
}
.box {
  text-align: center;
  font-size: 40px;
}
</style>