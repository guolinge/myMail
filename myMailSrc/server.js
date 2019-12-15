const express = require('express')
const db = require('./db/connect')
const path = require('path')
var cors = require('cors')

const app = express()

// 引入路由
const mailRouter = require('./router/mailRouter.js')
const fileRouter = require('./router/fileRouter')
const bodyParser = require('body-parser')

// app.use(cors())
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);  //让options尝试请求快速结束
  else
      next();
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/user', userRouter)
app.use('/file', fileRouter)
app.use('/mail', mailRouter)
app.use('/public', express.static(path.join(__dirname, './static')))

app.listen(8081, () => {
  console.log('server start')
})