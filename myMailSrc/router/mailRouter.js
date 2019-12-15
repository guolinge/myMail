const express = require('express')
const router = express.Router()
const MailModel = require('../db/model/mailModel')
// const myMail = require('../utils/mail')
const getGapTime = require('../utils/fuckIsoTime')

router.post('/sendMail', (req, res) => {
  let { date, time, textareValue, title, subtitle, mailUrl } = req.body

  // 妈的这个ISO 时间戳只有一个方向的转换，只能把客户端和服务端用同一种办法来处理了
  let gapTime = getGapTime(time)

  if (time && textareValue && mailUrl ) {
    MailModel.insertMany({
      name            : '',
      toMailUrl       : mailUrl,
      timeStick       : time || '',
      title           : title || '',
      subtitle        : subtitle || '',
      textValue       : textareValue,
    })
    .then(() => {
      res.send({ err: 0, msg: '预约邮件成功' })
    })
    .catch((err) => {
      res.send({ err: -2, msg: '预约邮件失败' })
    })
  } else {
    res.send({ err: -1, msg: '传入数据有误' })
  }
})

router.get('/showMail', (req, res) => {
  if (req.query.name !== 'guolinge') {
    res.send([])
    return
  } 
  MailModel.find({}, (err, result) => {
    res.send(result)
  })
})

module.exports = router