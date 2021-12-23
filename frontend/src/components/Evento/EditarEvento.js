import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { editEvento, deleteEvento } from "../../redux/eventosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function EditarEvento() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const evento = useSelector((state) => state.eventos.find((e) => e.id === id));

  const [eventoEditado, setEventoEditado] = useState({
    id: evento.id,
    nome: evento.nome,
    genero: evento.genero,
    cep: evento.cep,
    dataInicio: evento.dataInicio,
    dataFim: evento.dataFim,
  });

  function checaMudanca(e) {
    setEventoEditado({
      ...eventoEditado,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    dispatch(editEvento(eventoEditado));
    e.preventDefault();
    navigate("/empresa/eventos");
  }

  function deletaEvento(e) {
    dispatch(deleteEvento(evento.id));
    e.preventDefault();
    navigate("/empresa/eventos");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Evento</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>Nome do Evento</label>
          <input
            type="text"
            className="input-box"
            name="nome"
            onChange={checaMudanca}
            defaultValue={evento.nome}
            required
          />
          <label>
            Gênero
            <select
              className="input-box"
              name="genero"
              defaultValue={evento.genero}
              onChange={checaMudanca}
              required
            >
              <option value="esportes">Esportes</option>
              <option value="musica">Musica</option>
              <option value="familia">Família</option>
            </select>
          </label>
          <label>
            CEP
            <input
              type="number"
              defaultValue={evento.cep}
              name="cep"
              className="input-box"
              onChange={checaMudanca}
              required
            />
          </label>
          <label>
            Começo Do Evento
            <input
              type="datetime-local"
              defaultValue={evento.dataInicio}
              name="dataInicio"
              className="input-box"
              onChange={checaMudanca}
              required
            />
          </label>
          <label>
            Finalização do Evento
            <input
              type="datetime-local"
              defaultValue={evento.dataFim}
              name="dataFim"
              className="input-box"
              onChange={checaMudanca}
              required
            />
          </label>
          <div className="botoes-container">
            <input type="submit" value="Editar" className="botao" />
            <input
              type="button"
              value="Deletar"
              className="botao botao-perigo"
              onClick={deletaEvento}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default EditarEvento;
