import { useSelector } from "react-redux";

import { selectAllIngressos } from "../../../redux/ingressosSlice";
import { selectAllVendas } from "../../../redux/vendasSlice";
import { selectAllEventos } from "../../../redux/eventosSlice";

import "../ingresso.css";
import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";
import loader from "../../../assets/loader.gif";

function ListarIngresso({ genero }) {
  const vendas = useSelector(selectAllVendas);
  const ingressos = useSelector(selectAllIngressos);
  const eventos = useSelector(selectAllEventos);
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

  function mostreIngressosDeAcordoComOStatus() {
    if (status.eventos === "loading" || status.ingressos === "loading" || status.vendas === "loading") {
      return <img src={loader} alt="Imagem de loading" className="loader" />;

    } else if ((status.eventos === "loaded" && status.ingressos === "loaded" && status.vendas === "loaded") || (status.eventos === "saved" || status.ingressos === "saved" || status.vendas === "saved")) {
      if (vendas.length > 0) {
        const haEvento = vendas.filter(
          (venda) => {
            const ingresso = ingressos.filter(ingresso => ingresso.id === venda.ingressoId)[0];
            const evento = eventos.filter(evento => evento.id === ingresso.eventoId)[0];

            return evento.genero === genero && venda.quantidade > 0 && !venda.revenda
          }
        );

        if (haEvento.length > 0) {
          return haEvento.map((venda) => (
            <Ingresso
              tipo={venda}
              vendaMeuCarrinhoOuCompra={"venda"}
              key={venda.id}
            />
          ));
        } else {
          return (
            <p className="centralizar-xy">
              Não há nenhum ingresso nessa categoria :(
            </p>
          );
        }
      } else {
        return (
          <p className="centralizar-xy">
            Não há nenhum ingresso nessa categoria :(
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
        <h2 className="subtitulo">
          Ingressos de
          {genero === "esporte"
            ? " Esporte"
            : genero === "musica"
              ? " Música"
              : genero === "familia"
                ? " Família"
                : null}
        </h2>
        <div className="listagem-container">{mostreIngressosDeAcordoComOStatus()}</div>
      </main>
    </>
  );
}

export default ListarIngresso;
