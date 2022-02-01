import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const vendasSchema = object({
  id: number(),
  ingressoId: string().required(),
  valor: string().required("É necessário ter um valor."),
  quantidade: string().required("É necessário ter uma quantidade."),
});

export default vendasSchema;
