import Cabecalho from "../Cabecalho/Cabecalho";
import "../Botoes/botoes.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CriarEvento({ eventos, setEventos }) {
  const navigate = useNavigate();

  const [novoEvento, setNovoEvento] = useState({
    nome: "",
    genero: "",
    cep: 0,
    dataInicio: "",
    dataFim: "",
  });

  function checaMudanca(e) {
    setNovoEvento({
      ...novoEvento,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    setEventos([...eventos, novoEvento]);
    e.preventDefault();
    navigate("/eventos");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Evento</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>Nome do Evento</label>
          <input
            type="text"
            name="nome"
            className="input-box"
            placeholder="Rock in Rio"
            onChange={checaMudanca}
          />
          <label>
            Genero
            <select className="input-box" name="genero" onChange={checaMudanca}>
              <option>Esportes</option>
              <option>Shows</option>
              <option>Família</option>
            </select>
          </label>
          <label>
            CEP
            <input
              type="number"
              placeholder="20270090"
              name="cep"
              className="input-box"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Começo Do Evento
            <input
              type="datetime-local"
              className="input-box"
              name="dataInicio"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Finalização do Evento
            <input
              type="datetime-local"
              className="input-box"
              name="dataFim"
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

export default CriarEvento;
