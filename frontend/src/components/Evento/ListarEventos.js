import { useSelector } from "react-redux";

import Cabecalho from "../Cabecalho/Cabecalho";
import Evento from "./Evento";

function ListarEventos() {
  const eventos = useSelector((state) => state.eventos);

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Eventos</h2>
        <div className="listagem-container-empresa">
          {eventos.length > 0 ? (
            eventos.map((evento) => <Evento evento={evento} key={evento.id} />)
          ) : (
            <h2 className="subtitulo">Nenhum Evento Cadastrado</h2>
          )}
        </div>
      </main>
    </>
  );
}

export default ListarEventos;
