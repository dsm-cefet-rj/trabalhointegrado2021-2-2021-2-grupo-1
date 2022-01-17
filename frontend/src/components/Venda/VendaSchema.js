import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const vendaSchema = object({
  nome: string().required(),
  id: number(),
  valor: number().required(),
  quantidade: number().requeired(),
});

export default vendaSchema;