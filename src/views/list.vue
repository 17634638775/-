<template>
  <div>
    <div class="header">
      <img src="../assets/QQ截图20200901141249.png" alt />
    </div>
    <van-search placeholder="请输入搜索关键词" @click="sousuo" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="bottom">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in banner[1]" :key="index">
            <img :src="item.slide_show_imgUrl" alt />
          </van-swipe-item>
        </van-swipe>
        <div class="banner">
          <ul>
            <li v-for="(item,index) in banner[0]" :key="index">
              <img :src="item.sp_home_ico" />
              <div>{{item.sp_home_title}}</div>
            </li>
          </ul>
        </div>//封装列表
        <div class="xiding">
          <van-tabs v-model="active" sticky @change="btn">
            <van-tab v-for="(item1,index) in data" :key="index" :title="item1.title">
              <div class="list-bottom">
                <!-- <div v-for="(item,index) in list" :key="index" class="div" @click="xiang(item)">
                  <van-image lazy-load :src="item.goodsLogo" alt class="img" />
                  <div>位置：{{item.goodsAre}}</div>
                  <div>
                    <span>原价:{{item.goodsOldPrice}}</span>
                    <span>现价:{{item.goodsPrice}}</span>
                  </div>
                </div>-->
                <liebiao
                  class="div"
                  v-for="(item,index) in list"
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
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getHomeList, getTypeList } from "../api/api.js";
import liebiao from "../components/liebiao";

export default {
  components: {
    liebiao,
  },
  data() {
    return {
      active: 0,
      data: [
        { title: "流行", z: "sell" },
        { title: "新款", z: "new" },
        { title: "精选", z: "syn" },
      ],
      banner: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      num: 0,
      rebound: [],
      zhi: "sell",
    };
  },
  mounted() {
    this.save();
    getHomeList().then((res) => {
      console.log(res.data[1]);
      this.banner = res.data;
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
    save() {
      getTypeList({
        pageSize: 30,
        sortType: this.zhi,
      }).then((res) => {
        this.rebound = res.data;
        console.log(this.rebound, "备胎");
      });
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.num = 0;
          this.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          this.list.push(this.rebound[this.num++]);
        }
        this.loading = false;

        if (this.list.length >= 29) {
          this.finished = true;
        }
      }, 3000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },

    btn(index) {
      this.list = [];
      this.zhi = this.data[index].z;
      this.save();
      this.num = 0;
      this.finished = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  margin-bottom: 80px;
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
.banner {
  height: 30vh;
  // overflow: hidden;
  ul {
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    li {
      width: 20%;
      height: 15vh;
      img {
        width: 100%;
        height: 70%;
      }
    }
  }
}

.my-swipe {
  img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
}
.header {
  width: 100%;
  height: 7vh;
  img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
}
</style>