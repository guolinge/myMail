const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name     : { type: String, required: false },
  toMail   : { type: String, required: true },
  time     : { type: Array, required: true },
  text     : { type: String, required: true },
  count    : { type: Number, default: 1, required: false },
});

var User = mongoose.model('userMail', userSchema);

module.exports = User