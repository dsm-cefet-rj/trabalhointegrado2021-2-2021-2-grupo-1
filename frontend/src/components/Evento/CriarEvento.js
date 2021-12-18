import Cabecalho from "../Cabecalho/Cabecalho";
import Botao from "../Botoes/Botoes";

function CriarEvento() {
  const botao = [
    {
      nome: "Criar",
      url: "/",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Evento</h2>
        <form className="formulario">
          <label>Nome do Evento</label>
          <input type="text" className="input-box" placeholder="Rock in Rio" />
          <label>
            Genero
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
          <Botao botoes={botao} />
        </form>
      </main>
    </>
  );
}

export default CriarEvento;
