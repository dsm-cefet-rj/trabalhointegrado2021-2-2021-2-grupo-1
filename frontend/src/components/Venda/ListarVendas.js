import Cabecalho from "../Cabecalho/Cabecalho";
import Venda from "./Venda";

function ListaVendas() {
  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Minhas Vendas</h2>
        <div className="listagem-container-empresa">
          <Venda />
          <Venda />
        </div>
      </main>
    </>
  );
}

export default ListaVendas;
