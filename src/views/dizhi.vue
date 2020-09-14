<template>
  <div>
    <van-nav-bar
      title="我的收货地址"
      left-text="返回"
      right-text="新增"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right v-if="is">
        <span>完成</span>
      </template>
    </van-nav-bar>

    <van-address-edit
      v-if="is"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <van-address-list
      v-if="!is"
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @edit="onEdit"
      @click-item="checked"
    />
  </div>
</template>

<script>
import { huoqu, shouhuo } from "../api/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      is: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110103: "昌平区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
        },
      },
      searchResult: [],
      list: [],
      disabledList: [],
      chosenAddressId: "",
    };
  },
  created() {
    this.save();
  },
  methods: {
    checked(item) {
      this.$store.dispatch("ck", item);
      console.log(item);
    },
    save() {
      huoqu().then((res) => {
        console.log(res.data);
        this.list = res.data;
      });
    },
    //编辑地址
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onSave(content) {
      console.log(content);
      shouhuo({
        Name: content.name,
        Phone: content.tel, //电话
        Province: content.province, //省份
        City: content.city, //市区
        District: content.county, //县区
        Address: content.addressDetail, //详情地址
      }).then((res) => {
        console.log(res);
        if (res.code == 201) {
          Toast.success("成功保存");
          this.is = false;
        }
      });
    },
    onDelete() {
      // Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },

    onClickLeft() {
      this.$router.push({
        path:'/ding'
      })
    },
    onClickRight() {
      this.is = !this.is;
      console.log(this.is);
    },
  },
};
</script>

<style lang="scss" scoped>
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
  // border: 1px solid black;
  background: gray;
  margin-left: 50px;
  /* border-radius:50px; */
}
</style>