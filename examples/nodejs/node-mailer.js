const nodemailer = require("nodemailer");

const email = {
  "host": "smtp.mailtrap.io",
  "port": 2525,
  "secure": false,
  "auth": {
    "user": "82e975b2fa894a", // generated ethereal user
    "pass": "ce751d6a98d2e7", // generated ethereal password
  }
}

const send = async (data) => {
  nodemailer.createTransport(email).sendMail(data, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

const content = {
  from: "seungwon.go@gmail.com",
  to: "a87bf09ed6-b7c202@inbox.mailtrap.io",
  subject: "개발자의 품격",
  // text: "개발자의 품격 - nodemailer를 이용한 이메일 보내기 구현"
  html: "<h2>개발자의 품격 - nodemailer를 이용한 이메일 보내기 구현</h2>"
};

send(content);