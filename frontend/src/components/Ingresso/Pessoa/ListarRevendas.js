import { useSelector } from "react-redux";

import { selectAllVendas } from "../../../redux/vendasSlice";

import "../ingresso.css";
import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";
import loader from "../../../assets/loader.gif";

function ListarRevendas() {
  const vendas = useSelector(selectAllVendas);
  const revendas = vendas.filter((venda) => venda.revenda && venda.quantidade);
  const { status, error } = useSelector((state) => {
    return {
      status: state.vendas.status,
      error: state.vendas.error,
    };
  })

  function mostreRevendasDeAcordoComOStatus() {
    if (status === "loading") {
      return <img src={loader} alt="Imagem de loading" className="loader" />;
    } else if (status === "loaded" || status === "saved") {
      if (revendas.length > 0) {
        return revendas.map((revenda) => (
          <Ingresso
            tipo={revenda}
            vendaMeuCarrinhoOuCompra={"revenda"}
            key={revenda.id}
          />
        ));
      } else {
        return (<p className="centralizar-xy">
          Não há nenhuma revenda nessa categoria :(
        </p>)
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Ingressos Revendidos {revendas.length > 0 && revendas.length}</h2>
        <div className="ingresso-container">{mostreRevendasDeAcordoComOStatus()}</div>
      </main>
    </>
  );
}

export default ListarRevendas;
