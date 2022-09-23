module.exports = ({strapi}) => ({
  formatData(data) {
    let message = ''
    //Loop through data and construct message from data object
    for (let key in data) {
      if (typeof data[key] === 'object') {
        message += `${key}: ${JSON.stringify(data[key], null, 2)}\n`
      } else {
        message += `${key}: ${data[key]}\n`
      }
    }
    return message
  }
})

