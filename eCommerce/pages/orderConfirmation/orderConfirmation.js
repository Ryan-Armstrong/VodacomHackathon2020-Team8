

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
    
    //create the new order
    var newOrderNum = app.data.Orders.length;
    var newOrder = "{OrderID:\""+newOrderNum+"\",PaymentMethodSelected:\""+app.data.cartHeader.PaymentMethodSelected+"\",DeliveryTypeSelected:\""+app.data.cartHeader.DeliveryTypeSelected+"\",DeliveryAddressTitle:\""+app.data.cartHeader.DeliveryAddressTitle+"\",DateCreated:"+Date.now()+",TotalItems"+app.data.cartHeader.TotalItems+",TotalPrice:"+app.data.cartHeader.TotalPrice+",TotalQuantity:"+app.data.cartHeader.TotalQuantity+"}";
    console.log(newOrder);
    app.data.Orders.push(newOrder);
    
    //clean out the cart header
    app.data.cartHeader.CartID="";
    app.data.cartHeader.PaymentMethodSelected="";
    app.data.cartHeader.DeliveryTypeSelected="";
    app.data.cartHeader.DeliveryAddressTitle="";
    app.data.cartHeader.DateCreated="";
    app.data.cartHeader.TotalItems=0;
    app.data.cartHeader.TotalPrice=0;
    app.data.cartHeader.TotalQuantity=0;
    this.setData({cartHeader:app.data.cartHeader});
    
    //clean out the cart items
    app.data.cartItems = {};
  
    //Go back to homepage
    my.redirectTo({
      url: '../index/index'
    })
  },
});
