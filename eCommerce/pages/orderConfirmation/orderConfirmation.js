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
    console.log(app.data.Orders.length);

    var StatusString = "Shipping";
    if ((app.data.cartHeader.DeliveryTypeSelected = "CollectInStore")) {
      StatusString = "Collecting";
    }

    //create the new order
    var newOrderNum =
      app.data.customerData.CustomerID + "-" + (app.data.Orders.length + 1);
    var newJSON = {
      OrderID: newOrderNum,
      PaymentMethodSelected: app.data.cartHeader.PaymentMethodSelected,
      DeliveryTypeSelected: app.data.cartHeader.DeliveryTypeSelected,
      DeliveryAddressTitle: app.data.cartHeader.DeliveryAddressTitle,
      DateCreated: app.data.cartHeader.DateCreated,
      TotalItems: app.data.cartHeader.TotalItems,
      TotalPrice: app.data.cartHeader.TotalPrice,
      TotalQuantity: app.data.cartHeader.TotalQuantity,
      OrderStatus: StatusString
    };

    console.log(newJSON);
    app.data.Orders.push(newJSON);

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
    app.data.cartItems = {};

    //Go back to homepage
    my.redirectTo({
      url: "../orders/orders"
    });
  },
  handleDropDownTap() {
    this.setData({ hideDropDown: !this.data.hideDropDown });
  }
});
