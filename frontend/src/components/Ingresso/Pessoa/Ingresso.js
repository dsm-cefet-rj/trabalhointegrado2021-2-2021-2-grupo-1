import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "../ingresso.css";
import "../../Botoes/botoes.css";

import {
  addMeuCarrinho,
  removeItemMeuCarrinho,
  deleteCompra,
} from "../../../redux/comprarSlice";

import { addVenda } from "../../../redux/vendasSlice";

function Ingresso({ tipo, vendaMeuCarrinhoOuCompra }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vendas = useSelector((state) => state.vendas);
  const state = useSelector((state) => {
    if (
      vendaMeuCarrinhoOuCompra === "venda" ||
      vendaMeuCarrinhoOuCompra === "revenda"
    ) {
      const ingresso = state.ingressos.find(
        (ingresso) => ingresso.id === tipo.ingressoId
      );
      const evento = state.eventos.find(
        (evento) => evento.id === ingresso.eventoId
      );

      return {
        ingresso,
        evento,
      };
    } else if (vendaMeuCarrinhoOuCompra === "carrinho") {
      const ingresso = state.ingressos.find(
        (ingresso) => ingresso.id === tipo.ingressoId
      );
      const evento = state.eventos.find(
        (evento) => evento.id === ingresso.eventoId
      );

      return {
        ingresso,
        evento,
      };
    } else if (vendaMeuCarrinhoOuCompra === "compra") {
      const venda = state.vendas.find((venda) => venda.id === tipo.vendaId);

      const ingresso = state.ingressos.find(
        (ingresso) => ingresso.id === venda.ingressoId
      );
      const evento = state.eventos.find(
        (evento) => evento.id === ingresso.eventoId
      );

      return {
        venda,
        ingresso,
        evento,
      };
    }
  });

  const [enderecoEvento, setEnderecoEvento] = useState({});

  useEffect(() => {
    async function getEnderecoEvento() {
      const url = `https://viacep.com.br/ws/${state.evento.cep}/json/`;
      const res = await axios.get(url);
      const { logradouro, localidade, bairro } = await res.data;

      setEnderecoEvento({ logradouro, localidade, bairro });
    }

    getEnderecoEvento();
  }, [state.evento]);

  function colocaIngressoNoCarrinho() {
    navigate("/carrinho");
    dispatch(addMeuCarrinho(tipo));
  }

  function tirarIngressoDoCarrinho() {
    dispatch(removeItemMeuCarrinho(tipo.id));
  }

  function formataEndereco() {
    return `${enderecoEvento.logradouro}, ${enderecoEvento.localidade} - ${enderecoEvento.bairro}`;
  }

  function formataData(data) {
    const ano = /\d{1,4}/.exec(data);
    const mes = /(?<=-)\d{1,2}/.exec(data);
    const dia = /(?<=-)\d{1,2}(?=T)/.exec(data);
    const horario = /(?<=T).+/.exec(data);

    return `${dia}/${mes}/${ano} ${horario}`;
  }

  function revender() {
    const maiorId = vendas.reduce((previousValue, currentValue) => {
      return currentValue.id > previousValue ? currentValue.id : previousValue;
    }, 0);
    const vendaId = (Number(maiorId) + Number(1)).toString();

    dispatch(
      addVenda({
        ...state.venda,
        id: vendaId,
        valor: state.venda.valor - 20,
        revenda: true,
        quantidade: 1,
      })
    );

    dispatch(deleteCompra(tipo.id));
  }

  return (
    <div className="ingresso-container">
      <h2 className="subtitulo evento-nome">{state.evento.nome}</h2>
      <img
        src={state.evento.imagem}
        alt="imagem do ingresso"
        className="ingresso-imagem"
      />
      <div className="ingresso-detalhe">
        <ul>
          <li className="ingresso-detalhe-item">{state.ingresso.nome}</li>
          <li className="ingresso-detalhe-item">{formataEndereco()}</li>
          <li className="ingresso-detalhe-item">{state.evento.local}</li>
          <li className="ingresso-detalhe-item">
            {formataData(state.evento.dataInicio)}
          </li>
          {vendaMeuCarrinhoOuCompra === "venda" && (
            <>
              <li className="ingresso-detalhe-item">R$ {tipo.valor}</li>
              <li className="ingresso-detalhe-item">
                Quantidade: {tipo.quantidade}
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="botoes-container">
        {vendaMeuCarrinhoOuCompra === "venda" ||
        vendaMeuCarrinhoOuCompra === "revenda" ? (
          <button
            className="botao"
            type="button"
            onClick={colocaIngressoNoCarrinho}
          >
            Comprar
          </button>
        ) : vendaMeuCarrinhoOuCompra === "compra" ? (
          <>
            <Link to={`/meu-ingresso/${tipo.id}`} className="botao">
              Editar
            </Link>
            <Link to={`/`} className="botao">
              Gerar
            </Link>
            <Link to={`/revendas`} className="botao" onClick={revender}>
              Revender
            </Link>
          </>
        ) : (
          vendaMeuCarrinhoOuCompra === "carrinho" && (
            <button
              type="button"
              onClick={tirarIngressoDoCarrinho}
              className="botao botao-perigo"
            >
              Remover
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Ingresso;
