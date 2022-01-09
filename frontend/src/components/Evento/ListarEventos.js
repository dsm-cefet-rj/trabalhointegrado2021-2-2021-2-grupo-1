import { useSelector } from "react-redux";

import Cabecalho from "../Cabecalho/Cabecalho";
import Evento from "./Evento";
import loader from "../../assets/loader.gif";

import { selectAllEventos } from "../../redux/eventosSlice";

function ListarEventos() {
  const eventos = useSelector(selectAllEventos);
  const { status, error } = useSelector((state) => {
    return {
      status: state.eventos.status,
      error: state.eventos.error,
    };
  });

  function mostreEventosDeAcordoComOStatus() {
    if (status === "loading") {
      return <img src={loader} className="loader" />;
    } else if (status === "loaded" || status === "saved") {
      if (eventos.length > 0) {
        return eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ));
      } else {
        return <h2 className="subtitulo">Nenhum Evento Cadastrado :(</h2>;
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Eventos</h2>
        <div className="listagem-container-empresa">
          {mostreEventosDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarEventos;
