# Getting Started

## Installation

`npm install strapi-plugin-ezforms`

or

`yarn add strapi-plugin-ezforms`

## Configuration

_Use `env('YOUR_SECRET')` if you would like to store secrets in your env_

In your `/config/plugins.js` paste this getting started config:

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
