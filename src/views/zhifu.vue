<template>
  <div>
    <van-nav-bar title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-radio-group v-model="radio" @change="input">
      <div class="box">
        <svg
          t="1599704871706"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2383"
          width="48"
          height="48"
        >
          <path
            d="M1019.904 695.296l-326.656-110.08s25.088-37.376 51.712-111.104c26.624-73.728 30.72-114.176 30.72-114.176l-211.456-1.536V286.208l256-2.048v-51.2h-256V116.736H438.784v116.224H199.68v51.2l239.104-1.536v77.312H246.784v40.448h394.752s-4.096 32.768-19.456 73.728-30.72 76.8-30.72 76.8-185.344-65.024-283.136-65.024-216.576 39.424-227.84 153.088c-11.264 113.664 55.296 175.616 149.504 198.144 94.208 23.04 180.736 0 256.512-37.376 75.776-36.864 150.016-120.832 150.016-120.832l380.928 184.832c-15.36 90.112-93.696 156.16-185.344 156.16h-640C88.064 1019.904 4.096 935.936 4.096 832v-640C4.096 88.064 88.064 4.096 192 4.096h640c103.936 0 187.904 83.968 187.904 187.904v503.296z m-475.648-63.488s-117.248 142.848-256 142.848c-138.24 0-167.424-68.096-167.424-116.736s28.672-101.888 146.432-109.568 276.992 83.456 276.992 83.456z"
            fill="#02A9F1"
            p-id="2384"
          />
        </svg>
        <span>支付宝支付</span>
        <van-radio name="1"></van-radio>
        <van-divider />
      </div>
      <div class="box">
        <svg
          t="1599705036573"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4655"
          width="48"
          height="48"
        >
          <path
            d="M390.381889 644.799817c-61.291983 37.02299-70.38298-20.775994-70.38298-20.775994l-76.809978-194.149945c-29.559992-92.261974 25.575993-41.596988 25.575993-41.596988s47.308987 38.763989 83.216976 62.383982c35.88599 23.631993 76.788978 6.939998 76.788979 6.939998L930.949736 206.529942C838.289763 81.646977 685.246806 0 511.974855 0 229.204935 0 0 217.291938 0 485.351863 0 639.554819 75.889979 776.76978 194.115945 865.709755l-21.321994 132.755962s-10.399997 38.752989 25.622993 20.775994c24.539993-12.242997 87.107975-56.183984 124.357965-82.886976A535.231848 535.231848 0 0 0 511.999855 970.714725c282.74792 0 511.998855-217.291938 511.998855-485.351862 0-77.640978-19.319995-150.969957-53.532985-216.062939C810.45977 373.565894 438.327876 615.889826 390.381889 644.799817z"
            fill="#24AF41"
            p-id="4656"
          />
        </svg>
        <span>微信支付</span>
        <van-radio name="2"></van-radio>
        <van-divider />
      </div>
      <div class="box">
        <svg
          t="1599705274532"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5610"
          width="48"
          height="48"
        >
          <path
            d="M524.487805 1011.512195C212.292683 1011.512195 79.921951 899.121951 79.921951 669.346341c0-189.814634 149.853659-389.619512 329.678049-452.058536h229.77561c179.82439 62.439024 329.678049 259.746341 329.678049 452.058536-2.497561 232.273171-132.370732 342.165854-444.565854 342.165854z m122.380488-377.131707c19.980488 0 37.463415-17.482927 37.463414-37.463415s-17.482927-37.463415-37.463414-37.463414h-74.92683v-2.497561l89.912196-89.912196c14.985366-17.482927 7.492683-29.970732-7.492683-44.956097-14.985366-14.985366-39.960976-17.482927-49.95122-4.995122L526.985366 499.512195l-82.419512-82.419512c-9.990244-9.990244-29.970732-7.492683-44.956098 7.492683-14.985366 14.985366-17.482927 34.965854-7.492683 44.956097l84.917073 84.917074c-2.497561 2.497561-2.497561 4.995122-2.497561 7.492683h-69.931707c-19.980488 0-37.463415 17.482927-37.463415 37.463414s17.482927 37.463415 37.463415 37.463415h74.926829V674.341463h-74.926829c-19.980488 0-37.463415 17.482927-37.463415 37.463415s17.482927 37.463415 37.463415 37.463415h74.926829v47.453658c0 24.97561 22.478049 44.956098 47.453659 44.956098s47.453659-19.980488 47.453658-44.956098V749.268293h77.424391c19.980488 0 37.463415-17.482927 37.463414-37.463415s-17.482927-37.463415-37.463414-37.463415h-74.92683v-37.463414l69.931708-2.497561z m54.946341-564.448781l-7.492683 9.990244-67.434146 84.917073h-227.278049l-67.434146-82.419512-2.497561-2.497561-7.492683-9.990244 2.497561-2.497561c0-2.497561-2.497561-4.995122-2.497561-7.492683 0-12.487805 7.492683-22.478049 17.482927-27.47317v-2.497561s92.409756-17.482927 169.834146-19.980488c79.921951 0 169.834146 19.980488 169.834146 19.980488v2.497561c9.990244 4.995122 17.482927 14.985366 17.482927 27.47317 0 2.497561 0 4.995122-2.497561 7.492683l7.492683 2.497561z m0 0z"
            fill="#1afa29"
            p-id="5611"
          />
        </svg>
        <span>零钱支付</span>
        <van-radio name="3"></van-radio>
        <van-divider />
      </div>
    </van-radio-group>
    <van-password-input
      v-if="is"
      :value="value"
      info="密码为 6 位数字"
      :focused="showKeyboard"
      @focus="showKeyboard=true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard=false"
    />
    <button class="que" @click="que">确认支付</button>
  </div>
