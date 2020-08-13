const app = getApp();

Page({
  data: {
    swipeIndex: null,
    list: [],
    total: 0,
  },
  onLoad(query) {
    const newList = app.data.cartItems.map((item, index) => {
      return {...item, right: [{ type: "delete", text: "  " }]}
    })
    const count = newList.length;
    let total = 0;
    for(let i = 0; i < count; i++){
      total += (newList[i].productPrice * newList[i].productQuantity);
    }
    this.setData({list: newList, total});
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: "Tips",
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      success: result => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === "delete") {
            list.splice(this.data.swipeIndex, 1);
            this.setData({
              list: [...list]
            });
          }

          my.showToast({
            content: "Confirm => Execute swipe deletion recovery "
          });
          e.done();
        } else {
          my.showToast({
            content: "Cancel => Swipe deletion status remains unchanged "
          });
        }
      }
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index
    });
  },

});
