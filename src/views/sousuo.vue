<template>
  <div>
    <van-nav-bar title="商品搜索" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search
      v-model="value"
      show-action
      label="商品名"
      placeholder="请输入商品关键词"
      @search="onSearch"
      input-align="center"
      @focus="jujiao"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="sou-div" v-show="this.shuju.length==0">
      <span v-for="(item,index) in list" :key="index">{{item}}</span>
    </div>
    <div class="sou-div" v-show="this.shuju.length==0">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        v-show="this.shuju.length==0"
      >历史记录</van-divider>
      <div class="remove" @click="remove">
        <u>
          <i>清空</i>
        </u>
      </div>
      <span v-for="(item,index) in list1" :key="index">{{item}}</span>
    </div>

    <div class="xiding">
      <div class="list-bottom">
        <!-- <div v-for="(item,index) in shuju" :key="index" class="div" @click="xiang(item)">
          <van-image lazy-load :src="item.goodsLogo" alt class="img" />
          <div>位置：{{item.goodsAre}}</div>
          <div>
            <span>原价:{{item.goodsOldPrice}}</span>
            <span>现价:{{item.goodsPrice}}</span>
          </div>
        </div>-->
        <liebiao
          class="div"
          v-for="(item,index) in shuju"
          :key="index"
          :img="item.goodsLogo"
          :weizhi="item.goodsAre"
          :yuanjia="item.goodsOldPrice"
          :xianjia="item.goodsPrice"
          @click="xiang(item)"
        ></liebiao>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { sou, mo } from "../api/api";
import { debounce } from "@/until/index";
import liebiao from "../components/liebiao";

export default {
  components: {
    liebiao,
  },
  data() {
    return {
      value: "",
      list: [],
      list1: [],

      shuju: [],
    };
  },
  created() {
    sou().then((res) => {
      console.log(res.data);
      this.list = res.data;
    });
    // this.save();
    let a = localStorage.list;
    if (a) {
      this.list1 = JSON.parse(a);
      console.log(this.list1);
    }
  },
  methods: {
    remove() {
      this.list1 = [];
      localStorage.list = JSON.stringify(this.list1);
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
    save() {
      let a = true;
      this.list1.map((res, index) => {
        if (res == this.value) {
          this.list1.splice(index, 1);
          this.list1.unshift(this.value);
          a = false;
          return;
        }
      });
      if (a) {
        this.list1.unshift(this.value);
      }
      localStorage.list = JSON.stringify(this.list1);
    },
    jujiao() {
      this.shuju = [];
    },
    onClickLeft() {
      Toast("返回");
    },
    onSearch: debounce(function () {
      mo({
        goodsName: this.value,
        page: 1,
        pageSize: 10,
        sortType: "syn",
      }).then((res) => {
        console.log(res.data, "查询");
        this.shuju = res.data;
      });
      this.save();
    }, 2000),
    // onSearch() {},
  },
};
</script>

<style scoped lang='scss'>
.remove {
  color: blue;
  font-size: 40px;
  font-family: serif;
}
.list-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .div {
    width: 45%;
    height: 42vh;
    .img {
      width: 100%;
      height: 80%;
      background-size: 100% 100%;
    }
  }
}
.sou-div {
  width: 90%;
  // border: 1px solid red;
  margin: 0 auto;
  overflow: hidden;

  span {
    float: left;
    margin-left: 30px;
    border: 1px solid gray;
    color: gray;
    padding: 5px;
    margin-top: 10px;
    top: 0px;
    font-size: 30px;
  }
}
</style>