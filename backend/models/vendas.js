const mongoose = require('mongoose');
const { Schema } = mongoose;

const vendasSchema = new Schema({
  ingressoId: { type: String, required: true },
  revenda: { type: Boolean, required: true },
  valor: { type: Number, required: true },
  quantidade: { type: Number, required: true }
})

vendasSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Vendas', vendasSchema);
