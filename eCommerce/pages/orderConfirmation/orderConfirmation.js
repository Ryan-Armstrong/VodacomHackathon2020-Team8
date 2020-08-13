

const app = getApp();

Page({
  data: {
    deliveryAddressVisible: false,
  },
  onLoad() {
        this.setData({cartHeader:app.data.cartHeader});
        this.setData({customerData:app.data.customerData});
        this.setData({deliveryAddressVisible:true});
        console.log(this.data.customerData.CustomerName);
  },

  paymentRadioChange(e){
    console.log(e.detail.value);
    app.data.cartHeader.PaymentMethodSelected=e.detail.value;
  },

  addressRadioChange(e){
    console.log(e.detail.value);
    app.data.cartHeader.DeliveryAddressTitle=e.detail.value;
  },

  deliveryTypeRadioChange(e){
    console.log(e.detail.value);
    app.data.cartHeader.DeliveryTypeSelected=e.detail.value;
    if (e.detail.value=="Deliver"){
      this.setData({deliveryAddressVisible:false});
    }
    else {this.setData({deliveryAddressVisible:true});}
    console.log(this.data.deliveryAddressVisible)
  },
 
  placeOrder(){
    console.log("Place Order");
    console.log(app.data.Orders.length);
    var newOrderNum = app.data.Orders.length;
    var newOrder = "{OrderID:\""+newOrderNum+"\",PaymentMethodSelected:}";
    console.log(newOrder);
    app.data.Orders.push(
      {
        OrderID:"1",
        PaymentMethodSelected: "Credit Card 1",
        DeliveryTypeSelected: "Collect In Store",
        DeliveryAddressTitle: "",
        DateCreated:Date.now(),
        TotalItems:1,
        TotalPrice:998,
        TotalQuantity:2,
      }
    );
    //app.setData({Orders[newOrderNum].OrderID:app.data.Orders.length+1});
    //app.data.Orders[newOrderNum].PaymentMethodSelected = "tmp";
  },
});
