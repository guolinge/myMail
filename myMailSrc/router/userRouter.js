const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
// const myMail = require('../utils/mail')

router.post('/sendMail', (req, res) => {
  let { toMail, year, month, day, hour, minute, text } = req.body

  if (toMail && year && month && day && text) {
    User.insertMany({
      us: us,
      ps: ps
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

module.exports = router