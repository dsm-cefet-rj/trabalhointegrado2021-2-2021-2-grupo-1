import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const eventoSchema = object({
  id: number(),
  nome: string().required(),
  genero: string().required(),
  endereco: string().required(),
  dataInicio: string().required(),
  dataFim: string().required(),
});

export default eventoSchema;
