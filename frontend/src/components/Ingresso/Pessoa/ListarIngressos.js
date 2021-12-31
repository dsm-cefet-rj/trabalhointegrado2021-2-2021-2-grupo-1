import { useSelector } from "react-redux";

import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngresso({ genero }) {
  const vendas = useSelector((state) => state.vendas);

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
        {vendas.map((venda) => (
          <Ingresso venda={venda} key={venda.id} />
        ))}
      </main>
    </>
  );
}

export default ListarIngresso;
