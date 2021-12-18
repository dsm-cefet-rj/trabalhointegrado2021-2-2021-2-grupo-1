import Cabecalho from "../Cabecalho/Cabecalho";
import Evento from "./Evento";

function ListaEventos() {
  const eventos = [
    {
      nome: "Rock in Rio 2021",
    },
    {
      nome: "Rock in Rio 2024",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Eventos</h2>
        <div className="listagem-container-empresa">
          {eventos.map(({ nome }) => (
            <Evento eventoNome={nome} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListaEventos;
