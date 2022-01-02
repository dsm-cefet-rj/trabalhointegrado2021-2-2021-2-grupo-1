import { useSelector } from "react-redux";

import "../Ingresso/ingresso.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function ListarCompras() {
  const compras = useSelector((state) => state.comprar.compras);

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Ingressos {compras.length}</h2>
        <div className="ingresso-container">
          {compras.length > 0 ? (
            compras.map((compra) => (
              <Ingresso
                tipo={compra}
                vendaMeuCarrinhoOuCompra={"compra"}
                key={compra.id}
              />
            ))
          ) : (
            <p>Você ainda não comprou nenhum ingresso! :(</p>
          )}
        </div>
      </main>
    </>
  );
}

export default ListarCompras;
