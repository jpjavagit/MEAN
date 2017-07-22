mongoose = require('mongoose');

module.exports = function(){

  var schema = mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      reqired: true
    },
    description: {
      type: String,
      reqired: true
    }
  });
  return mongoose.model('citie',schema);
};
