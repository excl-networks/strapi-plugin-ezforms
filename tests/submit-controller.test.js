let submitController = require('../server/controllers/submit-controller')


describe('Submit Controller', function () {
  let ctx
  let strapi
  let trackDb
  let trackSend
  beforeEach(async function () {
    trackDb = jest.fn()
    trackSend = jest.fn()
    ctx = {
      request: {
        body: {
          formData: {
            name: 'John Doe',
            email: 'test@gmail.com',
            phone: '1234567890',
            message: 'Hello World',
          },
        }
      },
      internalServerError: function () {
        return 500
      },
      badRequest: function () {
        return 400
      }
    }
    strapi = {
      config: {
        get: jest.fn(function (key) {
          if (key === 'plugin.ezforms.captchaProvider.name') {
            return 'reCaptcha'
          } else if (key === 'plugin.ezforms.captchaProvider.config.secretKey') {
            return 'secretKey'
          } else if (key === 'plugin.ezforms.captchaProvider.config.score') {
            return 0.5
          }else if (key === 'plugin.ezforms.notificationProviders') {
            return [
              {
                name: 'twilio',
                enabled: true,
              },
              {
                name: 'mailgun',
                enabled: false,
              }
            ]
          } else {
            return null
          }
        })
      },
      log: {
        error: jest.fn()
      },
      plugin: function () {
        return {
          service: function () {
            return {
              validate: function () {
                return {
                  valid: false,
                  message: 'Unable to verify captcha',
                  code: 500
                }
              },
              send: function (config, formdata) {
                trackSend()
                return Promise.resolve()
              }
            }
          }
        }
      },
      query: function () {
        return {
          create: function (data) {
            trackDb()
            return Promise.resolve()
          }
        }
      }
    }

  })
  afterEach(function () {
    trackDb.mockClear()
    trackSend.mockClear()
  })

  test('should return captcha error', async function () {
    strapi.plugin().service().validate = jest.fn(function () {
      return {
        valid: false,
        message: 'Unable to verify captcha',
        code: 500
      }
    })

    let result = await submitController({strapi}).index(ctx)

    expect(result).toEqual(500)
    expect(trackDb).not.toHaveBeenCalled()
    expect(trackSend).not.toHaveBeenCalled()
  })

  test('should send notifications', async function () {
    strapi.config.get = jest.fn(function (key) {
      if (key === 'plugin.ezforms.captchaProvider.name') {
        return 'none'
      } else if (key === 'plugin.ezforms.captchaProvider.config.secretKey') {
        return 'secretKey'
      } else if (key === 'plugin.ezforms.captchaProvider.config.score') {
        return 0.5
      } else if (key === 'plugin.ezforms.notificationProviders') {
        return [
          {
            name: 'twilio',
            enabled: true,
          },
          {
            name: 'mailgun',
            enabled: false,
          }
        ]
      } else {
        return null
      }
    })
    await submitController({strapi}).index(ctx)

    expect(trackSend).toBeCalledTimes(1)


  })
  test('should add to db', async function () {

    strapi.config.get = jest.fn(function (key) {
      if (key === 'plugin.ezforms.captchaProvider.name') {
        return 'none'
      } else if (key === 'plugin.ezforms.captchaProvider.config.secretKey') {
        return 'secretKey'
      } else if (key === 'plugin.ezforms.captchaProvider.config.score') {
        return 0.5
      } else if (key === 'plugin.ezforms.notificationProviders') {
        return []
      } else {
        return null
      }
    })

    await submitController({strapi}).index(ctx)

    expect(trackDb).toBeCalledTimes(1)

  })


})
