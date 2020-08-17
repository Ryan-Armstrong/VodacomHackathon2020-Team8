const app = getApp();

Page({
  data: {
    navItems: []
  },
  onLoad() {
    const navItems = [...app.navItems];
    navItems[3].active = true;
    this.setData({navItems})
    this.setData({OrderList:app.data.Orders});
    console.log(navItems)
  },
  goHome(){
    my.redirectTo({
      url: '../index/index'
    });
  }
});
