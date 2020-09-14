import request from '@/network/request'
import {
  homeList,
  shopType,
  detail,
  yan,
  yong,
  duan,
  deng,
  fenlei,
  liebiao,
  gou,
  goucha,
  num,
  remove,
  ding,
  dizhi,
  huodizhi,
  zhifu,
  chuangjiandingdan,
  pass,
  aly,
  sousuo,
  mohu
} from './base'

// 获取首页数据
export function getHomeList(params) {
  return request({
    url: homeList,
    method: 'get',
    params,
    hideloading: false
  })
}

// 获取商品分类数据
export function getTypeList(params) {
  return request({
    url: shopType,
    method: 'get',
    params
  })
}
// 获取分类页左边数据
export function fen(params) {
  return request({
    url: fenlei,
    method: 'get',
    params
  })
}
// 获取分类页相对应的列表数据
export function lie(params) {
  return request({
    url: liebiao,
    method: 'get',
    params
  })
}
// 详情
export function getDetail(params) {
  return request({
    url: detail,
    method: 'get',
    params,
    hideloading: true
  })
}
//验证
export function yanzheng(phone) {
  return request({
    url: yan,
    method: 'get',
    params: phone,
    hideloading: true
  })
}
//用户名验证
export function yonghuming(LoginName) {
  return request({
    url: yong,
    method: 'get',
    params: LoginName,
    hideloading: true
  })
}
//短信验证
export function duanxin(phone1) {
  return request({
    url: duan,
    method: 'get',
    params: phone1,
    // hideloading: true
  })
}
//登录验证
export function denglu(dengzhi) {
  return request({
    url: deng,
    method: 'post',
    params: dengzhi,
    // hideloading: true
  })
}
//添加购物车
export function gouwuche(gouwu) {
  return request({
    url: gou,
    method: 'post',
    params: gouwu,
    hideloading: true
  })
}
//查看购物车信息
export function chakan(chakan) {
  return request({
    url: goucha,
    method: 'get',
    params: chakan,
    hideloading: true
  })
}
//数量更改
export function gg(gg) {
  return request({
    url: num,
    method: 'patch',
    params: gg,
    hideloading: true
  })
}
//删除
export function sc(sc) {
  return request({
    url: remove,
    method: 'patch',
    params: sc,
    hideloading: true
  })
}
//订单提交
export function dingdan(dd) {
  return request({
    url: ding,
    method: 'get',
    params: dd,
    hideloading: true
  })
}
//添加收货地址
export function shouhuo(sh) {
  return request({
    url: dizhi,
    method: 'post',
    params: sh,
    hideloading: true
  })
}
//获取收货地址
export function huoqu(hq) {
  return request({
    url: huodizhi,
    method: 'get',
    params: hq,
    hideloading: true
  })
}
//余额支付
export function zf(zf) {
  return request({
    url: zhifu,
    method: 'post',
    params: zf,
    hideloading: true
  })
}
//创建订单但未支付
export function cjdd(cjdd) {
  return request({
    url: chuangjiandingdan,
    method: 'post',
    params: cjdd,
    hideloading: true
  })
}
//验证密码
export function mm(mm) {
  return request({
    url: pass,
    method: 'post',
    params: mm,
    hideloading: true
  })
}
//支付宝支付
export function zfb(zfb) {
  return request({
    url: aly,
    method: 'post',
    params: zfb,
    hideloading: true
  })
}
//搜索页面
export function sou(sou) {
  return request({
    url: sousuo,
    method: 'get',
    params: sou,
    hideloading: true
  })
}
//模糊查询
export function mo(mo) {
  return request({
    url: mohu,
    method: 'get',
    params: mo,
    hideloading: true
  })
}