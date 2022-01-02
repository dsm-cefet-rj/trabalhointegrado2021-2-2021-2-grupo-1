import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Botoes/botoes.css";

import { addEvento } from "../../redux/eventosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarEvento() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const evento = useSelector((state) => state.eventos);

  const maiorId = evento.reduce((previousValue, currentValue) => {
    return currentValue.id > previousValue ? currentValue.id : previousValue;
  }, 0);
  const eventoId = (Number(maiorId) + Number(1)).toString();

  const [novoEvento, setNovoEvento] = useState({
    id: eventoId,
    nome: "",
    imagem: "",
    genero: "",
    cep: "",
    local: "",
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
    dispatch(addEvento(novoEvento));
    e.preventDefault();
    navigate("/empresa/eventos");
  }

  function pegaImagem(imagem) {
    setNovoEvento({
      ...novoEvento,
      imagem: URL.createObjectURL(imagem),
    });
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Evento</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>
            Nome do Evento
            <input
              type="text"
              name="nome"
              className="input-box"
              placeholder="Rock in Rio"
              onChange={checaMudanca}
              required
              autoFocus
            />
          </label>
          <label>
            Imagem do evento
            <input
              type="file"
              name="imagem"
              className="input-box"
              onChange={(e) => pegaImagem(e.target.files[0])}
            />
          </label>
          <label>
            Genero
            <select
              className="input-box"
              name="genero"
              onChange={checaMudanca}
              required
            >
              <option value="esporte">Esportes</option>
              <option value="musica">Música</option>
              <option value="familia">Família</option>
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
              required
            />
          </label>
          <label>
            Local do Evento
            <input
              type="text"
              placeholder="Maracanã"
              name="local"
              className="input-box"
              onChange={checaMudanca}
              required
            />
          </label>
          <label>
            Começo Do Evento
            <input
              type="datetime-local"
              className="input-box"
              name="dataInicio"
              onChange={checaMudanca}
              required
            />
          </label>
          <label>
            Finalização do Evento
            <input
              type="datetime-local"
              className="input-box"
              name="dataFim"
              onChange={checaMudanca}
              required
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
