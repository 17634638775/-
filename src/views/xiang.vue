<template>
  <div>
    <van-tabs v-model="active" scrollspy sticky>
      <div class="fan" @click="fan">
        <van-icon name="arrow-left" size="20" />
      </div>

      <van-tab title="商品">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img :src="banner[0]" alt class="banner" />
          </van-swipe-item>
        </van-swipe>

        <div class="xiang-title">{{bannertitle.goodsName}}</div>
        <div class="xiang-span">
          <span class="xiang-span1">{{bannertitle.goodsPrice}}</span>
          <span class="xiang-span2">
            <s>{{bannertitle.goodsOldPrice}}</s>
          </span>
        </div>
        <div class="xiang-bottom">
          <span>销量:{{bannertitle.goodsBuyNum}}</span>
          <span>收藏:{{bannertitle.goodsFav}}</span>
          <span>地址:{{bannertitle.goodsAre}}</span>
        </div>
        <hr />

        <div class="tui">
          <span v-for="(item,index) in bannerwu" :key="index">
            <img :src="item.icon" alt class="tui-img" />
            {{item.name}}
          </span>
        </div>
        <hr />
      </van-tab>
      <van-tab title="评论">
        <!-- <div>
          <h4 style="color:red">买家评价：</h4>
          <div>用户名：{{bannerping[0].comment_body.user_name}}</div>
          <p>
            <img
              :src="bannerping[0].comment_body.user_img"
              style="width:100%;height:100%;background-size:100% 100%"
            />
            <br />
            用户评价：{{bannerping[0].comment_body.content}}！
          </p>
        </div>
        <hr />-->
        <div class="dianpu">
          <div class="shang">
            <img :src="bannerdian.shopLogo" alt />
            <div>{{bannerdian.shopName}}</div>
          </div>
          <div class="shang-san">
            <div>
              <div>{{bannerdian.sells}}</div>
              <div>总销量</div>
            </div>
            <div class="shang-div2">
              <div>{{bannerdian.snum}}</div>
              <div>全部宝贝</div>
            </div>
            <div>
              <div class="shang-">
                <span>描述相符</span>
                <span
                  v-if="Number(bannerdian.shopPiont)>3"
                  style="color:red"
                >{{bannerdian.shopPiont}}&nbsp;&nbsp;&nbsp;&nbsp;高</span>
                <span
                  v-if="Number(bannerdian.shopPiont)<=3"
                  style="color:green"
                >{{bannerdian.shopPiont}}&nbsp;&nbsp;&nbsp;&nbsp;低</span>
              </div>
              <div class="shang-">
                <span>价格合理</span>
                <span
                  v-if="Number(bannerdian.shopPriceOk)>3"
                  style="color:red"
                >{{bannerdian.shopPriceOk}}&nbsp;&nbsp;&nbsp;&nbsp;高</span>
                <span
                  v-if="Number(bannerdian.shopPriceOk)<=3"
                  style="color:green"
                >{{bannerdian.shopPriceOk}}&nbsp;&nbsp;&nbsp;&nbsp;低</span>
              </div>
              <div class="shang-">
                <span>质量满意</span>
                <span
                  v-if="Number(bannerdian.shopQuality)>3"
                  style="color:red"
                >{{bannerdian.shopQuality}}&nbsp;&nbsp;&nbsp;&nbsp;高</span>
                <span
                  v-if="Number(bannerdian.shopQuality)<=3"
                  style="color:green"
                >{{bannerdian.shopQuality}}&nbsp;&nbsp;&nbsp;&nbsp;低</span>
              </div>
            </div>
          </div>
          <button class="buttom">进店逛逛</button>
        </div>
      </van-tab>
      <van-tab title="详情">
        <div>
          <div v-html="bannertitle.goodsIntroduce" class="html-img"></div>
        </div>
      </van-tab>
      <van-tab title="推荐">
        <div class="bottom-san">
          <div class="tuijian">
            为你
            <van-icon name="award-o" color="red" />推荐
          </div>
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">推荐内容</van-divider>
          <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无推荐商品"
          />
        </div>
      </van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="this.sl" @click="jingouwu" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="gouwuche" />
      <van-goods-action-button type="danger" text="立即购买" @click="lj" />
    </van-goods-action>

    <div v-if="is" @click="huiqu">
      <van-icon name="upgrade" class="position" />
    </div>
  </div>
</template>

<script>
import { getDetail, gouwuche, chakan } from "@/api/api";

export default {
  data() {
    return {
      active: 0,
      banner: [],
      bannertitle: [],
      bannerwu: [],
      bannerping: [],
      bannerdian: [],
      is: false,
      id: "",
      sl: 0,
    };
  },
  created() {
    chakan({
      page: 1,
      pageSize: 20,
    }).then((res) => {
      this.sl = res.data.length;
    });

    let a = this.$route.query.ID;
    this.id = a;
    console.log(a);
    getDetail({ goodsId: a }).then((res) => {
      console.log(res);
      this.bannerping = res.data[3];
      this.bannertitle = res.data[0];
      this.banner = res.data[0].topImages;
      this.banner = this.banner.split(",");
      this.bannerwu = res.data[2];
      this.bannerdian = res.data[1];
      console.log(this.banner, "字符串");
    });
    window.addEventListener("scroll", () => {
      let a = document.documentElement.scrollTop;
      if (a >= 700) {
        this.is = true;
      } else {
        this.is = false;
      }
      return this.is;
    });
  },
  methods: {
    onAddCartClicked() {},
    onBuyClicked() {},
    lj() {
      this.show = true;
    },
    jingouwu() {
      this.$router.push({
        path: "/gou",
      });
    },
    gouwuche() {
     this.is++

      gouwuche({
        product_id: this.id,
        product_amount: 1,
        price: this.bannertitle.goodsPrice,
      }).then((res) => {
        console.log(res);
      });
      console.log(this.id, this.bannertitle.goodsPrice);
    },
    huiqu() {
      document.documentElement.scrollTop = 0;
    },
    fan() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>

<style scoped>
.position {
  position: fixed;
  right: 10px;
  top: 700px;
  color: red;
  font-size: 80px;
  z-index: 9999;
}
.bottom-san {
  margin-bottom: 100px;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.tuijian {
  font-size: 40px;
  margin-left: 270px;
}
.html-img >>> img {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.buttom {
  padding: 0 60px;
  text-align: center;
  margin-left: 250px;
  margin-top: 50px;
}
.shang- {
  display: flex;
  justify-content: space-around;
}
.gao {
  background: red;
  color: white;
}
.di {
  background: green;
  color: white;
}
.shang-div2 {
  border-right: 1px solid gray;
  padding-right: 100px;
}
.dianpu {
  margin-top: 30px;
}
.shang-san {
  display: flex;
  justify-content: space-around;
  line-height: 200%;
  margin-top: 30px;
  text-align: center;
}
.shang {
  display: flex;
  justify-content: left;
}
.shang div {
  font-size: 30px;
  line-height: 350%;
}
.shang img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-size: 100% 100%;
}
.tui {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.tui-img {
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
}
.xiang-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 30px;
  color: gray;
}
.xiang-span {
  margin-top: 20px;
}
.xiang-title {
  font-size: 30px;
}
.xiang-span1 {
  font-size: 40px;
  color: rgb(219, 74, 74);
}
.xiang-span2 {
  margin-left: 30px;
  color: gray;
}
.banner {
  width: 100%;
  height: 70vh;
  background-size: 100% 100%;
}
.fan {
  position: fixed;
  top: 27px;
  left: 0px;
  z-index: 9999;
}
</style>