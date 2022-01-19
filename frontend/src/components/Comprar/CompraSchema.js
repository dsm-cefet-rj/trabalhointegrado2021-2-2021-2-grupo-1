import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

const compraSchema = object({
  id: number(),
  cpf: string().required("É necessário ter um CPF.").matches(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/, "CPF inválido."),
  nome_do_cartao: string().required("É necessário ter o nome do dono do cartão."),
  numero_do_cartao: string().required("É necessário ter o número do cartão.").matches(/[0-9]{16}/, "Número do cartão inválido."),
  data_de_validade: string().required("É necessário ter a data de validade do cartão.").matches(/[0-9]{2}\/[0-9]{2}/, "Data de validade inválida."),
  codigo_de_seguranca: string().required("É necessário ter o código de segurança do cartão.").matches(/[0-9]{3}/, "Código de segurança inválido."),
});

const editarCompraSchema = object({
  id: number(),
  cpf: string().required("É necessário ter um CPF.").matches(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/, "CPF inválido.")
})

export {compraSchema, editarCompraSchema};