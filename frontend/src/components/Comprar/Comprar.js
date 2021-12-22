import "./comprar.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";
import "../Botoes/Botoes.css";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Comprar({meuCarrinho,setCompras}) {

  const navigate = useNavigate();

   const [Compra, setNovaCompra] = useState({
    nomeEvento: "",
    eventoCEP: 0,
    lugarIngresso:"",
    dataEvento: "",
    precoIngresso: "",
  });

  function checaMudanca(e) {
    setNovaCompra({
      ...Compra,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    setCompras([...meuCarrinho, Compra]);
    e.preventDefault();
    navigate("/ListarCompras");
  }
  
  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <>
          <h2 className="subtitulo">
            Meu carrinho <span>1</span>
          </h2>
          <Ingresso />
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
            onChange={checkMudanca}
          />
          <label>
            Nome do Cartão de Crédito
            <input
              type="text"
              name="nome"
              placeholder="Alfredo Alberto de Souza"
              className="input-box"
              onChange={checkMudanca}
            />
          </label>
          <label>
            Número do Cartão de Crédito
            <input
              type="number"
              name="num"
              placeholder="3287888787382188"
              className="input-box"
              onChange={checkMudanca}
            />
          </label>
          <label>
            Data de Validade
            <input
              type="month"
              name="dataValid"
              placeholder="março de 2024"
              className="input-box"
              onChange={checkMudanca}
            />
          </label>
          <label>
            Código de Segurança
            <input 
              type="number" 
              name="cod"
              placeholder="999" 
              className="input-box"
              onChange={checkMudanca}
            />
          </label>
            <div>
               <input
                  type="submit"
                  value="Comprar"
                  className="botao-compra"
              />                 
            </div>  
        </form>
      </main>
    </>
  );
}

export default Comprar;