</template>

<script>
import { cjdd, zf, mm, zfb } from "../api/api";
import md5 from "js-md5";
export default {
  data() {
    return {
      radio: "1",
      pass: "",
      value: "",
      showKeyboard: false,
      is: false,
      index: 1,
      bh: [],
      bhh: "",
    };
  },

  created() {
    console.log(
      this.$store.state.zongjia,
      this.$store.state.ck,
      this.$store.state.id
    );
    var b = [];
    this.bh = [];
    cjdd({
      price: this.$store.state.zongjia, //订单总价
      consignee_addr: this.$store.state.ck, //收货地址
      goodsId: this.$store.state.id, //购买商品id
      isFcart: true, //是否从购物车过来
    }).then((res) => {
      console.log(res.data);
      this.bh = res.data;
      this.bh.map((res) => {
        b.push(res.orderNumber);
        this.bhh = b.join(" ");
      });
      //   console.log(b, "B");
      console.log(this.bhh, "BB");
    });
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length == 6) {
        // console.log(this.value);
        //密码验证
        mm({
          paypwd: md5(this.value),
        }).then((res) => {
          console.log(res);
          if (res.code == 200) {
            if (this.index == 3) {
              zf({
                orderId: this.$store.state.id,
              }).then((res) => {
                console.log(res);
              });
            } else if (this.index == 1) {
              zfb({
                OutTradeNo: this.bhh,
                Subject: "标题吧",
                ProductCode: "QUICK_WAP_WAY",
                TotalAmount: this.$store.state.zongjia,
              }).then((res) => {
                console.log(res, "支付宝");
                this.html = res.data;
                var form = res.data;
                const div = document.createElement("div");
                div.innerHTML = form;
                document.body.appendChild(div);
                document.forms[0].submit();
                // this.$store.dispatch("zfb", res);
              });
            } else if (this.index == 2) {
              alert("暂不支持付款");
            }
          }else{
              alert("支付异常")
          }
        });
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    que() {
      this.showKeyboard = true;
      this.is = true;
    },
    onClickLeft() {},
    input(event) {
      console.log(event);
      this.index = event;
    },
  },
};
</script>

<style scoped lang='scss'>
.que {
  width: 100%;
  height: 5vh;
  background: rgb(0, 153, 255);
  border: none;
  font-size: 50px;
  font-family: cursive;
  position: fixed;
  bottom: 0px;
}
.box {
  position: relative;
  span {
    color: black;
    font-size: 40px;
    position: absolute;
    top: 20%;
    left: 200px;
  }
  .van-radio {
    font-size: 40px;
    position: absolute;
    top: 20%;
    right: 50px;
  }
}
</style>