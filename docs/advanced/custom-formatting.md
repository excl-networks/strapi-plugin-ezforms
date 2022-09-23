# Custom Formatting

By default ezforms will display data as key value pairs in a pretty format 1 level deep, anything beyond 1 level will use `JSON.stringify()`


You can see our `formatData()` function [here](https://github.com/excl-networks/strapi-plugin-ezforms/blob/master/server/services/utils/formatData.js)

## Overriding

To override this function you can create an [extension in your project](https://docs.strapi.io/developer-docs/latest/development/plugins-extension.html#within-the-extensions-folder)

```js
// ./src/extensions/ezforms/strapi-server.js

module.exports = (plugin) => {

  plugin.services.formatData = () => ({
    formatData(data) {
      return "Custom formatData"
    }

  })

  return plugin;
};

```

The `data` object is the `formData` object from the request.
