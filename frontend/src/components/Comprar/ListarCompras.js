import { useSelector } from "react-redux";

import "../Ingresso/ingresso.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

import loader from "../../../assets/loader.gif";
import { selectAllCompras} from "../../../redux/comprasSlice";

function ListarCompras() {
  const compras = useSelector((state) => state.comprar.compras);
  
  const compras = useSelector(selectAllCompras);
  const { status, error } = useSelector((state) => {
    return {
      status: state.compras.status,
      error: state.compras.error,
    };
  });

  function mostreIngressosDeAcordoComOStatus() {
    if (status === "loading") {
      return <img src={loader} className="loader" />;
    } else if (status === "loaded" || status === "saved") {
      if (compras.length > 0) {
        return compras.map((compra) => (
          <Ingresso
           vendaMeuCarrinhoOuCompra={"compra"}
           key={compra.id} />
        ));
      } else {
        return <h2 className="subtitulo">Você ainda não comprou nenhum ingresso!(</h2>;
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }
  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Ingressos</h2>
        <div className="ingresso-container">
        {mostreIngressosDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarCompras;
