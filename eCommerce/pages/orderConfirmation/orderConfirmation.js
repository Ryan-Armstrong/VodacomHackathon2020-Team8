const app = getApp();

Page({
  data: {
    deliveryAddressVisible: false,
    hideDropDown: true,
    paymentMethod: null,
    deliveyType: null,
    selectedAddress: null,
    list: []
  },
  onLoad() {
    this.setData({
      cartHeader: app.data.cartHeader,
      list: app.cart,
      customerData: app.data.customerData,
      deliveryAddressVisible: true
    });
    console.log(this.data.customerData.CustomerName);
  },

  paymentRadioChange(e) {
    console.log(e);
    this.setData({paymentMethod: e.detail.value})
    app.data.cartHeader.PaymentMethodSelected = e.detail.value;
  },

  addressRadioChange(e) {
    console.log(e.detail.value);
    this.setData({selectedAddress: e.detail.value})
    app.data.cartHeader.DeliveryAddressTitle = e.detail.value;
  },

  deliveryTypeRadioChange(e) {
    console.log(e.detail.value);
    app.data.cartHeader.DeliveryTypeSelected = e.detail.value;
    if (e.detail.value == "Deliver") {
      this.setData({ deliveryAddressVisible: false, deliveyType: e.detail.value});
    } else {
      this.setData({ deliveryAddressVisible: true, deliveyType: e.detail.value});
    }
  },

  placeOrder() {
    console.log("Place Order");
    console.log(app.orders.length);

    let StatusString = "Shipping";
    if ((app.data.cartHeader.DeliveryTypeSelected = "CollectInStore")) {
      StatusString = "Collecting";
    }

    //create the new order
    let newOrderNum = app.data.cartHeader.DateCreated;
    let orderDate = new Date(app.data.cartHeader.DateCreated);
    const newJSON = {
      id: newOrderNum,
      paymentMethodSelected: app.data.cartHeader.PaymentMethodSelected,
      deliveryTypeSelected: app.data.cartHeader.DeliveryTypeSelected,
      deliveryAddressTitle: app.data.cartHeader.DeliveryAddressTitle,
      dateCreated: orderDate.toDateString(),
      totalItems: app.data.cartHeader.TotalItems,
      totalPrice: app.data.cartHeader.TotalPrice,
      totalQuantity: app.data.cartHeader.TotalQuantity,
      items: this.data.list,
      status: StatusString
    };

    console.log(newJSON);
    app.orders.push(newJSON);

    //clean out the cart header
    app.data.cartHeader.CartID = "";
    app.data.cartHeader.PaymentMethodSelected = "";
    app.data.cartHeader.DeliveryTypeSelected = "";
    app.data.cartHeader.DeliveryAddressTitle = "";
    app.data.cartHeader.DateCreated = "";
    app.data.cartHeader.TotalItems = 0;
    app.data.cartHeader.TotalPrice = 0;
    app.data.cartHeader.TotalQuantity = 0;
    this.setData({ cartHeader: app.data.cartHeader });

    //clean out the cart items
    app.clearCart();
    //Go back to homepage
    my.redirectTo({
      url: "../orders/orders"
    });
  },
  handleDropDownTap() {
    this.setData({ hideDropDown: !this.data.hideDropDown });
  }
});
