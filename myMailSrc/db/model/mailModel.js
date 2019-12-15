const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name            : { type: String, required: false },
  toMailUrl       : { type: String, required: true },
  timeStick       : { type: String, required: true },
  title           : { type: String, required: false },
  subtitle        : { type: String, required: false },
  textValue       : { type: String, required: true },
  count           : { type: Number, default: 1, required: false },
});

var userMail = mongoose.model('userMail', userSchema);

module.exports = userMail