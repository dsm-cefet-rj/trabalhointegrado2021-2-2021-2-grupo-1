const mongoose = require('mongoose');
const { Schema } = mongoose;

const comprasSchema = new Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  endereco: { type: String, required: true },
  local: { type: String, required: true },
})

comprasSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Compras', comprasSchema);