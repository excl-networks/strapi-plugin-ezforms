const email = require('../server/services/notification-providers/email')

describe('Email Notification Provider', function () {
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
                email: 'test2@gmail.com'
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
  afterAll(async function () {
    jest.clearAllMocks()
  })

  test('should send to all recipients', async function () {

    await email({strapi}).send(config, data)
    expect(strapi.plugins['email'].services.email.send).toHaveBeenCalledTimes(2)
  })

})
