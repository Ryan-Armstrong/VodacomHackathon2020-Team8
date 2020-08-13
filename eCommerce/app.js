App({

  data:{

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

  cartHeader: {
    CartID:"",
    PaymentMethodSelected: "",
    DeliveryTypeSelected: "",
    DeliveryAddressTitle: "",
    DateCreated:"",
    TotalItems:0,
    TotalPrice:0,
    TotalQuantity:0,
  },

//create fake cart
  cartItems: [
    {
      productSku: "Product1SKU",
      productTitle: "Product Title 1",
      productDescription: "This is a temporary description for Product 1",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 1,
      productPrice: 200,
    },
    {
      productSku: "Product2SKU",
      productTitle: "Product Title 2",
      productDescription: "This is a temporary description for Product 2",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 2,
      productPrice: 400,
    },
        {
      productSku: "Product3SKU",
      productTitle: "Product Title 3",
      productDescription: "This is a temporary description for Product 3",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 10,
      productPrice: 50,
    },
        {
      productSku: "Product4SKU",
      productTitle: "Product Title 4",
      productDescription: "This is a temporary description for Product 3",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 5,
      productPrice: 400,
    },
        {
      productSku: "Product5SKU",
      productTitle: "Product Title 5",
      productDescription: "This is a temporary description for Product 5",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 3,
      productPrice: 200,
    },
        {
      productSku: "Product6SKU",
      productTitle: "Product Title 6",
      productDescription: "This is a temporary description for Product 6",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 1,
      productPrice: 50000,
    },
        {
      productSku: "Product7SKU",
      productTitle: "Product Title 7",
      productDescription: "This is a temporary description for Product 7",
      productImageUrl: "https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/media/catalog/product/cache/f9f5b1926d03c6b3fb82c0014bb23c4b/b/o/bob.jpg",
      productType: "Simple",
      productQuantity: 1,
      productPrice: 10,
    },
  ],

  Orders: [
    {
    OrderID:"Cust123-1",
    PaymentMethodSelected: "Credit Card 1",
    DeliveryTypeSelected: "Collect In Store",
    DeliveryAddressTitle: "",
    DateCreated:Date.now(),
    TotalItems:1,
    TotalPrice:998,
    TotalQuantity:2,
    OrderStatus:"Complete",
    }
  ],

  },

  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
  },

  addToCart(newitem){
    //add item to the cart
    //recalculate cart
  },
  appData: {
    categories: [],
  },
  api: {
    url: 'https://integration-5ojmyuq-mgr5bk4tqgnlo.eu-5.magentosite.cloud/graphql',
    headers: {
      'Authorization-GraphQL': 'Bearer xzbwcatpzav7ojwe1uahk6pu80siwlkd',
      Store: 'MainStoreView',
    }
  }
});
