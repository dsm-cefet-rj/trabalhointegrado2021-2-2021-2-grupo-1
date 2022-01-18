import { useSelector } from "react-redux";

import Cabecalho from "../Cabecalho/Cabecalho";
import Venda from "./Venda";
import loader from "../../assets/loader.gif";

import { selectAllVendas } from "../../redux/vendasSlice";

function ListarVendas() {
  const vendas = useSelector(selectAllVendas);
  const { status, error } = useSelector((state) => {
    return {
      status: state.eventos.status,
      error: state.eventos.error,
    };
  });
  
function mostreVendasDeAcordoComOStatus() {
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
          {mostreVendasDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarVendas;
