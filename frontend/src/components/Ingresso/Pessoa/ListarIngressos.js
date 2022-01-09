import { useSelector } from "react-redux";

import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngresso({ genero }) {
  const vendas = useSelector((state) => state.vendas);
  const ingressos = useSelector((state) => state.ingressos);
  const eventos = useSelector((state) => state.eventos.eventos);

  function verificaSeHaEvento() {
    const haEvento = vendas.filter(
      (venda) =>
        eventos[ingressos[venda.ingressoId - 1].eventoId - 1].genero ===
          genero && venda.quantidade > 0
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
          Não há nenhum ingresso nessa categoria! :(
        </p>
      );
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
        <div className="ingresso-container">{verificaSeHaEvento()}</div>
      </main>
    </>
  );
}

export default ListarIngresso;
