# Configuration

The configuration is split into 3 parts, root level parameters, notification providers, and a captcha provider.


## Simplest Configuration

```
ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      notificationProviders: []
    }
}
```
_This config will only store form data in the Form Submissions Strapi Collection_

|Property|Description|Type|
|---|---|---|
|`captchaProvider`|The captcha provider to use|Object|
|`captchaProvider.name`|Name of the Captcha provider|String|
|`captchaProvider.config`|Captcha Provider Config|Object|
|`notificationProviders`|The notification providers to use|Array|
|`notificationProviders[].name`|Name of the notification provider|String|
|`notificationProviders[].enabled`|If you want this provider to be enabled|Boolean|
|`notificationProviders[].config`|Notification Provider Config|Object|
|`enableFormName`|Allow arbitrary form names set by client|Boolean|
|`allowUnsafeHtmlAsMessage`|Passes the formated message as html UNSAFE YOU MUST OVERRIDE FORMAT|Boolean|



## Strapi Admin Panel Configuration

After you install this plugin you will see 2 new collections in the admin panel.

### Form Submissions

This will store all of your form submissions. There are 2 parts to this collection. There is the score section which
corresponds to the captcha score (if you have captcha disabled it will display -1) The second part is the actual form data in JSON form.
### Notification Recipients
These are all the people that need to be notified of the submission.

![](https://i.imgur.com/mmxPln2.png)

| key | value |
| --- | ----------- |
| Name | String |
| Email | String |
| Number | String E164 |

_Number must be in E164 format_

### Permission Setup

Under `Settings` > `User & Permissions Plugin` > `Roles`

You can define which roles can submit to the EZ Forms endpoint. If you want anyone to be able to submit select `Public` if you only want authenticated users to submit forms select `Authenticated` Or selected a custom role.

![image](https://user-images.githubusercontent.com/25715982/155970840-38801141-bce8-4a1f-9750-5a7600ccb8cc.png)

## Adding Notification Providers

See [Notification Providers](/notification-providers) for more information


## Adding a Captcha Provider

See [Captcha Providers](/captcha-providers) for more information
