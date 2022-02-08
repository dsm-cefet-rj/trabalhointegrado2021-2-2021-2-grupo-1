const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  tipo: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: String,
})

usuariosSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

usuariosSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Usuario', usuariosSchema);