import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const ingressoSchema = object({
  id: string(),
  eventoId: string().required(),
  nome: string().required("É necessário ter um nome."),
  horario: string().required("É necessário ter um horário.").matches(/^[0-9]{2}:[0-9]{2}$/, "O horário deve ser no formato hh:mm"),
  data: string().required("É necessário ter uma data.").matches(/^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$/, "A data deve ser no formato dd/mm/aa"),
  descricao: string().required("É necessário ter uma descrição."),
});

export default ingressoSchema;
