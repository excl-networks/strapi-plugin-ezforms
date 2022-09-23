'use strict'


module.exports = {
  default: {
    captchaProvider: {
      name: 'none',
      config: {}
    },
    enableFormName: false,
    notificationProviders: [
      {
        name: 'email',
        enabled: false,
        config: {
          from: 'noreply@strapi.io',
          subject: 'New Contact Form Submission',
        }
      }
    ]
  },
  validator() {
  },
}
