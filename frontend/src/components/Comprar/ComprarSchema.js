import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const comprarSchema = object({
  id: number(),
  usuarioId: string(),
  nome: string().max(80).required(),
  cpf: string().required("É necessário ter um CPF.").matches(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/, "CPF inválido."),
});

export default comprarSchema;