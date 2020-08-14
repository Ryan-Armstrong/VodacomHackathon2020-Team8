Component({
  mixins: [], // minxin easy reuse code
  data: {
    navItems: []
  }, // internal data of component
  props: { y: 1 }, // Can add default to attribute transferred from outside
  onInit() {
    this.setData({navItems: this.props.navItems})
  }, // trigger on component creation, added in version 2.0.0
  deriveDataFromProps(nextProps) {
    this.setData({navItems: nextProps.navItems})
  }, // trigger on component creation and before update, added in version 2.0.0
  didMount() {}, // Lifecycle function
  didUpdate() {},
  didUnmount() {},
  methods: {
    // customized method
    handleTap(e) {
      // this.setData({ x: this.data.x + 1 }); // Can use setData to change internal attribute
      console.log("tap event", e);
      my.navigateTo({
        url: e.target.dataset.path
      });
    }
  }
});
