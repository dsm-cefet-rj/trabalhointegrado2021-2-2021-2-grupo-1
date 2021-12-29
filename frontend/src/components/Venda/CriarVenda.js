import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Botoes/botoes.css";

import { addVenda } from "../../redux/eventosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarEvento() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const evento = useSelector((state) => state.vendas);

  const maiorId = evento.reduce((previousValue, currentValue) => {
    return currentValue.id > previousValue ? currentValue.id : previousValue;
  }, 0);
  const eventoId = (Number(maiorId) + Number(1)).toString();

  const [novaVenda, setNovaVenda] = useState({
    nomeEvento: "",
    idIngresso: "",
    genero: "",
    valor: "",
    quantidade: "",
  });

  function checaMudanca(e) {
    setNovaVenda({
      ...novaVenda,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    setVendas([...vendas, novaVenda]);
    e.preventDefault();
    navigate("/vendas");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Venda</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>Nome do Evento</label>
          <input
            type="text"
            name="nomeEvento"
            className="input-box"
            placeholder="Rock in Rio"
            onChange={checaMudanca}
          />
          <label>
            Identificação do Ingresso
            <select
              className="input-box"
              name="idIngresso"
              onChange={checaMudanca}
            >
              <option>Rock in Rio 2021 - Dia 5</option>
              <option>Rock in Rio 2021 - Dia 7</option>
            </select>
          </label>
          <label>
            Genero
            <select className="input-box" name="genero" onChange={checaMudanca}>
              <option>Esportes</option>
              <option>Shows</option>
              <option>Família</option>
            </select>
          </label>
          <label>
            Valor do Ingresso
            <input
              type="number"
              placeholder="100"
              className="input-box"
              name="valor"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Quantidade de Ingressos
            <input
              type="number"
              placeholder="2"
              className="input-box"
              name="quantidade"
              onChange={checaMudanca}
            />
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
