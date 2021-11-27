module.exports = {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/submit',
      handler: 'submitController.index',
      config: {
        policies: [],
      },
    },
  ],
};
