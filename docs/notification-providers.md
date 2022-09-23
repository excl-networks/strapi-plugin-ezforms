# Notification Providers

Notification providers allow you to send form submissions to a variety of different services.  Currently, we support the following providers:

 - [Email](#email)
 - [Twilio](#twilio)

_If you are interested in another provider feel free to open a PR or visit [Custom Notification Provider](/advanced/custom-notification-provider)_

## Email

This uses Strapi's built-in email plugin to send emails. If that is not setup properly this notification provider will
not work.

_Note that the from field is required and will not use the Strapi default from_

```
{
  name: 'email',
  enabled: true,
  config: {
    subject: "Your Custom Subject", // Optional
    from: 'noreply@m.domain.com' // Required
  }
},
```

## Twilio

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
