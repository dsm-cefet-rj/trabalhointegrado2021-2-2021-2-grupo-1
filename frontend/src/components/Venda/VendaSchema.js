import { string, object, setLocale, number } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const vendaSchema = object({
  id: string(),
  usuarioId: string(),
  ingressoId: string().required(),
  valor: number().min(100).max(3000).required("É necessário ter um valor."),
  quantidade: number().min(10).max(10000).required("É necessário ter uma quantidade."),
});

export default vendaSchema;
