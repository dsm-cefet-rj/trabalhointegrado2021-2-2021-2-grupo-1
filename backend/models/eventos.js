const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventosSchema = new Schema({
  usuarioId: { type: String, required: true },
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  endereco: { type: String, required: true },
  local: { type: String, required: true },
})

eventosSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Eventos', eventosSchema);
