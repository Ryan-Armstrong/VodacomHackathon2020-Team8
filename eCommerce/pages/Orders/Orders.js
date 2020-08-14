const app = getApp();

Page({
  data: {},
  onLoad() {
    this.setData({OrderList:app.data.Orders});
  },
  goHome(){
    my.redirectTo({
      url: '../index/index'
    });
  }
});
