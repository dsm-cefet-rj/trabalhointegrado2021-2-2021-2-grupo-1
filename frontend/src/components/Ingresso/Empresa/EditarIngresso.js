import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Botoes from "../../Botoes/Botoes";

function EditarIngresso() {
  const botoes = [
    {
      nome: "Editar",
      url: "/ingresso",
    },
    {
      nome: "Remover",
      url: "/ingresso",
    }
  ]

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Ingresso</h2>
        <form className="formulario">
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
          <Botoes botoes={botoes} />
        </form>
      </main>
    </>
  );
}

export default EditarIngresso;
