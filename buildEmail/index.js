const emailContentType = require('./emailContentType');
const mime = require('./MIME.js');

module.exports = function(dataObject) {
  let emailContent;

  if (!process.argv[2] || process.argv[2] === 'reminder') {
    emailContent = emailContentType.reminder(dataObject.name, dataObject.sessionDateTime);
    return mime(dataObject.email, emailContent);
  }

}