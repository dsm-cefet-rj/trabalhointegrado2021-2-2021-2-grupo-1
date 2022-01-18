import "./comprar.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import comprarSchema from "./ComprarSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { addCompra, removeTudoMeuCarrinho } from "../../redux/comprarSlice";
import { vendaRealizada } from "../../redux/vendasSlice";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function Comprar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const meuCarrinho = useSelector((state) => state.comprar.meuCarrinho);
  const compras = useSelector((state) => state.comprar.compras);

  const maiorId = compras.reduce((previousValue, currentValue) => {
    return currentValue.id > previousValue ? currentValue.id : previousValue;
  }, 0);
  const compraId = (Number(maiorId) + Number(1)).toString();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(compraSchema),
  });

  const valorTotalCarrinho = meuCarrinho.reduce(
    (previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue.valor);
    },
    0
  );

  function checaMudanca(e) {
    setNovaCompra({
      ...novaCompra,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    meuCarrinho.forEach((e) => {
      dispatch(
        addCompra({
          ...novaCompra,
          vendaId: e.id,
        })
      );

      dispatch(vendaRealizada(e.id));
    });
    navigate("/meus-ingressos");
    dispatch(removeTudoMeuCarrinho());
    e.preventDefault();
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <>
          <h2 className="subtitulo">
            Meu carrinho <span>{meuCarrinho.length}</span>
          </h2>
          {meuCarrinho.length > 0 ? (
            meuCarrinho.map((carrinho) => (
              <Ingresso
                tipo={carrinho}
                vendaMeuCarrinhoOuCompra="carrinho"
                key={carrinho.id}
              />
            ))
          ) : (
            <p>Seu carrinho está vazio! :(</p>
          )}
          {meuCarrinho.length > 0 ? <p>Total: {valorTotalCarrinho}</p> : null}
        </>
        <h2 className="subtitulo">Finalizar Compra</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>CPF</label>
          <input
            type="number"
               className={
                   errors.cpf?.message ? "input-box input-box-error" : "input-box"
               }
              defaultValue={comprasForm.cpf}
              {...register("cpf", { required: true })}
          />
          <label>
            Nome do Cartão de Crédito
            <input
              type="text"
              className={
                   errors.nome?.message ? "input-box input-box-error" : "input-box"
               }
              defaultValue={comprasForm.nome}
              {...register("nome", { required: true })}
            />
          </label>
          <label>
            Número do Cartão de Crédito
            <input
              type="number"
               className={
                   errors.num?.message ? "input-box input-box-error" : "input-box"
               }
              defaultValue={comprasForm.num}
              {...register("num", { required: true })}
          </label>
          <label>
            Data de Validade
            <input
              type="month"
               className={
                   errors.data?.message ? "input-box input-box-error" : "input-box"
               }
              defaultValue={comprasForm.data}
              {...register("data", { required: true })}
            />
          </label>
          <label>
            Código de Segurança
            <input
              type="number"
               className={
                   errors.cod?.message ? "input-box input-box-error" : "input-box"
               }
              defaultValue={comprasForm.cod}
              {...register("cod", { required: true })}
            />
          </label>
          <div className="botoes-container">
            <input type="submit" value="Comprar" className="botao" />
          </div>
        </form>
      </main>
    </>
  );
}

export default Comprar;
