const app = getApp();

Page({
  data: {
    product: {},
    category: {},
    categories: [],
    isLoading: false,
    bookingDate: null,
    bookingTime: null,
    navItems: [],
    testRender: () => <view>hello</view>
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    const product = app.selectedProduct;
    let htmlString = product.short_description.html;
    htmlString = htmlString.replace(/(<.{1,7}>)/g, "");
    product.short_description.html = htmlString;
    this.setData({ 
      navItems: app.navItems,
      product: app.selectedProduct,
      bookingDate: new Date().toDateString(),
      bookingTime: new Date().toTimeString(),
    });
    console.log(this.data.product);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  },
  handleInput(value) {
    this.setData({
      value
    });
  },
  handleClear(value) {
    this.setData({
      value: ""
    });
  },
  handleFocus() {},
  handleBlur() {},
  handleCancel() {
    this.setData({
      value: ""
    });
  },
  handleSubmit(value) {
    my.alert({
      content: value
    });
  },
  handleProductTap() {
    if (this.data.product.type_id !== "virtual") {
      app.addToCart(this.data.product);
      this.setData({ cartTotal: app.cart.length, navItems: app.navItems });
    }
    console.log("cart items", this.data.cartTotal);
    console.log("nav items", this.data.navItems);
  },
  handleCategoryTap(e) {
    console.log("category tap", e);
    // this.setData({ category: e.target.dataset.category });
    this.fetchProducts(e.target.dataset.category.id);
  },
  handleDropDownTap(e) {
    this.setData({ hideDropDown: !this.data.hideDropDown });
  }
});
