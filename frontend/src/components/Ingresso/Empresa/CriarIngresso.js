import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Botao from "../../Botoes/Botoes";

function CriarIngresso() {
  const botao = [
    {
      nome: "Criar",
      url: "/ingressos",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Ingresso</h2>
        <form class="formulario">
          <label>Selecione um Evento</label>
          <select className="input-box" placeholder="Evento">
            <option>Evento1</option>
            <option>Evento2</option>
          </select>
          <label>Nome do Ingresso</label>
          <input
            type="text"
            className="input-box"
            placeholder="Rock in Rio - 3º Dia"
          />
          <label>Dados Adicionais</label>
          <input
            type="text"
            placeholder="Coloque alguma informação sobre o ingresso"
            className="input-box"
          />
          <Botao botoes={botao} />
        </form>
      </main>
    </>
  );
}

export default CriarIngresso;
