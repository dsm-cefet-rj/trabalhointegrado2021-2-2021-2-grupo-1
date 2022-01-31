const mongoose = require('mongoose');
const { Schema } = mongoose;

const comprasSchema = new Schema({
  VendaId: { type: String, required: true },
  cpf: { type: String, required: true },
})

comprasSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Compras', comprasSchema);
