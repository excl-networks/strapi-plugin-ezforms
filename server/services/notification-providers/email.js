'use strict';
module.exports = ({strapi}) => ({
  async send(config, data){
    let recipients = await strapi.query('plugin::ezforms.recipient').findMany();
    let message = ""
    //Loop through data and construct message from data object
    for(let key in data){
      message += `${key}: ${data[key]}\n`
    }
    //loop through the recipients and send an email
    for(let recipient of recipients){
      try{
        await strapi.plugins['email'].services.email.send({
          to: recipient.email,
          from: config.from,
          subject: 'New Contact Form Submission',
          text: message,
        });
      } catch (e) {
        strapi.log.error(e)
      }
    }

  }


});
