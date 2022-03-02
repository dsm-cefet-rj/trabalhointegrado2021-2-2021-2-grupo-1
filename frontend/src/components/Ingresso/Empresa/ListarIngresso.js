import { useSelector } from "react-redux";
import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";
import loader from "../../../assets/loader.gif";
import { selectAllIngressos } from "../../../redux/ingressosSlice";

function ListarIngressos() {
  const ingressos = useSelector(selectAllIngressos);
  const { status, error } = useSelector((state) => {
    return {
      status: {
        ingressos: state.ingressos.status,
        eventos: state.eventos.status,
      },
      error: {
        ingressos: state.ingressos.error,
        eventos: state.eventos.error,
      }
    };
  });

  function mostreIngressosDeAcordoComOStatus() {
    if (status.ingressos === "loading" || status.eventos === "loading") {
      return <img src={loader} alt="Imagem de loading" className="loader" />;
    } else if ((status.ingressos === "loaded" || status.ingressos === "saved") && (status.eventos === "loaded" || status.eventos === "saved")) {
      if (ingressos.length > 0) {
        return ingressos.map((ingresso) => (
          <Ingresso ingresso={ingresso} key={ingresso.id} />
        ));
      } else {
        return (
          <p className="centralizar-xy">
            Não há nenhum ingresso cadastrado :(
          </p>
        )
      }
    } else if ((error.ingressos === "failed")) {
      return <p>Erro: {ingressos.error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo"> Meus Ingressos </h2>
        <div className="listagem-container">
          {mostreIngressosDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarIngressos;
