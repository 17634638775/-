const api = {
  homeList: '/api/Home/getHomeREC',
  shopType: '/api/Home/getHomeShowGoods',
  detail: '/api/Goods/GetGoodsInfo',
  fenlei: '/api/Goods/getCatsTree',
  liebiao: '/api/Goods/getCadGoods',
  yan: '/api/Verify/GetPhone',
  yong: '/api/Verify/LoginName',
  duan: '/api/SMSCode/GetCode',
  deng: '/api/LoginPage/Login',
  gou: '/api/Cart/addCart',
  goucha: '/api/Cart/getCart',
  num: '/api/Cart/patchCartNum',
  remove: '/api/Cart/DeleteCart',
  ding: '/api/Order/getOrderInfo',
  dizhi: "/api/UserInfo/addArea",
  huodizhi: '/api/UserInfo/getArea',
  zhifu: '/api/Order/payOrder',
  chuangjiandingdan: '/api/Order/cretaeOrder',
  pass:'/api/Order/verifyPayPWD',
  aly:'/api/Alipay/appWebPay',
  sousuo:'/api/Goods/getSearchHot',
  mohu:'/api/Goods/getGoods'
}

module.exports = api