App({
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
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
