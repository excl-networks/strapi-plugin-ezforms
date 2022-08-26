const recaptcha = require('../server/services/captcha-providers/recaptcha')
const axios = require('axios')


describe('Recaptcha Captcha Provider', function () {
  let strapi

  beforeEach(async function () {
    strapi = {
      config: {
        get: jest.fn()
      },
      log: {
        error: jest.fn()
      }
    }

  })

  test('should return error if no token is provided', async function () {
    let result = await recaptcha({strapi}).validate()

    expect(result).toEqual({
      valid: false,
      message: 'Missing token',
      code: 400
    })

  })
  test('should return error if captcha post failed', async function () {

    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error('Unable to verify captcha'))

    let result = await recaptcha({strapi}).validate('fakeToken')

    await expect(result).toEqual({
      valid: false,
      message: 'Unable to verify captcha',
      code: 500
    })

  })

  test('should return error if captcha is unsuccessful', async function () {

    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: {
        success: false,
      }
    })

    let result = await recaptcha({strapi}).validate('fakeToken')

    await expect(result).toEqual({
      valid: false,
      message: 'Unable to verify captcha',
      code: 500
    })

  })
  test('should reject due to low score', async function () {

    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: {
        success: true,
        score: 0.4,
      }
    })
    strapi.config.get = jest.fn(() => {
      return .5
    })

    let result = await recaptcha({strapi}).validate('fakeToken')

    await expect(result).toEqual({

      valid: false,
      message: 'Score Not High Enough',
      code: 400

    })

  })
  test('should be valid captcha', async function () {

    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      data: {
        success: true,
        score: 0.8,
      }
    })
    strapi.config.get = jest.fn(() => {
      return .5
    })

    let result = await recaptcha({strapi}).validate('fakeToken')

    await expect(result).toEqual({
      score: .8,
      valid: true
    })

  })

})
