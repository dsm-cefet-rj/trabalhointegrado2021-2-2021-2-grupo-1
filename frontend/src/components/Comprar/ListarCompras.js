import { useSelector } from "react-redux";

import { selectAllCompras } from "../../redux/comprasSlice";

import "../Ingresso/ingresso.css";
import loader from "../../assets/loader.gif";
import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function ListarCompras() {
  const compras = useSelector(selectAllCompras);
  const { status, error } = useSelector((state) => {
    return {
      status: {
        eventos: state.eventos.status,
        ingressos: state.ingressos.status,
        vendas: state.vendas.status,
      },
      error: {
        eventos: state.eventos.error,
        ingressos: state.ingressos.error,
        vendas: state.vendas.error,
      }
    }
  })

  function mostreComprasDeAcordoComOStatus() {
    if (status.eventos === "loading" || status.ingressos === "loading" || status.vendas === "loading") {
      return <img src={loader} alt="Imagem de loading" className="loader" />;
    } else if ((status.eventos === "loaded" && status.vendas === "loaded" && status.ingressos === "loaded") || (status.eventos === "saved" || status.vendas === "saved" || status.ingressos === "saved")) {
      if (compras.length > 0) {
        return compras.map((compra) => (
          <Ingresso
            tipo={compra}
            vendaMeuCarrinhoOuCompra={"compra"}
            key={compra.id}
          />
        ));
      } else {
        return (
          <p className="centralizar-xy">
            Você não comprou nenhum ingresso :(
          </p>
        );
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Ingressos {compras.length > 0 && compras.length}</h2>
        <div className="ingresso-container">
          {mostreComprasDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarCompras;
