"use strict";

let formatData = require("../../utils/formatData");

module.exports = ({ strapi }) => ({
  async send(config, data) {
    let recipients = await strapi.query("plugin::ezforms.recipient").findMany();
    let subject =
      data?.notificationData?.subject ||
      config?.subject ||
      "New Contact Form Submission";
    let message = data?.notificationData?.message || formatData(data?.formData);

    // loop through the recipients and send an email
    for (let recipient of recipients) {
      try {
        await strapi.plugins["email"].services.email.send({
          to: recipient.email,
          from: config.from,
          subject: subject,
          text: message,
        });
      } catch (e) {
        strapi.log.error(e);
      }
    }
  },
});
