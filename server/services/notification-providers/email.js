'use strict'
let formatData = require('../../utils/formatData')
module.exports = ({strapi}) => ({
    async send(config, data) {
        let recipients = await strapi.query('plugin::ezforms.recipient').findMany()
        //Loop through data and construct message from data object
        let message = formatData(data)
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


