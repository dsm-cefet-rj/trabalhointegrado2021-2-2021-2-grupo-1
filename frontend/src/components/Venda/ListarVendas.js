import { useSelector } from "react-redux";

import Cabecalho from "../Cabecalho/Cabecalho";
import Venda from "./Venda";

function ListarVendas() {
  const eventos = useSelector((state) => state.vendas);

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Minhas Vendas</h2>
        <div className="listagem-container-empresa">
          {eventos.length > 0 ? (
            vendas.map((evento) => <Venda Venda={venda} key={venda.id} />)
          ) : (
            <h2 className="subtitulo">Nenhuma Venda Cadastrada</h2>
          )}
        </div>
      </main>
    </>
  );
}

export default ListarVendas;
