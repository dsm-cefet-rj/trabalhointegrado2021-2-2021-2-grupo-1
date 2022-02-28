import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectAllEventos } from "../../../redux/eventosSlice";
import { selectAllIngressos } from "../../../redux/ingressosSlice";
import { selectAllVendas } from "../../../redux/vendasSlice";

import "../ingresso.css";
import loader from "../../../assets/loader.gif";
import Ingresso from "./Ingresso";
import Cabecalho from "../../Cabecalho/Cabecalho";

function ListarPesquisa() {
  const { name } = useParams();

  const eventos = useSelector(selectAllEventos);
  const vendas = useSelector(selectAllVendas);
  const ingressos = useSelector(selectAllIngressos);
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

  function mostrePesquisaDeAcordoComOStatus() {
    if (status.vendas === "loading" || status.ingressos === "loading" || status.eventos === "loading") {
      return <img src={loader} alt="Imagem de loading" className="loader" />;

    } else if ((status.eventos === "loaded" && status.vendas === "loaded" && status.ingressos === "loaded") || (status.eventos === "saved" && status.vendas === "saved" && status.ingressos === "saved")) {
      if (vendas.length > 0) {
        const vendasPesquisada = vendas.filter((venda) => {
          const ingresso = ingressos.filter(ingresso => ingresso.id === venda.ingressoId)[0];
          const evento = eventos.filter(evento => evento.id === ingresso.eventoId)[0];

          return (
            evento.nome
              .toLowerCase()
              .includes(name.toLowerCase()) && venda.quantidade > 0 && !venda.revenda
          );
        });

        if (vendasPesquisada.length > 0) {
          return vendasPesquisada.map((venda) => (
            <Ingresso
              tipo={venda}
              vendaMeuCarrinhoOuCompra={"venda"}
              key={venda.id}
            />
          ));
        } else {
          return (
            <p className="centralizar-xy">
              Nada encontrado :(
            </p>
          );
        }
      }
    } else if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Ingressos de {name}</h2>
        <div className="listagem-container">{mostrePesquisaDeAcordoComOStatus()}</div>
      </main>
    </>
  );
}

export default ListarPesquisa;
