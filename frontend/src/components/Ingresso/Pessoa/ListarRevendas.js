import { useSelector } from "react-redux";

import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngresso() {
  const vendas = useSelector((state) =>
    state.vendas.filter((venda) => venda.revenda)
  );

  function verificaSeHaEvento() {
    if (vendas.length > 0) {
      return vendas.map((venda) => (
        <Ingresso
          tipo={venda}
          vendaMeuCarrinhoOuCompra={"revenda"}
          key={venda.id}
        />
      ));
    } else {
      return <p className="centralizar-xy">Não há nenhuma revenda! :(</p>;
    }
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Ingressos Revendidos</h2>
        <div className="ingresso-container">{verificaSeHaEvento()}</div>
      </main>
    </>
  );
}

export default ListarIngresso;
