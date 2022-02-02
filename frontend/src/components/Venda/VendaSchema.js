import { string, object, setLocale, number } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const vendaSchema = object({
  id: string(),
  ingressoId: string().required(),
  valor: number().required("É necessário ter um valor."),
  quantidade: number().required("É necessário ter uma quantidade."),
});

export default vendaSchema;
