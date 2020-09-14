<template>
  <div>
    <div class="box">
      <img src="../assets/QQ截图20200901141249.png" alt />
    </div>
    <van-tabs v-model="active">
      <van-tab title="登录">
        <div class="account-div">
          <div class="account">
            <van-icon name="star" color="red" />用户名
          </div>
          <input type="text" placeholder="请输入账号" class="input" v-model="yhm" />
          <div class="account">
            <van-icon name="star" color="red" />密码
          </div>
          <input type="text" placeholder="请输入密码" class="input" v-model="mm" />

          <p>
            <input type="checkbox" />记住密码
          </p>
          <p>
            <button class="button" @click="dengluyanzheng">登录</button>
          </p>
          <div class="account-bottom">
            <span>找回密码|</span>
            <span>还没有注册账号？</span>
            <span>立即注册</span>
          </div>
        </div>
      </van-tab>

      <van-tab title="注册">
        <div class="account-div">
          <div class="account">
            <van-icon name="star" color="red" />手机号
          </div>
          <input type="text" placeholder="注册手机为找回密码的唯一凭证" class="input" v-model="shouji" />
          <div style="color:red" v-if="is">手机号已经注册或不正确！</div>
          <div class="account">
            <van-icon name="star" color="red" />登录名
          </div>
          <input type="text" placeholder="中、英文均可，不能超过12个字符" class="input" v-model="yonghuming" />
          <div style="color:red" v-if="is1">用户名已注册或格式不正确！</div>

          <div class="account">
            <van-icon name="star" color="red" />密码
          </div>
          <input type="text" placeholder="3-18位英文、数字、符号、区分大小写" class="input" v-model="mima" />
          <div class="account">
            <van-icon name="star" color="red" />短信验证
          </div>
          <input type="text" placeholder="请输入验证码" class="input1" />
          <input
            type="button"
            style="background:rgb(2, 24, 255);color:white"
            value="获取验证码"
            class="input1"
            @click="yzm"
          />
          <button class="button">注册登录</button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import qs from "qs";

import { yanzheng, yonghuming, denglu } from "@/api/api";

export default {
  data() {
    return {
      is: false,
      is1: false,
      active: 0,
      shouji: "",
      yonghuming: "",
      mima: "",
      num: "",
      num1: "",
      num2: "",
      yhm: "",
      mm: "",
    };
  },
  mounted() {},
  methods: {
    async yzm() {
      await yanzheng({
        phone: this.shouji,
      }).then((res) => {
        console.log(res);
        if (res.code == "415") {
          this.is = true;
          this.shouji = "";
          this.num = 2;
        } else if (res.code == "200") {
          this.is = false;
          this.num = 1;
        }
      });
      await yonghuming({
        LoginName: this.yonghuming,
      }).then((res) => {
        console.log(res);
        var b = /[\u4e00-\u9fa5/A-z]{1,12}$/;
        if (b.test(this.yonghuming)) {
          this.is1 = false;
          this.num1 = 1;
        } else {
          this.is1 = true;
          this.yonghuming = "";
          this.num1 = 2;
        }
      });

      let z = /^[0-9A-Za-z]{3,18}$/;
      if (z.test(this.mima)) {
        this.num2 = 1;
      } else {
        this.num2 = 2;
      }

      if (this.num == 1 && this.num1 == 1 && this.num2 == 1) {
        console.log("可以发送验证码了？？？");
        console.log(this.shouji);
        this.$axios
          .get("http://www.hj0819.top:44369/api/SMSCode/GetCode", {
            params: {
              phone: this.shouji,
              codeType: "0",
            },
          })
          .then((res) => {
            console.log(res);
          });
        // duanxin({
        //   phone: this.shouji,
        //   codeType: "0",
        // }).then((res) => {
        //   console.log(res.msg);
        // });
      }
    },
    dengluyanzheng() {
      console.log(this.yhm);
      console.log(this.mm);
      let params = {
        LoginName: this.yhm,
        LoginPassword: this.mm,
        isPassing: "yes",
      };
      denglu(params).then((res) => {
        console.log(res.tnToken.tokenStr,"123");
        if (res.code == 200) {
          this.$router.push({
            path: "/home",
          });

          this.$store.dispatch("save", res.tnToken.tokenStr);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.input1 {
  width: 250px;
  height: 70px;
  border-radius: 10px;
}
.account-bottom {
  // display: flex;
  // justify-content:space-around;
  margin-left: 50px;
  span {
    margin-left: 10px;
  }
}
.button {
  width: 400px;
  background: rgb(94, 94, 241);
  color: white;
  text-align: center;
  margin-left: 60px;
  margin-top: 20px;
  border-radius: 10px;
  height: 60px;
  line-height: 100%;
}
.account-div {
  // width: 100%;
  margin-left: 120px;
  height: 70ch;
  //   background: rgba($color: #000000, $alpha: 0.3);
  .input {
    width: 80%;
    height: 70px;
    border-radius: 10px;
    margin-top: 30px;
  }
}
.account {
  font-size: 40px;
  margin-top: 30px;
}
.box {
  width: 100%;
  height: 8vh;
  img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
}
</style>