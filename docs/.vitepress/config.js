export default {
  title: 'EzForms Docs',
  description: 'Easily add forms to your website with EzForms',
  themeConfig: {
    nav: [
      {text: 'Getting Started', link: '/getting-started'},
      {text: 'NPM', link: 'https://www.npmjs.com/package/strapi-plugin-ezforms'},
      {text: 'Github', link: 'https://github.com/excl-networks/strapi-plugin-ezforms'}
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          {text: 'Introduction', link: '/'},
          {text: 'Getting Started', link: '/getting-started'},
          {text: 'Configuration', link: '/configuration'},
          {text: 'Notification Providers', link: '/notification-providers'},
          {text: 'Captcha Providers', link: '/captcha-providers'},
          {text: 'Submitting Data', link: '/submitting-data'},


        ]
      },
      {
        text: 'Advanced',
        items: [
          {text: 'Custom Formatting', link: '/advanced/custom-formatting'},
          {text: 'Custom Controller', link: '/advanced/custom-controller'},
          {text: 'Custom Notification Provider', link: '/advanced/custom-notification-provider'},

        ]
      }
    ]
  }
}
