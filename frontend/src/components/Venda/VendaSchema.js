import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const vendaSchema = object({
  id: string(),
  ingressoId: string().required(),
  valor: string().required("É necessário ter um valor."),
  quantidade: string().required("É necessário ter uma quantidade."),
});

export default vendaSchema;
