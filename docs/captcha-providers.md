# Captcha Providers


Captcha Providers allow you to reduce spam and bots from submitting forms.  Currently, we support the following providers:

 - [Google Recaptcha v3](#recaptcha)

_If you are interested in another provider feel free to open a PR_

If you would like to not use a Captcha use this configuration

```
captchaProvider: {
  name: 'none'
},
```
## Recaptcha

```
captchaProvider: {
  name: 'recaptcha',
  config: {
    secretKey: 'your-key',
    minimumScore: 0.5
  }
},
```
