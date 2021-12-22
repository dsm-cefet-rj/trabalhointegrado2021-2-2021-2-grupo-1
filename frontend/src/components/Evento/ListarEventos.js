import Cabecalho from "../Cabecalho/Cabecalho";
import Evento from "./Evento";

function ListarEventos({ eventos }) {
  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Eventos</h2>
        <div className="listagem-container-empresa">
          {eventos.map(({ nome }, i) => (
            <Evento eventoNome={nome} key={i} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListarEventos;
