'use strict'
module.exports = ({strapi}) => ({
  async send(config, formName, data) {
    let recipients = await strapi.query('plugin::ezforms.recipient').findMany()
    //Loop through data and construct message from data object
    let formattedData = strapi.plugin('ezforms').service('formatData').formatData(data)
    let message = formName !== "form" ? `${formName} \n ${formattedData}` : formattedData
    //loop through the recipients and send an email
    for (let recipient of recipients) {
      try {
        await strapi.plugins['email'].services.email.send({
          to: recipient.email,
          from: config.from,
          subject: config.subject ? config.subject : 'New Contact Form Submission',
          text: message,
        })
      } catch (e) {
        strapi.log.error(e)
      }
    }

  }


})


