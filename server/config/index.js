'use strict';


module.exports = {
  default: {
    captchaProvider: {
      name: 'none',
      config: {}
    },
    notificationProviders: [
      {
        name: 'email',
        enabled: false,
        config: {
          from: 'noreply@strapi.io'
        }
      }
    ]
  },
  validator() {
  },
};
