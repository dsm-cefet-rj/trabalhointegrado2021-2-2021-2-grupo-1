const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  tipo: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: String,
})

usersSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

usersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', usersSchema);