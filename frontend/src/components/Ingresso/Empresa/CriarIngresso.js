import Cabecalho from "../../Cabecalho/Cabecalho";
import "../../Botoes/botoes.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CriarIngresso({ ingressos, setIngressos }) {
  const navigate = useNavigate();

  const [novoIngresso, setNovoIngresso] = useState({
    evento: "",
    nome: "",
    dados: "",
  });

  function checaMudanca(e) {
    setNovoIngresso({
      ...novoIngresso,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    setIngressos([...ingressos, novoIngresso]);
    e.preventDefault();
    navigate("/ingressos");
  }
  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo">Criar Ingresso</h2>
        <form className = "formulario" onSubmit = {checaEnvio}>

          <label>Selecione um Evento</label>
          <select name = "evento" className = "input-box"
            placeholder = "Evento" onChange = {checaMudanca}>
              <option>Evento1</option>
              <option>Evento2</option>
          </select>
          <label>Nome do Ingresso</label>
          <input
            type = "text"
            name = "nome"
            className = "input-box"
            placeholder = "Rock in Rio - 3º Dia"
            onChange = {checaMudanca}
          />
          <label>Dados Adicionais</label>
          <input
            type = "text"
            name = "dados"
            placeholder = "Coloque alguma informação sobre o ingresso"
            className = "input-box"
            onChange = {checaMudanca}
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
