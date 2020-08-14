const app = getApp();

Page({
  data: {
    swipeIndex: null,
    list: [],
    total: 0,
  },
  onLoad(query) {
    this.init();
  },
  init(){
    const newList = app.cart.map((item, index) => {
      return {...item, right: [{ type: "delete", text: "  " }]}
    })
    const count = newList.length;
    let total = 0;
    for(let i = 0; i < count; i++){
      total += (newList[i].price * newList[i].quantity);
    }
    this.setData({list: [...newList], total});
    this.setData({cartHeader:app.data.cartHeader});
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    const item = this.data.list[e.index];
    my.confirm({
      title: "",
      content: `Are you sure you want to remove ${item.title} from your cart?`,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      success: result => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === "delete") {
            app.removeFromCart(e.index);
            this.init();
          }

          my.showToast({
            content: `${item.title} removed from cart`
          });
          e.done();
        } else {
        }
      }
    });
  },
  onItemClick(e) {
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index
    });
  },
  calculateCart()
  {
    //var index = 0;
    console.log("Calculating Cart");
    //console.log(this.cart);
    this.data.cartHeader.TotalItems = this.cart.length;
    var itemcount = this.cart;
    var index =0;
    var itemprice=0;
    var totalPriceCalc=0;
    var totalQuantity=0;

    for (index; index < itemcount; index++)
      {
        itemprice = (this.cart[index].productPrice * this.cart[index].productQuantity);
        totalPriceCalc = totalPriceCalc + itemprice;
        totalQuantity = totalQuantity + this.cart[index].productQuantity;
      }
      console.log(totalPriceCalc);
      app.data.cartHeader.TotalItems = itemcount;
      app.data.cartHeader.TotalPrice = totalPriceCalc;
      app.data.cartHeader.TotalQuantity = totalQuantity;
      app.data.cartHeader.DateCreated = Date.now();
      this.setData({cartHeader: app.data.cartHeader});
  },
  handleStartShopping(){
    my.redirectTo({
      url: '../list/list'
    });
  },
  checkout(){
    console.log("checking out");
    this.calculateCart();
    my.navigateTo({
      url: '../orderConfirmation/orderConfirmation'
    });
  },
  increase(e){
    app.increaseQuantity(e.target.dataset.item);
    this.init();
  },
  decrease(e){
    const index = e.target.dataset.item;
    const quantity = app.cart[index].quantity;
    if(quantity > 1){
      app.decreaseQuantity(index);
      this.init();
    }
  },
});
