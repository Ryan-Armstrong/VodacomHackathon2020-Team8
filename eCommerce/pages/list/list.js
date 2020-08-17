const app = getApp();

Page({
  data: {
    productList: [],
    category: {},
    categories: [],
    isLoading: false,
    hideDropDown: true,
    navItems: [],
    cartTotal: 0,
    bookingTotal: 0
  },
  fetchProducts(id) {
    my.showLoading({
      content: "loading..."
    });
    my.request({
      url: app.api.url,
      method: "POST",
      headers: app.api.headers,
      data: {
        query: `{
  products(
    filter: {
      category_id: {
        eq: "${id}"
      }
    }
  ) {
    items {
      sku,
      type_id,
      name,
      url_key,
       short_description{ 
        html 
      },
      image { 
        url 
        label 
      },
      price_range {
        minimum_price {
          final_price {
            value
            currency
          }
        }
      }
      categories{ 
        id 
        name 
        url_key 
        image
      } 
    },
    page_info {
      page_size
      current_page
      total_pages
    }
    total_count
  }
}`
      },
      dataType: "json",
      success: ({ data }) => {
        console.log("success", data);
        this.setData({
          productList: data.data.products.items,
          category: data.data.products.items[0].categories[0]
        });
      },
      fail: function(res) {
        my.alert({ content: "fail" });
        console.log("fail", res);
      },
      complete: function(res) {
        my.hideLoading();
        console.log("completeccess", res);
      }
    });
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({ navItems: app.navItems, categories: app.categories });
    this.setData({});
    let id = query.id || "59";
    this.fetchProducts(id);
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
  handleSubmit(value) {
    my.alert({
      content: value
    });
  },
  handleProductTap(e) {
    const product = e.target.dataset.product;
    // if (product.type_id !== "virtual") {
    //   app.addToCart(product);
    //   this.setData({ cartTotal: app.cart.length, navItems: app.navItems });
    // }
    app.selectedProduct = product;
    my.navigateTo({
      url: '../productDetail/productDetail'
    });
  },
  handleCategoryTap(e) {
    console.log("category tap", e);
    // this.setData({ category: e.target.dataset.category });
    this.fetchProducts(e.target.dataset.category.id);
  },
  handleDropDownTap(e) {
    this.setData({ hideDropDown: !this.data.hideDropDown });
  }
});
