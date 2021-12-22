import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function ListarCompras({IngressosComprados}) {
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
        <h2 className="subtitulo">Meus Ingressos</h2>
        {IngressosComprados.map(({nomeEvento},i) => (
         <Ingresso> ingressonome={nome} key={i} />
        ))}
          
        <Ingresso botoes={botoes} />
      </main>
    </>
  );
}

export default ListarCompras;
