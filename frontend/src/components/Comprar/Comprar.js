import "./comprar.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";
//import "../Botoes/Botoes.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCompra } from "../../redux/ComprarSlice.js";



function Comprar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compra = useSelector((state)=>state.Comprar);
  
  function checaMudanca(e) {}

  function checaEnvio(e) {
    dispatch(addCompra(meuCarrinho));
    e.preventDefault();
    navigate("/meus-ingressos");
 }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <>
          <h2 className="subtitulo">
            Meu carrinho <span>{meuCarrinho.length}</span>
          </h2>
          {meuCarrinho.map((ingresso, i) => (
            <Ingresso ingressos={ingresso} key={i} />
          ))}
          <p className="total-compra">Total: R$ 100,00</p>
        </>
        <h2 className="subtitulo">Finalizar Compra</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>CPF</label>
          <input
            type="number"
            name="cpf"
            placeholder="32878887873"
            className="input-box"
            onChange={checaMudanca}
          />
          <label>
            Nome do Cartão de Crédito
            <input
              type="text"
              name="nome"
              placeholder="Alfredo Alberto de Souza"
              className="input-box"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Número do Cartão de Crédito
            <input
              type="number"
              name="num"
              placeholder="3287888787382188"
              className="input-box"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Data de Validade
            <input
              type="month"
              name="dataValid"
              placeholder="março de 2024"
              className="input-box"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Código de Segurança
            <input
              type="number"
              name="cod"
              placeholder="999"
              className="input-box"
              onChange={checaMudanca}
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
