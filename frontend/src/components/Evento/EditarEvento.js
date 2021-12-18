import Cabecalho from "../Cabecalho/Cabecalho";
import Botoes from "../Botoes/Botoes";

function EditarEvento() {
  const botoes = [
    {
      nome: "Editar",
      url: "/",
    },
    {
      nome: "Remover",
      url: "/",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Evento</h2>
        <form className="formulario">
          <label>Nome do Evento</label>
          <input type="text" className="input-box" placeholder="Rock in Rio" />
          <label>
            Gênero
            <select className="input-box">
              <option>Esportes</option>
              <option>Shows</option>
              <option>Família</option>
            </select>
          </label>
          <label>
            CEP
            <input type="number" placeholder="20270090" className="input-box" />
          </label>
          <label>
            Começo Do Evento
            <input type="datetime-local" className="input-box" />
          </label>
          <label>
            Finalização do Evento
            <input type="datetime-local" className="input-box" />
          </label>
          <Botoes botoes={botoes} />
        </form>
      </main>
    </>
  );
}

export default EditarEvento;
