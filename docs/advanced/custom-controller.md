# Custom Controller

EzForms comes with a default controller that handles the form submission. However, if you need more advanced features or form validation you can reuse the EzForms functions so you don't need to rewrite Captcha providers or Notification providers.

## Overriding

You can create a custom controlling by following the instructions in the [Official Strapi Docs](https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html)


### Captcha Providers

```js

// Call captcha provider function

strapi.plugin('ezforms').service('recaptcha').validate(ctx.request.body.token)

```

Captcha providers will return an object with a valid property
```js
// invalid captcha
return {
  valid: false,
  message: 'Missing token',
  code: 400
}
// valid captcha
return {
  score: .75,
  valid: true
}
```

### Notification Providers

You can use any of the notification providers that come with EzForms or you can create your own. Each provider takes a config variable which you can view the required data [here](/notification-providers) and data which is the formData.


```js
// Twilio Example
let config = {
    accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    authToken: 'your_auth_token',
    from: '+12345678901',
}
let data = {
    name: 'John Doe',
    email: 'test@gmail.com'
}

strapi.plugin('ezforms').service('twilio').send(config, data)
```


### formatData

The formatData function takes the data object and formats it into a string that can be used in a notification.

```js
strapi.plugin('ezforms').service('formatData').formatData(data)
```



