# Strapi Forms Plugin

This plugin allows you to easily consume forms from your front end and automatically reject spam, send out
notifications, and store the data in your database.

## Installation

`npm install strapi-plugin-ezforms`
`yarn add strapi-plugin-ezforms`

## Configuration

_Use `env('YOUR_SECRET')` if you would like to store secrets in your env_

In your `/config/plugins.js`

```

    captchaProvider: {
      name: 'your-provider',
      config: {
        // captcha provider configuration
      }
    },
    notificationProviders: [
      {
        name: 'notificationProvider',
        enabled: true,
        config: {
          // Notification provider configuration
        }
      }
    ]

```

### Example Configuration

```
config:{
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: 'Your Key',
          minimumScore: 0.5
        }
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: 'Your Email'
          }
        },
        {
          provider: 'twilio',
          enabled: true,
          config: {
            accountSid: '',
            authToken: '',
            from: '',
          }
        }
      ]
    }
```

### Strapi Admin Panel Configuration

After you install this plugin you will see 2 new collections in the admin panel.

#### Form Submissions

This will store all of your form submissions. There are 2 parts to this collection. There is the score section which
corresponds to the captcha score (if you have captcha disabled it will display -1). The second part is the Notification
Recipients which are all of the people that need to be notified of the submission.

![](https://i.imgur.com/mmxPln2.png)

| key | value |
| --- | ----------- |
| Name | String |
| Email | String |
| Number | String E164 |

_Number must be in E164 format_

## Captcha Providers
If you would like to not use a Captcha use this configuration

```
captchaProvider: {
  name: 'none'
},
```
### Recaptcha

```
captchaProvider: {
  name: 'recaptcha',
  config: {
    secretKey: 'your-key',
    minimumScore: 0.5
  }
},
```

## Notification Providers

### Email

This uses Strapi's built-in email plugin to send emails. If that is not setup properly this notification provider will
not work.

_Note that the from field is required and will not use the Strapi default from_

```
{
  name: 'email',
  enabled: true,
  config: {
    from: 'noreply@m.domain.com'
  }
},
```

### Twilio

```
{
  name: 'twilio',
  enabled: true,
  config: {
    accountSid: 'sid',
    authToken: 'token',
    from: '+18005555555',
  }
}
```

## Submitting Data

submit data to the `/api/ezforms/submit/` endpoint (or `/ezforms/submit` if you are not use the `/api/` prefix)

Submit data as a JSON object with this format:

```
{
  token: 'your-recaptcha-token',
  formData:{
    name: 'John Doe',
    email: 'test@gmail.com'
    message: 'Hello World'
  }
}
```

Everything within the formData object will be sent as a notification and stored in the database.

### Axios Example

```js
  let form = {
      fname: 'John',
      lname: 'Doe',
  }
  let token = 'recaptcha token',

  axios.post('http://localhost:1337/api/ezforms/submit', {token, formData: form})
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      // error.response.status Check status code
    }).finally(() => {
    //Perform action in always
  });
```


## TODO

 - [ ] Add more captcha providers
 - [ ] Add more notification providers
 - [ ] Allow disabling db write
 - [ ] Make emails pretty
 - [ ] Allow providers to be extenable on a per project basis (similar to how email providers work)
 - [ ] Allow selection which notifications are sent to which people

## ⭐️Did you find this helpful?
If you found this plugin helpful give it a star?
