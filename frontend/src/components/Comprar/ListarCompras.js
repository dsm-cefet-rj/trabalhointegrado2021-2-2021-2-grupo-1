import { useSelector } from "react-redux";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function ListarCompras() {
  const ingressosComprados = useSelector((state) => state.ingressosComprados);

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
      {/* <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">
          Meus Ingressos {ingressosComprados.length}
        </h2>
        {ingressosComprados.length > 0
          ? ingressosComprados.map((ingressosComprados) => (
              <Ingresso
                ingressos={ingressosComprados}
                key={ingressosComprados.id}
              />
            ))
          : null}
      </main> */}
    </>
  );
}

export default ListarCompras;
