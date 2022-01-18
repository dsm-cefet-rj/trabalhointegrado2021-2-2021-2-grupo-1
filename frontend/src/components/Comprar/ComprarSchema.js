import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const comprarSchema = object({
  nome: string().required(),
  id: number(),
  cpf: number().required(),
});

export default comprarSchema;