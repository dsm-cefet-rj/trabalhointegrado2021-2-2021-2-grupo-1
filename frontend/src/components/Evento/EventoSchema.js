import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const eventoSchema = object({
  id: string(),
  nome: string().required("É necessário ter um nome."),
  genero: string().required(),
  endereco: string().required("É necessário ter um endereço."),
  local: string().required("É necessário ter um local."),
});

export default eventoSchema;
