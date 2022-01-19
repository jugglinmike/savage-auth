// load the things we need
var mongoose = require('mongoose');

// define the schema for our message model
var messageSchema = mongoose.Schema({
  name: String,
  msg: String,
  thumbUp: Number,
  thumbDown: Number
});

module.exports = mongoose.model('Message', messageSchema);
