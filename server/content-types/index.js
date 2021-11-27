'use strict';

const submission = require('./submission');
const recipient = require('./recipient');

module.exports = {
  submission: { schema: submission },
  recipient: { schema: recipient },
};
