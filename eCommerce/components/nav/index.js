Component({
  mixins: [], // minxin easy reuse code
  data: {
    navItems: {
      home: {
        active: true,
        path: "",
        icon: "icon-store-front",
        pill: {
          counter: 0,
          show: false
        }
      },
      cart: {
        active: false,
        path: "",
        icon: "icon-shopping-cart",
        pill: {
          counter: 0,
          show: false
        }
      },
      bookings: {
        active: false,
        path: "",
        icon: "icon-calendar",
        pill: {
          counter: 0,
          show: false
        }
      },
      orders: {
        active: false,
        path: "",
        icon: "icon-cube",
        pill: {
          counter: 0,
          show: false
        }
      }
    }
  }, // internal data of component
  props: { y: 1 }, // Can add default to attribute transferred from outside
  onInit() {}, // trigger on component creation, added in version 2.0.0
  deriveDataFromProps(nextProps) {}, // trigger on component creation and before update, added in version 2.0.0
  didMount() {}, // Lifecycle function
  didUpdate() {},
  didUnmount() {},
  methods: {
    // customized method
    handleTap(e) {
      // this.setData({ x: this.data.x + 1 }); // Can use setData to change internal attribute
      console.log("tap event", e);
    }
  }
});
