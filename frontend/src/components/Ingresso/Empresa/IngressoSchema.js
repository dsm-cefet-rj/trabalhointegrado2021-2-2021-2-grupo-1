import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const ingressoSchema = object({
  id: number(),
  eventoId: number() . required(),
  nome: string().required(),
  descricao: string().required(),
});

export default ingressoSchema;