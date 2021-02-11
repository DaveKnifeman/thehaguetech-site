const sgMail = require('@sendgrid/mail');

const sendMail = function(from) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.CONTACT_MAIL,
    from: 'website@thehaguetech.com',
    subject: 'Email from thehaguetech.com',
    html: `${from.name} (${from.email}) sent the following message:<br /><hr /><br />` +
          from.message.replace("\n", '<br/>') + "<br /><br />"
  };
  sgMail.send(msg).then((result) => {
    console.log('Mail sent');
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = { sendMail }
