import Cabecalho from "../Cabecalho/Cabecalho";
import Venda from "./Venda";

function ListaVendas({vendas}) {
  
  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo">Minhas Vendas</h2>
        <div className = "listagem-container-empresa">
          {vendas.map((venda) => (
            <Venda venda={venda} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListaVendas;
