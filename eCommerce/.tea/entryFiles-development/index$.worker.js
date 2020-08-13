if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/swipe-action/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/popover-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/cart/cart?hash=171a3e74be7d2205491487e57405aa4928385f5a');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/checkout/checkout?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderConfirmation/orderConfirmation?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/Orders/Orders?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}