module.exports = function formatData(data) {
  let message = "";

  if (typeof data === "string") {
    message = data;
  } else {
    // Loop through data and construct message from data object
    for (let key in data) {
      if (typeof data[key] === "object") {
        message += `${key}: ${JSON.stringify(data[key], null, 2)}\n`;
      } else {
        message += `${key}: ${data[key]}\n`;
      }
    }
  }

  return message;
};
