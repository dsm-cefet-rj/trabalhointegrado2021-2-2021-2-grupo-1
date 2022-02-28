// const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
// const Schema = mongoose.Schema;

// const chatSchema = new Schema({
//   tipo: { type: String, required: true },
//   username: { type: String, required: true },
//   password: String,
//   mensagem: String
  
// });

// chatSchema.method('toJSON', function () {
//   const { __v, _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// });

// chatSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model('chat', chatSchema);
