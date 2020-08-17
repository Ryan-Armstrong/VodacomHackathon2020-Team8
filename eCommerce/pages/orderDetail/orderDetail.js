const app = getApp();

Page({
  data: {
    order: null,
    navItems: []
  },
  onLoad(query) {
    const navItems = [...app.navItems];
    navItems[3].active = true;
    let id = query.id || 0;
    this.setData({navItems,order: app.orders[id]})
  }
});
