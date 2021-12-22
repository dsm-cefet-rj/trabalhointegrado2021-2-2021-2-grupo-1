import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngresso({ genero, ingressos, meuCarrinho, setMeuCarrinho }) {
  console.log(ingressos);
  const botoes = [
    {
      nome: "Comprar",
      url: "/carrinho",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Ingressos de {genero}</h2>
        {ingressos.map((ingresso, i) => (
          <Ingresso
            ingressos={ingresso}
            comprar={true}
            meuCarrinho={meuCarrinho}
            setMeuCarrinho={setMeuCarrinho}
            key={i}
          />
        ))}
      </main>
    </>
  );
}

export default ListarIngresso;
