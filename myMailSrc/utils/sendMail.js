const MailModel = require('../db/model/mailModel')
const nodemailer = require("nodemailer");
const getGapTime = require('./fuckIsoTime')


// 创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",                       // 这个在node_modules 的lib 里面找就可以了
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '1648381450@qq.com', // generated ethereal user
    pass: 'ywisixadregsbadh' // smtp 验证码
  }
});

function send(mailUrl, title, subtitle, textValue) {
  // 邮件信息
  let mailObj = {
    from: '"国林哥" <1648381450@qq.com>', // sender address
    to: mailUrl, // list of receivers
    subject: subtitle, // Subject line
    text: textValue, // plain text body
    // html: "<b>Hello world?</b>" // html body
  }

  return new Promise((resolve, reject) => {
    // 发送邮件
    transporter.sendMail(mailObj, (err, data) => {
      if (err) {
        reject()
      } else {
        resolve()
      }
    });
  })
}
//   name            : { type: String, required: false },
//   toMailUrl       : { type: String, required: true },
//   timeStick       : { type: String, required: true },
//   title           : { type: String, required: true },
//   subtitle        : { type: String, required: true },
//   textValue       : { type: String, required: true },
//   count           : { type: Number, default: 1, required: false },
function sayHelloToEveryBody () {
  MailModel.find({}, (err, result) => {
    if (result.length === 0) return
    for (let mailer of result) {
      let { toMailUrl, title, subtitle, textValue, timeStick, count, _id } = mailer
      if (getGapTime(timeStick) < 60 && count > 0) {
        console.log(mailer)
        send(toMailUrl, title, subtitle, textValue)
        mailer.count--
        mailer.save((err, result) => {
          if(err) {
            console.log(err);
          } else {
            console.log('Update data success!');
          }
        })
      }
    }
  })
}

let init = function() {
  console.log('开始检测数据库')
  setInterval(() => {
    sayHelloToEveryBody()
  }, 30000)
}

module.exports = init


