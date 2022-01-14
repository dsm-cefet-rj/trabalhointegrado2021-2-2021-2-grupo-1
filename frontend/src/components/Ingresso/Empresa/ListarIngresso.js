import { useSelector } from "react-redux";
import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";
import loader from "../../../assets/loader.gif";
import { selectAllIngressos } from "../../../redux/ingressosSlice";

function ListarIngressos() {
  const ingressos = useSelector(selectAllIngressos);
  const { status, error } = useSelector((state) => {
    return {
      status: state.ingressos.status,
      error: state.ingressos.error,
    };
  });

  function mostreIngressosDeAcordoComOStatus() {
    if (status === "loading") {
      return <img src={loader} className="loader" />;
    } else if (status === "loaded" || status === "saved") {
      if (ingressos.length > 0) {
        return ingressos.map((ingresso) => (
          <Ingresso ingresso={ingresso} key={ingresso.id} />
        ));
      } else {
        return <h2 className="subtitulo">Nenhum Ingresso Cadastrado :(</h2>;
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo"> Meus Ingressos </h2>
        <div className="listagem-container-empresa">
        {mostreIngressosDeAcordoComOStatus()}
        </div>
      </main>
    </>
  );
}

export default ListarIngressos;
