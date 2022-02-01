const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingressosSchema = new Schema({
    eventoId: { type: String, required: true },
    nome: { type: String, required: true },
    horario: { type: String, required: true },
    data: { type: String, required: true },
    descricao: { type: String, required: true },
})

ingressosSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('Ingressos', ingressosSchema);
