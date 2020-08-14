const app = getApp();

Page({
  data: {
    categories: [],
    isLoading: false,
    toggleText: "Show more",
    categoriesCollapsed: false,
    searchText: "",
    navItems: []
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({navItems: app.navItems})
    my.showLoading({
      content: "loading..."
    });
    my.request({
      url: app.api.url,
      method: "POST",
      headers: app.api.headers,
      data: {
        query: `{
  categoryList {
    children {
      id
      name
      image
      products {
        total_count
      }
      }
    }
  }`
      },
      dataType: "json",
      success: ({ data }) => {
        if (data.data.categoryList.length) {
          this.setData({ categories: data.data.categoryList[0].children });
        }
      },
      fail: function(res) {
        my.alert({ content: "fail" });
        console.log("fail", res);
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
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
  handleCategoryTap(e) {
    const categoryId = e.target.dataset.categoryId;
    my.navigateTo({
      url: `../list/list?id=${categoryId}`
    })
  }
});
