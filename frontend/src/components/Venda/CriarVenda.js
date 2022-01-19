import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import vendaSchema from "./VendaSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "../Botoes/botoes.css";

import { addVenda } from "../../redux/vendasSlice";
import { selectAllIngressos } from "../../redux/ingressosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarVenda() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ingressos = useSelector(selectAllIngressos);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendaSchema),
  });

  function checaEnvio(venda) {
    dispatch(addVenda(venda));
    navigate("/empresa/vendas");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Venda</h2>
        <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
          <label>
            Selecione um Ingresso
            <select
              className="input-box"
              defaultValue={"1"}
              {...register("ingressoId", { required: true })}
            >
              {ingressos.map((ingresso) => (
                <option value={ingresso.id} key={ingresso.id}>
                  {ingresso.nome}
                </option>
              ))}
            </select>
          </label>
          <label>
            Valor do Ingresso
            <input
              type="number"
              placeholder="100"
              className={
                errors.valor?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("valor", { required: true })}
            />
            <span>{errors.valor?.message}</span>
          </label>
          <label>
            Quantidade de Ingressos
            <input
              type="number"
              placeholder="10"
              className={
                errors.quantidade?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("quantidade", { required: true })}
            />
            <span>{errors.quantidade?.message}</span>
          </label>
          <div className="botoes-container">
            <input
              type="submit"
              value="Criar"
              className="botao botao-sucesso"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default CriarVenda;
