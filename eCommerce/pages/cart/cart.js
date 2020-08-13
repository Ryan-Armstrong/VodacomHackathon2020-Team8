const app = getApp();

Page({
  data:{
    swipeIndex: null,
  },

  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({cartItems:app.data.cartItems});
    this.setData({cartHeader:app.data.cartHeader});
    console.log("bla");
    this.calculateCart();
      },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    this.setData({cartItems:app.data.cartItems});
    this.setData({cartHeader:app.data.cartHeader});
    this.calculateCart();
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
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  calculateCart()
  {
    //var index = 0;
    console.log("Calculating Cart");
    //console.log(this.data.cartItems.length);
    this.data.cartHeader.TotalItems = this.data.cartItems.length;
    var itemcount = this.data.cartItems.length;
    var index =0;
    var itemprice=0;
    var totalPriceCalc=0;
    var totalQuantity=0;

    for (index; index < itemcount; index++)
      {
        itemprice = (this.data.cartItems[index].productPrice * this.data.cartItems[index].productQuantity);
        totalPriceCalc = totalPriceCalc + itemprice;
        totalQuantity = totalQuantity + this.data.cartItems[index].productQuantity;
      }
      console.log(totalPriceCalc);
      app.data.cartHeader.TotalItems = itemcount;
      app.data.cartHeader.TotalPrice = totalPriceCalc;
      app.data.cartHeader.TotalQuantity = totalQuantity;
      app.data.cartHeader.DateCreated = Date.now();
      this.setData({cartHeader: app.data.cartHeader});
  },
 
  Checkout(){
    console.log("checking out");
    this.calculateCart();
    my.navigateTo({
      url: '../orderConfirmation/orderConfirmation'
    });
  },

  onRightItemClick(e) {
    console.log("Swipe Right");
  },

  onSwipeStart(e) {
    this.setData({swipeIndex: e.index,});
  },

  cartItemClick(e){
  console.log(e);
  app.data.cartItems[e.index].productQuantity++;
  this.calculateCart(); 
  this.setData({cartItems:app.data.cartItems});
  },
});
