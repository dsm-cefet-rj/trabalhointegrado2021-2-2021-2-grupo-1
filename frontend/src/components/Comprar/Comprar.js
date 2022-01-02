import "./comprar.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addCompra, removeTudoMeuCarrinho } from "../../redux/comprarSlice";

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

  const [novaCompra, setNovaCompra] = useState({
    id: compraId,
    vendaId: "",
    cpf: "",
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
            name="cpf"
            placeholder="32878887873"
            onChange={checaMudanca}
            className="input-box"
            required
          />
          <label>
            Nome do Cartão de Crédito
            <input
              type="text"
              name="nome"
              placeholder="Alfredo Alberto de Souza"
              className="input-box"
              required
            />
          </label>
          <label>
            Número do Cartão de Crédito
            <input
              type="number"
              name="num"
              placeholder="3287888787382188"
              className="input-box"
              required
            />
          </label>
          <label>
            Data de Validade
            <input
              type="month"
              name="dataValid"
              placeholder="março de 2024"
              className="input-box"
              required
            />
          </label>
          <label>
            Código de Segurança
            <input
              type="number"
              name="cod"
              placeholder="999"
              className="input-box"
              required
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
