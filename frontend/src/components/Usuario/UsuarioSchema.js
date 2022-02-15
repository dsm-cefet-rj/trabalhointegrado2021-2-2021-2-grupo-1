import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const criarUsuarioSchema = object({
  id: string(),
  username: string().required("É necessário ter um nome."),
  tipo: string().required("É necessário ter um tipo de usuário."),
  password: string().required("É necessário ter uma senha.")
});

const entrarUsuarioSchema = object({
  id: string(),
  username: string().required("É necessário ter um nome."),
  password: string().required("É necessário ter uma senha."),
});

export { criarUsuarioSchema, entrarUsuarioSchema };
