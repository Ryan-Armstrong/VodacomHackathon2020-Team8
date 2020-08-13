import { FALSE } from "node-sass";

const app = getApp();

Page({
  data: {
    deliveryAddressVisible: false,
  },
  onLoad() {
        this.setData({cartHeader:app.data.cartHeader});
        this.setData({customerData:app.data.customerData});
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
      this.setData({deliveryAddressVisible:true});
    }
    else {this.setData({deliveryAddressVisible:false});}
    console.log(this.data.deliveryAddressVisible)
  },

});
