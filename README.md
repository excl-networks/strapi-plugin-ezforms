
<p align="center">
  <img src="https://user-images.githubusercontent.com/25715982/152631378-2964a94b-bc53-435f-9812-c2880e497cb3.png" alt="EZ forms"/>
</p>

# Strapi Forms Plugin

_This plugin only supports Strapi v4_

This plugin allows you to easily consume forms from your front end and automatically reject spam, send out
notifications, and store the data in your database.


_Objective:_

_The objective of ez forms is to have a really simple and fast way to integrate forms with notifications without a lot of setup.  We will be continuing to build features but we are going to keep this plugin simple to setup. Meaning features like server side form validation and heavy customiztations will most likely never be added to this forms plugin. If you need something more customized you should look into making a custom controller._

## Docs

[Go To Documentation](https://ezforms.excl.dev)


## Issues

All general issues should be submitted through the [Github issue system](https://github.com/excl-networks/strapi-plugin-ezforms/issues)

Security issues should be reported using the [security tab](https://github.com/excl-networks/strapi-plugin-ezforms/security)

## Links

 - [NPM Package](https://www.npmjs.com/package/strapi-plugin-ezforms)
 - [Github](https://github.com/excl-networks/strapi-plugin-ezforms)
 - [MIT License](LICENSE.md)

## TODO

 - [ ] Add more captcha providers
 - [ ] Add more notification providers
 - [ ] Allow disabling db write
 - [ ] Make emails pretty (see custom formatting)
 - [x] Allow providers to be extendable on a per project basis (similar to how email providers work)
 - [ ] Allow selection which notifications are sent to which people
 - [ ] Convert to TS
 - [x] Add eslint
 - [x] Remove Twilio SDK in favor of HTTP

## ⭐️Did you find this helpful?
If you found this plugin helpful give it a star?
