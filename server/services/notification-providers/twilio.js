'use strict';
let twilio = require('twilio');

module.exports = ({strapi}) => ({
  async send(config, data) {
    console.log("starting sending")
    let client = new twilio(config.accountSid, config.authToken);
    let recipients = await strapi.query('plugin::ezforms.recipient').findMany();
    let message = "New Form Submission: " + '\n'
    //Loop through data and construct message from data object
    for (let key in data) {
      message += `${key}: ${data[key]}\n`
    }
    //loop through the recipients and send an email
    console.log("Sending Text")
    for (let recipient of recipients) {
      if (!recipient.number) {
        continue;
      }
      try {
        console.log("About To Send")
        await client.messages.create({
          body: message,
          to: recipient.number,
          from: config.from
        });
      } catch (e) {
        strapi.log.error(e)
      }
    }

  }


});
