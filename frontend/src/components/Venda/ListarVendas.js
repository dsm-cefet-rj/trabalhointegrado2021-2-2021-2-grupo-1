import { useSelector } from "react-redux";

import { selectAllVendas } from "../../redux/vendasSlice";

import loader from "../../assets/loader.gif";
import Cabecalho from "../Cabecalho/Cabecalho";
import Venda from "./Venda";

function ListarVendas() {
  const vendas = useSelector(selectAllVendas);
  const { status, error } = useSelector((state) => {
    return {
      status: state.vendas.status,
      error: state.vendas.error,
    };
  });

  function mostreVendasDeAcordoComOStatus() {
    if (status === "loading") {
      return <img src={loader} alt="Imagem de loading" className="loader" />;
    } else if (status === "loaded" || status === "saved") {
      if (vendas.length > 0) {
        return vendas.map((venda) => (
          <Venda venda={venda} key={venda.id} />
        ));
      } else {
        return (
          <p className="centralizar-xy">
            Não há nenhuma venda cadastrada :(
          </p>
        );;
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Minhas Vendas</h2>
        <div className="listagem-container-empresa">
          {mostreVendasDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarVendas;
