import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import eventoSchema from "./EventoSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "../Botoes/botoes.css";

import { addVenda } from "../../redux/vendasSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarVenda() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vendas = useSelector((state) => state.vendas);
  const ingressos = useSelector((state) => state.ingressos);

  const maiorId =
    vendas.length > 0
      ? vendas.reduce((previousValue, currentValue) => {
          return currentValue.id > previousValue
            ? currentValue.id
            : previousValue;
        }, 0)
      : 1;
  const vendaId = maiorId === 1 ? 1 : (Number(maiorId) + Number(1)).toString();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendaSchema),
  });

  function checaEnvio(e) {
    dispatch(addVenda(venda));
    navigate("/empresa/vendas");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Venda</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>
            Nome do Ingresso
            <select
              className="input-box"
              name="ingressoId"
            >
              {ingressos.map((ingresso) => (
                <option key={ingresso.id} value={ingresso.id}>
                  {ingresso.nome}
                </option>
              ))}
            </select>
            defaultValue={vendaForm.nome}
            {...register("nome", { required: true })}
          </label>
          <label>
            Valor do Ingresso
            <input
              type="number"
              placeholder="100"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              name="valor"
              defaultValue={vendaForm.valor}
              {...register("valor", { required: true })}
            />
            <span>{errors.valor?.message}</span>
          </label>
          <label>
            Quantidade de Ingressos
            <input
              type="number"
              placeholder="2"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              name="quantidade"
              defaultValue={vendaForm.quantidade}
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
