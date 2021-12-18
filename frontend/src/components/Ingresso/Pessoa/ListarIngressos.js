import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngresso({ genero }) {
  const botoes = [
    {
      nome: "Comprar",
      url: "/carrinho",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Ingressos de {genero}</h2>
        <Ingresso botoes={botoes} />
        <Ingresso botoes={botoes} />
        <Ingresso botoes={botoes} />
        <Ingresso botoes={botoes} />
      </main>
    </>
  );
}

export default ListarIngresso;
