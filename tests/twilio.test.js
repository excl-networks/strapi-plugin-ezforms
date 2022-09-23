const twilioProvider = require('../server/services/notification-providers/twilio')
const axios = require('axios')


describe('Twilio Notification Provider', function () {
  let strapi
  let config
  let data
  beforeEach(async function () {
    strapi = {
      config: {
        get: jest.fn()
      },
      log: {
        error: jest.fn()
      },
      plugin: function () {
        return {
          service: function () {
            return {
              formatData: jest.fn()
            }
          }
        }
      },
      plugins: {
        email: {
          services: {
            email: {
              send: jest.fn()
            }
          }
        }
      },
      query: jest.fn(() => {
        return {
          findMany: jest.fn(() => {
            return [
              {
                email: 'test@gmail.com'
              },
              {
                email: 'test2@gmail.com',
                number: '+1234567890'
              },
              {
                email: 'test3@gmail.com',
                number: '+1234567892'
              }
            ]
          })
        }
      })

    }
    config = {
      from: 'test@gmail.com',
      subject: 'New Contact Form Submission',
    }
    data = {
      name: 'John Doe',
      email: 'test@gmail.com',
    }
  }
  )
  afterEach(async function () {
    jest.clearAllMocks()
  })

  test('should fail to send sms', async function () {
    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error('Unable To Send SMS'))
    let result = await twilioProvider({strapi}).send(config, data)
    expect(result).toEqual(new Error())

  })
  test('should send sms twice', async function () {
    jest.spyOn(axios, 'post').mockImplementation(() => {
    })
    let result = await twilioProvider({strapi}).send(config, data)
    expect(result).toEqual(true)
    expect(axios.post).toHaveBeenCalledTimes(2)

  })

})
