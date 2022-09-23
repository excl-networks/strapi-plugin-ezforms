# Custom Notification Provider

EzForms comes with first party notification providers but you can setup your own. If you think the notification provider would be useful to others please open a PR.

In your PR simply add your provider to [notification-providers](https://github.com/excl-networks/strapi-plugin-ezforms/tree/master/server/services/notification-providers) then register it with the [services](https://github.com/excl-networks/strapi-plugin-ezforms/blob/master/server/services/index.js) and finally add a section to the [docs](https://github.com/excl-networks/strapi-plugin-ezforms/blob/master/docs)

## Overriding

To override this function you can create an [extension in your project](https://docs.strapi.io/developer-docs/latest/development/plugins-extension.html#within-the-extensions-folder)

```js
// ./src/extensions/ezforms/strapi-server.js

module.exports = (plugin) => {
  plugin.services.customNotificationProvider = () => ({
    async send(config, data) {
      console.log(config)
      console.log(data)
      // access recipient from collection
      let recipients = await strapi.query('plugin::ezforms.recipient').findMany()
      // format data
      let message = strapi.plugin('ezforms').service('formatData').formatData(data)
      // custom notification logic
      console.log("Custom notification logic")
      return true
    }
  })
  return plugin;
};


```

The `data` object is the `formData` object from the request and `config` is the `config` from your Strapi config.


