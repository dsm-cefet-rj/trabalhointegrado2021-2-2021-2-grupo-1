import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const eventoSchema = object({
  id: string(),
  usuarioId: string(),
  nome: string().max(80).required("É necessário ter um nome."),
  genero: string().required(),
  endereco: string().max(150).required("É necessário ter um endereço."),
  local: string().max(80).required("É necessário ter um local."),
});

export default eventoSchema;
