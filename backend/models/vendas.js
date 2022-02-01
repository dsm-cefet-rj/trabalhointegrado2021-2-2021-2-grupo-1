const mongoose = require('mongoose');
const { Schema } = mongoose;

const vendasSchema = new Schema({
  nome: { type: String, required: true },
  ingresso: { type: String, required: true },
  valor: { type: String, required: true },
  quantidade: { type: String, required: true },
})

vendasSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Vendas', vendasSchema);