const app = getApp();

Page({
  data: {
    navItems: []
  },
  onLoad() {
    const navItems = [...app.navItems];
    navItems[3].active = true;
    this.setData({navItems})
    this.setData({orderList:app.orders});
    console.log(navItems)
  }
});
