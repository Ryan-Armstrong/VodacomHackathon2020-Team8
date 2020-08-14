App({
  data: {
    customerData: {
      CustomerID: "UninitialisedCustomerID",
      CustomerName: "UninitialisedCustomerName",
      CustomerPaymentMethods: [
        {
          PaymentMethodTitle: "Card 1",
          PaymentMethodType: "CreditCard",
        },
        {
          PaymentMethodTitle: "Card 2",
          PaymentMethodType: "CreditCard",
        },
        {
          PaymentMethodTitle: "VodaCredit Account",
          PaymentMethodType: "VodaCredit",
        },
      ],
      CustomerAddresses: [
        {
          AddressTitle: "Home Address",
        },
        {
          AddressTitle: "Work Address",
        },
      ],
    },

    cartHeader: {
      CartID: "",
      PaymentMethodSelected: "",
      DeliveryTypeSelected: "",
      DeliveryAddressTitle: "",
      DateCreated: "",
      TotalItems: 0,
      TotalPrice: 0,
      TotalQuantity: 0,
    },
    //create fake cart
    Orders: [
      {
        OrderID: "1",
        PaymentMethodSelected: "Credit Card 1",
        DeliveryTypeSelected: "Collect In Store",
        DeliveryAddressTitle: "",
        DateCreated: Date.now(),
        TotalItems: 1,
        TotalPrice: 998,
        TotalQuantity: 2,
        OrderStatus: "Complete",
      },
    ],

    customerData: {
      CustomerID: "Cust123",
      CustomerName: "UninitialisedCustomerName",
      CustomerPaymentMethods: [
        {
          PaymentMethodTitle: "Card 1",
          PaymentMethodType: "CreditCard",
        },
        {
          PaymentMethodTitle: "Card 2",
          PaymentMethodType: "CreditCard",
        },
        {
          PaymentMethodTitle: "VodaCredit Account",
          PaymentMethodType: "VodaCredit",
        },
      ],
      CustomerAddresses: [
        {
          AddressTitle: "Home Address",
        },
        {
          AddressTitle: "Work Address",
        },
      ],
    },
  },

  onLaunch(options) {
    // Page opens for the first time
    console.info("App onLaunch");
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
  addToCart(product) {
    let newItem = true;
    const newCart = this.cart.map((item) => {
      if (product.sku === item.sku) {
        item.quantity++;
        newItem = false;
      }
      return item;
    });
    if (newItem) {
      this.cart.push({
        sku: product.sku,
        title: product.name,
        description: product.description.html,
        imageUrl: product.image.url,
        type: product.type_id,
        quantity: 1,
        price: product.price_range.minimum_price.regular_price.value,
      });
      my.showToast({
        content: `${product.name} added to cart`,
      });
    }
  },
  removeFromCart(index) {
    this.cart.splice(index, 1);
  },
  decreaseQuantity(index) {
    const quantity = this.cart[index].quantity;
    if (quantity > 1) {
      this.cart[index].quantity--;
    }
  },
  increaseQuantity(index) {
    this.cart[index].quantity++;
  },
  appData: {
    categories: [],
  },
  cart: [],
  api: {
    url:
      "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/graphql",
    headers: {
      "Authorization-GraphQL": "Bearer xzbwcatpzav7ojwe1uahk6pu80siwlkd",
      Store: "MainStoreView",
    },
  },
  navItems: [
    {
      id: "home",
      active: true,
      path: "../index/index",
      icon: "icon-store-front",
      pill: {
        counter: 0,
        show: false,
      },
    },
    {
      id: "cart",
      active: false,
      path: "../cart/cart",
      icon: "icon-shopping-cart",
      pill: {
        counter: 0,
        show: false,
      },
    },
    {
      id: "bookings",
      active: false,
      path: "",
      icon: "icon-calendar",
      pill: {
        counter: 0,
        show: false,
      },
    },
    {
      id: "orders",
      active: false,
      path: "",
      icon: "icon-cube",
      pill: {
        counter: 0,
        show: false,
      },
    },
  ],
});
