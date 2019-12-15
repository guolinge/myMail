const mongoose = require('mongoose')
const mailInit = require('../utils/sendMail.js')


mongoose.connect('mongodb://localhost/myMail', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connect ok')
  mailInit()
});

module.exports = db