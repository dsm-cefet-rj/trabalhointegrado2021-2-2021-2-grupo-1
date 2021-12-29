import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addIngresso } from "../../../redux/ingressosSlice" 

import Cabecalho from "../../Cabecalho/Cabecalho";
import "../../Botoes/botoes.css";

function CriarIngresso() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ingresso = useSelector((state) => state.ingressos);

  const maiorId = ingresso.reduce((previousValue, currentValue) => {
    return currentValue.id > previousValue ? currentValue.id : previousValue;
  }, 0);
  const ingressoId = (Number(maiorId) + Number(1)).toString();

  const [novoIngresso, setNovoIngresso] = useState({
    id: ingressoId,
    nomeEvento: "",
    nome: "",
    descricao: "",
  });

  function checaMudanca(e) {
    setNovoIngresso({
      ...novoIngresso,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    dispatch(addIngresso(novoIngresso));
    e.preventDefault();
    navigate("/empresa/ingressos");
  }
  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo">Criar Ingresso</h2>
        <form className = "formulario" onSubmit = {checaEnvio}>

          <label>
            Selecione um Evento
            <select name = "nomeEvento" className = "input-box"
            onChange = {checaMudanca} required>
              <option value = "Evento1">Evento1</option>
              <option value = "Evento2">Evento2</option>
          </select>
          </label>

          <label>Nome do Ingresso</label>
          <input
            type = "text"
            name = "nome"
            className = "input-box"
            placeholder = "Rock in Rio - 3º Dia"
            onChange = {checaMudanca}
            required
          />
          
          <label>Dados Adicionais</label>
          <input
            type = "text"
            name = "descricao"
            placeholder = "Coloque alguma informação sobre o ingresso"
            className = "input-box"
            onChange = {checaMudanca}
            required
          />
          <div className = "botoes-container">
            <input
              type = "submit"
              value = "Criar"
              className = "botao botao-sucesso"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default CriarIngresso;
