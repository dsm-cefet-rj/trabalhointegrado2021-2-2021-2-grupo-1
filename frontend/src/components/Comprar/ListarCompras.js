import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function ListarCompras() {
  const botoes = [
    {
      nome: "Gerar",
      url: "/",
    },
    {
      nome: "Editar",
      url: "/editar-compra",
    },
    {
      nome: "Reembolso",
      url: "/",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Ingressos</h2>
        <Ingresso botoes={botoes} />
        <Ingresso botoes={botoes} />
        <Ingresso botoes={botoes} />
        <Ingresso botoes={botoes} />
      </main>
    </>
  );
}

export default ListarCompras;
