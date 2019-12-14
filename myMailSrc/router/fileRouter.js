const express = require('express')
const router = express.Router()
const multer = require('multer')

let storage = multer.diskStorage({
  // 设置上传后文件路径，uploads 文件夹会自动创建
  destination: function (req, file, cb) {
    cb(null, './static/img')
  },

  // 给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    // 给图片加上时间戳格式防止重名
    // 比如把 abc.jpg 图片分割为数组[abc, jpg]， 然后用数组长度  -1 来获得后缀名
    cb(null, fileFormat[0] + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})

let upload = multer({
  storage: storage
})

router.post('/upload', upload.single('hehe'), (req, res) => {

  // hehe 指的是要上传图片的key 值
  /**
   * 利用 post 进行请求， 数据格式为 form-data
   * { 
   *   hehe: 图片数据
   *  }
   */
  console.log(req.file)
  let { size, mimetype, path, filename } = req.file
  let types = ['jpg', 'jpeg', 'png', 'gif']
  let tmpType = mimetype.split('/')[1]
  if (size > 500000) {
    return res.send({ err: -1, msg: '尺寸过大 ' })
  } else if (types.indexOf(tmpType) === -1) {
    return res.send({ err: -2, msg: '格式错误' })
  } else {
    res.send({ err: 0, url: `/public/img/${filename}` })
  }
})

module.exports = router