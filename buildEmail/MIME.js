const Base64 = require('js-base64').Base64;
const MimeBuilder = require('emailjs-mime-builder').default;

module.exports = function(emailAddress, emailContent) {
  const mimeBuild = new MimeBuilder('text/html');
  let mimeEmail;

  mimeBuild.addHeader({
    to: `${emailAddress}`,
    cc: "<Central Support Email Here>",
    subject: `${emailContent.subject}`
  });

  mimeBuild.setContent(`${emailContent.body}`);

  mimeEmail = mimeBuild.build();
  mimeEmail = Base64.encodeURI(mimeEmail);

  return mimeEmail;
}

  