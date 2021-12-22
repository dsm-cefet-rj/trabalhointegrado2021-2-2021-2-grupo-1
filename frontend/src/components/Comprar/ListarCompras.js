import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function ListarCompras({ ingressosComprados }) {
  const botoes = [
    {
      nome: "Gerar",
      url: "/Gerar-compra",
    },
    {
      nome: "Editar",
      url: "/editar-compra",
    },
    {
      nome: "Reembolso",
      url: "/Reembolso",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">
          Meus Ingressos {ingressosComprados.length}
        </h2>
        {ingressosComprados.map((ingresso, i) => (
          <Ingresso botoes={botoes} ingressos={ingresso} key={i} />
        ))}
      </main>
    </>
  );
}

export default ListarCompras;
