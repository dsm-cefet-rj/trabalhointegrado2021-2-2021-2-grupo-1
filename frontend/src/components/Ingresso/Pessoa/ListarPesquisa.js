import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Ingresso from "./Ingresso";

import "../ingresso.css";
import Cabecalho from "../../Cabecalho/Cabecalho";

function ListarPesquisa() {
  const { name } = useParams();

  const eventos = useSelector((state) => state.eventos);
  const vendas = useSelector((state) => state.vendas);
  const ingressos = useSelector((state) => state.ingressos);

  const vendasPesquisada = vendas.filter((venda) => {
    return (
      eventos[ingressos[venda.ingressoId - 1].eventoId - 1].nome
        .toLowerCase()
        .includes(name.toLowerCase()) && venda.quantidade > 0
    );
  });

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Ingressos de {name}</h2>
        {vendasPesquisada.length > 0 ? (
          vendasPesquisada.map((venda) => (
            <Ingresso
              tipo={venda}
              vendaMeuCarrinhoOuCompra={"venda"}
              key={venda.id}
            />
          ))
        ) : (
          <p className="centralizar-xy">Não encontramos nada :(</p>
        )}
      </main>
    </>
  );
}

export default ListarPesquisa;
